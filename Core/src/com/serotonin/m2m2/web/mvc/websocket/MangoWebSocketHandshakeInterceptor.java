/**
 * Copyright (C) 2018 Infinite Automation Software. All rights reserved.
 */
package com.serotonin.m2m2.web.mvc.websocket;

import java.io.IOException;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.security.core.session.SessionDestroyedEvent;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

/**
 * @author Jared Wiltshire
 */
public class MangoWebSocketHandshakeInterceptor extends HttpSessionHandshakeInterceptor {

    public static final String WSS_FOR_HTTP_SESSION_ATTR = "WSS_FOR_HTTP_SESSION";
    public static final String CLOSE_ON_LOGOUT_ATTR = "CLOSE_ON_LOGOUT";

    private final Map<String, Set<WebSocketSession>> sessionsByHttpSessionId = new ConcurrentHashMap<>();
    private final Log log = LogFactory.getLog(this.getClass());

    @Autowired
    private ConfigurableApplicationContext context;

    public MangoWebSocketHandshakeInterceptor() {
        super();
        this.setCopyAllAttributes(false);
        this.setCreateSession(false);
    }

    @PostConstruct
    public void postConstruct() {
        // SessionDestroyedEvent from root context are not propagated to the child web context. Register as a listener
        // on the parent.
        ConfigurableApplicationContext parent = (ConfigurableApplicationContext) context.getParent();

        ApplicationListener<SessionDestroyedEvent> listener = this::sessionDestroyed;
        parent.addApplicationListener(listener);
    }

    private void sessionDestroyed(SessionDestroyedEvent event) {
        String httpSessionId = event.getId();
        Set<WebSocketSession> wssSet = sessionsByHttpSessionId.remove(httpSessionId);
        if (wssSet != null) {
            for (WebSocketSession wss : wssSet) {
                Boolean closeOnLogout = (Boolean) wss.getAttributes().get(CLOSE_ON_LOGOUT_ATTR);
                if (closeOnLogout == null || closeOnLogout) {
                    try {
                        wss.close(MangoWebSocketHandler.NOT_AUTHENTICATED);
                    } catch (IOException e) {
                        if (log.isErrorEnabled()) {
                            log.error("Couldn't close WebSocket session for http session " + httpSessionId, e);
                        }
                    }
                }
            }
        }
    }

    @Override
    public boolean beforeHandshake(ServerHttpRequest request,
            ServerHttpResponse response, WebSocketHandler wsHandler,
            Map<String, Object> attributes) throws Exception {

        if (request instanceof ServletServerHttpRequest) {
            ServletServerHttpRequest serverRequest = (ServletServerHttpRequest) request;
            HttpSession session = serverRequest.getServletRequest().getSession(false);

            if (session != null) {
                Set<WebSocketSession> wssSet = sessionsByHttpSessionId.computeIfAbsent(session.getId(), id -> {
                    return ConcurrentHashMap.newKeySet();
                });

                attributes.put(WSS_FOR_HTTP_SESSION_ATTR, wssSet);
            }
        }

        return super.beforeHandshake(request, response, wsHandler, attributes);
    }
}

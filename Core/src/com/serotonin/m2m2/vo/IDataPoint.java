package com.serotonin.m2m2.vo;

import java.util.Set;

/**
 * Interface that represents both full data point VOs and summary objects.
 * 
 * @author Matthew Lohbihler
 */
public interface IDataPoint {
    int getId();

    String getXid();

    String getName();

    int getDataSourceId();

    String getDeviceName();

    int getPointFolderId();

    String getExtendedName();

    /**
     * Roles that can read this point's value and configuration
     * @return
     */
    Set<RoleVO> getReadRoles();

    /**
     * Roles that can set the point's value
     * @return
     */
    Set<RoleVO> getSetRoles();
}

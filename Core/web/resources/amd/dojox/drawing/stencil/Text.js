//>>built
define(["dojo","../util/oo","./_Base","../manager/_registry","../util/typeset"],function(c,d,g,h,k){d=d.declare(g,function(a){},{type:"dojox.drawing.stencil.Text",anchorType:"none",baseRender:!0,align:"start",valign:"top",_lineHeight:1,typesetter:function(a){this._rawText=a;return k.convertLaTeX(a)},setText:function(a){this.enabled&&(a=this.typesetter(a));this._text=a;this._textArray=[];this.created&&this.render(a)},getText:function(){return this._rawText||this._text},dataToPoints:function(a){a=a||
this.data;var b="auto"==a.width?1:a.width,e=a.height||this._lineHeight;return this.points=[{x:a.x,y:a.y},{x:a.x+b,y:a.y},{x:a.x+b,y:a.y+e},{x:a.x,y:a.y+e}]},pointsToData:function(a){a=a||this.points;var b=a[0];a=a[2];return this.data={x:b.x,y:b.y,width:a.x-b.x,height:a.y-b.y}},render:function(a){this.remove(this.shape,this.hit);!this.annotation&&this.renderHit&&this._renderOutline();void 0!=a&&(this._text=a,this._textArray=this._text.split("\n"));a=this.pointsToData();var b=this._lineHeight,e=a.x+
2*this.style.text.pad,f=a.y+this._lineHeight-0.4*this.textSize;"middle"==this.valign&&(f-=b/2);this.shape=this.container.createGroup();c.forEach(this._textArray,function(a,c){var d=this.shape.createText({x:e,y:f+b*c,text:unescape(a),align:this.align}).setFont(this.style.currentText).setFill(this.style.currentText.color);this._setNodeAtts(d)},this);this._setNodeAtts(this.shape)},_renderOutline:function(){if(!this.annotation){var a=this.pointsToData();"middle"==this.align?a.x-=a.width/2-2*this.style.text.pad:
"start"==this.align?a.x+=this.style.text.pad:"end"==this.align&&(a.x-=a.width-3*this.style.text.pad);"middle"==this.valign&&(a.y-=this._lineHeight/2-this.style.text.pad);this.hit=this.container.createRect(a).setStroke(this.style.currentHit).setFill(this.style.currentHit.fill);this._setNodeAtts(this.hit);this.hit.moveToBack()}},makeFit:function(a,b){var e=c.create("span",{innerHTML:a,id:"foo"},document.body),f=1;c.style(e,"fontSize",f+"px");for(var d=30;c.marginBox(e).w<b&&!(f++,c.style(e,"fontSize",
f+"px"),0>=d--););f--;d=c.marginBox(e);c.destroy(e);return{size:f,box:d}}});c.setObject("dojox.drawing.stencil.Text",d);h.register({name:"dojox.drawing.stencil.Text"},"stencil");return d});
//# sourceMappingURL=Text.js.map
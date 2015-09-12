var Panel = require('./Panel');


function RectPanel() {
    Panel.call(this);
    this.create(this.width,this.height);
}

RectPanel.prototype = Object.create( Panel.prototype );
RectPanel.prototype.constructor = RectPanel;
module.exports = RectPanel;


RectPanel.prototype.createPanel =  Panel.prototype.create;
RectPanel.prototype.create = function(width,height) {
    this.createPanel(width,height);
};

RectPanel.prototype.createGraphicObjectPanel =  Panel.prototype.createGraphicObject;
RectPanel.prototype.createGraphicObject = function(width,height) {
    this.graphicObject = new PIXI.Rectangle(0, 0, width, height);
    this.createGraphicObjectPanel(width,height);
}

RectPanel.prototype.createShadowPanel =  Panel.prototype.createShadow;
RectPanel.prototype.createShadow = function(width,height) {
    this.shadow = new PIXI.Rectangle(this.shadowX, this.shadowY, width, height);
    this.createShadowPanel(width,height);
};
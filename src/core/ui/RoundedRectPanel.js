var Panel = require('./Panel');

var borders = {
    NONE:       0,
    TOP :       1,
    BOTTOM :    2,
    LEFT:       3,
    RIGTH:      4 
}

function RoundedRectPanel() {
    Panel.call(this);
    this.create(this.width,this.height);
}

RoundedRectPanel.prototype = Object.create( Panel.prototype );
RoundedRectPanel.prototype.constructor = RoundedRectPanel;
module.exports = RoundedRectPanel;

RoundedRectPanel.prototype.createPanel =  Panel.prototype.create;
RoundedRectPanel.prototype.create = function(width,height) {
    this.setFlatSideObject(width,height);
    this.createPanel(width,height);
};

RoundedRectPanel.prototype.createGraphicObjectPanel =  Panel.prototype.createGraphicObject;
RoundedRectPanel.prototype.createGraphicObject = function(width,height) {
    this.graphicObject = new PIXI.RoundedRectangle(0, 0, width, height, this._radius);
    this.createGraphicObjectPanel(width,height);
    this.createFlatSideObject();
}

RoundedRectPanel.prototype.createShadowPanel =  Panel.prototype.createShadow;
RoundedRectPanel.prototype.createShadow = function(width,height) {
    this.shadow = new PIXI.RoundedRectangle(this.shadowX, this.shadowY, width, height, this._radius);
    this.createShadowPanel(width,height);
    this.createFlatSideShadow();
};

RoundedRectPanel.prototype.setFlatSideObject = function(width,height) {
    this.flatObject = null;
    this.flatObjectShadow = null;
    if(this._flatSide == borders.NONE) {
        return;
    }
    var dafaultObjectSize = this._radius;
    switch( this._flatSide ) {
        case borders.TOP:
            this.flatObject = new PIXI.Rectangle(0, 0, width, dafaultObjectSize);
            this.flatObjectShadow = new PIXI.Rectangle(this.shadowX, this.shadowY, width, dafaultObjectSize);
            break;
        case borders.BOTTOM:
            this.flatObject = new PIXI.Rectangle(0, height-dafaultObjectSize, width, dafaultObjectSize);
            this.flatObjectShadow = new PIXI.Rectangle(this.shadowX, height-dafaultObjectSize+this.shadowY, width, dafaultObjectSize);
            break;
        case borders.LEFT:
            this.flatObject = new PIXI.Rectangle(0, 0, dafaultObjectSize, height);
            this.flatObjectShadow = new PIXI.Rectangle(this.shadowX, this.shadowY, dafaultObjectSize, height);
            break;
        case borders.RIGTH:
            this.flatObject = new PIXI.Rectangle(width-dafaultObjectSize, 0, dafaultObjectSize, height);
            this.flatObjectShadow = new PIXI.Rectangle(width+this.shadowX-dafaultObjectSize, this.shadowY, dafaultObjectSize, height);
            break;
    }
};

RoundedRectPanel.prototype.createFlatSideObject = function() {
    if(!this.flatObject) return;

    this.graphic.moveTo(0,0);
    this.graphic.lineStyle(0);
    this.graphic.beginFill(this._graphic.tint,this.alpha);
    this.graphic.drawShape( this.flatObject );
    this.graphic.endFill();
     switch( this._flatSide ) {
        case borders.TOP:
            this.createFlatSideBorderLine(0,0,0,this.flatObject.height);
            this.createFlatSideBorderLine(0,0,this.flatObject.width,0);
            this.createFlatSideBorderLine(this.flatObject.width,0,this.flatObject.width,this.flatObject.height);
            break;
        case borders.BOTTOM:
            this.createFlatSideBorderLine(0,this.height-this.flatObject.height,0,this.height);
            this.createFlatSideBorderLine(0,this.height,this.flatObject.width,this.height);
            this.createFlatSideBorderLine(this.flatObject.width,this.height-this.flatObject.height,this.flatObject.width,this.height);
            break;
        case borders.LEFT:
            this.createFlatSideBorderLine(0,0,0,this.height);
            this.createFlatSideBorderLine(0,0,this.flatObject.width,0);
            this.createFlatSideBorderLine(0,this.height,this.flatObject.width,this.height);
            break;
        case borders.RIGTH:
            this.createFlatSideBorderLine(this.width,0,this.width,this.height);
            this.createFlatSideBorderLine(this.width-this.flatObject.width,0,this.width,0);
            this.createFlatSideBorderLine(this.width-this.flatObject.width,this.height,this.width,this.height);
            break;
    }
};

RoundedRectPanel.prototype.createFlatSideShadow = function() {
    if(!this.showShadow) return;
    if(!this.flatObjectShadow) return;
    
    this.graphic.moveTo(0,0);
    this.graphic.lineStyle(0);
    this.graphic.beginFill(this.shadowColor,this.alpha*this.shadowBlur);
    this.graphic.drawShape( this.flatObjectShadow );
    this.graphic.endFill();
};

RoundedRectPanel.prototype.createFlatSideBorderLine  = function(fromX,fromY, toX, toY) {
    this.graphic.lineStyle(this.edgeWidth, this.edgeColor, this.alpha);
    this.graphic.moveTo(fromX,fromY);
    this.graphic.lineTo(toX, toY);
    this.graphic.moveTo(0,0);
};

Object.defineProperty(RoundedRectPanel.prototype, 'flatSide', {
    get: function() {
        return this._flatSide;
    },
    set: function(flatSide) {
        this._flatSide = flatSide;  
        this.create(this.width,this.height);
    }
});

Object.defineProperty(RoundedRectPanel.prototype, 'radius', {
    get: function() {
        return this._radius;
    },
    set: function(radius) {
        this._radius = radius;  
        this.create(this.width,this.height);
    }
});
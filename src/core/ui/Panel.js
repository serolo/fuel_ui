var Button = require('./Button');

/**
 * The basic image button
 * centered on it
 *
 * @class Button
 * @extends FUEL_UI.BaseUI
 * @memberof FUEL_UI
 * @constructor
 */
function Panel() {
    Button.call(this);
    this._graphic = new PIXI.Graphics();
    this._graphicObject = null;
    this.addChild( this._graphic );
}

Panel.prototype = Object.create( Button.prototype );
Panel.prototype.constructor = Panel;
module.exports = Panel;

Panel.prototype.create = function(width,height) {
    this._width = width;
    this._height = height;
    this._graphicObject = null;
    this._shadow = null;
    this.graphic.clear();
    this.createShadow(width,height);
    this.createGraphicObject(width,height);
};

Panel.prototype.createGraphicObject = function(width,height) {
    if( !this._graphicObject ) {
        return;    
    }
    this.graphic.moveTo(0,0);
    this.graphic.lineStyle(this.edgeWidth, this.edgeColor, this.alpha);
    this.graphic.beginFill(this._graphic.tint,this.alpha);
    this.graphic.drawShape( this._graphicObject );
    this.graphic.endFill();
};

Panel.prototype.createShadow = function(width,height) {
    if( !this._showShadow ) {
        return;
    }
    if( !this._shadow ) {
        return;
    }
    this.graphic.moveTo(0,0);
    this.graphic.lineStyle(0);
    this.graphic.beginFill(this.shadowColor,this.alpha*this.shadowBlur);
    this.graphic.drawShape( this._shadow );  
    this.graphic.endFill();
};

Panel.prototype.manageDisableStateButton = Button.prototype.manageDisableState;
Panel.prototype.manageDisableState = function() {
    if( !this.isButton ) {
        return;
    }
    this.manageDisableStateButton();
};

Panel.prototype.manageUpStateButton = Button.prototype.manageUpState;
Panel.prototype.manageUpState = function() {
    if( !this.isButton ) {
        return;
    }
    this._graphic.tint = this._tint;
    this.create();
    this.manageUpStateButton()
};

Panel.prototype.manageDownStateButton = Button.prototype.manageDownState;
Panel.prototype.manageDownState = function() {
    
    if( !this.isButton ) {
        return;
    }
    this._graphic.tint = this._pressColor;
    this.create();
    this.manageDownStateButton();
};

Object.defineProperty(Panel.prototype, 'width', {
    get: function() {
        return this._width;
    },
    set: function(width) {
        this._width = width;
        this.create(width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'height', {
    get: function() {
        return this._height;
    },
    set: function(height) {
        this._height = height;
        this.create(this._width,height);
    }
});

Object.defineProperty(Panel.prototype, 'tint', {
    get: function() {
        return this._tint;
    },
    set: function(tint) {
        this._tint = tint;
        this._graphic.tint = tint;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'blendMode', {
    get: function() {
        return this._graphic.blendMode;
    },
    set: function(blendMode) {
        this._graphic.blendMode = blendMode;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'edgeColor', {
    get: function() {
        return this._edgeColor;
    },
    set: function(edgeColor) {
        this._edgeColor = edgeColor;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'edgeWidth', {
    get: function() {
        return this._edgeWidth;
    },
    set: function(edgeWidth) {
        this._edgeWidth = edgeWidth;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'pressColor', {
    get: function() {
        return this._pressColor;
    },
    set: function(pressColor) {
        this._pressColor = pressColor;
    }
});

Object.defineProperty(Panel.prototype, 'showShadow', {
    get: function() {
        return this._showShadow;
    },
    set: function(showShadow) {
        this._showShadow = showShadow;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'shadowColor', {
    get: function() {
        return this._shadowColor;
    },
    set: function(shadowColor) {
        this._shadowColor = shadowColor;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'shadowX', {
    get: function() {
        return this._shadowX;
    },
    set: function(shadowX) {
        this._shadowX = shadowX;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'shadowY', {
    get: function() {
        return this._shadowY;
    },
    set: function(shadowY) {
        this._shadowY = shadowY;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'shadowBlur', {
    get: function() {
        return this._shadowBlur;
    },
    set: function(shadowBlur) {
        this._shadowBlur = shadowBlur;
        this.create(this._width,this._height);
    }
});

Object.defineProperty(Panel.prototype, 'isButton', {
    get: function() {
        return this._isButton;
    },
    set: function(isButton) {
        this._isButton = isButton;
    }
});

Object.defineProperty(Panel.prototype, 'graphic', {
    get: function() {
        if(!this._graphic) {
            return null;
        }
        return this._graphic;
    },
});

Object.defineProperty(Panel.prototype, 'graphicObject', {
    get: function() {
        return this._graphicObject;
    },
    set: function(graphicObject) {
        this._graphicObject = graphicObject;
    }
});

Object.defineProperty(Panel.prototype, 'shadow', {
    get: function() {
        return this._shadow;
    },
    set: function(shadow) {
        this._shadow = shadow;
    }
});

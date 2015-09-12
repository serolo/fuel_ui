fuel_ui.Panel = ccui.Layout.extend({

    _drawNode: null,
    _edgeColor: null,
    _edgeWidth: null,
    _pressColor: null,
    _showShadow: false,
    _shadowColor: null,
    _shadowPosition: null,

    ctor: function() {
        ccui.Layout.prototype.ctor.call(this);
        this.direction = ccui.ScrollView.DIR_NONE;
        this.setTouchEnabled(false);
    },

    /**
     * Initializes a ccui.ScrollView. Please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
     * @returns {boolean}
     */
    init: function () {
        retunr ccui.Layout.prototype.init.call(this);
    },

    /**
     * Calls the parent class' onEnter and schedules update function.
     * @override
     */
    onEnter: function () {
        ccui.Layout.prototype.onEnter.call(this);
    },

    _initRenderer: function () {
        ccui.Layout.prototype._initRenderer.call(this);

        this._drawNode = new cc.DrawNode();
        this._drawNode.setColor(cc.color(255,255,255));
        this._drawNode.setOpacity(255);
        this._drawNode.setCascadeColorEnabled(true);
        this._drawNode.setCascadeOpacityEnabled(true);

        this.addProtectedChild(this._drawNode, 1, 1);
    },

    _onSizeChanged: function () {
        ccui.Layout.prototype._onSizeChanged.call(this);
        var locSize = this._contentSize;
        this.create(locSize.width,locSize.height);
    },

    /**
     * The touch began event callback handler of fuel_ui.Panel.
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     * @returns {boolean}
     */
    onTouchBegan: function (touch, event) {
        var pass = ccui.Layout.prototype.onTouchBegan.call(this, touch, event);
        if(pass){
            //Do the magic for change the color
        }
        return pass;
    },

    /**
     * The touch ended event callback handler of fuel_ui.Panel.
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     */
    onTouchEnded: function (touch, event) {
        ccui.Layout.prototype.onTouchEnded.call(this, touch, event);
        //do the magic for finish the touch
    },

    /**
     * The touch canceled event callback of fuel_ui.Panel.
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     */
    onTouchCancelled: function (touch, event) {
        ccui.Layout.prototype.onTouchCancelled.call(this, touch, event);
        //do the magic for cancel the touch
    },

    create: function(width,height) {
        this._drawNode.clear();
        this.createShadow(width,height);
        this.createGraphicObject(width,height);
    },

    createGraphicObject: function(width,height) {
    },

    createShadow: function(width,height) {
    },

    //Edge Color
    _getEdgeColor: function() {
        return this._edgeColor;
    },

    _setEdgeColor: function(edgeColor) {
        this._edgeColor = edgeColor;
    }

    //Edge Width
    _getEdgeWidth: function() {
        return this._edgeWidth;
    },

    _setEdgeWidth: function(edgeWidth) {
        this._edgeWidth = edgeWidth;
    }

    //Press Color
    _getPressColor: function() {
        return this._pressColor;
    },

    _setPressColor: function(pressColor) {
        this._pressColor = pressColor;
    }

    //Show Shadow
    _getShowShadow: function() {
        return this._showShadow;
    },

    _setShowShadow: function(showShadow) {
        this._showShadow = showShadow;
    }

    //Shadow Color
    _getShadowColor: function() {
        return this._shadowColor;
    },

    _setShadowColor: function(shadowColor) {
        this._shadowColor = shadowColor;
    }

    //Shadow Position
    _getShadowPosition: function() {
        return this._shadowPosition;
    },

    _setShadowPosition: function(shadowPosition) {
        this._shadowPosition = shadowPosition;
    }

    //Is Button
    _getIsButton: function() {
        return this._touchEnabled;
    },

    _setIsButton: function(isButton) {
        this.setTouchEnabled(isButton);
    }

    //Draw Node
    _getDrawNode: function() {
        return this._drawNode;
    }

});

var _p = fuel_ui.Panel.prototype;

_edgeColor: null,
_edgeWidth: null,
_pressColor: null,
_showShadow: false,
_shadowBlur: 255,
_shadowColor: null,
_shadowPosition: null

// Extended properties
/** @expose */
_p.edgeColor;
cc.defineGetterSetter(_p, "edgeColor", _p._getEdgeColor, _p.setEdgeColor);
/** @expose */
_p.edgeWidth;
cc.defineGetterSetter(_p, "edgeWidth", _p._getEdgeWidth, _p.setEdgeWidth);
/** @expose */
_p.pressColor;
cc.defineGetterSetter(_p, "pressColor", _p._getPressColor, _p.setPressColor);
/** @expose */
_p.showShadow;
cc.defineGetterSetter(_p, "showShadow", _p.getShowShadow, _p.setShowShadow);
/** @expose */
_p.shadowColor;
cc.defineGetterSetter(_p, "shadowColor", _p.getShadowColor, _p.setShadowColor);
/** @expose */
_p.shadowPosition;
cc.defineGetterSetter(_p, "shadowPosition", _p.getShadowPosition, _p.setShadowPosition);
/** @expose */
_p.isButton;
cc.defineGetterSetter(_p, "isButton", _p.getIsButton, _p.setIsButton);
/** @expose */
_p.drawNode;
cc.defineGetterSetter(_p, "drawNode", _p._getDrawNode, null);

_p = null;

/**
 * allocates and initializes a UILayout.
 * @deprecated since v3.0, please use new ccui.Layout() instead.
 * @return {ccui.Layout}
 */
ccui.Layout.create = function () {
    return new ccui.Layout();
};
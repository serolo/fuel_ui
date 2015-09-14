(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.fuel_ui = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        return ccui.Layout.prototype.init.call(this);
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
    },

    //Edge Width
    _getEdgeWidth: function() {
        return this._edgeWidth;
    },

    _setEdgeWidth: function(edgeWidth) {
        this._edgeWidth = edgeWidth;
    },

    //Press Color
    _getPressColor: function() {
        return this._pressColor;
    },

    _setPressColor: function(pressColor) {
        this._pressColor = pressColor;
    },

    //Show Shadow
    _getShowShadow: function() {
        return this._showShadow;
    },

    _setShowShadow: function(showShadow) {
        this._showShadow = showShadow;
    },

    //Shadow Color
    _getShadowColor: function() {
        return this._shadowColor;
    },

    _setShadowColor: function(shadowColor) {
        this._shadowColor = shadowColor;
    },

    //Shadow Position
    _getShadowPosition: function() {
        return this._shadowPosition;
    },

    _setShadowPosition: function(shadowPosition) {
        this._shadowPosition = shadowPosition;
    },

    //Is Button
    _getIsButton: function() {
        return this._touchEnabled;
    },

    _setIsButton: function(isButton) {
        this.setTouchEnabled(isButton);
    },

    //Draw Node
    _getDrawNode: function() {
        return this._drawNode;
    }

});

var _p = fuel_ui.Panel.prototype;

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
},{}],2:[function(require,module,exports){
fuel_ui.RectPanel = fuel_ui.Panel.extend({

    ctor: function() {
        fuel_ui.Panel.prototype.ctor.call(this);
    },

    /**
     * Initializes a ccui.ScrollView. Please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
     * @returns {boolean}
     */
    init: function () {
        return fuel_ui.Panel.prototype.init.call(this);
    },

    /**
     * Calls the parent class' onEnter and schedules update function.
     * @override
     */
    onEnter: function () {
        fuel_ui.Panel.prototype.onEnter.call(this);
    },

    _initRenderer: function () {
        fuel_ui.Panel._initRenderer.call(this);
    },

    _onSizeChanged: function () {
        fuel_ui.Panel.prototype._onSizeChanged.call(this);
    },

    /**
     * The touch began event callback handler of fuel_ui.Panel.
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     * @returns {boolean}
     */
    onTouchBegan: function (touch, event) {
        var pass = fuel_ui.Panel.prototype.onTouchBegan.call(this, touch, event);
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
        fuel_ui.Panel.prototype.onTouchEnded.call(this, touch, event);
        //do the magic for finish the touch
    },

    /**
     * The touch canceled event callback of fuel_ui.Panel.
     * @param {cc.Touch} touch
     * @param {cc.Event} event
     */
    onTouchCancelled: function (touch, event) {
        fuel_ui.Panel.prototype.onTouchCancelled.call(this, touch, event);
        //do the magic for cancel the touch
    },

    createGraphicObject: function(width,height) {
        fuel_ui.Panel.prototype.createGraphicObject.call(this,width,height);
        var origin = new cc.Point(0,0);
        var destination = new cc.Point(width,height);
        this.drawNode.drawRect(origin, destination, this.color, this.edgeWidth, this.edgeColor);
    },

    createShadow: function(width,height) {
        fuel_ui.Panel.prototype.createShadow.call(this,width,height);
    }

});
},{}],3:[function(require,module,exports){
/**
 * @file        Main export of the gown.js core library
 * @author      Sebastian Romero <sebastian@fuelpowered.com>
 * @copyright   
 * @license     {@link }
 */

/**
 * @namespace FUEL_UI.core
 */
module.exports = {
    Panel:          require('./Panel'),
    RectPanel: 	    require('./RectPanel'),
};

},{"./Panel":1,"./RectPanel":2}],4:[function(require,module,exports){
(function (global){
if (typeof cc === 'undefined' && typeof ccui === 'undefined') {
  console.warn('coco2d-html5.js has to be loaded before loading FUELUI');
  return;
}

var core = module.exports = require('./core');

// add core plugins.
core.utils          = require('./utils');

// export FUELUI globally.
global.fuel_ui = core;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./core":3,"./utils":5}],5:[function(require,module,exports){
module.exports = {
    
};
},{}]},{},[4])(4)
});


//# sourceMappingURL=fuel_ui.js.map
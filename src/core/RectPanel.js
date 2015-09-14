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
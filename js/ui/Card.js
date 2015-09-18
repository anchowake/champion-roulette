Class('Card').inherits(Widget)({
    HTML : '\
        <div class="col-md-2 col-xs-6 col-sm-3">\
            <a data-toggle="modal" data-target="#champStats">\
                <img class="inactive center-block img-responsive" />\
            </a>\
        </div>',

    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            this.buttonElement = this.element.find('a');

            this.setup()._bindEvents();
        },
        /* Sets the imageSourcePath.
         * @method setup <public> [Function]
         * @argument imagePath <require> [String] the image path
         * @argument heroeName <require> [String] the heroe name
         * @return Card [Object]
         */
        setup : function setup(imagePath, heroeName, heroeStats) {
            // Finds the img element and sets the src attr to the imagePath
            this.element.find('img').attr('src', imagePath);
            // Finds the anchor element and sets the data-tooltip attr to the heroeName
            this.element.find('a').attr('data-tooltip',heroeName);
            this.heroeName = heroeName;
            this.heroeStats = heroeStats;
            return this;
        },
         _bindEvents : function _bindEvents() {
            // Binds the card context in this element to _buttonClickHandler
            this.buttonElement.on('click', this._buttonClickHandler.bind(this));
            return this;
        },
        // Sends the params for the modal stats and champion name
        _buttonClickHandler : function _buttonClickHandler() {
            window.AppInstance.modalWidget.setup(this.heroeStats,this.heroeName);
        },
    }
});

Class('Card').inherits(Widget)({
    HTML : '\
        <div class="col-md-2 col-xs-6 col-sm-3">\
            <img class="championImage center-block img-responsive" />\
        </div>',

    prototype : {
        /* Sets the imageSoucePath.
         * @method setup <public> [Function]
         * @argument imagePath <require> [String] the image path
         * @return Card [Object]
         */
        setup : function setup(imagePath) {
            this.element.find('img').attr('src', imagePath);
            return this;
        }
    }
});

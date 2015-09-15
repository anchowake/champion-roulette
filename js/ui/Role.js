Class('Role').inherits(Widget)({
    HTML : '\
     <div class="col-md-2 col-xs-6 col-sm-4">\
        <button class="btn btn-role center-block" type="button">\
          <img class="img-responsive center-block img-rounded" width="128" height="128"/>\
          <p><span data-tag></span><br><small data-subtag></small></p>\
        </button>\
      </div>',

    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);

            this.imageElement = this.element.find('img');
            this.tagElement = this.element.find('[data-tag]');
            this.subtagElement = this.element.find('[data-subtag]');
            this.buttonElement = this.element.find('button');

            this._setup()._bindEvents();
        },

        /* Auto-run setup to update the widget values.
         * @method _setup <private> [Function]
         * @return Role
         */
        _setup : function _setup() {
            this.imageElement.attr('src', this.image);
            this.tagElement.text(this.tag);
            this.subtagElement.text(this.subtag);

            return this;
        },

        _bindEvents : function _bindEvents() {
            this.buttonElement.on('click', this._buttonClickHandler.bind(this));
            return this;
        },

        /* Fetch the champions and render them.
         * @method _buttonClickHandler <private> [Function]
         * @return undefined
         */
        _buttonClickHandler : 
            
        function _buttonClickHandler() {
            var role = this;
            window.AppInstance.fetch(function(err, res) {
                var characters = [];
                for (var character in res.data){
                    if(res.data[character].tags[0] == role.tag){
                        characters.push(res.data[character]);
                    }
                }
                // Update characters and access randomCard method defined in CardsContainer.js
                window.AppInstance.cardsWidget.update(characters).randomCard();
            });
        },

        destroy : function destroy() {
            Widget.prototype.destroy.call(this);
            this.buttonElement.off('click', this._buttonClickHandler);
            return null;
        }
    }
});

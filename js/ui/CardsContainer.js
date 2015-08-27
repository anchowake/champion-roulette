/* globals Card */
Class('CardsCotainer').inherits(Widget)({
    ELEMENT_CLASS : 'row',
    IMAGE_BASE_PATH : 'http://ddragon.leagueoflegends.com/cdn/5.15.1/img/champion/',

    prototype : {
        /* Removes and appends the new Cards passed as param.
         * @method update <public> [Function]
         * @argument cards <require> [Array]
         * @return CardsCotainer
         */
        update : function update(cards) {
            while(this.children.length > 0) {
                this.children[0].destroy();
            }

            cards.forEach(function(card, index) {
                this.appendChild(new Card({
                    name : 'card_' + index
                }));

                this['card_' + index]
                    .setup(this.constructor.IMAGE_BASE_PATH + card.image.full)
                    .render(this.element);
            }, this);

            return this;
        }
    }
});

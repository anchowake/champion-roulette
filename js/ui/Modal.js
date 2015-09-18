Class('Modal').inherits(Widget)({
    HTML : '\
        <div class="modal fade" id="champStats" tabindex="-1" role="dialog">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                <h4 class="modal-title">Modal title</h4>\
              </div>\
              <div class="modal-body">\
              <div class="row">\
                  <div class="col-md-12">\
                    <dl>\
                      <dt>Health:</dt>\
                        <dd class="hp">200</dd>\
                      <dt>Energy:</dt>\
                        <dd class="mp">200</dd>\
                      <dt>Armor:</dt>\
                        <dd class="arm">200</dd>\
                      <dt>Magic Resistance:</dt>\
                        <dd class="mr">200</dd>\
                      <dt>Attack Damage:</dt>\
                        <dd class="ad">200</dd>\
                      <dt>Movement Speed:</dt>\
                        <dd class="ap">200</dd>\
                    </dl>\
                  </div>\
             </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
              </div>\
            </div>\
          </div>\
        </div>',

    prototype : {
        /* Sets the stats data and modal id.
         * @method setup <public> [Function]
         * @argument heroeName <require> [String] the heroe name
         * @return Modal [Object]
         */
        setup : function setup(heroeStats,heroeName) {
            // Finds the img element and sets the src attr to the imagePath
            this.element.find('h4').html(heroeName+' Stats');
            this.element.find('.hp').html(heroeStats.hp);
            this.element.find('.mp').html(heroeStats.mp);
            this.element.find('.arm').html(heroeStats.armor);
            this.element.find('.mr').html(heroeStats.spellblock);
            this.element.find('.ad').html(heroeStats.attackdamage);
            this.element.find('.ap').html(heroeStats.movespeed);
            return this;
        }
    }
});

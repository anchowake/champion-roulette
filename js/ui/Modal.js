Class('Modal').inherits(Widget)({
    HTML : '\
        <div class="modal fade" id="champ" tabindex="-1" role="dialog">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                <h4 class="modal-title">Modal title</h4>\
              </div>\
              <div class="modal-body">\
              <div class="row">\
                  <div class="col-md-6">\
                  </div>\
                  <div class="col-md-6">\
                  </div>\
             </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                <button type="button" class="btn btn-primary">Save changes</button>\
              </div>\
            </div><!-- /.modal-content -->\
          </div><!-- /.modal-dialog -->\
        </div><!-- /.modal -->',

    prototype : {
        /* Sets the stats data and modal id.
         * @method setup <public> [Function]
         * @argument heroeName <require> [String] the heroe name
         * @return Modal [Object]
         */
        setup : function setup() {
            // Finds the img element and sets the src attr to the imagePath
            this.element.find('div.modal.fade').attr('id', heroeName);
            this.element.find('h4').html(heroeName+' Stats');
            
            return this;
        }
    }
});

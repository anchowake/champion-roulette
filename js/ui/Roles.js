/* globals Role */
Class('Roles').inherits(Widget)({
    ELEMENT_CLASS : 'row',
    prototype : {
        /* Creates and appends the the roles available.
         * You should provide the roles by passing them as an argument.
         * @argument roles <require> [Array]
         * @method setup <public> [Function]
         * @return Roles
         */
        setup : function setup(roles) {
            roles.forEach(function(type, index) {
                this.appendChild(new Role({
                    name : 'role_' + index,
                    tag : type.tag,
                    subtag : type.subtag,
                    image : type.imagePath
                })).render(this.element);
            }, this);

            return this;
        }
    }
});

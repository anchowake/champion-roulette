/* globals Roles, CardsCotainer */
Class('App').inherits(Widget)({
    prototype : {
        /* Appends its immediate widget childs (Roles, CardsCotainer) and
         * runs the `setup` method for CardsCotainer which creates and
         * appends the main Roles to choose from.
         * @method run <public> [Function]
         */
        run : function() {
            this.appendChild(new Roles({
                name : 'rolesWidget'
            })).render(this.element);

            this.appendChild(new CardsCotainer({
                name : 'cardsWidget'
            })).render(this.element);

            this.rolesWidget.setup([
                {
                    tag : 'Marksman',
                    subtag : 'ADC',
                    imagePath : 'https://3.bp.blogspot.com/-S5B0ivddWio/U5I0DlzYQfI/AAAAAAAAROY/_1kIRNwpzfs/s1600/profileIcon660.jpg'
                },
                {
                    tag : 'Mage',
                    subtag : 'MID',
                    imagePath : 'https://4.bp.blogspot.com/--xmzHf4UcyM/U5I0C3oY7HI/AAAAAAAAROo/enwiN0kIdws/s1600/profileIcon659.jpg'
                },
                {
                    tag : 'Tank',
                    subtag : 'TOP',
                    imagePath : 'https://2.bp.blogspot.com/-YkJsJB9F29o/U5I0ERH6HsI/AAAAAAAAROc/o-edRZYjTKs/s1600/profileIcon662.jpg'
                },
                {
                    tag : 'Fighter',
                    subtag : 'JUNGLE',
                    imagePath : 'https://3.bp.blogspot.com/-v2GCG8_Q1UU/U5I0C8En3MI/AAAAAAAAROE/g2pq6mAFHTI/s1600/profileIcon658.jpg'
                },
                {
                    tag : 'Support',
                    subtag : 'SUP',
                    imagePath : 'https://2.bp.blogspot.com/-Ovh-xrRajG4/U5I0DzodKqI/AAAAAAAAROU/BE472WcYzX4/s1600/profileIcon661.jpg'
                },
                {
                    tag : 'Assassin',
                    subtag : 'MID/TOP',
                    imagePath : 'https://1.bp.blogspot.com/-1mAmf71UWYE/U5I0CzfeA8I/AAAAAAAAROI/hfwdKn1iHmM/s1600/profileIcon657.jpg'
                },
            ]);

            return this;
        },

        resCache: null,

        /* Fetch the champions data and runs the passed callback.
         * @method fetch <public> [Function]
         */
        fetch : function fetch(callback){
            var app = this;
            
            if(this.resCache){return callback(false, this.resCache);}

            $.ajax({
                url: "https://global.api.pvp.net/api/lol/static-data/lan/v1.2/champion?champData=image,tags&api_key=834a82c5-bac3-423b-a90c-abb4e325e1ac",
                type: 'get',
                dataType: 'JSON',
                success: function(res) {
                    callback(false, res); 
                    app.resCache = res;
                },
                error : function error(res) {callback(true, res);}
            });

        }
    }
});

Ext.define('Cocktails.controller.Browse', {
    extend: 'Ext.app.Controller',

   
 config: {
    refs: {index:'browseIndex' },
 stores: ['Bartender'],
},
    init: function() {
        this.control({
            'segmentedbutton': {
                toggle: function(segmentedButton, newButton) {
                        this.getIndex().setActiveItem(segmentedButton.indexOf(newButton));

                }
            }
        });
    }
});
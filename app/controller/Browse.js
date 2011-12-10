Ext.define('Cocktails.controller.Browse', {
    extend: 'Ext.app.Controller',

    stores: ['Bartender', 'Featured', 'Latest'],

    refs: [{
        ref: 'index',
        selector: 'browseIndex'
    }],

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
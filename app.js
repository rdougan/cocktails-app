Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext', 'lib/touch2/src');

Ext.application({
    name: 'Cocktails',

    controllers: [
        'Browse',
        'Search',
        'Share',
        'Guides',
        'Profile'
    ],
	stores:["Bartender","Featured","Latest"],
    views: ['Main'],
 models: ['BrowseItem'],
    launch: function() {
        Ext.Viewport.add({
            xclass: 'Cocktails.view.Main'
        });
    }
});
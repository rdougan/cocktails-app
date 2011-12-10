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

    views: ['Main'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'Cocktails.view.Main'
        });
    }
});
Ext.define('Cocktails.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'Cocktails.view.browse.Index',
        'Cocktails.view.search.Index',
        'Cocktails.view.share.Index',
        'Cocktails.view.guides.Index',
        'Cocktails.view.profile.Index'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        items: [
            { xclass: 'Cocktails.view.browse.Index' },
            { xclass: 'Cocktails.view.search.Index' },
            { xclass: 'Cocktails.view.share.Index' },
            { xclass: 'Cocktails.view.guides.Index' },
            { xclass: 'Cocktails.view.profile.Index' }
        ]
    }
});
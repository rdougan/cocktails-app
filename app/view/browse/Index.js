Ext.define('Cocktails.view.browse.Index', {
    extend: 'Ext.Container',
    xtype: 'browseIndex',

    requires: [
        'Cocktails.view.browse.Bartender',
        'Cocktails.view.browse.Featured',
        'Cocktails.view.browse.Latest',
        'Ext.SegmentedButton'
    ],

    config: {
        title: 'Browse',
        iconCls: 'home',

        cls: 'browse-index',

        layout: {
            type: 'card',
            animation: {
                type: 'fade',
                duration: 500
            }
        },

        activeItem: 2,

        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                items: [
                    { xtype: 'spacer' },
                    {
                        xtype: 'segmentedbutton',
                        items: [
                            { text: 'Bartender' },
                            { text: 'Featured' },
                            { text: 'Latest', pressed: true }
                        ]
                    },
                    { xtype: 'spacer' }
                ]
            },
            { xclass: 'Cocktails.view.browse.Bartender' },
            { xclass: 'Cocktails.view.browse.Featured' },
            { xclass: 'Cocktails.view.browse.Latest' }
        ]
    }
});
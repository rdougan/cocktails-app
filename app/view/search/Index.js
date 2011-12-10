Ext.define('Cocktails.view.search.Index', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Map',
        'Ext.field.Text'
    ],

    config: {
        title: 'Search',
        iconCls: 'search',

        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'plain',
                items: [
                    {
                        xtype: 'textfield',
                        width: '100%',
                        label: false,
                        placeHolder: 'Search...'
                    }
                ]
            },
            {
                xtype: 'map'
            }
        ]
    }
});
Ext.define('Cocktails.store.Bartender', {
    extend: 'Ext.data.Store',

    model: 'Cocktails.model.BrowseItem',

    data: [
        {
            name: 'Robert',
            avatar: '',
            photo: '',
            comment: 'hmmm'
        },
        {
            name: 'Mr. Data',
            avatar: '',
            photo: '',
            comment: 'Drink.'
        },
        {
            name: 'Mr. Data',
            avatar: '',
            photo: '',
            comment: 'Drink.'
        },
        {
            name: 'Mr. Data',
            avatar: '',
            photo: '',
            comment: 'Drink.'
        }
    ]
});
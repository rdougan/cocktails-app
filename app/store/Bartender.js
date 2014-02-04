Ext.define('Cocktails.store.Bartender', {
    extend: 'Ext.data.Store',
    config: {    
	model: 'Cocktails.model.BrowseItem',
autoLoad: true,
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
}
});
Ext.define('Cocktails.store.Featured', {
    extend: 'Ext.data.Store',
    config: { 
    model: 'Cocktails.model.BrowseItem',

    data: [
        {
            name: 'Robert',
            avatar: '',
            photo: '',
            comment: 'Cocktail'
        }
    ]}
});
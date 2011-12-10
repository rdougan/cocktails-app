Ext.define('Cocktails.view.browse.Base', {
    extend: 'Ext.dataview.List',

    config: {
        itemTpl: [
            '<div class="item">',
                '<div class="person">',
                    '<div class="avatar" style="background-image:url({avatar});"></div>',
                    '<div class="name">{name}</div>',
                '</div>',
                '<div class="photo">',
                    '<div class="img" style="background-image:url({photo});"></div>',
                    '<div class="comment">{comment}</div>',
                '</div',
            '</div>'
        ].join('')
    }
});
Ext.define('Study.view.notify.Notifications', {
    extend: 'Ext.Panel',
    xtype: 'notifications', // #1



    layout: 'fit', // #2

    items: [{
        xtype: 'grid',

        store: {
            type: 'notifications' // we'll define this next
        },

        columns: [{
            xtype: 'datecolumn',
            text: 'Date',
            dataIndex: 'date'
        }, {
            text: 'Description',
            dataIndex: 'description',
            flex: 1
        }]
    }]
}); 
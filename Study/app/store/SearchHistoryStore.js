Ext.define('Study.store.SearchHistoryStore', {
    extend: 'Ext.data.Store',
    alias: 'store.searchHistoryStore',
    storeId : 'searchHistoryStore', 
    autoLoad : false,
    
    sorters : {
    	direction : 'DESC',
    	property : 'time' 
    }

 
   // model : 'Study.model.searchHistoryModel',     
   // viewModel: 'bidinfoList', 

/*    fields: [
        {name: 'time',      type: 'date', dateFormat : 'H:i:s'},
        (name: 'instName',  type: 'string'},
        {name: 'keyword',   type: 'string'},
        {name: 'schedule',  type: 'boolean'} 
    ],*/
    /*fields: [
            'time', 'instName', 'keyword','searchType', 'schedule' 
    ]*/
    
});
   
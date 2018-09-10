Ext.define('Study.model.SearchHistoryModel', {
    extend: 'Ext.data.Model', 
    fields: [{
        name: 'time',
        type: 'date',
        dateFormat : 'H:i:s'
    },{
    	name: 'instName',
    	type: 'string'
    },{
    	name: 'keyword',
    	type: 'string'
    },{
    	name: 'schedule',
    	type: 'boolean'
    },{
    	name : 'fromDate',
    	type : 'date'
    }], 
   
    proxy : {
    	type : 'sessionstorage'
    }
});
 
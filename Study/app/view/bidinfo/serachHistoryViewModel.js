/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Study.view.bindinfo.searchHistoryViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchHistoryViewModel', 
    data : {
    	instName : '기',
    	keyword : '본'	
    },
    stores : {
    	searchHistoryStore : {
    		type : 'searchHistoryStore'
    	}	   
    }
    //TODO - add data, formulas and/or methods to support your view
});
  
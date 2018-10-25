/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Study.view.bindinfo.searchHistoryViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchHistoryViewModel', 
    stores : {
    	searchHistoryStore : {
    		type : 'searchHistoryStore'
    	},
    	bmtuserlistStore : {
    		type: 'bmtuserlist'
    	}
    } 
    //TODO - add data, formulas and/or methods to support your view
});
  
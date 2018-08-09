/**
 * This class is the view model for the Main view of the application.
 */

function oneMonthAgo(){
    //put real logic for getting date prior to 3 months here
	var date = new Date();
	//date.setMonth(date.getMonth() - 1);
	date.setDate(date.getDate() -1);
	return date;   
} 

Ext.define('Study.view.bindinfo.bidinfoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.bidinfoList',
    
    data : {
    	instNm : '대법원',
    	keyword : '',
    	//fromDate: oneMonthAgo(),
    	fromDate: new Date('2018/8/1'),
    	toDate: new Date()
    	
    		
    }, 
    
    stores : {
    	bidinfoList : {
    		type : 'bidinfoList'
    	}
    }


    //TODO - add data, formulas and/or methods to support your view
});

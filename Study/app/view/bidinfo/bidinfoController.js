/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.bidinfo.bidinfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.bidinfoList',
    
/*    search : function(btn){
    	var store = new stroe
    } */

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    search : function(btn){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	var proxy = store.getProxy();
    	
    	/*
    	var params = {
    			instNm : viewModel.get("instNm"),
    			keyword : viewModel.get("keyword"),
    			fromDate : Ext.Date.format(viewModel.get("fromDate"),'Y/m/d'),
    			toDate : Ext.Date.format(viewModel.get("toDate"),'Y/m/d') 

    	}
    	store.load({
		params : params
	    }); */
    	
    	
    	//store.reload(); // reload로 호출하면 page처리때문에 6개번 호출된다.
    	
    	proxy.setExtraParam("instNm", viewModel.get("instNm"));
    	proxy.setExtraParam("keyword", viewModel.get("keyword"));
    	proxy.setExtraParam("fromDate", Ext.Date.format(viewModel.get("fromDate"),'Y/m/d'));
    	proxy.setExtraParam("toDate", Ext.Date.format(viewModel.get("toDate"),'Y/m/d'));    	
    	store.load();

    	
    	
    	
    	/*Ext.Ajax.request({
    		url : 'http://localhost:8080/tta/test/json.do',
    		method : 'GET',
    		params : params,
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			console.log(result);
    			
    			//우선 200코그다 아니더라고 우선 직어주자;
    			viewModel.getStore(view['xtype']).reload();
    			if (result['Code']==200){ 
    				viewModel.getStore(view['xtype']).reload();    				
    			}
    		} 
    		  
    	})*/

    	
    	 
    },
    
    onLoadData : function(obj){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	//view['xtype'] == 'bidinfoList'
    	var store = viewModel.getStore(view['xtype']);
    	//var store = viewModel.getStore('bidinfoList');
    	
    	store.load(); 
    },
    
    
    setGridHeight : function(obj){
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()- 350);
    },
    
    keyPress : function(field,event){
        if (event.getKey() == event.ENTER){
        	this.search();
        	} 
    },
/*    cellClicked : function(table, td, cellIndex, record, tr, rowIndex, e, eOpts ){    	    	
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore(view['xtype']);    	  
		//console.log(store.getAt(cellIndex).get('link'));
		window.open(store.getAt(cellIndex).get('link'));
    	
    	
	}*/
    
    gotoDetail : function(btn){
		var record = btn.getWidgetRecord();
		window.open(record.get('link'));	
	}	 
});

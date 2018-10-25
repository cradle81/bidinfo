/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.bidinfoSelectDelete.bidinfoSelectDeleteController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.bidinfoSelectDeleteController',                         
    
    onLoadData : function(obj){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore('scheduleList');
    	store.load(); 
    },
    setGridHeight : function(obj){
    	console.log("setGridHeight");
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()- 350);
    },
    actionDelete : function(btn){

		var me = this;
		var view = me.getView();
		var viewModel = view.getViewModel();
		var store = viewModel.getStore('scheduleList');
	
		
		
		Ext.Msg.confirm("확인내용", "정말삭제하시겠습니까?", function(btnText){
			if(btnText == 'no'){
				Ext.Msg.alert("정보", "취소되었습니다.");
				
			}
			else if (btnText == 'yes'){

				var record = btn.getWidgetRecord();				
				var threadName = record.get('threadName');
				
				console.log(threadName);
				
		     	Ext.Ajax.request({ 
		     		url : Ext.manifest.api_url+'/tta/bidinfo/delSchedule.do',
			 		method : 'POST',
			 		params:  {
			 			threadName : threadName 
			 		},
			 		success : function(res){
			 			    Ext.Msg.alert("정보", "정상처리되었습니다. - "+threadName);
			 				store.load(); 	 		 			    
	 		
			 		}, 
			 		failure: function(response, opts) {			 	        
			 	        Ext.Msg.alert("정보", "오류가 발생하셨습니다. - " + threadName);
			 	     }
		 		   
		 	    })
			}  
		},this);
		
		

		         
	
    	
    }
  
});

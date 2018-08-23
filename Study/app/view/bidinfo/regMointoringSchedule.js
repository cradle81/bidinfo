function aWeekAfter(){
    //put real logic for getting date prior to 3 months here
	var date = new Date();
	//date.setMonth(date.getMonth() - 1);
	date.setDate(date.getDate() + 7);
	return Ext.Date.format(date,'Y/m/d');   
} 
Ext.define('Study.view.bidinfo.regMointoringSchedule',{
	  //extend: 'Ext.form.Panel',
	  extend : 'Ext.window.Window', 
	  xtype: 'regMointoringSchedule',  
	  viewModel: 'searchHistoryViewModel', 
	  controller: 'bidinfoList',
	  reference: 'regMointoringSchedule',
	  
	  
	  
	  modal : true,
	  autoShow : true,
	  frame : true,
	  title : "검색 모니터링 스케줄 등록",
	  bodyPadding : 10,
	  width : 355,
	  
	  fieldDefaults : {
		  labelAlign : 'right',
		  lableWidth : 115,
		  msgTarget: 'side'
	  },	  
	  items : [{
		  xtype : 'fieldset',
		  title : '검색 필터 확인',
		  defaultType : 'textfield',
		  defaults : {
			  anchor : '100%'
		  },
		  items :[{
			  allowBlank:false, 
			  fieldLabel: '발주기관', 
			  name: 'instName'/*, 
			  bind : {
				  value : '{instName}'
			  }*/ 
		  },{
			  allowBlank:false, 
			  fieldLabel: '키워드', 
			  name: 'keyword'/*, 
			  bind : {
				  value : '{keyword}'
			  }*/
		  },{
	            xtype: 'datefield',
	            fieldLabel: '모니터링 기간',
	            name: 'dueDate',
	        	format: 'Y/m/d',   
	            allowBlank: false,
	            maxValue: aWeekAfter() 
		  }]
		    
	  },{
		  xtype: 'multiselector',
	        title: '메일 발송자 선택',

	        fieldName: 'name',
	        viewConfig: {
	            deferEmptyText: false,
	            emptyText: '메일 발송자가 선택되지 않았습니다.'
	        },
	        search: {
	        	 field: 'name',
	        	 store : {
	        		 data: [{
	        			 name : '김정원'
	        		 },{
	        			 name : '이상민'
	        		 }]
	        	 }
	        }
	  }],
	          
	  buttons : [{
		  text : '확인',
		  formBind : true,
		  //handler : 'actionRegMonitoringSchedule'
		  handler : 'actionRegMonitoringSchedule'
	  }]/*,

	  listeners : [{
		  boxready  : function(obj,eOpts){	
		    	//gird를 찾고
		      var me = this;
		      
		      console.log(me);
		      console.log(obj);	
		      var searchHistoryGrid = me.up('grid[title=검색기록]');
		      console.log(searchHistoryGrid);
		   	  //var viewModel = searchHistoryGrid.getViewModel();
		    	
	    	
			  var instNameTextfield = obj.down('textfield[name=instName]');
			  var keywordTextfield = obj.down('textfield[name=keyword]');
			  instNameTextfield.setValue(viewModel.get('instName'));
			  keywordTextfield.setValue(viewModel.get('keyword'));
			  
			  console.log(instNameTextfield);
			  console.log(keywordTextfield);
		  
			  
	   } 
	  }] */
	  
	   
});  
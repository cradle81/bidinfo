	   function aWeekAfter(){
		    //put real logic for getting date prior to 3 months here
			var date = new Date();
			//date.setMonth(date.getMonth() - 1);
			date.setDate(date.getDate() + 7);
			return date;
			//return Ext.Date.format(date,'C');   
		}
		function aMonthAfter(){
		    //put real logic for getting date prior to 3 months here
			var date = new Date();
			//date.setMonth(date.getMonth() - 1);
			date.setDate(date.getDate() + 30);
			
			return date;
			//return Ext.Date.format(date,'C');   
		}	
Ext.define('Study.view.bidinfo.regMointoringSchedule',{
	  //extend: 'Ext.form.Panel',
	  extend : 'Ext.window.Window', 
	  xtype: 'regMointoringSchedule',  
//	  viewModel: 'searchHistoryViewModel',  
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
		  reference: 'regMonfieldSet-ref',
		  defaultType : 'textfield',
		  defaults : {
			  anchor : '100%'
		  },
		  items :[{
			  allowBlank:false, 
			  fieldLabel: '발주기관', 
			  name: 'instName', 
			  bind : {
				  value : '{instName}'
			  }
		  },{
			  allowBlank:false,  
			  fieldLabel: '키워드', 
			  name: 'keyword', 
			  bind : {
				  value : '{keyword}' 
			  }
		  },{
			  allowBlank:false,  
			  fieldLabel: '검색타입', 
			  name: 'showType', 
			  bind : {
				  value : '{showType}'
			  }
		  },{
			  name: 'searchType', 
			  bind : {
				  value : '{searchType}'
			  },
			  hidden: true 
		  	
		  },{ 
	            xtype: 'datefield',
	            fieldLabel: '모니터링 기간',
	            name: 'dueDate',
	            allowBlank: false,
	            format: 'Y/m/d',
	            value: aWeekAfter(), 
	            maxValue: aMonthAfter()
	            
		  },{
			  name: 'fromDate',
			  bind :{
				  value : '{fromDate}'
			  },
			  hidden : true
		  }]
		    
	  },{
		    xtype: 'multiselector',
		    reference: 'regMonMulSelctor-ref',
	        title: '메일 발송자 선택',

	        fieldName: 'email',
	        viewConfig: {
	            deferEmptyText: false,
	            emptyText: '메일 발송자가 선택되지 않았습니다.'
	        },
	        search: {
	        	 field: 'name',
	        	 store : {
	        		 data: [{
	        			 name : '김정원',
	        			 email : 'jungwon_kim@tta.or.kr'
	        		 },{
	        			 name : '이상민',
	        			 email : 'minuri33@tta.or.kr'
	        		 },{
	        			 name : '유정승',
	        			 email : 'js.yu@tta.or.kr'
	        		 },{
	        			 name : '강지성',
	        			 email : 'kang.jiseong@tta.or.kr'
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
		      
		      console.log("===========");
		      console.log(obj.getViewModel());
		      console.log("===========");
		    	
	    	
			  var instNameTextfield = obj.down('textfield[name=instName]');
			  var keywordTextfield = obj.down('textfield[name=keyword]');
			  instNameTextfield.setValue(viewModel.get('instName'));
			  keywordTextfield.setValue(viewModel.get('keyword'));
			  
			  console.log(instNameTextfield);
			  console.log(keywordTextfield);
		  
			   
	   } 
	  }] */
	  
	   
});  
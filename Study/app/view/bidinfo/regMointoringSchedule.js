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
		function debugDate(){
			var date = new Date();
			date.setMinutes(date.getMinutes()+5);
			return date;  
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
	            //value: debugDate(),
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
/*        	bind: {
        		store : '{bmtuserlist}'
        	}
      */
/*	        store: {
	            type: 'bmtuserlist' 
	        }*/
	        
	        // bind store으로 하면 안된다 아래와  같이 직접 접근해야 한다.
	        //그렇지 않으면 autoload ture인 경우 모두 메일이사용자가 선택이되고
	        //autoload false인 경우는 로드 자체가 안된다. 뭐 이벤트를 줘서 로딩하게 할 수 있을 것 같긴 하지만;;;
	        search: { 
	        	 field: 'name',	        	
	        	 store : {
	        		 sorters: 'name',
	        		 proxy: {
	        			 type : 'ajax',
	        			 actionMethods :{
	        				 read : 'POST'  
	        			 },
	        			 url : Ext.manifest.api_url+'/tta/bidinfo/getBMTUserList.do',		 
	        			 reader: {
	        				 type : 'json',
	        				 rootProperty : 'data'
	        			 } 
	        		 }
	        	 }
	        }

	        
	  }],	         
	  buttons : [{
		  text : '확인',
		  formBind : true,
		  //handler : 'actionRegMonitoringSchedule'
		  handler : 'actionRegMonitoringSchedule'
	  }]
	  
	   
});  
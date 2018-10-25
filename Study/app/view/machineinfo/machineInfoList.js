Ext.define('Study.view.machineinfo.machineInfoList', {
    extend: 'Ext.panel.Panel',
    xtype: 'machineInfoList',
    requires : [
    	'Ext.form.field.*',
    	'Ext.form.*'
    	 
    ],
    listeners : {
    	boxready : 'onLoadData',
    	resize : 'setGridHeight'
    },    
    viewModel : 'machineInfoListViewModel',
    controller: 'machineInfoListController',     
    titile : '장비검색',
    items : [{
	    	xtype : 'fieldset',
	    	title : '서버',
	    	checkboxToggle: false,
	    	collapsed : false,
	    	layout : 'hbox',
	    	items : [
	    	{
	    		xtype : 'checkbox',
    			boxLabel : '모두선택',
    			name : 'server',
    			inputValue : 'server',
    			width : 100,
    			checked : true,
    			listeners : {
    				change : 'checkAll'  
    				
    			} 
	    		
	    	},{
	    		xtype : 'checkboxgroup',
	    		listeners : {
	    			change : 'reloadData'
	    		},
	    		defaults : {
	    			width : 100,
	    			checked : true
	    			/*listeners : {
	    				change : 'getMachineList'
	    			}*/
	    		},
	    		items : [{
	        		boxLabel : 'x86',
	        		name : 'x86',
	        		inputValue : 'x86'       		
	        	},{
	        		boxLabel : 'power',
	        		name : 'power',
	        		inputValue:'power'
	        	},{
	        		boxLabel : 'sparc', 
	        		name : 'sparc',
	        		inputValue : 'sparc'
	        	},{
	        		boxLabel : 'itanium',
	        		name : 'itanium',
	        		inputValue : 'itanium'
	        	}]
	    			
	    	}]
    	},
    	{ 
	    	xtype : 'fieldset',
	    	title : '클라이언트',
	    	layout : 'hbox',
	    	defaultType : 'checkbox',
	    	checkboxToggle: false,
	    	collapsed : false,   		
    		items : [{
    			boxLabel : '모두선택',
    			name : 'client',
    			inputValue : 'client',
    			width : 100,
    			checked : false ,
    			listeners : {
    				change : function (obj,newValue, oldValue, eOpts){
    					var checkgroup = obj.nextSibling("checkboxgroup");
    					var collection = checkgroup.items;
    					if(obj.getValue() == true)
						{
    						collection.each(function(item){
    							item.setValue(true);
    						});
						}
    					else{
    						collection.each(function(item){
    							item.setValue(false);
    						});
    					}
    						
    						
    				}  
    				
    			}    			
    		},{
    			xtype : 'checkboxgroup',
    			defaults : {
    				width : 100,
    				checked :false
    			},
	    		items : [{
		    		boxLabel : 'HP-Prodesk', 
		    		name : 'HP-Prodesk',
		    		inputValue : 'HP-Prodesk'
		    	},{
		    		boxLabel : 'RedStone',
		    		name : 'RedStone',
		    		inputValue : 'RedStone'    		
		    	}] 
    		}]
    	},    	 
    	{
	    	xtype : 'grid',
	    	height : 450,
	    	title: '결과', 
	    	columnLines : true,
	        bind : {
	    		store : '{machineInfoList}'
	    	},
    	 
	    	columns : [{
	    		xtype : 'rownumberer'
	    	},{
	    		text : '서버명',
	    		flex : 1,
	    		dataIndex : 'svrname'
	    	},{
	    		text : '모델명',
	    		flex : 1,
	    		dataIndex : 'model'
	    	},{
	    		text : 'cpu타입',
	    		flex : 1,
	    		dataIndex : 'cpu_type'
	    	},{
	    		text : 'cpu',
	    		flex : 1,
	    		dataIndex : 'cpu'	
	    	},{
	    		text : '물리소켓수',
	    		flex : 1,
	    		dataIndex : 'cpu_p'	
	    	},{
	    		text : '코어수',
	    		flex : 1,
	    		dataIndex : 'cpu_c'
	    	},{
	    		text : '스레드',
	    		flex : 1,
	    		dataIndex : 'cpu_t'
	    	},{
	    		text : '메모리',
	    		flex : 1,	    		
	    		dataIndex : 'mem'
	    	},{
	    		text : '사용여부',
	    		flex : 1,
	    		dataIndex : 'isEnable',
	    		renderer : function (value,record){
	    			if (value == true)
	    				{
	    				return "사용가능";
	    				}
	    			else 
	    				{
	    				return "사용중";
	    				}
	    		} 
	    	}]
    	}]
    
});

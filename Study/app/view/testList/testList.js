Ext.define('Study.view.testList.testList', {
    extend: 'Ext.panel.Panel',
    xtype: 'testList', 
    
    controller: 'testListController',
    title : '장비 조회 및 등록',
    
    items : [{
    	xtype : 'panel',
    	layout : 'hbox',
    	items : [{
    		xtype : 'fieldset',
	    	title : '서버',
	    	checkboxToggle: false,
	    	collapsed : false,
	    	layout : 'hbox',	    	
	    	items : [{
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
/*    		    		listeners : {
    		    			change : 'reloadData'
    		    		},*/
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
    	},{
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
    				change : 'checkAll'
    				
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
    	}]
    },{
    	xtype : 'panel',
    	layout : 'hbox',
    	items : [{
    		xtype : 'fieldset',
        	title : '스토리지 ',
        	layout : 'hbox',
        	defaultType : 'checkbox',
        	checkboxToggle: false,
        	collapsed : false,   
    		items : [{
    			boxLabel : '모두선택',
    			name : '저장장치',
    			inputValue : 'store', 
    			width : 100,
    			checked : false ,
    			listeners : {
    				change : 'checkAll'
    				
    			}   
    		
    		},{
    			xtype : 'checkboxgroup',
    			defaults : {
    				width : 100,
    				checked :false
    			},
	    		items : [{
		    		boxLabel : '스토리지', 
		    		name : 'stroage',
		    		inputValue : 'storage'
		    	},{
		    		boxLabel : 'NAS',
		    		name : 'nas',
		    		inputValue : 'nas'    		
		    	}] 	    	    		 
    		}]
    	},{
    		xtype : 'fieldset',
        	title : '네트워크 및 기타 ',
        	layout : 'hbox',
        	defaultType : 'checkbox',
        	checkboxToggle: false,
        	collapsed : false,   
    		items : [{
    			boxLabel : '모두선택',
    			name : 'network',
    			inputValue : 'network',
    			width : 100,
    			checked : false ,
    			listeners : {
    				change : 'checkAll'
    				
    			}   
    		
    		},{
    			xtype : 'checkboxgroup',
    			defaults : {
    				width : 100,
    				checked :false
    			},
	    		items : [{
		    		boxLabel : 'L2', 
		    		name : 'l2',
		    		inputValue : 'l2'
		    	},{
		    		boxLabel : 'L4',
		    		name : 'l4',
		    		inputValue : 'l4'    		
		    	}] 	    	    		 
    		}]    		
    	}]
    },{
    	xtype : 'panel',
    	name : 'inputPanel',
    	layout : 'hbox',
    	defaults : {
    		xtype : 'textfield'
    	},
    	items : [{
    		name : 'serverName',
    		fieldLabel : '서버명',
    	    labelAlign: 'right',
    	    labelWidth: 100,
    	    allowBlank:false
    	},{
    		name : 'modelName',
    		fieldLabel : '모델명',
    		labelAlign: 'right',
    		labelWidth: 100,
    		allowBlank:false
    	},{
    		name : 'cpuType',
    		fieldLabel : 'CPU타입',
    		labelAlign: 'right',
    		labelWidth: 100,
    		allowBlank:false
    	}]
    }]
    
})   
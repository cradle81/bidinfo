Ext.define('Study.view.bidinfo.bidinfoList', {
    extend: 'Ext.panel.Panel',
    xtype: 'bidinfoList',
    requires: [
               //'Study.*'
               'Ext.form.field.*',
               'Ext.form.*',
               'Ext.grid.column.Widget' 
               
    ],    
    controller: 'bidinfoList',
    viewModel: 'bidinfoList', 
    listeners : {
    	//boxready : 'onLoadData',
    	resize : 'setGridHeight'
    },
    title : '입찰공고검색',
    items : [{
    	xtype : 'panel',
        layout: {
            type: 'hbox',
            padding: 5
        },
        items : [{
        	xtype : 'datefield',
    		anchor : '100%',
    		fieldLabel : '시작일시',
    		name : 'from_date',
    	    format: 'Y/m/d',    	    
    	    padding: 5,
    	    bind :{
    	    	value : '{fromDate}'
    	    },
    	    enableKeyEvents: true,
            listeners: {                   
                'keypress': 'keyPress'                    	  	     
                    	   
            }
        },{
        	xtype : 'datefield',
    		anchor : '100%',
    		fieldLabel : '종료일시',
    		name : 'to_date',
    		format: 'Y/m/d',    		
    		maxValue: new Date(),
    		padding: 5,
    		bind :{
    	    	value : '{toDate}'
    	    },
    	    enableKeyEvents: true,
            listeners: {                   
                'keypress': 'keyPress'                    	  	     
                    	   
            }	
    	}]
        },{
	    	xtype : 'panel',
	        layout: {
	            type: 'hbox',
	            padding: 5
	        },
	        items : [{
	    		xtype : 'textfield',
	    		name : 'instNm',
	    		anchor : '100%',
	    		fieldLabel: '발주기관',
	    		allowBlank: 'true',
	    		emptyText:'발주기관을 입력하세요',
	    		padding: 5,
	    		bind :{
	    	    	value : '{instNm}'
	    	    },
	    	    enableKeyEvents: true,
	            listeners: {                   
	                'keypress': 'keyPress'                    	  	     
	                    	   
	                    }	                                                   
	            
	    	},{
	    		xtype : 'textfield',
	    		name : 'keyword',
	    		anchor : '100%',
	    		fieldLabel: '키 워 드',
	    		allowBlank: 'true',
	    		emptyText:'키워드를 입력하세요', 
	    		padding: 5,
	    		bind :{
	    	    	value : '{keyword}'
	    	    },
	    	    enableKeyEvents: true,
	            listeners: {                   
	                'keypress': 'keyPress'                    	  	     	                    	   
	                    }	
	    		
	    	}]
      },{
    	  xtype : 'radiogroup',
    	  fieldLabel : '검색유형',
    	  reference : 'searchType-ref', 
    	  columns : 2,
    	  width :  450, 
    	  anchor: '100%', 
    	  vertical : false,
    	  padding : 5,
    	  items : [
    		  {name : 'searchType', boxLabel: '사전공고(p)', inputValue: 'p', checked: true},
              {name : 'searchType', boxLabel: '본공고(t)', inputValue: 't'}
    	  ] 
      },{
    	  xtype : 'panel',
	      border : true,
	      reference : 'panel-ref', 
	      padding: 5,
	     
	      layout: {
	            type: 'hbox'
	      },
	       items : [{
	    	    xtype : 'grid',
	    	    height : 250,
	    	    split : {
	  	    	  size : 1,
	              style : {
	                	'background' : 'gray'
	              }
	  	        },
		       	columnLines: true,
		        flex: 3,
		       	viewConfig : {
		       		emptyText : '데이터가 없습니다.'    		
		       	},    	
		       	tbar: [{
		   	    		xtype : 'button',
		   	    		name : 'searchButton',
		   	    		text : '검색'	,	 
		   	    		width : '40%',
		   	    		handler: 'search'
		   	        }],
		       	columns : [{
		       		xtype : 'rownumberer'
		       	}, {
		       		text : '입력일시(입찰마감일시)',
		       		flex : 1,
		       		dataIndex : 'time'
		       	},{
		       		text : '공고명',
		       		flex : 3,
		       		dataIndex : 'name'
		       			
		       	},{
		       		text : '수요기관',
		       		flex : 1, 
		       		dataIndex : 'instNm'
		       	},{
		       		text : '바로가기',
		       		xtype : 'widgetcolumn',    		
		       		widget : {
		       			xtype : 'button',
		           		name : 'detailButton',
		           		text : '상세확인',
		           		handler : 'gotoDetail'
		       		}
		       		
		       	}/*,{				
		       		text : 'URL',
		       		flex : 1,
		       		dataIndex : 'link'
		       	}*/],
		       	bind : {
		       		store : '{bidinfoList}'
		       	   
		       	},
		   /*    	listeners : { 
		       		cellclick : 'gotoDetail'
		       	},*/
		       	bbar :{
		       		xtype:'pagingtoolbar',
		       		//plugin : ''
		       		displayInfo: true    		
		       	}
	        },{
	    	    xtype : 'grid',
		       	title : '검색기록',
		        reference : 'searchGrid-ref', 
		       	height : 450,
		       	flex: 1,
		       	layout : 'fit',
		        viewModel : 'searchHistoryViewModel',
		        selModel: {
		            type: 'checkboxmodel',
		            mode : 'SINGLE'		            
		        }, 		        

		       	columns : [{
		       		text : '검색시간',
		       		flex : 1,
		       		dataIndex: 'time'
		       		
		       	},{
		       		text : '발주기관',
		       		flex : 1,
		       		dataIndex: 'instName'
		       	},{
		       		text: '키워드', 
		       		flex : 1,
		       		dataIndex: 'keyword'
		       	},{
		       		text : '검색타입',
		       		flex : 1,
		       	    dataIndex: 'showType'
		       	}/*,{
		            xtype: 'checkcolumn',
		            header: '등록',
		            dataIndex: 'schedule',
		            width: 60,
		            editor: {
		                xtype: 'checkbox',
		                cls: 'x-grid-checkheader-editor'
		            }
		        }*/], 
		       	bind : {
		       		store : '{searchHistoryStore}'		       	   
		       	},
		       	listeners: {
		       		cellclick: 'searchHistorycellClick'       		
		       	},
		       	tbar :[{
		       		xtype : 'button',
		       		text: '스케줄등록',
		       		width : '40%',
		       		layout : {
		       			align : 'middle',
		       			pack : 'center' 
		       		}, 
		       		width : 150,
		       		layout : {
		       			align : 'middle',
		       			pack : 'center'
		       		},
		       		handler : 'regMointoringSchedule'
		       	}]

	       }] 
         }]
     
});

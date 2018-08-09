Ext.define('Study.view.bidinfo.bidinfoList', {
    extend: 'Ext.panel.Panel',
    xtype: 'bidinfoList',
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
    	  name : 'searchType',    	  
    	  columns : 2,
    	  width :  450, 
    	  anchor: '100%',
    	  vertical : false,
    	  padding : 5,
    	  items : [
    		  {boxLabel: '사전공고', inputValue: 1,checked: true},
              {boxLabel: '본공고', inputValue: 2}
    	  ] 
      },{
    	xtype : 'grid',
    	columnLines: true,
    	border : true,    
    	height : 250,
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
    }]
     
});

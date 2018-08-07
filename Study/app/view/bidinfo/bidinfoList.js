Ext.define('Study.view.bidinfo.bidinfoList', {
    extend: 'Ext.panel.Panel',
    xtype: 'bidinfoList',
    controller: 'bidinfo',
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
    	    padding: 5
        },{
        	xtype : 'datefield',
    		anchor : '100%',
    		fieldLabel : '종료일시',
    		name : 'to_date',
    		format: 'Y/m/d',
    		value : new Date(), //현재날짜에서 1달전
    		maxValue: new Date(),
    		padding: 5
    	}]
        },{
	    	xtype : 'panel',
	        layout: {
	            type: 'hbox',
	            padding: 5
	        },
	        items : [{
	    		xtype : 'textfield',
	    		name : 'intName',
	    		anchor : '100%',
	    		fieldLabel: '발주기관',
	    		allowBlank: 'true',
	    		emptyText:'발주기관을 입력하세요',
	    		padding: 5
	    	},{
	    		xtype : 'textfield',
	    		name : 'keyword',
	    		anchor : '100%',
	    		fieldLabel: '키 워 드',
	    		allowBlank: 'true',
	    		emptyText:'키워드를 입력하세요',
	    		padding: 5
	    		
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
    		flex : 1,
    		dataIndex : 'name'
    			
    	},{
    		text : '수요기관',
    		flex : 1, 
    		dataIndex : 'instNm'
    	},{				
    		text : 'URL',
    		flex : 1,
    		dataIndex : 'link'
    	}],
    	store : {
    	    fields: ['time', 'name', 'intName','link'],

             data: [{ 
            	 time: '2017/12/12' ,
            	 name: 'Jean Luc', 
            	 instNm: "jeanluc.picard@enterprise.com", 
            	 link: "555-111-1111"
             },{
            	 time: '2017/12/12', 
            	 name: 'Worf',     
            	 instNm: "worf.moghsson@enterprise.com",  
            	 link: "555-222-2222"
             }]
    	},
    	bbar :{
    		xtype:'pagingtoolbar',
    		//plugin : ''
    		displayInfo: true    		
    	}
    }]
     
});

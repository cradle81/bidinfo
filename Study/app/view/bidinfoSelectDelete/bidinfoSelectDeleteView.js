Ext.define('Study.view.bidinfoSelectDelete.bidinfoSelectDeleteView', {
    extend: 'Ext.panel.Panel',
    xtype: 'bidinfoSelectDeleteView',
    
    controller: 'bidinfoSelectDeleteController',                  
    viewModel: 'bidinfoSelectDeleteViewModel',
    
    listeners : {
    	boxready : 'onLoadData',
    	resize : 'setGridHeight'
    },
    
    title : '스케줄 확인 및 삭제',
    items : [{
    	xtype : 'grid',
    	height : 150, 
    	split : {
    		size : 1,
    		style : {
    			'backgroud' : 'gray'
    		}
    	},
		columnLines : true,
		viewConfig : {
			emptyText : '데이터가 없습니다.'
		},
		columns : [{
			xtype : 'rownumberer',
			text : '번호'
		},{
			text : '스레드 번호',
			flex : 1 ,
			dataIndex : 'threadName',
			hidden : true 
		},{
			text : '발주기관',
			flex : 2,
			dataIndex : 'instName'
		},{
			text : '키워드',
			flex : 1,
			dataIndex : 'keyword' 
		},{
			text : '검색타입', 
			flex : 1,
			dataIndex : 'searchType'  
			
		},{
			text : '모니터링 기한',
			flex : 1,
			dataIndex : 'endDate'
		
		},{
			text : '메일알람수신자',
			flex : 2,
			dataIndex : 'emails'
		},{
			xtype : 'widgetcolumn',
			text : '스케줄삭제',
       		widget : {
       			xtype : 'button',
           		name : 'deleteButton',
           		text : '삭제', 
           		handler : 'actionDelete'    		
       		}			
		}],
		bind : {
			store : '{scheduleList}'
		}
    	    	    
    }]
});

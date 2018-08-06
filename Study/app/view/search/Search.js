/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.search.Search', {
    extend: 'Ext.Panel',
    controller: 'search',
    //xtype: 'panel',
    //width: 200,
    //height: 400,
	items : [{
		xtype : 'datefield',
		anchor : '100%',
		fieldLabel : '시작일시',
		name : 'from_date',
	    format: 'Y/m/d',
	    //minValue : new Date() - 6month
	    value : new Date() //현재날짜에서 1달전
	},{
		xtype : 'datefield',
		anchor : '100%',
		fieldLabel : '종료일시',
		name : 'to_date',
		format: 'Y/m/d',
		value : new Date(), //현재날짜에서 1달전
		maxValue: new Date()
	},{
		xtype : 'textfield',
		name : 'intName',
		anchor : '100%',
		fieldLabel: '발주기관',
		allowBlank: 'true'
	},{
		xtype : 'textfield',
		name : 'keyword',
		anchor : '100%',
		fieldLabel: '키 워 드',
		allowBlank: 'true'
		
	},{
		xtype : 'button',
		name : 'searchButton',
		text : '검색'	,
		handler: 'search'
	},{
		xtype: 'splitter'
	},{
		xtype: 'grid',
		width : '70%',
		store:{
			type : 'bidinfo'
		},
		columns : [{
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
		}]
	}]
});

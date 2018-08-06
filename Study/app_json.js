/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 800,
		height : 800,
		layout : 'fit',
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'grid',
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
			}],
			store : {
				autoLoad : true, 
				fields : ['time', 'name', 'instNm', 'link'],
				proxy : {
					type : 'ajax',
					//url :'/data/bidinfo.json',
					url :'http://localhost:8080/tta/test/json.do',
					reader : {
						type : 'json',
						rootProperty : 'data'
					}
				}
			
			}
			
		}]
	})
})

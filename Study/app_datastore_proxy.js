/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'combo',
			displayField : 'key',
			valueField : 'value',
			store : {
				fields : ['key', 'value'],
				proxy : {
					type : 'ajax',
					url : '/data/combo.json',
					reader : {
						type : 'json',
						rootProperty : 'data'
							
					}
				}
			}			
		},{
			xtype : 'grid',
			columns : [{
				text : '컬럼1',
				dataIndex : 'c1'
			},{
				text : '컬럼2',
				dataIndex : 'c2'				
			},{
				text : '컬럼3',
				dataIndex : 'c3'				
			}],
			store : {
				autoLoad : true,
				fields : ['c1','c2','c3'],
				proxy : {
					type : 'ajax',
					url : '/data/grid.json',
					reader: {
						type : 'json',
						rootProperty : 'data'
					}
				}
			}
		}]
	})
})

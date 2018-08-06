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
			xtype : 'treepanel',
			store : {
				root: {
					text: 'Servers',
					expanded: false								
				},
				proxy : {
					type : 'ajax',
					url : '/data/tree.json',
					reader  : {
						type : 'json' 
					}					
				}
			}
		}]
	})
})

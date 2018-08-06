/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',

/*    controller: 'main',
    viewModel: 'main',
*/
    layout: 'border',
    items : [{
    	xtype: 'panel',
    	region: 'north',
    	title: 'Bench Mark Test',
    	header : false,
    	items : [{
    		xtype : 'toolbar',
    		items : [{
    			xtype : 'panel',
    			html : '<H2>Bench Mark Test</H2>'
    		},'->',{
    			xtype: 'button',
    			text : 'xxxx님',
    			menu : [
    				{text : '비밀번호변경'},
    				{text : '로그아웃'}    				
    			]    				
    		}]
    	}] 
    },{
    	xtype : 'panel',
    	region: 'west',
    	split : true,
    	width : 200,
    	border: true,
    	layout : 'fit',
    	items : [{
    		xtype: 'treelist',
    		listeners : {
    			selectionchange: function ( treelist, record){
    				var centerPage = treelist.up("viewport").down("component[region=center]");
    				centerPage.removeAll(true);
    				centerPage.add({
    					xtype: record.get("page")
    				})
    				
    			}
    			
    		},
    		store: {
    			root : {
    				expanded : true,
    				children : [{
    					text : '입찰공고모니터링',
    					iconCls: 'x-fa fa-eye',
    					page : 'bidinfoList',
    					leaf : true
    						
    				},{
    					text : '장비현황',
    					iconCls: 'x-fa fa-laptop',
    					page : 'machineinfoList',
    					leaf : true
    				}]
    			}
    			
    		}
    	}]
    		
    },{
    	xtype: 'panel',
    	region: 'center',
    	border : true,
    	flex: 1,
    	layout : 'fit',
    	items : {
    		xtype : 'panel',
    		html : '<H1> Main SCREEN </H1>'
    			
    	}
    		
    }]

});

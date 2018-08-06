Ext.define('Study.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    layout: 'center',
    closeable : false,
    maximized: true,
    autoShow : true,
    onEsc : function(){
    	return false;
    },
    
    items: [{
    	xtype: 'form',
    	layout: {
    		type: 'vbox',
    		align : 'center',
    		pack : 'center'
    	},
    	items :[{
    		xtype : 'textfield'
    	},{
    		xtype : 'textfield',
    		inputType : 'password'
    	},{
    		xtype : 'button',
    		width : 168,
    		text : 'Login',
    		handler : function(btn){
    			btn.up('window').close();
    			Ext.widget('main');
    		}
    	}]
    }]

});
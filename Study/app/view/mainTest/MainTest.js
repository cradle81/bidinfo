Ext.define('Study.view.mainTest.MainTest', {	        
    extend: 'Ext.tab.Panel',
   controller : 'mainTest', 

    requires: [
        'Ext.Button',
        'Ext.form.field.Text' 
    ],
    viewModel:{
    	data:{
    		userName: ''
    	}
    },

    items: [{
        title: 'Home',
        html: '<h1 class="main-banner">Hello World!</h1>',
        items: [{
        	xtype:'textfield',
        	label:'UserName',
        	bind:'{userName}',
            listeners: {   // <<== added
                action: 'onGo'
            }
        	
        },{
            xtype: 'button',
            handler: 'onGo',
            bind:{
            	disabled:'{!userName}',            	
            	text: '{userName ? "Save: " + userName : "Save"}'
            }
        }]
    }, {
        title: 'Notifications',
        xtype: 'notifications' 
    }, {
        title: 'Settings'
    }]
}); 
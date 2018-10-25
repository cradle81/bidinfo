/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Study.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Study',
  //  mainView : 'Study.view.search.Search',
    	
    stores: [
        // TODO: add global / shared stores here
        // 수정하였음 
        // 수정 추가  
        // 수정추가2
    ],
    
    launch: function () {
        // TODO - Launch the application
    	//Ext.widget("login");
    	Ext.widget("main");   
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

Ext.define('Study.MainTest',{
	extend: 'Ext.app.Application',
	mainView : 'Study.view.mainTest.MainTest'
});
 
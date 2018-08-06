/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.bidinfo.bidinfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.bidinfo',
    
/*    search : function(btn){
    	var store = new stroe
    } */

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    search : function(){
    	console.log("search");
    }
});

Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainTest',

    requires: [
               'Ext.window.MessageBox'
           ],


    onGo: function () {
        Ext.Msg.alert('Go', 'From main view controller');
    }
}); 
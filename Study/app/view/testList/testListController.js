Ext.define('Study.view.testList.testListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.testListController', 
    
    checkAll : function (obj,newValue, oldValue, eOpts){
		var checkgroup = obj.nextSibling("checkboxgroup");
		var collection = checkgroup.items;
		if(obj.getValue() == true)
		{
			collection.each(function(item){
				item.setValue(true);
			});
		}
		else{
			collection.each(function(item){
				item.setValue(false);
			});
		}
    }
    
})
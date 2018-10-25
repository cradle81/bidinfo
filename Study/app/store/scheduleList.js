Ext.define('Study.store.scheduleList', {
    extend: 'Ext.data.BufferedStore', //페이징 처리때문에 버퍼스토어 사용하지 말자 //reload와 연관이 있는듯..
	//extend: 'Ext.data.Store',
    alias: 'store.scheduleList',
    storeId : 'scheduleList', 
    autoLoad : false,
    

    fields: [
             'threadName', 'instName', 'keyword','searchType','endDate', 'emails'
     ], 
     proxy : {
		 type : 'ajax',
		 actionMethods :{ 
			 read : 'POST' 
		 },
		 //url : '/tta/test/json.do',
		 url : Ext.manifest.api_url+'/tta/bidinfo/getRegScheduleList.do',		 
		 reader: {
			 type : 'json', 
			 rootProperty : 'data'
		 }
	 }
});

Ext.define('Study.store.BidInfoList', {
    extend: 'Ext.data.BufferedStore', //페이징 처리때문에 버퍼스토어 사용하지 말자 //reload와 연관이 있는듯..
	//extend: 'Ext.data.Store',
    alias: 'store.bidinfoList',
    storeId : 'bidinfoList',
    autoLoad : false,
    

    
    //model : 'Study.model.BidInfo', 
    
//    viewModel: 'bidinfoList', 

    fields: [
        'date', 'name', 'intName','link'
    ],

 /*   data: { items: [
        { time: '2017/12/12' ,name: 'Jean Luc', instNm: "jeanluc.picard@enterprise.com", link: "555-111-1111" },
        { time: '2017/12/12', name: 'Worf',     instNm: "worf.moghsson@enterprise.com",  link: "555-222-2222" },
        { time: '2017/12/12', name: 'Deanna',   instNm: "deanna.troi@enterprise.com",    link: "555-333-3333" },
        { time: '2017/12/12', name: 'Data',     instNm: "mr.data@enterprise.com",        link: "555-444-4444" }
    ]},
 
    proxy: { 
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
//	proxy : {
//		type : 'ajax',
//		//url :'/data/bidinfo.json',
//		url :'http://localhost:8080/tta/test/json.do',
//		reader : {
//			type : 'json',
//			rootProperty : 'data'
//		}
//	}  
     
// 이 설정을 주면 reload시 다시 호출한다. 
     proxy : {
		 type : 'ajax',
		 actionMethods :{
			 read : 'GET'
		 },
		 //url : '/tta/test/json.do',
		 url : Ext.manifest.api_url+'/tta/bidinfo/bidinfoList.do',		 
		 reader: { 
			 type : 'json',
			 rootProperty : 'data',
			 totalProperty : 'tatalCount'
		 }
//		 bind : {
//			 extraParams : {
//				 instNm : 'instNm'
//			 }
////		 }
//		 extraParams : {
//			 instNm : '대법원',
//			 keyword : '{keyword}'
//		 }
	 }
});

Ext.define('Study.store.BidInfo', {
    extend: 'Ext.data.Store',

    alias: 'store.bidinfo',
    
   // model : 'Study.model.BidInfo',

    fields: [
        'date', 'name', 'intName','link'
    ],

    data: { items: [
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
    }
//	proxy : {
//		type : 'ajax',
//		//url :'/data/bidinfo.json',
//		url :'http://localhost:8080/tta/test/json.do',
//		reader : {
//			type : 'json',
//			rootProperty : 'data'
//		}
//	}    
});

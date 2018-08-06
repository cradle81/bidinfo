/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			plugins : 'cellediting',
			columns : [{
				text: '사원번호',
				dataIndex : 'empno',
				editor : {
					xtype : 'textfield'
				}
			},{
				text:'사원이름',
				dataIndex : 'ename',
				editor : {
					xtype : 'textfield'
				}
			},{
				text:'직업',
				dataIndex : 'job',
				editor : {
					xtype : 'textfield'
				}
			},{
				text:'봉급',
				dataIndex : 'sal',
				editor : {
					xtype : 'textfield'
				}
			}],
			store : {
				autoLoad : true,
				field : [ 'empno' , 'ename', 'job', 'sal'],
				proxy : {
					type : 'ajax',
					api : {
						create : "http://localhost:8080/tta/emp/create.do",
						read : "http://localhost:8080/tta/emp/select.do",
						update: "http://localhost:8080/tta/emp/update.do",
						destory : "http://localhost:8080/tta/emp/destory.do"
					},
					reader : {
						type : 'json',
						rootProperty : 'data',
						totalProperty : 'total'
					},
					writer : {
						type : 'json',
						rootProperty : 'data',
						writeAllFields: true,
						encode : true
					}
				}
			},
			tbar : [{
				xtype : 'button',
				text : '등록',
				handler : function(btn){
					//1. store 찾기
					// ExtJS - up (컴포넌트  or itemID)				
					var store = btn.up("grid").getStore();
					var newRec = {
							empno : '',
							ename : '',
							job : '',
							sal : ''
					}
					store.add(newRec);
				}
				
			},{
				xtype : 'button',
				text : '삭제'
				
			},{
				xtype : 'button',
				text : '적용'
				
			}],
			bbar : {
				xtype : 'pagingtoolbar',
				displayInfo: true
			}
		
	   }]

	})
})
		
	//	store : 
			
	/*		
			
		tbar : [{
			xtype : 'button',
			text : '등록',
			handler : function(btn){
				//1. store 찾기
				// ExtJS - up (컴포넌트  or itemID)				
			//	btn.up("button"));
			}
			
		},{
			xtype : 'button',
			text : '삭제'
			
		},{
			xtype : 'button',
			text : '적용'
			
		}],
		bbar : {
			xtype : 'pagingtoolbar',
			displayInfo: true
		}
	*/
	

Ext.define('Study.view.selfTest.selfTest', {
	extend: 'Ext.panel.Panel',	
	xtype : 'selfTest',
	title : '교육체게 자가진단표',	
    controller: 'selfTestController',

    width: 650,


    items: [{
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 500,
        legend: {
            docked: 'right'
        },
        store: {
            type: 'selfTestResult'
        },
        insetPadding: 20,
        interactions: ['rotate'],
        captions: {
            title: '자가점검 분석표',
            credits: {
                text: '한국정보통신기술협회 소프트웨어연구소 품질성능편가센서 \n' +
                    'by JungwonKim,LeeSangMin',
                align: 'left'
            }
        },
        axes: [{
            type: 'numeric',
            position: 'radial',
            grid: true,
            majorTickSteps: 4,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'angular',
            grid: true
        }],
        series: [{
            type: 'radar',
            title: '현재',
            angleField: 'name',
            radiusField: 'pr',
            style: {
                opacity: 0.40,
                lineWidth: 3
            },
            marker: true,
            highlightCfg: {
                radius: 6,
                fillStyle: 'yellow'
            }
        }, {
            type: 'radar',
            title: '권고',
            angleField: 'name',
            radiusField: 'rc',
            style: {
                opacity: 0.40,
                lineWidth: 3
            },
            marker: true,
            highlightCfg: {
                radius: 6,
                fillStyle: 'yellow'
            }
        }, {
            type: 'radar',
            title: '미래',
            angleField: 'name',
            radiusField: 'ft',
            style: {
                opacity: 0.40,
                lineWidth: 3
            },
            marker: true,
            highlightCfg: {
                radius: 6,
                fillStyle: 'yellow'
            }
        }]
    }]

});
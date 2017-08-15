/**
 *description:数据统计2
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTpl = require('../../tpl/backEndData/temp3');
	var oTip = require('../../widget/dom/tip');
	var tab = require('../../widget/dom/tab');
	require('../../widget/highcharts/highcharts');
	
	var BackEndData2 = R.Class.create(R.until, {

		initialize: function() {	

			this.pageInfo = this.parse();
			this.type = this.pageInfo.dataType;
			this.oWrap = $('[data-wrap]');

			this.showPage();

			var oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

			oTab.init();

		},
		showPage: function() {

			var _this = this;

			this.reqUrl = R.interfaces.data3;
			this.reqParam = this.pageInfo;
			this.req(function(data){
				console.log(data);
				_this.render(_this.oWrap, oTpl, data.data);
				_this.showPicForm(data);	

			}, function(data){

				oTip.say(data.msg);

			});

		},
		showPicForm: function(data) {

			var info = data.data;
			
			$('[pic-wrap]').highcharts({
				credits: {
                    enabled: false
                },
		        chart: {
		            type: 'column'
		        },
		        title: {
		            text: ''
		        },
		        xAxis: {
		            categories: info.dt
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: '数量'
		            },
		            stackLabels: {
		                enabled: true,
		                style: {
		                    fontWeight: 'bold',
		                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
		                }
		            }
		        },
		        legend: {
		            align: 'right',
		            x: 1,
		            verticalAlign: 'top',
		            y: 1,
		            floating: true,
		            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
		            borderColor: '#CCC',
		            borderWidth: 1,
		            shadow: false
		        },
		        tooltip: {
		            formatter: function() {
		                return '<b>'+ this.x +'</b><br>'+
		                    this.series.name +': '+ this.y +'<br>'+
		                    'Total: '+ this.point.stackTotal;
		            }
		        },
		        plotOptions: {
		            column: {
		                stacking: 'normal',
		                dataLabels: {
		                    enabled: true,
		                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
		                }
		            }
		        },
		        series: info.series
		    });

		}

	});

	var oBackEndData2 = new BackEndData2();
	
});
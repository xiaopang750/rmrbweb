/**
 *description:数据统计6
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplJoin = require('../../tpl/backEndData/temp13');
	var oTplView = require('../../tpl/backEndData/temp14');
	var oTplArg = require('../../tpl/backEndData/temp15');
	var oTip = require('../../widget/dom/tip');
	var tab = require('../../widget/dom/tab');
	require('../../widget/highcharts/highcharts');
	
	var BackEndData6 = R.Class.create(R.until, {

		initialize: function() {	

			var _this = this;

			this.oJoinWrap = $('[data-wrap-join]');
			this.oViewWrap = $('[data-wrap-view]'); 
			this.oArgWrap = $('[data-wrap-arg]');
			this.aPicTable = $('[pic-table]');
			this.count = 0;
			this.max = 3;
			

			this.showPage(this.oJoinWrap, oTplJoin, R.interfaces.data13, function(data){
				_this.data0 = data.data;
				_this.showPicForm($('[pic-wrap-join]'), data.data.dt, data.data.series);
			});

			this.showPage(this.oViewWrap, oTplView, R.interfaces.data14, function(data){
				_this.data1 = data.data;
				//_this.showPicForm($('[pic-wrap-view]'), data.data.dt, data.data.series);
			});

			this.showPage(this.oArgWrap, oTplArg, R.interfaces.data15, function(data){
				_this.data2 = data.data;
				//_this.showPicForm($('[pic-wrap-arg]'), data.data.dt, data.data.series);
			});

			this.oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

			this.oTab.onclick = function(oThis, target, index) {

				_this.fixShowBug(oThis, index);

			};

		},
		fixShowBug: function(oThis, index) {

			//图表隐藏的时候不能自适应宽度，所以要在显示之后显示图表;

			var isShowed;

			isHasShow = oThis.attr('isShowed');

			if(!isHasShow) {

				var data = this['data' + index];

				if(data) {

					this.showPicForm(this.aPicTable.eq(index), data.dt, data.series);

					oThis.attr('isShowed', 'true');	
				}

			}

		},
		showPage: function(oWrap, oTpl, url, cb) {

			var _this = this;

			this.reqUrl = url;
			this.req(function(data){

				_this.render(oWrap, oTpl, data.data);
				_this.count ++;

				if(_this.count == _this.max) {

					_this.oTab.init();

				}
				cb && cb(data);
			}, function(data){

				oTip.say(data.msg);

			});

		},
		showPicForm: function(obj, xdata, allData) {
			
			obj.highcharts({
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
		            categories: xdata
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
		        series: allData
		    });

		}

	});

	var oBackEndData6 = new BackEndData6();
	
});
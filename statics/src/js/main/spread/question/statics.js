/**
 *description:问卷题目统计
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	require('../../../widget/highcharts/highcharts');
	var rnd = require('../../../lib/until/rnd');
	var select = require('../../../widget/dom/select');
	var colors = Highcharts.getOptions().colors;
	
	var statics = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.maxColor = 8;
			this.oWrap = $('[chart-wrap]');
			this.showSelect();


		},
		showSelect: function() {

			var _this = this;

			var oSelect = new select({
				ele: $('[select]'),
				url: R.interfaces.get_question,
				param: {"question.pkObject": this.pageInfo.pkObject},
				changeData: function(data) {

					return data.data;

				},
				tpl: '{{each Questions}}<option aid="{{$value.pkQuestion}}">{{$value.questionname}}</option>{{/each}}',
				onReady: function(oSelect, nowOption, index){

					var nowId = nowOption.attr('aid');

					_this.getCount(nowId);

				},
				onChange: function(oSelect, nowOption, index) {

					var nowId = nowOption.attr('aid');

					_this.getCount(nowId);

				}
			});

		},
		getCount: function(nowId) {

			var _this = this;
			var isNone;

			this.reqData(nowId, function(data){

				var data = _this.concatData(data);

				isNone = data.isNone;

				if(!isNone) {

					_this.showChart(data.title, data.aOption, data.data);	

				} else {

					_this.oWrap.html('<div class="tc font-14">该题目暂无任何统计</div>');

				}

			});

		},
		reqData: function(id, cb) {

			this.reqUrl = R.interfaces.question_count;
			this.reqParam = {
				pkQuestion: id
			};
			this.req(function(data){
				cb && cb(data);
			});

		},
		concatData: function(data) {

			//组合数据

			var info = data.data;
			var arrContent = [];
			var arrNum = [];
			var json = {};
			var i, num, count, result;
			var title = info.question.questionname;
			
			num = info.options.length;
			count = 0;	
			result = false;
			for (i=0; i<num; i++) {

				//num
				json = {};
				json.y = parseInt( info.options[i].reserve1 );
				json.color = colors[ i%this.maxColor ];
				arrNum.push(json);

				if(json.y == 0) {
					//全部为0提示false
					count ++ ;
				}

				//option-name
				arrContent.push( info.options[i].content );

			}

			if(count == num) {
				result = true;
			} 

			return {
				title: title,
				aOption: arrContent,
				data: arrNum,
				isNone: result
			}



		},
		showChart: function(title, aOption, data) {

		    var chart = this.oWrap.highcharts({
			        chart: {
			            type: 'bar',
			            backgroundColor: 'rgba(0,0,0,0)'
			        },
			        credits: {
	                    enabled: false
	                },
			        title: {
			            text: title
			        },
			        subtitle: {
			            text: ''
			        },
			        xAxis: {
			            categories: aOption
			        },
			        yAxis: {
			            title: {
			                text: ''
			            }
			        },
			        tooltip: {
			            formatter: function() {
			                var point = this.point,
			                    s = this.x +':<b>'+ this.y + "人选择";
			                return s;
			            }
			        },
			        series: [{
			            data: data,
			            color: 'white'
			        }],
			        exporting: {
			            enabled: false
			        },
			        legend: {
				        enabled: false
				    }
			    }).highcharts(); 
			    
			}

	});

	var oStatics = new statics();
	
});
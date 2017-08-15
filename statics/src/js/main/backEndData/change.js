/**
 *description:数据分析入口
 *author:fanwei
 *date:2014/09/25
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var select = require('../../widget/dom/select');
	var oTip = require('../../widget/dom/tip');
	
	var dataEntry = R.Class.create(R.until, {

		initialize: function() {
		
			this.oActInput = $('[act-input]');
			this.pageInfo = this.parse();
			this.showMemberSelect();
			this.showAcititySelect();
			this.events();

		},
		changeParamToUrl: function(param) {

			var str;
			var arr;

			arr = [];

			for(var i in param) {

				if(param[i]) {
					arr.push( i + '=' + param[i] );	
				}
			}

			str = arr.join('&');

			str = str ? '&' + str : '';

			return str;

		},
		events: function() {

			var _this = this;
			var otherParam;

			otherParam = '';

			var nowParam = this.changeParamToUrl( this.pageInfo );

			$('[index]').on('click', function(){

				var index = $(this).attr('index');

				if(index == '017') {
					//级别
					if(!_this.levelId) {
						oTip.say('请选择会员级别');
						return;
					} else {
						otherParam = '&pkLevel=' + _this.levelId;
					}

				} else if(index == '005') {

					if(!_this.activityid) {
						oTip.say('请先选择活动');
						return;
					} else {
						otherParam = '&pkActivity=' + _this.activityid;
					}

				}
				
				window.location = '../ds/toDataAnalysis?dataType=' + index + nowParam + otherParam;

			});

			this.oActInput.on('keyup', function(){

				_this.searchAcitivity($(this));

			});

		},
		searchAcitivity: function(oThis) {

			var _this = this;
			var str = oThis.val();

			if(str) {

				this.reqUrl = R.interfaces.searchActivity;
				this.reqParam = {
					pkCorp: this.pageInfo.pkCorp,
					topic: str
				};
				this.req(function(data){
					console.log(data);

					_this.oAcitivitySelect.render(data.data);

				});

			}

		},
		showMemberSelect: function() {

			var _this = this;

			var oSelect = new select({
				ele: $('[level-select]'),
				url: R.interfaces.find_member_level,
				param: {
					pkCorp: this.pageInfo.pkCorp
				},
				changeData: function(data) {
					return data.data;
				},
				tpl: '{{each mLevels}}<option aid="{{$value.pkMemberlevel}}">{{$value.levelname}}</option>{{/each}}',
				onChange: function(oThis, option) {

					var nowId = option.attr('aid');
					_this.levelId = nowId; //级别id
					
				}
			});

		},
		showAcititySelect: function() {

			var _this = this;

			this.oAcitivitySelect = new select({
				ele: $('[act-select]'),
				tpl: '{{each activities}}<option aid="{{$value.pkActivity}}">{{$value.activitytopic}}</option>{{/each}}',
				onChange: function(oThis, option) {

					var nowId = option.attr('aid');
					_this.activityid = nowId; //活动id
					
				}
			});

		}

	});

	var oDataEntry = new dataEntry();
	
});
/**
 *description:数据统计7
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplLevel = require('../../tpl/backEndData/temp16');
	var oTplActType = require('../../tpl/backEndData/temp17');
	var oTip = require('../../widget/dom/tip');
	var tab = require('../../widget/dom/tab');
	var select = require('../../widget/dom/select');
	
	var BackEndData7 = R.Class.create(R.until, {

		initialize: function() {	

			this.oLevelWrap = $('[data-wrap-level]');
			this.oActWrap = $('[data-wrap-act]');
			this.oLevelSelect =  $('[level-select]');

			this.oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

			this.showPage(this.oLevelWrap, oTplLevel, R.interfaces.data16, '', function(data){

				var oTabInner = new tab({
					oWrap: $('[tab-inner-wrap]'),
					tabHeadName: '[widget-tab-head-inner]',
					tabContentName: '[widget-tab-content-inner]'
				});

				oTabInner.init();
			});
			this.showLevelSelect();
			this.oTab.init();

		},
		events: function() {



		},
		showPage: function(oWrap, oTpl, url, param, cb) {

			var _this = this;

			this.reqUrl = url;
			this.reqParam = param;
			this.req(function(data){
				console.log(data);
				_this.render(oWrap, oTpl, data.data);
				cb && cb(data);

			}, function(data){

				oTip.say(data.msg);

			});

		},
		showLevelSelect: function() {

			var _this = this;

			var oSelect = new select({
				ele: this.oLevelSelect,
				url: R.interfaces.find_member_level,
				changeData: function(data) {
					return data.data;
				},
				tpl: '{{each mLevels}}<option aid="{{$value.pkMemberlevel}}">{{$value.levelname}}</option>{{/each}}',
				onChange: function(oThis, option) {

					var nowId = option.attr('aid');
					_this.levelId = nowId; //级别id
					
					_this.showPage(_this.oActWrap, oTplActType, R.interfaces.data17, {pkLevel: _this.levelId}, function(){


						var oTabInnerLevel = new tab({
							oWrap: $('[tab-inner-wrap-level]'),
							tabHeadName: '[widget-tab-head-inner-level]',
							tabContentName: '[widget-tab-content-inner-level]'
						});

						oTabInnerLevel.init();

					});
				}
			});

		}

	});

	var oBackEndData7 = new BackEndData7();
	
});
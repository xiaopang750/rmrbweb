/**
 *description:数据统计5
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTpl = require('../../tpl/backEndData/temp2');
	var oTip = require('../../widget/dom/tip');
	var tab = require('../../widget/dom/tab');
	
	var BackEndData5 = R.Class.create(R.until, {

		initialize: function() {	

			var oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

			this.pageInfo = this.parse();
			this.type = this.pageInfo.dataType;
			this.oWrap = $('[data-wrap]');

			this.showPage(function(data){

				var oTabInner = new tab({
					oWrap: $('[tab-inner-wrap]'),
					tabHeadName: '[widget-tab-head-inner]',
					tabContentName: '[widget-tab-content-inner]'
				});

				oTabInner.init();

			});

			

			oTab.init();
	
		},
		showPage: function(cb) {

			var _this = this;

			this.reqUrl = R.interfaces.data11;
			this.reqParam = this.pageInfo;
			this.req(function(data){
				
				_this.render(_this.oWrap, oTpl, data.data);	

				cb && cb(data);

			}, function(data){

				oTip.say(data.msg);

			});

		}

	});

	var oBackEndData5 = new BackEndData5();
	
});
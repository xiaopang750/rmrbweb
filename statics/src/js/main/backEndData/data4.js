/**
 *description:数据统计4
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTpl = require('../../tpl/backEndData/temp9');
	var oTip = require('../../widget/dom/tip');
	var tab = require('../../widget/dom/tab');
	
	var BackEndData4 = R.Class.create(R.until, {

		initialize: function() {	

			this.pageInfo = this.parse();
			this.type = this.pageInfo.dataType;
			this.oWrap = $('[data-wrap]');

			this.showPage(function(){

				var oTabInner = new tab({
					oWrap: $('[tab-inner-wrap]'),
					tabHeadName: '[widget-tab-head-inner]',
					tabContentName: '[widget-tab-content-inner]'
				});

				oTabInner.init();
				
			});

			var oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

			oTab.init();
	
		},
		showPage: function(cb) {

			var _this = this;

			this.reqUrl = R.interfaces.data9;
			this.reqParam = this.pageInfo;
			this.req(function(data){
				console.log(data);
				_this.render(_this.oWrap, oTpl, data.data);	

				cb && cb(data);

			}, function(data){

				oTip.say(data.msg);

			});

		}

	});

	var oBackEndData4 = new BackEndData4();
	
});
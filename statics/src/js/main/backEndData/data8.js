/**
 *description:数据统计8
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplScore = require('../../tpl/backEndData/temp18');
	var oTplct = require('../../tpl/backEndData/temp19');
	var oTip = require('../../widget/dom/tip');
	var tab = require('../../widget/dom/tab');
	
	var BackEndData8 = R.Class.create(R.until, {

		initialize: function() {	

			this.oScoreWrap = $('[data-wrap-score]');
			this.oActWrap = $('[data-wrap-act]'); 
			this.count = 0;
			this.max = 2;

			this.showPage(this.oScoreWrap, oTplScore, R.interfaces.data18, function(){

				var oTabInner = new tab({
					oWrap: $('[tab-inner-wrap]'),
					tabHeadName: '[widget-tab-head-inner]',
					tabContentName: '[widget-tab-content-inner]'
				});

				oTabInner.init();
				
			});
			this.showPage(this.oActWrap, oTplct, R.interfaces.data19);

			this.oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

		},
		showPage: function(oWrap, oTpl, url, cb) {

			var _this = this;

			this.reqUrl = url;
			this.req(function(data){
				console.log(data);
				_this.render(oWrap, oTpl, data.data);
				_this.count ++;

				if(_this.count == _this.max) {

					_this.oTab.init();

				}

				cb && cb(data);

			}, function(data){

				oTip.say(data.msg);

			});

		}

	});

	var oBackEndData8 = new BackEndData8();
	
});
/**
 *description:列表公共模块
 *author:fanwei
 *date:2014/07/31
 */
define(function(require, exports, module){

	var global = require("../../../driver/global");
	var fenye = require('../../../widget/dom/fenye');
	var oSetBox = require('../../../box/spread/set_box');
	var oTip = require('../../../widget/dom/tip');
	var oSend = require('./send');
	var remove = require("../../../driver/remove");
	var oTplStatus = require("../../../tpl/spread/chose_status");
	var oTplTime = require("../../../tpl/spread/chose_time");
	var choseStatus = require("./activityStatus");
	var oChoseStatus = new choseStatus({
		oTpl: oTplStatus,
		oTplTime: oTplTime
	});
	
	var list = R.Class.create(R.until, {

		initialize: function(opts) {

			opts = opts || {};
			this.setModel = opts.setModel || null;
			this.oTplList = require('../../../tpl/spread/gift/gift_list/list');
			this.activityType = '007';
			this.pageSize = 5;
			this.getDataUrl = R.interfaces.get_gift_list;
			this.otherParam = {};
			this.isFenye = true;
			this.start();
				
		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: this.removeUrl,
				onclick: function(oThis) {

					var rid = oThis.attr('rid');

					this.param = {
						'pkActivity': rid
					};
				},
				onsuc: function(oThis) {

					_this.showPage();

				}
			});

		},
		start: function() {

			this.removeUrl = R.interfaces.post_remove_gift_list;
			this.showPage();
			this.initRemove();
			oChoseStatus.showPage();
			this.events();

		},
		events: function() {

			var _this = this;

			oChoseStatus.onselect = function(data) {

				_this.defaultParam['activityStatusJson'] = data;
				_this.oPage.refresh(_this.defaultParam);

			};

			oChoseStatus.onChoseTime = function(data) {

				_this.defaultParam['isOverdue'] = data;
				_this.oPage.refresh(_this.defaultParam);

			};


		},
		showPage: function() {

			var _this = this;
			this.defaultParam = {pageSize: this.pageSize, activityType:this.activityType};

			this.oWrap = $('[data-ele = data-wrap]');

			for (var i in this.otherParam) {

				this.defaultParam[i] = this.otherParam[i];
			}

			if(this.isFenye) {

				this.oPage = new fenye(this.getDataUrl, this.oTplList, this.defaultParam,'', function(data){
					
					//_this.startModify();

				}, '', '', function(data){

					_this.setModel && _this.setModel(data);

					return data;

				});
	

			} else {

				this.reqUrl = this.getDataUrl;
				this.reqParam = this.defaultParam;
				this.req(function(data){

					_this.render(_this.oWrap, _this.oTplList, data.data);

				});

			}

		}

	});

	//var oGiftList = new giftList();

	module.exports = list;
	
});
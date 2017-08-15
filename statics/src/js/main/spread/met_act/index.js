/**
 *description:会议邀约-活动首页
 *author:fanwei
 *date:2014/07/27
 */
define(function(require, exports, module){

	var global = require("../../../driver/global");
	var fenye = require('../../../widget/dom/fenye');
	var oTpl = require('../../../tpl/spread/met_act/list');
	var oSetBox = require('../../../box/spread/set_box');
	var oQcodeBox = require('../../../box/spread/qcode_box');
	var oTip = require('../../../widget/dom/tip');
	var remove = require("../../../driver/remove");
	var oTplStatus = require("../../../tpl/spread/chose_status");
	var oTplTime = require("../../../tpl/spread/chose_time");
	var choseStatus = require("../base/activityStatus");
	var oSend = require('../base/send');
	var oChoseStatus = new choseStatus({
		oTpl: oTplStatus,
		oTplTime: oTplTime
	});

	
	var pageIndex = R.Class.create(R.until, {

		initialize: function() {

			this.oSelectWrap = $('[select-area]');
			this.defaultParam = {pkCorp: 20, pageSize: 8};
	
			this.showPage();
			this.initRemove();
			this.showStatus();
			oChoseStatus.showPage();
			this.events();

		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.post_remove_gift_list,
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
		events: function() {

			var _this = this;


			//状态筛选
			this.oSelectWrap.on('click', '[status]', function(){

				var status = $(this).attr('status');

				_this.defaultParam['status'] = status;

				_this.oPage.refresh( _this.defaultParam );

			});

			oChoseStatus.onselect = function(data) {

				_this.defaultParam['activityStatusJson'] = data;
				_this.oPage.refresh( _this.defaultParam );

			};

			oChoseStatus.onChoseTime = function(data) {

				_this.defaultParam['isOverdue'] = data;
				_this.oPage.refresh(_this.defaultParam);

			};


		},
		showCode: function(obj) {

			/*obj.qrcode({
				text: this.CODE_URL,
				width: 72,
				height: 72
			});*/
			
		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.get_met_list, oTpl, this.defaultParam,'', function(data){
					console.log(data);
				var aCode = $('[qcode-btn]');

				_this.showCode(aCode);

				//_this.startModify();

			});

		},
		showStatus: function() {

			var _this = this;

			/*this.reqUrl = R.interfaces.xxx;
			this.req(function(data){

				_this.render(_this.oSelectWrap, _this.oTplStatus, data.data);

			});*/

			_this.render(_this.oSelectWrap, oTplStatus, {});

		}

	});

	var oPageIndex = new pageIndex();
	
});
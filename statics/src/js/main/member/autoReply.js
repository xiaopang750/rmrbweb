/**
 *description:智能答复列表
 *author:fanwei
 *date:2014/08/17
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTip = require('../../widget/dom/tip');
	var fenye = require("../../widget/dom/fenye");
	var oTplList = require('../../tpl/member/autoReply_list');
	var remove = require("../../driver/remove");

	
	var reply = R.Class.create(R.until, {

		initialize: function() {
			
			this.defaultParam = {
				pageSize: 8
			};

			this.showPage();
			this.initRemove();
		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.del_reply_list,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'pkReply': aid
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.defaultParam);

				}
			});

		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.get_reply_list, oTplList, this.defaultParam,'', function(data){
				console.log(data);

			});

		}
	});

	var oReply = new reply();
	
});
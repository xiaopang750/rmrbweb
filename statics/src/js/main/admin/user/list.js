/**
 *description:后台配置管理-用户管理
 *author:fanwei
 *date:2014/08/15
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require("../../../widget/dom/fenye");
	var oTplList = require("../../../tpl/admin/user/list");
	var oTip = require("../../../widget/dom/tip");
	var remove = require("../../../driver/remove");

	var user = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oWrap = $('[list-wrap]');
			this.oAdd = $('[add]');
			this.defaultParam = {
				pageSize: 8,
				pkCorp: this.pageInfo.cid
			};

			
			this.showPage();
			this.events();
			this.initRemove();

		},
		initRemove: function() {

			var oRemove = new remove({
				removeUrl: R.interfaces.delete_member,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'userid': aid
					};
				},
				onsuc: function(oThis) {

					oThis.parents('[list]').remove();

				}
			});

		},
		events: function() {

			var _this,
				result;

			_this = this;	

			//添加
			//$('[add]').attr('href', '../activity/test?changeUrl=../statics/src/views/main/admin/user/add.jsp&type=add&cid=' + this.pageInfo.cid);

			//编辑
			$(document).on('click', '[edit]', function(){	

				_this.showLink($(this));

				return false;

			});

		},
		showLink: function(oThis) {

			var orgHref = oThis.attr('href');
			var newHref = orgHref + '&cid=' + this.pageInfo.cid;

			window.location = newHref;

		},
		showPage: function() {

			var _this = this;

	/*		this.reqUrl = R.interfaces.get_user_list;

			if(this.pageInfo.cid) {
				this.reqParam = {
					pkCorp: this.pageInfo.cid
				};
			}
			
			this.req(function(data){
				
				_this.render(_this.oWrap, oTplList, data.data);

			});*/


			var _this = this;

			this.oPage = new fenye(R.interfaces.get_user_list, oTplList, this.defaultParam);

		}

	});

	var oUser = new user();
	
});
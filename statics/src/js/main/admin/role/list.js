/**
 *description:后台配置-角色管理
 *author:fanwei
 *date:2014/08/06
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require("../../../tpl/admin/role/list");
	var oTip = require("../../../widget/dom/tip");
	var remove = require("../../../driver/remove");
	
	var roleList = R.Class.create(R.until, {

		initialize: function() {

			this.pageInfo = this.parse();
			this.oWrap = $('[list-wrap]');
			this.showPage();
			this.events();
			this.initRemove();	
			
		},
		initRemove: function() {

			var oRemove = new remove({
				removeUrl: R.interfaces.delete_role,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'pkRole': aid
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

			//编辑
			$(document).on('click', '[edit]', function(){	

				_this.showLink($(this));

				return false;

			});


			//角色
			$(document).on('click', '[role]', function(){	

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

			this.reqUrl = R.interfaces.get_role_list;

			if(this.pageInfo.cid) {
				
				this.reqParam = {
					pkCorp: this.pageInfo.cid
				};
			}
			
			this.req(function(data){
				
				_this.render(_this.oWrap, oTplList, data.data);

			});

		}

	});

	var oRoleList = new roleList();
	
});
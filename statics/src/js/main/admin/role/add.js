/**
 *description:后台配置管理-用户管理
 *author:fanwei
 *date:2014/08/06
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oForm = require("../../../tpl/admin/role/form");
	var oTip = require("../../../widget/dom/tip");
	
	var roleAdd = R.Class.create(R.until, {

		initialize: function() {
			
			var _this = this;
			this.pageInfo = this.parse();
			this.oWrap = $('[data-wrap]');
			this.renderPage(function(id){
				
				_this.submission(id);

			});
		},
		renderPage: function(cb) {

			var type,
				id,
				_this;

			type = this.pageInfo.type;
			id = this.pageInfo.aid;
			_this = this;
			
			if(type == 'add') {

				this.render(this.oWrap, oForm, {});

				cb && cb('');

			} else {

				this.reqUrl = R.interfaces.get_roleFormList;
				this.reqParam = {pkRole: id};
				this.req(function(data){

					_this.render(_this.oWrap, oForm, data.data.role);

					cb && cb(id);

				});

			}	

		},
		submission: function(id) {

			var _this = this;
			var url;

			url = id ? R.interfaces.post_roleInfoEdit : R.interfaces.post_roleInfoAdd;	

			var oModifyRole = new ajaxForm({

				subUrl: url,
				fnSumbit: function( data ) {

					if(id) {
						data['role.pkRole'] = id;
					}

					if(_this.pageInfo.cid) {
						data['role.pkCorp'] = _this.pageInfo.cid;
					}

					return data;
				},
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['roleManage'] + '&cid=' + _this.pageInfo.cid;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oModifyRole.upload();

		}

	});

	var oRoleAdd = new roleAdd();
	
});
/**
 *description:添加会员级别
 *author:fanwei
 *date:2014/08/23
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplForm = require('../../tpl/way/level/form');
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');
	
	var addForm = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oWrap = $('[script-bound = form_check]');
			this.showPage();

		},
		showPage: function() {

			var type = this.pageInfo.type;
			var url,
				_this;

			_this = this;	

			if(type == 'add') {

				url = R.interfaces.member_level_add;

				this.render(this.oWrap, oTplForm, {});

				this.submissition(url);

			}else {

				url = R.interfaces.member_level_edit;
				this.reqUrl = R.interfaces.member_level_data;
				this.reqParam = {
					pkMemberlevel: this.pageInfo.aid
				};
				this.req(function(data){
					
					_this.render(_this.oWrap, oTplForm, data.data.mLevel);
					_this.submissition(url, 'edit');

				});
			}

		},
		submissition: function(url,type) {	

			var _this = this;

			var oAddBind = new ajaxForm({

				subUrl: url,
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['memberLevel'];

					//window.history.back();

				},
				fnSumbit: function(data) {

					if(type == 'edit') {
						data['level.pkMemberlevel'] = _this.pageInfo.aid;
					}
					
					return data;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oAddBind.upload();

		}

	});

	var oAddForm = new addForm();
	
});
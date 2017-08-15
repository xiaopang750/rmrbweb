/**
 *description:知识库编辑添加
 *author:fanwei
 *date:2014/09/22
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplForm = require('../../../tpl/admin/knowlege/form');
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oTip = require('../../../widget/dom/tip');

	var knowlege = R.Class.create(R.until, {

		initialize: function() {
			
			this.oWrap = $('[data-ele = data-wrap]');
			this.pageInfo = this.parse();
			this.judge();

		},
		judge: function() {

			this.kid = this.pageInfo.kid;

			if(this.kid) {

				this.edit();
				this.subUrl = R.interfaces.edit_konw;

			} else {

				this.add();
				this.subUrl = R.interfaces.add_know;
				this.submit();

			}

		},
		add: function() {

			this.render(this.oWrap, oTplForm, {});

		},
		edit: function() {

			var _this = this;

			this.reqUrl = R.interfaces.find_know;
			this.reqParam = {
				"rmrbBdKnowledgestorge.pkKnowledgestorge": this.kid
			};
			this.req(function(data){

				_this.render(_this.oWrap, oTplForm, data.data.knowledgestorge);
				_this.submit();

			});

		},
		submit: function() {	

			var _this = this;

			var oForm = new ajaxForm({

				subUrl: this.subUrl,
				fnSumbit: function( data ) {

					data['rmrbBdKnowledgestorge.pkKnowledgestorge'] = _this.kid;

					return data;
				},
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['knowledgeManage'];

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oForm.upload();

		}

	});

	var oKnowlege = new knowlege();
	
});
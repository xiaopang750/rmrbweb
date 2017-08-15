/**
 *description:行业类型添加编辑
 *author:fanwei
 *date:2014/09/13
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplForm = require('../../../tpl/admin/industry/form');
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oTip = require('../../../widget/dom/tip');

	var industryForm = R.Class.create(R.until, {

		initialize: function() {
			
			this.oWrap = $('[data-wrap]');
			this.pageInfo = this.parse();
			this.judge();

		},
		judge: function() {

			this.pid = this.pageInfo.pid;

			if(this.pid) {

				this.edit();
				this.subUrl = R.interfaces.industry_edit;

			} else {

				this.add();
				this.subUrl = R.interfaces.industry_add;
				this.submit();

			}

		},
		add: function() {

			this.render(this.oWrap, oTplForm, {});

		},
		edit: function() {

			var _this = this;

			this.reqUrl = R.interfaces.industry_find;
			this.reqParam = {
				pkDictionarySub: this.pid
			};
			this.req(function(data){

				_this.render(_this.oWrap, oTplForm, data.data.data);
				_this.submit();

			});

		},
		submit: function() {	

			var _this = this;

			var oForm = new ajaxForm({

				subUrl: this.subUrl,
				fnSumbit: function( data ) {

					data['dataSub.pkDictionarySub'] = _this.pid;
					data['dataSub.dictionaryCode'] = _this.pageInfo.code;
					data['dataSub.pkDictionaryMain'] = _this.pageInfo.key;

					return data;
				},
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['dataDictionary'] + '&code=' + _this.pageInfo.code;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oForm.upload();

		}

	});

	var oIndustryForm = new industryForm();
	
});
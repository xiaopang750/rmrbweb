/**
 *description:积分规则添加编辑
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require("../../../tpl/spread/score/form");
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oTip = require('../../../widget/dom/tip');
	var dialog = require('../../../widget/dom/dialog');
	
	var ruleAddEdit = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oHiddenText = $('[hidden-text]');
			this.pid = this.pageInfo.pkRule;
			this.aid = this.pageInfo.pkActivity;
			this.oWrap = $('[form-wrap]');
			this.judge();
			this.initBox();
		},
		initBox: function() {

			var _this = this;

			//初始化dialog弹框
			this.oConfrimBox = new dialog({
				title: '保存成功',
				content: '是否继续添加？'
			});			

			this.oConfrimBox.onConfirm = function() {	
				_this.oForm.clear();
				this.close(false);
			};

			this.oConfrimBox.onClosed = function() {
				
				window.location = __url__data.integralRuleList + '&pkActivity=' + _this.aid;
			};

		},
		judge: function() {

			if(this.pid) {

				this.subUrl = R.interfaces.edit_score;
				this.edit();
			} else {
				this.subUrl = R.interfaces.add_score;
				this.add();
			}

		},
		add: function() {

			this.render(this.oWrap, oTplList, {pointRule:{}});
			this.oSelectType = $('[select-type]');
			this.showOption();
			this.submit();

		},
		edit: function() {

			var _this = this;

			this.reqUrl = R.interfaces.find_score;
			this.reqParam = {
				pkRule: this.pid
			};
			this.req(function(data){

				_this.render(_this.oWrap, oTplList, data.data);
				_this.submit();
			});

		},
		submit: function() {

			var _this = this;

			this.oForm = new ajaxForm({

				subUrl: this.subUrl,
				fnSumbit: function(data) {

					data['pointRule.pkActivity'] = _this.aid;
					data['pointRule.pkRule'] = _this.pid;

					return data;

				},
				sucDo: function(data) {
					
					_this.oConfrimBox.show();

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			this.oForm.upload();

		},
		showOption: function() {

			var data = JSON.parse( this.oHiddenText.val() );
			var info = data.data.ruleTypes;
			var i,
				num,
				oOption;

			num = info.length;	

			for (i=0; i<num; i++) {

				if(info[i].selected == "Y") {
					oOption = $('<option id='+ info[i].typeLabel +' selected="selected">'+ info[i].typeName +'</option>');
				} else {
					oOption = $('<option id='+ info[i].typeLabel +'>'+ info[i].typeName +'</option>');	
				}

				this.oSelectType.append(oOption);
			}	
		

		}

	});

	var oRuleAddEdit = new ruleAddEdit();
	
});
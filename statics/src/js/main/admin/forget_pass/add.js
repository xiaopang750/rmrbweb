/**
 *description:忘记密码添加
 *author:fanwei
 *date:2014/09/09
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oForm = require('../../../tpl/admin/forget_pass/form');
	var oTip = require('../../../widget/dom/tip');
	var ajaxForm = require('../../../widget/form/ajaxForm');
	
	var add = R.Class.create(R.until, {

		initialize: function() {
			
			this.oWrap = $('[data-wrap]');
			this.pageInfo = this.parse();
			this.messageType = $('[msgType]').val();
			this.showPage();

		},
		showPage: function() {

			var _this = this;
			this.reqUrl = R.interfaces.findPassInfo;
			this.req(function(data){

				_this.pkMessage = data.data.msg.pkMessage;
				_this.render(_this.oWrap, oForm, data.data);
				_this.oEditor = $('[editor]');
				_this.ue = UE.getEditor(_this.oEditor[0]);
				_this.submit();

			});
		},
		submit: function() {

			var _this = this;

			var oSub = new ajaxForm({

				subUrl: R.interfaces.editfindPass,
				fnSumbit: function( data ) {

					data["sysmessage.messagecontent"] = _this.ue.getContent();
					data["sysmessage.messagetype"] = _this.messageType;
					data["sysmessage.pkMessage"] = _this.pkMessage;

					return data;

				},
				otherJude: [

					function() {

						var str = _this.ue.getContent();
						
						if(!str) {

							oTip.say('联系信息不能为空');
							return false;

						} else {

							return true;

						}

					}

				],
				sucDo: function(data) {

					oTip.say(data.msg);

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oSub.upload();

		}

	});

	var oAdd = new add();
	
});
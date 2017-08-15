/**
 *description:到店核销弹框
 *author:fanwei
 *date:2014/08/12
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplBox = require('../../tpl/box/spread/acounts_box');
	var dialog = require('../../widget/dom/dialog');
	var oTip = require('../../widget/dom/tip');
	
	var acounts = R.Class.create(R.until, {

		initialize: function() {

			this.renderBox();
			this.oInput = $('[code-input]');
			this.oConfirm = $('[code-confirm]');
			this.acountBox = new dialog({
				boxSelector: this.oBox
			});
			this.events();
		},
		renderBox: function() {

			var boxHtml = oTplBox();
			
			this.oBox = $(boxHtml);

			$('body').append(this.oBox);
		},
		events: function() {

			var _this = this;
			var result;

			$(document).on('click', '[acounts-box-btn]', function(){

				_this.acountBox.show();

			});

			this.oConfirm.on('click', function(){

				result = _this.judge();

				if(result) {
					_this.sub(result);
				}

			});
		},
		sub: function(sCode) {

			var _this = this;

			this.reqUrl = R.interfaces.post_accounts_box;
			this.reqParam = {
				couponsCode: sCode
			};
			this.req(function(data){

				oTip.say(data.msg);
				_this.acountBox.hide();

			}, function(data){

				oTip.say(data.msg);

			});

		},
		judge: function() {

			var sVavlue;

			sVavlue = this.oInput.val();

			if(!sVavlue) {

				oTip.say('请填写验证码');
				return false;

			} else {

				return sVavlue;

			}

		}

	});

	var oAcounts = new acounts();
	
});
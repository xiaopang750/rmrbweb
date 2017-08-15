/**
 *description:密码修改
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){


	//var global = require("../../driver/global");
	var oTplPass = require('../../tpl/box/modifyPass');
	var dialog = require('../../widget/dom/dialog');
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');

	var pass = R.Class.create(R.until, {

		initialize: function() {

			this.events();
			this.firsetLoad = false;
			
		},
		events: function() {

			var _this = this;

			$('[modify-pass]').on('click', function(){

				_this.renderBox();
				_this.oModifyBox.show();

			});

		},
		renderBox: function() {

			if(!this.firsetLoad) {

				this.firsetLoad = true;

				var oBox = $(oTplPass());

				$('body').append(oBox);

				this.submit();

				this.oModifyBox = new dialog({
					boxSelector: '[modify-pass-box]'
				});

			}
		},
		submit: function() {

			var oNew = $('[pass-new]');
			var _this = this;

			this.oForm = new ajaxForm({

				boundName: 'user-mofify',
				btnName:'user-modify-confirm',
				subUrl: R.interfaces.modify_user,
				otherCheck:{

					reNewPassWord:[

						function(ele){

							if ( !ele.val() ) {

								return false;

							} else {

								return true;	
							}
							
						},
						function(ele){

							if ( ele.val() != oNew.val() ) {

								return false;

							} else {


								return true;
							}

						}
					]
				},
				fnSumbit: function(data) {

					return data;

				},
				sucDo: function(data) {
						
					oTip.say(data.msg);
					_this.oForm.clear();
					_this.oModifyBox.close();
				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			this.oForm.upload();

		}
	});

	var oPass = new pass();

	
});
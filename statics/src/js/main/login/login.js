/**
 *description:登录
 *author:fanwei
 *date:2014/08/04
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');
	var enterDo = require('../../widget/dom/enterDo');
	var oTplPassBox = require('../../tpl/box/findPassBox');
	var dialog = require('../../widget/dom/dialog');
	var rnd = require('../../lib/until/rnd');
	
	var login = R.Class.create(R.until, {

		initialize: function() {

			this.codeUrl = '';
			this.oQcode = $('[data-ele = qcode]');
			this.oShowCodeBtn = $('[data-ele = show-qcode]');
			this.aText = $('input[form_check]');
			this.oCode = $('[code]');
			this.oForget = $('[forget]');
			this.refreshBtn = $('[refresh]');
			this.pCode = $('[pcode]'); //pcode, pmsg用于显示提示信息
			this.pMsg = $('[pmsg]');
			this.oCodeInput = $('[name = code]');

			this.pageInfo = this.parse();

			this.showTip();
			this.judge();
			this.showCode();
			this.submition();
			this.events();

			//this.isChrome();

		},
		isChrome: function() {

			//提示建议使用chrome, ie9
			var ua = window.navigator.userAgent;
			
			var tip = {
				ie: ( ua.match(/MSIE\s\d+\.0/)+"" ).match(/\d+/) >= 9,
				chrome: /webkit/gi.test( ua ),
				moz: /Firefox/gi.test( ua )
			}

			for (var i in tip) {

				if(tip[i]) {

					return;
				}

			}

			this.oTipBox = new dialog({	
				boxSelector: '[chrome-box]',
				overLayHide: true
			});

			this.oTipBox.show();

		},
		showTip: function() {

			var sCode,
				msg;
			sCode = this.pCode.val();
			msg = this.pMsg.val();

			if(sCode) {
				oTip.say( msg );
			}

		},
		judge: function() {

			//判断提交的地址；
			var sHref = window.location.href;

			if( sHref.indexOf('toAdminLogin')!=-1 ) {

				this.subUrl = R.interfaces.superLogin;
				this.codeUrl = R.interfaces.superLoginValidate;
				this.way = 'super';
	
			} else {

				this.subUrl = R.interfaces.login;
				this.codeUrl = R.interfaces.loginValidate;
				this.way = 'normal';
			}

			this.oCode.attr('src', this.codeUrl);

		},
		events: function() {

			var _this = this;

			enterDo(this.aText, function(){

				_this.oSubmit.subMit();	

			});

			this.refreshBtn.on('click', function(){

				_this.refreshCode();

			});

			this.oCode.on('click', function(){

				_this.refreshCode();

			});

			this.oForget.on('click', function(){

				_this.showPassInfo();

			});

		},
		showPassInfo: function() {

			var _this = this;

			if(this.oPassBox) {

				this.oPassBox.show();

			} else {

				this.reqUrl = R.interfaces.findPassInfo;
				this.req(function(data){

					_this.renderPassBox(data);

				});

			}
		},
		renderPassBox: function(data) {

			this.render($('body'), oTplPassBox, data.data, 'append');

			this.oPassBox = new dialog({
				boxSelector: $('[find-pass]')
			});

			this.oPassBox.show();

		},
		showCode: function() {

		    var isShow,
		    	_this;

		    _this = this;

		    this.oShowCodeBtn.on('click', function(){

		        isShow = _this.oQcode.is(':visible');

		        if(isShow) {
		            _this.oQcode.fadeOut();
		        }else {
		            _this.oQcode.fadeIn();
		        }

		    });

		},
		submition: function() {

			var _this = this;
			var name;

			this.oSubmit = new ajaxForm({

				subUrl: this.subUrl,
				sucDo: function(data) {

					if(_this.way == 'super') {

						window.location = '../sys/toUserManage?id=00501';

					} else {

						window.location = R.uri.domain + data.data.url;
						
					}

				},
				failDo: function(data) {

					oTip.say(data.msg);
					_this.refreshCode(data);

				}

			});

			this.oSubmit.upload();

		},
		refreshCode: function(data) {
			
			var nowSrc = this.codeUrl + '?' + rnd(99999, 1);
			this.oCode.attr('src', nowSrc);

			if(data) {

				if(data.msg = '验证码错误，请重新输入验证码') {
					this.oCodeInput.val('');
					this.oCodeInput.trigger('focus');

				}
				
			}
		}

	});

	var oLogin = new login();

	module.exports = login;
	
});
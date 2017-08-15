/**
 *description:域名映射
 *author:fanwei
 *date:2014/09/28
 */
define(function(require, exports, module){
	
	var dialog = require('../../widget/dom/dialog');
	var tplDomainBox = require('../../tpl/box/mobile/domainBox');
	var oTip = require('../../widget/dom/tip');

	var domainBox = R.Class.create(R.until, {

		initialize: function() {

			this.createBox();

			this.oUrl = this.oWrap.find('[domainUrl]');
			this.oStatus = this.oWrap.find('[domain-status]');
			this.oName = this.oWrap.find('[domain-name]');
			this.oIp = this.oWrap.find('[ip]');
			this.oCheck = this.oWrap.find('[check]');
			this.oConfirm = this.oWrap.find('[sc = confirm]');

			this.checkLock = false;
			this.confirmLock = false;

			this.events();
			
		},
		init: function() {

			this.oUrl.val('');
			this.oStatus.html('');

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[domain-related]', function(){

				var ip,
					name,
					oThis;

				oThis = $(this);	

				name = oThis.attr('url');
				ip = oThis.attr('ip');

				_this.oBox.show();
				_this.oNowSite = oThis;
				_this.nowSiteId = oThis.attr('aid');
				_this.showName(name, ip);

				return false;

			});

			this.oWrap.on('click', '[check]', function(){

				if(!_this.checkLock) {

					_this.lockCheck();
					_this.nowUrl = _this.oUrl.val();
					_this.oCheck.addClass('disabled');

					if(!_this.nowUrl) {
						oTip.say('域名映射地址不能为空');
						_this.unLockCheck();
					} else {
						_this.check();	
					}
				}
			});

			this.oBox.onConfirm = function() {

				if(!_this.confirmLock) {

					_this.lockConfirm();
					_this.nowUrl = _this.oUrl.val();

					if(!_this.nowUrl) {
						oTip.say('域名映射地址不能为空');
						_this.unLockConfirm();
					} else {
						_this.confirm();	
					}

				}
			};

			this.oBox.onStart = function() {

				_this.init();

			};

		},
		showName: function(name, ip) {
			
			this.oName.html(name);
			this.oIp.html(ip);

		},
		check: function() {

			var _this = this;

			this.reqUrl = R.interfaces.checkDomain;
			this.reqParam = {
				content: this.nowUrl,
				pkSite: this.nowSiteId
			};
			this.req(function(data){

				_this.oStatus.attr('class', 'green');
				oTip.say( data.msg );
				_this.unLockCheck();
				_this.oStatus.html('√');

			}, function(data){

				_this.oStatus.attr('class', 'red');
				oTip.say( data.msg );
				_this.unLockCheck();
				_this.oStatus.html('×');

			});

		},
		confirm: function() {

			var _this = this;

			this.reqUrl = R.interfaces.saveDomain;
			this.reqParam = {
				content: this.nowUrl,
				pkSite: this.nowSiteId
			};
			this.req(function(data){

				oTip.say( data.msg );
				_this.oBox.close();
				_this.suc();
				_this.unLockConfirm();
				

			}, function(data){

				oTip.say( data.msg );
				_this.unLockConfirm();

			});

		},
		createBox: function() {

			this.oBox = new dialog({
				boxTpl: tplDomainBox
			});

			this.oWrap = this.oBox.dom();

		},
		suc: function() {

			var url;
			url = this.nowUrl;

			this.oNowSite.attr('url', url);

		},
		lockCheck: function() {

			this.checkLock = true;
			this.oCheck.attr('disabled', 'disabled');
			this.oCheck.addClass('disabled', 'disabled');
			this.oStatus.html('<span class="gray">正在检测中请等待...</span>');

		},
		unLockCheck: function() {

			this.checkLock = false;
			this.oCheck.removeAttr('disabled', 'disabled');
			this.oCheck.removeClass('disabled', 'disabled');
			this.oStatus.html('');
		},
		lockConfirm: function() {

			this.confirmLock = true;
			this.oConfirm.attr('disabled', 'disabled');
			this.oConfirm.addClass('disabled', 'disabled');

		},
		unLockConfirm: function() {

			this.confirmLock = false;
			this.oConfirm.removeAttr('disabled', 'disabled');
			this.oConfirm.removeClass('disabled', 'disabled');
		}

	});

	var	oDomainBox = new domainBox();
	
});
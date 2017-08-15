/**
 *description:推送公共模块
 *author:fanwei
 *date:2014/08/12
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTip = require('../../../widget/dom/tip');

	var send = R.Class.create(R.until, {

		initialize: function() {
			
			this.events();
			this.lock = false;
			this.timer = null;
			this.lockTime = 5000;
			this.onSuc = this.onSuc || null;
			this.onFail = this.onFail || null;
			
		},
		events: function() {

			var _this = this;

			//推送
			$(document).on('click', '[send]', function(){

				if(!_this.lock) {
					_this.lock = true;
					_this.send($(this));	
				} else{
					oTip.say('请在' + _this.lockTime/1000 + 's后推送')
				}

			});

		},
		send: function(oThis) {

			var sid = oThis.attr('sid');
			var _this = this;

			this.reqUrl = R.interfaces.post_send;
			this.reqParam = {pkActivity: sid};
			this.req(function(data){

				oTip.say(data.msg);
				_this.unlock();
				_this.onSuc && _this.onSuc(oThis, data.msg);

			}, function(data){

				oTip.say(data.msg);
				_this.onFail && _this.onFail(oThis, data.msg);

			});

		},
		unlock: function() {

			var _this = this;

			clearTimeout(this.timer);
			this.timer = setTimeout(function(){

				_this.lock = false;

			},this.lockTime);

		}

	});

	var oSend = new send();

	module.exports = oSend;
	
});
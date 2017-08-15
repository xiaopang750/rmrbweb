/**
 *description:网站删除,拉黑模块
 *author:fanwei
 *date:2014/09/10
 */
define(function(require, exports, module){
	
	var global = require("../driver/global");
	var dialog = require("../widget/dom/dialog");
	var oTip = require("../widget/dom/tip");
	
	var remove = R.Class.create(R.until, {

		initialize: function(opts) {
			
			opts = opts || {};
			this.removeUrl = opts.removeUrl;
			this.removeName = opts.removeName || '[remove]';
			this.param = opts.param;
			this.onclick = opts.onclick || null;
			this.onsuc = opts.onsuc || null;
			this.onfail = opts.onfail || null;
			this.title = opts.title || '删除';
			this.content = opts.content || '确认删除么？';
			this.isConfirm = opts.isConfirm || true; //是否需要确认弹框,还是直接删除

			this.oBox = new dialog({
				title: this.title,
				content: this.content
			});

			this.events();

		},
		events: function(url, listName) {

			var _this = this;

			$(document).on('click', this.removeName , function(){

				var result =_this.onclick && _this.onclick.call(_this,$(this));

				if(result == false) {

					return;
				}

				if( !_this.isConfirm ) {

					_this._req( $(this) );

				} else {

					_this.remove($(this));	

				}

				return false;

			});

		},
		remove: function(oThis) {

			var _this = this;
			var aid = oThis.attr('aid');
			this.oBox.show();

			this.oBox.onConfirm = function() {

				_this._req(oThis);

			};	
			
		},
		_req: function(oThis) {

			var _this = this;

			this.reqUrl = this.removeUrl;
			this.reqParam = this.param;
			this.req(function(data){

				_this.onsuc && _this.onsuc.call(_this, oThis);
				_this.oBox.close();
				oTip.say(data.msg);

			}, function(data){

				_this.onfail && _this.onfail.call(_this, oThis);
				oTip.say(data.msg);
			});

		}

	});

	module.exports = remove;
	
});
/**
 *description:账号绑定
 *author:fanwei
 *date:2014/08/03
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplList = require('../../tpl/way/bind/list');
	var oTip = require('../../widget/dom/tip');
	var remove = require("../../driver/remove");
	
	var bind = R.Class.create(R.until, {

		initialize: function() {

			this.pageInfo = this.parse();
			this.oWrap = $('[data-wrap]');
			this.showPage();
			this.events();
			this.initRemove();
			
		},
		initRemove: function() {

			var oRemove = new remove({
				removeUrl: R.interfaces.deleteWayList,
				onclick: function(oThis) {
					
					var aid = oThis.attr('aid');

					this.param = {
						'publicaccountid': aid
					};
				},
				onsuc: function(oThis) {

					var oParent = oThis.parents('[list-wrap]');
					oParent.remove();

				}
			});

		},
		showPage: function() {
			
			var _this = this;

			this.reqUrl = R.interfaces.wayList;
			this.req(function(data){
				
				//console.log(data);

				_this.render(_this.oWrap, oTplList, data.data);

			});		

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[typer]', function(){

				window.location = __url__data['accountBindForm'] + '&way=' + $(this).attr('typer') + '&type=add';

			});

			//接入
			$(document).on('click', '[entry]', function(){
				_this.entry($(this));
			});	

		},
		entry: function(oThis) {

			var accountid,
				status;

			status = oThis.attr('status');

			if(status == 1) {
				return;
			}

			accountid = oThis.attr('accountid');
				
			this.reqUrl = R.interfaces.member_entry;
			this.reqParam = {
				'publicaccountid' : accountid
			};
			this.req(function(data){
				oTip.say(data.msg);
			},function(data){
				oTip.say(data.msg);
			});

		}
	});

	var oBind = new bind();
	
});
/**
 *description:账号绑定
 *author:fanwei
 *date:2014/08/03
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplList = require('../../tpl/way/level/list');
	var oTip = require('../../widget/dom/tip');
	var remove = require("../../driver/remove");
	
	var bind = R.Class.create(R.until, {

		initialize: function() {

			this.oWrap = $('[data-wrap]');
			this.showPage();
			this.initRemove();
			
		},
		initRemove: function() {

			var oRemove = new remove({
				removeUrl: R.interfaces.member_level_remove,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'pkMemberlevel': aid
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

			this.reqUrl = R.interfaces.member_level_list;
			this.req(function(data){

				_this.data = data;
				_this.render(_this.oWrap, oTplList, data.data);

			});		

		}

	});

	var oBind = new bind();
	
});
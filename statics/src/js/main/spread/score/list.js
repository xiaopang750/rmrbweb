/**
 *description:积分规则列表
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require("../../../tpl/spread/score/list");
	var oTip = require('../../../widget/dom/tip');
	var remove = require("../../../driver/remove");
	
	var ruleList = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oWrap = $('[list-wrap]');

			this.showPage();
			this.initRemove();
		},
		initRemove: function() {

			var oRemove = new remove({
				removeUrl: R.interfaces.del_score,
				onclick: function(oThis) {

					var rid = oThis.attr('aid');

					this.param = {
						'pkRule': rid
					};
				},
				onsuc: function(oThis) {

					var oList = oThis.parents('[rule-list]');
					oList.remove();

				}
			});

		},
		showPage: function() {

			var _this = this;

			this.reqUrl = R.interfaces.find_score_list;
			this.reqParam = {
				pkActivity: this.pageInfo.pkActivity
			};
			this.req(function(data){

				data.data.pid = _this.pageInfo.pkActivity;

				_this.render(_this.oWrap, oTplList, data.data);

			});
		}

	});

	var oRuleList = new ruleList();
	
});
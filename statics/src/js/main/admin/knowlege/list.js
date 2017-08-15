/*
 *description:知识库列表
 *author:fanwei
 *date:2014/09/22
 */

define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require("../../../widget/dom/fenye");
	var remove = require("../../../driver/remove");
	var oTplList = require("../../../tpl/admin/knowlege/list");
	
	var companyDetail = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.defaultParam = {
				pageSize: 8,
				pkCorp: this.pageInfo.pkCorp,
				"rmrbBdKnowledgestorge.konwledgename": ''
			};

			this.showPage();
			this.initRemove();		
			
		},
		showPage: function() {

			this.oPage = new fenye(R.interfaces.know_list, oTplList, this.defaultParam);

		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.del_konw,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'Pkknowledgestorge': aid
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.defaultParam);

				}
			});

		}

	});

	var oCompanyDetail = new companyDetail();
	
});
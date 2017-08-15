/*
 *description:子企业详情
 *author:fanwei
 *date:2014/09/22
 */

define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require("../../../widget/dom/fenye");
	var oTplList = require("../../../tpl/admin/company/detail");
	
	var companyDetail = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.defaultParam = {
				pageSize: 8,
				pkCorp: this.pageInfo.pkCorp
			};

			this.showPage();		
			
		},
		showPage: function() {

			this.oPage = new fenye(R.interfaces.company_sub_list, oTplList, this.defaultParam);

		}

	});

	var oCompanyDetail = new companyDetail();
	
});
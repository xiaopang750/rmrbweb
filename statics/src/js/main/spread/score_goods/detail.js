/**
 *description:商品兑换详情
 *author:fanwei
 *date:2014/09/21
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require("../../../widget/dom/fenye");
	var oTplList = require("../../../tpl/spread/score_goods/detail");
	
	var goodsDetail = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.defaultParam = {
				pageSize: 8,
				pkExchange: this.pageInfo.pkExchange
			};

			this.showPage();		
			
		},
		showPage: function() {

			this.oPage = new fenye(R.interfaces.score_goods_detail, oTplList, this.defaultParam);

		}

	});

	var oGoodsDetail = new goodsDetail();
	
});
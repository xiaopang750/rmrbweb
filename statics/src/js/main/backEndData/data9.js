/**
 *description:数据统计9
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var tab = require('../../widget/dom/tab');
	
	var BackEndData9 = R.Class.create(R.until, {

		initialize: function() {	
			
			this.oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

			this.oTab.init();

		}

	});

	var oBackEndData9 = new BackEndData9();
	
});
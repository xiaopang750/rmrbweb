/**
 *description:促销活动列表
 *author:fanwei
 *date:2014/08/09
 */
define(function(require, exports, module){
	
	var colist = require('../base/list');
	require('../../../box/spread/select_pic_type');

	var coparateList = R.Class.create(colist,{

		initialize: function() {

			this.oTplList = require('../../../tpl/spread/corparate/list');
			this.activityType = this.parse().activityType;
			this.pageSize = 8;
			this.isFenye = true;
			this.getDataUrl = R.interfaces.get_gift_list;
			this.start();

		}

	});

	var oCoparateList = new coparateList();
	
});
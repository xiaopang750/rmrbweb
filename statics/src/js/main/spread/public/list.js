/**
 *description:现场活动列表
 *author:fanwei
 *date:2014/08/14
 */
define(function(require, exports, module){
	
	var colist = require('../base/list');
	require('../../../box/spread/select_pic_type');

	var pubList = R.Class.create(colist,{

		initialize: function() {

			this.oTplList = require('../../../tpl/spread/public/list');
			this.activityType = this.parse().activityType;
			this.pageSize = 8;
			this.isFenye = false;
			this.getDataUrl = R.interfaces.get_prize_list;
			this.otherParam = {pkActivity: this.parse().pkActivity};
			this.start();

		}

	});

	var oPubList = new pubList();
	
});
/**
 *description:到店有礼列表
 *author:fanwei
 *date:2014/07/31
 */
define(function(require, exports, module){
	
	var colist = require('../base/list');
	var oQcodeBox = require('../../../box/spread/qcode_box');
	var verificationBox = require('../../../box/spread/verification');
	var timeBox = require('../../../box/spread/set_time_box');

	var oVerificationBox = new verificationBox();

	var giftList = R.Class.create(colist,{});

	var oGiftList = new giftList({
		setModel: function(data) {

			this.pageInfo = this.parse();
			data.listType = this.pageInfo.listType;
			data.activityType = this.pageInfo.activityType;

			if(data.listType == 'nofunc') {

				//$('title')[0].innerHTML = '店铺二维码';
				document.title = '店铺二维码';
				$('.bread-text').html('店铺二维码');

			}

		}
	});

});
/**
 *description:密码修改
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){

	var oTip = require('../../widget/dom/tip');
	var dialog = require('../../widget/dom/dialog');
	var oTplPlane = require('../../tpl/box/global/planeTip');

	var pass = R.Class.create(R.until, {

		initialize: function() {

			this.planeBox = new dialog({
				boxTpl: oTplPlane
			});
			this.oPlaneName = $('[plane-name]');
			this.oPlaneContent = $('[plane-content]');
			this.oTipBtn = $('[my-plane-btn]');

			this.events();
			this.judgeShow();
		},
		events: function() {

			var _this = this;

			this.oTipBtn.on('click', function(){

				_this.judgeShow(true);

			});

		},
		judgeShow: function(isShow) {

			var oDate = new Date();
			var nowData = localStorage.calendarData || "{}";
			nowData = JSON.parse(nowData);
			var nowTime = (oDate.getMonth() + 1 ) + '/' + (oDate.getDate()) + '/' + (oDate.getFullYear());
			var data = nowData[nowTime];

			if(data) {

				if(isShow) {
					this.planeBox.show();
					this.oPlaneName.html(data.name);
					this.oPlaneContent.html(data.content);
				}
				
			} else {
				this.oTipBtn.css('cursor', 'default');
			}
		}

	});

	var oPass = new pass();

	
});
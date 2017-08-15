/**
 *description:发布会员互动屏幕
 *author:fanwei
 *date:2014/08/11
 */
define(function(require, exports, module){
	
	var jscroll = require('../../../widget/dom/jscroll');
	var reqMet = require('../../../sub/spread/public/reqmet');
	var screenScale = require('../../../sub/spread/public/scale');
	var uploadBox = require('../../../box/upload/upload');

	var oReqMet = new reqMet({
		url: R.interfaces.get_screen_data,
		paramName: 'participatetime',
		isUploadTime: true
	});

	var step2 = R.Class.create(R.until, {

		initialize: function() {

			var _this = this;	
			this.oFrame = $('[message]');
			this.oRollWrap = $('[up-screen-wrap]');
			this.oDataWrap = $('[up-screen-list-wrap]');
			this.oViewImage = $('[view-image]');
			this.reqFps = 30000;
			this.timer = null;
			this.viewNum = 8;
			this.rollSpeed = 1000;

			oReqMet.reqSelect();
			this.events();

		},
		events: function() {

			var _this = this;

			oReqMet.onrefresh = function(data, selectId) {

				var info = JSON.parse( data.views );

				_this.renderList(info);
			};

			uploadBox.localConfirm = function(data, sName) {

				_this.oViewImage.attr('src', data);

			};

		},
		renderList: function(arr) {

			var i,
				num;

			num = arr.length;
			
			for(i=0; i<num; i++) {
				
				var oNewLi = $('<li list>'+ arr[i] +'</li>');
				this.oDataWrap.prepend(oNewLi);	
			}	

			this.startRoll();

		},
		startRoll: function() {

			//roll
			var num = $('[list]').length;

			if(num >= this.viewNum) {

				this.oRollWrap.jCarouselLite({
					vertical: true,
					visible: this.viewNum,
					auto: true,
					speed: this.rollSpeed
				});

			}

		}

	});

	var oStep1 = new step2();
	
});
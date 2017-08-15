/**
 *description:会议签到欢迎界面
 *author:fanwei
 *date:2014/08/11
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var uploadBox = require('../../../box/upload/upload');
	var reqMet = require('../../../sub/spread/public/reqmet');
	var screenScale = require('../../../sub/spread/public/scale');
	var oTplCode = require('../../../tpl/spread/public/qcode_list');
	var color = require('../../../widget/form/color');

	var oReqMet = new reqMet({
		url: R.interfaces.sign_name,
		paramName: 'participatetime',
		isUploadTime: true,
		onchange: function(id) {

			oStep4.showCode(id);

		}
	});

	var step4 = R.Class.create(R.until, {

		initialize: function() {

			var _this = this;
			
			this.oSelectMet = $('[select-met]');
			this.oViewImage = $('[view-image]');
			this.oViewText = $('[view-text]');
			this.oViewInput = $('[view-input]');
			this.oRoll = $('[roll-text]');
			this.oCodeWrap = $('[qcode-wrap]');
			/*this.oSelect = $('[select-met]');*/

			this.oRoll.attr('sumWidth', '0');
			this.timer = null;
			this.fps = 1000/60;
			this.pullTimer = null;
			this.firstCopy = false;
			this.nowTime = '';
			this.oRollWrap = $('[roll-wrap]');
			this.max = this.oRollWrap.width();
			
			oReqMet.reqSelect();
			this.events();

		},
		showCode: function(id) {

			var _this = this;

			//显示二维码
			this.reqUrl = R.interfaces.get_public_code;
			this.reqParam = {
				pkActivity: id
			};
			this.req(function(data){
				console.log(data);
				_this.render(_this.oCodeWrap, oTplCode, data.data);

			});

		},
		events: function() {

			var _this = this;

			uploadBox.localConfirm = function(data, sName) {

				_this.oViewImage.attr('src', data);

			};

			var str;
			this.oViewInput.keypress(function(){

				str = $(this).val();

				_this.showWelcomText(str);

			});

			this.oViewInput.keyup(function(){

				str = $(this).val();

				_this.showWelcomText(str);

			});

			//hover
			this.oRoll.on('mouseenter', function(){
				_this.stopRoll();
			});

			this.oRoll.on('mouseleave', function(){
				_this.roll();
			});

			oReqMet.onrefresh = function(data) {

				_this.appendGuest(data);	
			};


			color.onSelect = function(ele, color) {
				console.log('b');
				_this.oViewText.css('color', color);
				_this.oRollWrap.css('color', color);

			};

		},
		stopRoll: function() {

			clearInterval(this.timer);

		},
		appendGuest: function(data) {
			
			var i,
				num,
				sum,
				aSpan,
				oSpan,
				sinWidth,
				nowWidth;
			
			sum = 0;
			oSpan = $('<span>'+ data.name +'</span>');
			this.oRoll.append(oSpan);
			aSpan = this.oRoll.children();
			num = aSpan.length;

			for (i=0; i<num; i++) {
				sinWidth = aSpan.eq(i).outerWidth(true);
				sum += sinWidth;
			}

			//nowWidth = parseInt(this.oRoll.attr('sumWidth')) + sum;

			if(sum >= this.max && !this.firstCopy) {
				this.copy();
				this.oRoll.attr('sumWidth', sum*2);
				this.firstCopy = true;
			} else {
				this.oRoll.attr('sumWidth', sum);
			}

			
			this.roll();

		},
		roll: function() {

			var left;
			var _this = this;
			var nowWidth = this.oRoll.attr('sumWidth');
			var dis;

			if(nowWidth >= this.max) {

				dis = this.max - nowWidth;

				clearInterval(this.timer);
				this.timer = setInterval(function(){

					left = parseInt(_this.oRoll.css('left'));
					left--;

					if(left<=dis) {

						_this.oRoll.css('left', 0);
						left = 0;
					} else {
						_this.oRoll.css('left', left);
					}					

				},this.fps);

			}
		},
		copy: function() {

			var aNew = this.oRoll.children().clone();
			this.oRoll.append(aNew);

		},
		showWelcomText: function(str) {

			this.oViewText.html(str);

		}

	});

	var oStep4 = new step4();

	module.exports = step4;
	
});
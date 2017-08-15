/**
 *description:设置有效期
 *author:fanwei
 *date:2014/09/21
 */
define(function(require, exports, module){
	
	var oTplBox = require('../../tpl/box/spread/set_time_box');
	var dialog = require('../../widget/dom/dialog');
	var oTip = require('../../widget/dom/tip');
	var calender = require('../../widget/form/calendar');

	var setTime = R.Class.create(R.until, {

		initialize: function() {
			
			this.createBox();
			this.oCalender = new calender({
				format: "yyyy-MM-dd HH:mm:ss",
				ele: '[set-time-box]',
				zIndex: 5000,
				minDate:'%y-%M-%d',
				onSetDate: function(date, time) {

					$(this.inpE).attr('time', time);

				}
			});
			this.events();

		},
		createBox: function() {

			this.oBox = new dialog({
				boxTpl: oTplBox
			});

			this.oWrap = this.oBox.dom();
			this.getEle();

		},
		getEle: function() {

			this.oStart = $('[start-time]');
			this.oEnd = $('[end-time]');

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[set-time]', function(){

				_this.pkActivity = $(this).attr('pid');
				_this.oBox.show();
				_this.getTime($(this));

			});

			this.oBox.onConfirm = function() {

				var start = _this.oStart.val();
				var end = _this.oEnd.val();
				var result = _this.judge();

				if(result) {
					_this.editTime(start, end);	
				}

			};

		},
		judge: function() {

			var timeStart = this.oStart.val().replace(/\-/gi, "/");
			var timeEnd = this.oEnd.val().replace(/\-/gi, "/");

			var start = new Date( timeStart ).getTime();
			var end = new Date( timeEnd ).getTime();
			
			if(!start || !end) {

				oTip.say('请选择时间');

				return false;

			} else if(start > end) {

				oTip.say('开始时间不能大于结束时间');
				return false;
			} else {
				return true;
			}

		},
		getTime: function(oThis) {

			var _this = this;

			this.reqUrl = R.interfaces.find_act_time;
			this.reqParam = {
				pkActivity: this.pkActivity
			};
			this.req(function(data){
				console.log(data);
				var info = data.data.activity;
				var start = info.starttime;
				var end = info.endtime;

				_this.giveTime(start, end);

			}, function(data){

				oTip.say(data.msg);

			});

		},
		giveTime: function(start, end) {

			this.oStart.val(start);
			this.oEnd.val(end);

		},
		editTime: function(start, end) {

			var _this = this;

			this.reqUrl = R.interfaces.set_act_time;

			this.reqParam = {
				pkActivity: this.pkActivity,
				starttime: start,
				endtime: end
			};

			this.req(function(data){

				oTip.say(data.msg);
				_this.oBox.close();

			}, function(data){

				oTip.say(data.msg);

			});

		}

	});

	var oSetTime= new setTime();
	
});
/**
 *description:日历行程
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oCalendarWeek = require("../../../widget/form/calendar_week/calendar");
	var oTip = require("../../../widget/dom/tip");

	var Calendar = R.Class.create(R.until, {

		initialize: function() {
			
			this.dataName = 'calendarData';
			this.nowTime = '';
			this.markName = 'hasPlane';
			this.oName = $('[calendar-name]');
	        this.oContent = $('[calendar-content]');
	        this.oTipBtn = $('[my-plane-btn]');

			this.calendar = oCalendarWeek({
				wrap: $('[data-ele = data-wrap]'),
	            date:new Date(),
	            contextPath:'calendar',
	            language:'chinese',
				mode:'month'
	        });
	        this.mark();
	      	this.events();
			
		},
		events: function() {

			var name,
				content,
				_this;

			_this = this;	
			
			$(document).on('click', '[calendar-btn]', function(){

				name = _this.oName.val();
				content = _this.oContent.val();
				_this.save(name, content);
			});

			__calendarOnShow = function(time, oNow) {

				_this.oNowDay = oNow.parents('.CalendarWeekend');
				_this.isNowDay = _this.oNowDay.hasClass('today');
				_this.showNowData(time);

			};

			this.calendar.dialog.onClosed = function() {

				_this.clear();

			};

			__onRender = function() {

				_this.mark();

			};

		},
		mark: function() {

			var i,
				num,
				aMark,
				oMark,
				nowtime,
				data,
				realData;

			data = localStorage[this.dataName] || "{}";
			realData = JSON.parse(data);
			aMark = $('[nowtime]');
			num = aMark.length;
			i = 0;

			for (i=0; i<num; i++) {

				oMark = aMark.eq(i);
				nowtime = oMark.attr('nowtime');
				if(realData[nowtime]) {
					
					oMark.addClass(this.markName);

				}

			}
			
		},
		showNowData: function(time) {

			var data = localStorage[this.dataName] || "{}";

			var realData = JSON.parse(data);

			var nowData = realData[time];

			if(nowData) {

				this.oName.val(nowData.name);
				this.oContent.val(nowData.content);

			}

		},
		save: function(name, content) {

			//临时存localStorage 后期存库
			var data = localStorage[this.dataName] || "{}";

			var realData = JSON.parse(data);

			if(name && content) {

				realData[__nowTime] = {name: name, content: content};

				localStorage[this.dataName] = JSON.stringify( realData );

				this.oNowDay.addClass( this.markName );

				if(this.isNowDay) {

					this.oTipBtn.attr('status', 'has');	
					this.oTipBtn.css('cursor', 'pointer');
				}

			} else {

				oTip.say('请完整填写');
				return;
			}

			this.calendar.dialog.close();

			this.clear();

		},
		clear:function() {
			this.oName.val('');
			this.oContent.val('');
		}

	});

	var oCalendar = new Calendar();
	
});
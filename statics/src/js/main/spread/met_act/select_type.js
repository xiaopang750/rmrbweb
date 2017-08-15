/**
 *description:选择界面风格
 *author:fanwei
 *date:2014/07/27
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oTip = require('../../../widget/dom/tip');
	var getNowTime = require('../../../lib/until/getNowTime');
	var Calendar = require('../../../widget/form/calendar');
	var meeting_default_data = require('./data');
	var oTplModel = require('../../../tpl/spread/met_act/model_list'); //模板
	
	var select = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.aTime = $('[data-ele = time]');
			this.oNext = $('[data-ele = next]');
			this.oStep1 = $('[data-ele = step1]');
			this.oStep2 = $('[data-ele = step2]');
			this.oSelectWrap = $('[select-type-wrap]');

			this.showModel();
			this.judge();
			this.showCalendar();
			this.submition();
			this.showTime();
			this.events();
			
		},
		judge: function() {

			var status;

			status = this.pageInfo.status;

			if(status == 'checkModel') {

				//新建时未选择模板
				this.oStep1.hide();
				this.oStep2.show();
			}

		},
		showModel: function() {

			this.render(this.oSelectWrap, oTplModel, meeting_default_data.model);

			this.aSelect = $('[data-ele = select-type]');

		},
		events: function() {

			var _this = this;
			var url,
				info;

			//next
			this.oNext.on('click', function(){

				_this.submitionModel();
				
			});

			//选择模板
			$(document).on('click', '[data-ele = select-type]', function(){

				_this.selectModel($(this));

			});

		},
		selectModel: function(oThis) {

			this.aSelect.removeClass('active');
			this.aSelect.find('[data-ele = select-btn]').removeClass('active');
			oThis.addClass('active');
			oThis.find('[data-ele = select-btn]').addClass('active');

			this.nowType = oThis.attr('typer');

		},
		showTime: function() {

			var nowTime = getNowTime(true);

			this.aTime.val(nowTime.time);
			this.aTime.attr('time', nowTime.timer);

		},
		showCalendar: function() {

			var oCalendar = new Calendar({
				format: "yyyy-MM-dd HH:mm:ss",
				ele : '[data-ele = time]',
				onSetDate: function(date, time) {

					$(this.inpE).attr('time', time);

				},
				minDate:'%y-%M-%d'
			});

		},
		submitionModel: function() {

			var _this = this;

			//提交模板
			this.pkActivity = this.pkActivity ? this.pkActivity : this.pageInfo.pkActivity;

			if(!this.pkActivity) {
				oTip.say('非法操作');
				return;
			}

			if(!this.nowType) {
				oTip.say('请选择模板');
				return;
			}

			this.reqUrl = R.interfaces.post_met_next;
			this.reqParam = {
				pkActivity:this.pkActivity, 
				model: this.nowType,
				modelValue: JSON.stringify( meeting_default_data[this.nowType] ) + ""
			};
			this.req(function(data){
				
				info = data.data;

				url = __url__data['meetEdit'] + '&pkActivity='+ info.pkActivity + '&type=' + _this.nowType + '&flow=1';

				window.location = url;

			});

		},
		submition: function() {
			
			//创建会议
			var _this = this;
			var name;

			var oSubmit = new ajaxForm({

				subUrl: R.interfaces.post_met_basic,
				fnSumbit: function( data ) {

					data["activity.activitytype"] = '001';
					data["activity.pkCorp"] = 20;
					return data;

				},
				otherJude: [

					function(){

						var sTart = _this.aTime.eq(0).attr('time');
						var sEnd = _this.aTime.eq(1).attr('time');

						if(sTart>=sEnd) {

							oTip.say('开始时间不能大于等于结束时间');
							return false;

						} else {

							return true;
						}
					} 

				],
				sucDo: function(data) {

					oTip.say(data.msg);

					_this.pkActivity = data.data.activity.pkActivity;

					_this.oStep1.hide();

					_this.oStep2.show();
				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oSubmit.upload();

		}

	});

	var oSelect = new select();
	
});
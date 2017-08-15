/**
 *description:新建电子优惠券
 *author:fanwei
 *date:2014/08/10
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var Calendar = require('../../../widget/form/calendar');
	var oTip = require('../../../widget/dom/tip');
	var ajaxForm = require('../../../widget/form/ajaxForm'); 
	var upload = require('../../../box/upload/upload');
	var oTplForm = require('../../../tpl/spread/elc_sale/build_form');
	var oTplView = require('../../../tpl/spread/elc_sale/build_view');
	var getNowTime = require('../../../lib/until/getNowTime');
	var unloadTip = require('../../../lib/until/unloadTip')('您还没有保存,确定离开此页面么?');
	var elcType = require('../../../box/spread/elc_type'); //选择图库

	var build = R.Class.create(R.until, {

		initialize: function() {
			
			this.oFormWrap = $('[form-wrap]');
			this.oViewWrap = $('[view-wrap]');
			this.pageInfo = this.parse();

			this.oElcType = new elcType();
			this.typeInfo = this.oElcType.getDefaultType();

			this.judge();
			this.rest = '';
			this.REFRESH_TIME = 500;
			this.timer = null;
			this.events();

		},
		events: function() {

			var _this = this;

			this.oFormWrap.on('mouseenter', function(){
				_this.refresh();
			});

			this.oFormWrap.on('mouseleave', function(){
				_this.stop();
			});

			this.oFormWrap.on('click', '[elc-select-btn]', function(){

				_this.oElcType.show();

			});

			this.oElcType.onConfirm = function(name, url) {
				
				_this.setStyle(name, url);
				_this.refresh();
				this.hide();
			};


			$(document).on('click', '[elc-select-btn], [sc], [elc-confirm], [script-role = confirm-btn]', function(){

				return false;

			});

		},
		showTime: function() {

			var nowTime = getNowTime();
			
			this.aTime.val(nowTime.time);
			this.aTime.attr('time', nowTime.timer);

		},
		judge: function() {

			var isAdd;

			isEdit = this.pageInfo.aid ? true : false;

			if(!isEdit) {
				this.add();
			} else {
				this.edit();
			}

		},
		setStyle: function(name, url) {

			var nowName,
				nowUrl

			if(!this.styleName) {
				this.styleName = $('[style-name]');
				this.styleUrl = $('[style-url]');
			}

			nowName = name ? name : this.typeInfo.name;
			nowUrl = url ? url : this.typeInfo.url;

			this.styleName.val(nowName);
			this.styleUrl.val(nowUrl);

		},
		add: function() {

			//var defaultViewData = this.buildDefaultViewData();

			this.renderView({couponsPic:this.typeInfo.url});
			this.renderForm({});
			this.showCalendar();
			this.aTime = $('[date]');
			this.showTime();
			this.submission(R.interfaces.post_elc_data);
			this.setStyle();

		},
		edit: function() {

			var _this,
				info;

			_this = this;
			this.reqUrl = R.interfaces.get_elc_edit_data;
			this.reqParam = {
				couponsId:this.pageInfo.aid
			};
			this.req(function(data){

				info = data.data.info;
				console.log(info);
				info.style = _this.typeInfo.url;
				_this.rest = info.residueNum;
				_this.renderForm(info);
				_this.renderView(info);
				_this.aTime = $('[date]');
				_this.showCalendar();
				_this.submission(R.interfaces.post_elc_edit_data, _this.pageInfo.aid, _this.pageInfo.pid);
				//_this.setStyle();

			});

		},
		refresh: function() {

			var _this = this;
			var data;

			clearInterval(this.timer);
			this.timer = setInterval(function(){

				data = _this.getViewData();

				_this.renderView(data);

			},this.REFRESH_TIME);

		},
		stop: function() {

			clearInterval(this.timer);

		},
		getViewData: function() {

			var data = this.oBuildElc.getAllParam();
			var newJson = {};

			for (var i in data) {

				newJson[i.substring(parseInt(i.indexOf('.'))+1)] = data[i];

			}
			
			return newJson;

		},
		buildDefaultViewData: function() {

			var data = {
				minimunExpense: "300",
				startDate: "2014-08-12",
				endDate: "2014-08-19"
			}

			return data;

		},
		buildDefaultFormData: function() {

		},
		renderForm: function(data) {

			this.render(this.oFormWrap, oTplForm, data);

		},
		renderView: function(data) {

			this.render(this.oViewWrap, oTplView, data);

		},	
		showCalendar: function() {

			var oCalendar = new Calendar({
				ele : '[date]',
				onSetDate: function(date, time) {

					oThisWrap = $(this.inpE).parents('[script-role = check_wrap]');
					oThisTip = oThisWrap.find("[script-role = wrong_area]");
					oThisWrap.removeClass("has-error");
					oThisTip.removeClass("wrong");

					$(this.inpE).attr('time', time);

				}
			});


		},
		submission: function(url, aid, pid) {

			var _this = this;

			this.oBuildElc = new ajaxForm({

				subUrl: url,
				fnSumbit: function( data ) {

					if(aid) data['coupons.couponsId'] = aid;
					if(pid) data['coupons.pkActivity'] = pid;

					data.muliType = "sin";
					data['coupons.residueNum'] = _this.rest;

					return data;
				},
				otherJude: [

					function(){

						var sTart = $('[date]').eq(0).attr('time');
						var sEnd = $('[date]').eq(1).attr('time');

						if(sTart >= sEnd) {

							oTip.say('开始时间不能大于等于结束时间');
							return false;

						} else {

							return true;
						}

					} 

				],
				sucDo: function(data) {
					
					var info = data.data;
					var url = __url__data.muliEdit + '&pkActivity=' + info.pkActivity + '&way=sin';

					//表单提交保存时不提示页面卸载信息;
					window.__dontTip = true;
					window.location = url;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			this.oBuildElc.upload();

			//console.log(oModifyPass.getAllData());

		}

	});

	var oBuild = new build();
	
});
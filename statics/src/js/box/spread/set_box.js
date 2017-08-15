/**
 *description:发布渠道设置弹框
 *author:fanwei
 *date:2014/07/31
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplSetBoxWrap = require('../../tpl/box/spread/set_box_wrap');
	var oTplBox = require('../../tpl/box/spread/set_box');
	var dialog = require('../../widget/dom/dialog');
	var oTip = require('../../widget/dom/tip');
	var Calendar = require('../../widget/form/calendar');
	
	var setBox = R.Class.create(R.until, {

		initialize: function() {

			this.first = true;

			this.showBox();

			this.events();

			this.showCalendar();
			
		},
		events: function() {

			var _this = this;

			//显示box
			$(document).on('click', '[box-set]', function(){

				_this.lid = $(this).attr('lid');

				_this.renderData(_this.lid);

				_this.oBox.show();

			});


			//保存
			$(document).on('click', '[set-save]', function(){

				_this.save();

			});

		},
		showCalendar: function() {

			var oCalendar = new Calendar({
				format: "yyyy-MM-dd HH:mm:ss",
				ele : '[data-ele = send-time]',
				minDate:'%y-%M-%d',
				noToday: true,
				zIndex: 5000
			});
		},
		save: function() {

			var _this = this;

			var aMember = $('[member]').find('input[type=checkbox]');
			var aWay = $('[way]').find('[third-way-select]');

			var arrMember = this.fetchResult(aMember, 'member');
			var sMember = arrMember ? arrMember.join(',') : '';
			var arrWay = this.fetchResult(aWay, 'way');
			var sTime = $('[data-ele = send-time]').val();

			/*不验证时间
			if(!sTime) {
				oTip.say('请选择时间');
				return;
			}*/
			
			var result = {
				memberLevel: sMember,
				sendTime: sTime,
				pkActivity: this.lid,
				channels: arrWay
			};
			
			this.reqUrl = R.interfaces.post_set_box;
			this.reqParam = {
				inputJson: JSON.stringify(result)
			};
			
			//return;
			this.req(function(data){
				_this.oBox.close();
				_this.clear();
				oTip.say(data.msg);
			});

		},
		clear: function() {

			var aMember = $('[member]').find('input[type=checkbox]');
			var aWay = $('[way]').find('input[type=checkbox]');
			var oTime = $('[data-ele = send-time]');

			aMember.removeAttr('checked');
			aWay.removeAttr('checked');
			oTime.val('');
		},
		fetchResult: function(aCheck, type) {

			var i,
				j,
				num,
				num2,
				isChecked,
				oCheck,
				result,
				json,
				oInfoWrap,
				aInfoList,
				oInfoList;

			num = aCheck.length;
			result = [];

			for(i=0; i<num; i++) {

				oCheck = aCheck.eq(i);
				
				isChecked = oCheck.attr('checked');

					if(type == 'member') {

						if(isChecked) {

							result.push(oCheck.val());

						}

					} else if(type == 'way') {

						/*oInfoWrap = oCheck.parents('[third-way-wrap]').find('[set-info-wrap]');
						aInfoList = oInfoWrap.find('[set-info-list]');
						num2 = aInfoList.length;
						
						for (j=0; j<num2; j++) {

							oInfoList = aInfoList.eq(j);
							json = {};
							json['dr'] = 1;
							json['pkActivity'] = oInfoList.find('[pkactivity]').html();
							json['pkActivitychannel'] = oInfoList.find('[pkactivitychannel]').html();
							json['pkChannel'] = oInfoList.find('[pkchannel]').html();
							json['sendaccount'] = oInfoList.find('[sendaccount]').html();
							result.push(json);
						}*/

						var data = {};
						data.accountId = oCheck.attr('accountid');
						data.channel = oCheck.attr('accounttype');
						isChecked ? data.isCheck = "Y" : data.isCheck = "N";
						result.push(data);
	
					}

			}

			if(!result.length) {

				if(type == 'member') {
					oTip.say('请选择会员级别');
				} else {
					oTip.say('请选择渠道');
				}
				return;
			}

			return result;	

		},
		showBox: function(cb) {

			var _this = this;

			var oBox = $(oTplSetBoxWrap());

			$('body').append(oBox);

			this.oBox = new dialog({
				boxSelector: $('[set-box]')
			});
		},
		renderData: function(id) {

			var _this = this;

			this.reqUrl = R.interfaces.get_set_box_data;
			this.reqParam = {
				pkCorp: '50',
				pkActivity: id
			};

			this.req(function(data){
				
				var html = oTplBox(data.data);
				
				_this.oBox.dom().html(html);

			});
		}

	});

	var oSetBox = new setBox();
	
});
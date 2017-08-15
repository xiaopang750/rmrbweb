/**
 *description:发布会后台监控
 *author:fanwei
 *date:2014/08/11
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require('../../../tpl/spread/elc_sale/backEnd_list');
	var oTip = require('../../../widget/dom/tip');
	var jscroll = require('../../../widget/dom/jscroll');
	var reqMet = require('../../../sub/spread/public/reqmet');
	oReqMet = new reqMet({
		url: R.interfaces.get_back_list,
		paramName: 'lastTime',
		isUploadTime: true
	});
	
	var step3 = R.Class.create(R.until, {

		initialize: function() {

			this.nowTime = '';
			this.pullfps = 5000;
			this.pullTimer = null;
			this.oDataWrap = $('[data-wrap]');
			this.oCheckAll = $('[check-all]');
			this.oUp = $('[all-act-btn]');
			this.oFrame = $('[message]')[0];
			this.allowDomain = '*';
			this.viewNum = 3;
			this.rollSpeed = 1000;
			this.oSelect = $('[select-met]');
			oReqMet.reqSelect();
			//this.pullGuest();
			//this.rollGet();
			this.events();
			var _this = this;
		},
		events: function() {

			var _this = this;
			//check
			this.oCheckAll.on('click', function(){

				_this.selectAll($(this));

			});

			//up-all
			this.oUp.on('click', function(){

				_this.up($('[check]'));

			});

			//up-single
			$(document).on('click', '[act-btn]', function(){

				var oCheck = $(this).parents('[list]').find('[check]');
				_this.up(oCheck);

			});

			oReqMet.onrefresh = function(data, selectId) {

				var info = JSON.parse( data.reviewInfo );

				_this.nowSelectId = selectId;
				_this.appendList(info);
				_this.startRoll();

			};

		},
		startRoll: function() {

			//roll
			var num = $('[list]').length;

			if(num >= this.viewNum) {

				$("[roll-wrap]").jCarouselLite({
					vertical: true,
					visible: this.viewNum,
					auto: true,
					speed: this.rollSpeed
				});

			}

		},
		pushMessage: function(arr) {

			this.reqUrl = R.interfaces.post_up_screen;
			this.reqParam = {
				upJson: JSON.stringify(arr),
				pkActivity: this.nowSelectId 
			};
			this.req(function(data){

				oTip.say(data.msg);

			}, function(){

				oTip.say(data.msg);

			});

		},
		up: function(aCheck) {

			var	i,
				num,
				isChecked,
				result,
				content;

			result = [];
			num = aCheck.length;

			for (i=0; i<num; i++) {

				isChecked = aCheck.eq(i).attr('checked');
				content = aCheck.eq(i).attr('content');

				if(isChecked) {
					result.push(content);
				}
			}

			if(!result.length) {
				return;
			}

			this.pushMessage(result);

		},
		selectAll: function(oThis) {

			var isAll,
				aCheck;
			
			isAll = oThis.attr('checked');
			aCheck = $('[check]');

			if(isAll) {
				aCheck.attr('checked', 'checked');
			} else {
				aCheck.removeAttr('checked');
			}

		},
		appendList: function(data) {

			var sNewHtml = oTplList(data);
			var oNew = $(sNewHtml);
			this.oDataWrap.prepend(oNew);

		}

	});

	var oStep1 = new step3();
	
});
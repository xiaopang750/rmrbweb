/**
 *description:电子优惠券列表
 *author:fanwei
 *date:2014/08/10
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require("../../../widget/dom/fenye");
	var oTip = require('../../../widget/dom/tip');
	var oTplList = require("../../../tpl/spread/elc_sale/list");
	var oSetBox = require('../../../box/spread/set_box');
	var oSend = require('../../../main/spread/base/send');
	var remove = require("../../../driver/remove");
	var calendar = require('../../../widget/form/calendar');

	var list = R.Class.create(R.until, {

		initialize: function() {
			
			this.defaultParam = {
				pageSize: 8
			};
			this.oTime = $('[search-time]');
			this.oName = $('[search-name]');
			this.oSelectTime = $('[select-time]');
			this.oSearchBtn = $('[search-btn]');

			this.showPage();	
			this.initRemove();	
			this.showCalendar();
			this.events();
		},
		showCalendar: function(){

			var oCalendara = new calendar({
				ele: '[search-time]'
			});

		},
		events: function(){

			var _this = this;

			this.oSearchBtn.on('click', function(){

				_this.search();

			});

		},
		search: function(){

			var name = this.oName.val();
			var time = this.oTime.val();
			var selectTime = this.oSelectTime.val();

			this.defaultParam['couponsDate'] = time;
			this.defaultParam['activityName'] = name;
			this.defaultParam['isOutDate'] = selectTime;

			this.oPage.refresh(this.defaultParam);

		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.del_elc_data,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'couponsId': aid
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.defaultParam);

				}
			});
		},
		showPage: function() {
		
			var _this = this;

			this.oPage = new fenye(R.interfaces.get_elc_data, oTplList, this.defaultParam,'', function(data){
				
				console.log(data);

			});

		}

	});

	var oList = new list();
	
});
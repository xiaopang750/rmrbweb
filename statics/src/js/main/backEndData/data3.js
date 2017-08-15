/**
 *description:数据统计3
 *author:fanwei
 *date:2014/10/15
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var select = require('../../widget/dom/select');
	var oTplAct = require('../../tpl/backEndData/temp5');
	var oTplActAll = require('../../tpl/backEndData/temp7');
	var tab = require('../../widget/dom/tab');
	
	var BackEndData3 = R.Class.create(R.until, {

		initialize: function() {	

			this.oActWrap = $('[data-wrap]');
			this.oAllActWrap = $('[data-wrap-all]')
			this.oActSeachBtn = $('[search-btn]');
			this.oSearchInput = $('[act-search-input]');
			this.showAcititySelect();
			this.showAllAct();
			this.events();

			var oTab = new tab({
				oWrap: $('[tab-wrap]')
			});

			oTab.init();
		},
		events: function() {

			var _this = this;

			this.oActSeachBtn.on('click', function(){

				_this.searchAcitivity( _this.oSearchInput );

			});

		},
		searchAcitivity: function(oThis) {

			var _this = this;
			var str = oThis.val();

			if(str) {

				this.reqUrl = R.interfaces.searchActivity;
				this.reqParam = {
					topic: str
				};
				this.req(function(data){

					_this.oAcitivitySelect.clear();
					_this.oAcitivitySelect.render(data.data);

				});
			}	

		},
		showAcititySelect: function() {

			var _this = this;

			this.oAcitivitySelect = new select({
				ele: $('[act-select]'),
				tpl: '{{each activities}}<option aid="{{$value.pkActivity}}">{{$value.activitytopic}}</option>{{/each}}',
				onChange: function(oThis, option) {

					var nowId = option.attr('aid');
					_this.activityid = nowId; //活动id
					
					_this.showAct(nowId);

				}
			});

		},
		showAct: function(id) {

			var _this = this;

			this.reqUrl = R.interfaces.data5;
			this.reqParam = {
				pkActivity: id
			}
			this.req(function(data){
				
				_this.render(_this.oActWrap, oTplAct, data.data);

			});

		},
		showAllAct: function() {

			var _this = this;

			this.reqUrl = R.interfaces.data7;
			this.req(function(data){

				_this.render(_this.oAllActWrap, oTplActAll, data.data);

			});

		}

	});

	var oBackEndData3 = new BackEndData3();
	
});
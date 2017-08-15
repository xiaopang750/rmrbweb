/**
 *description:行业维护列表
 *author:fanwei
 *date:2014/09/13
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require('../../../widget/dom/fenye');
	var select = require('../../../widget/dom/select');
	var oTplList = require('../../../tpl/admin/industry/list');
	var remove = require("../../../driver/remove");

	var industryList = R.Class.create(R.until, {

		initialize: function() {
			
			this.DEFAULT_PARAM = {
				pageSize: 8
			};
			
			this.initRemove();
			this.oSelect = $('[module-select]');
			this.pageInfo = this.parse();
			this.showSelect();
			this.events();

		},
		events: function() {

			var _this;

			_this = this;	

			$(document).on('click', '[link]', function(){

				var sHref = $(this).attr('href');
				var mid = sHref.indexOf('?') != - 1 ? '&' : '?';

				window.location = sHref + mid + 'code=' + _this.nowCode + '&key=' + _this.nowKey;

				return false;

			});

		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.industry_remove,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');;

					this.param = {
						'pkDictionarySub': aid
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.DEFAULT_PARAM);

				}
			});

		},
		showSelect: function() {
			
			var _this = this;

			var oModuleSelect = new select({
				ele: this.oSelect,
				url: R.interfaces.industry_module,
				changeData: function(data) {
					return data.data;
				},
				tpl: '{{each datas}}<option value="{{$value.dictionaryCode}}" key="{{$value.pkDictionaryMain}}">{{$value.dictionaryName}}</option>{{/each}}',
				onReady: function(oSelect, oOption, nowIndex) {

					var aOption = oSelect.children();

					_this.nowCode = _this.pageInfo.code ? _this.pageInfo.code : oSelect.val();
					
					aOption.each(function(i){

						if(aOption.eq(i).val() == _this.nowCode) {
							oSelect[0].selectedIndex = i;
						}

					});

					_this.showPage(_this.nowCode);

					_this.nowKey = oOption.attr('key');	

				},
				onChange: function(oSelect, oOption, nowIndex) {

					_this.nowCode = oSelect.val();

					_this.DEFAULT_PARAM['dataSub.dictionaryCode'] = _this.nowCode;

					_this.oPage.refresh( _this.DEFAULT_PARAM );

					_this.nowKey = oOption.attr('key');

				}
			});

		},
		showPage: function(nowCode) {

			this.DEFAULT_PARAM['dataSub.dictionaryCode'] = nowCode;

			this.oPage = new fenye(R.interfaces.industry_list, oTplList, this.DEFAULT_PARAM, '', function(data){
				console.log(data);
			});
		}

	});

	var oIndustryList = new industryList();
	
});
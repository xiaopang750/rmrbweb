/**
 *description:电子优惠券领取详情
 *author:fanwei
 *date:2014/09/13
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require('../../../widget/dom/fenye');
	var oTplList = require('../../../tpl/spread/elc_sale/detail');
	
	var elcList = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();

			this.DEFAULT_PARAM = {
				pageSize: 8,
				pkCoupons: this.pageInfo.pid
			};

			this.oSelect = $('[module-select]');
			this.showSelect();
			this.showPage();
			this.events();

		},
		events: function() {

			var _this;

			_this = this;	

			this.oSelect.on('change', function(){

				_this.nowCode = $(this).val();

				_this.DEFAULT_PARAM['couponsStatus'] = _this.nowCode;
				_this.oPage.refresh( _this.DEFAULT_PARAM );

			});

		},	
		showSelect: function() {

			var i,
				num,
				info,
				_this;	

			_this = this;
			this.reqUrl = R.interfaces.detail_elc_stauts;
			this.req(function(data){
				console.log(data);
				info = data.data.status;
				num = info.length;

				for(i=0; i<num; i++) {

					var oOption = $('<option value='+ info[i].code + '>'+ info[i].name +'</option>');

					_this.oSelect.append(oOption);

				}

			});

		},
		showPage: function() {

			this.oPage = new fenye(R.interfaces.detail_elc, oTplList, this.DEFAULT_PARAM, '', function(data){
				console.log(data);
			});
		}

	});

	var oElcList = new elcList();
	
});
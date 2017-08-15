/**
 *description:数据统计
 *author:fanwei
 *date:2014/09/25
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var tab = require("../../widget/dom/tab");
	
	var BackEndData = R.Class.create(R.until, {

		initialize: function() {	
			
			this.pageInfo = this.parse();

			this.type = this.pageInfo.dataType;
			this.nowReqUrl = null;
			this.nowParam = null;
			this.nowTpl = null;
			this.oWrap = $('[data-wrap]');
			this.renderPage();

		},
		chooseParam: function() {

			switch(this.type) {

				case "001":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data1;

					//tab
					var oTab = new tab({
						oWrap: $('')
					});

				break;

				case "002":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data2;
				break;

				case "003":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data3;
				break;

				case "004":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;

				case "005":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data5;
				break;

				case "006":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;

				case "007":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data7;
				break;

				case "008":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;

				case "009":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data9;
				break;

				case "010":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;


				case "011":
					this.nowParam = {

					};
				break;

				case "012":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;

				case "013":
					this.nowParam = this.pageInfo
					this.nowReqUrl = R.interfaces.data13;
				break;

				case "014":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;

				case "015":
					this.nowParam = this.pageInfo
					this.nowReqUrl = R.interfaces.data15;
				break;

				case "016":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data16;
				break;

				case "017":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data17;
				break;

				case "018":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data18;
				break;

				case "019":
					this.nowParam = this.pageInfo;
					this.nowReqUrl = R.interfaces.data19;
				break;

				case "020":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;

				case "021":
					this.nowParam = {

					};
					this.nowReqUrl = '';
				break;
			}

		},
		chooseTpl: function() {

			switch(this.type) {

				case "001":
					this.nowTpl = require('../../tpl/backEndData/temp1');
				break;

				case "002":
					this.nowTpl = require('../../tpl/backEndData/temp2');
				break;

				case "003":
					this.nowTpl = require('../../tpl/backEndData/temp3');
				break;

				case "004":
					this.nowTpl = require('../../tpl/backEndData/temp4');
				break;

				case "005":
					this.nowTpl = require('../../tpl/backEndData/temp5');
				break;

				case "006":
					this.nowTpl = require('../../tpl/backEndData/temp6');
				break;

				case "007":
					this.nowTpl = require('../../tpl/backEndData/temp7');
				break;

				case "008":
					this.nowTpl = require('../../tpl/backEndData/temp8');
				break;

				case "009":
					this.nowTpl = require('../../tpl/backEndData/temp9');
				break;

				case "010":
					this.nowTpl = require('../../tpl/backEndData/temp10');
				break;

				case "011":
					this.nowTpl = require('../../tpl/backEndData/temp11');
				break;

				case "012":
					this.nowTpl = require('../../tpl/backEndData/temp12');
				break;

				case "013":
					this.nowTpl = require('../../tpl/backEndData/temp13');
				break;

				case "014":
					this.nowTpl = require('../../tpl/backEndData/temp14');
				break;

				case "015":
					this.nowTpl = require('../../tpl/backEndData/temp15');
				break;

				case "016":
					this.nowTpl = require('../../tpl/backEndData/temp16');
				break;

				case "017":
					this.nowTpl = require('../../tpl/backEndData/temp17');
				break;

				case "018":
					this.nowTpl = require('../../tpl/backEndData/temp18');
				break;

				case "019":
					this.nowTpl = require('../../tpl/backEndData/temp19');
				break;

				case "020":
					this.nowTpl = require('../../tpl/backEndData/temp20');
				break;

				case "021":
					this.nowTpl = require('../../tpl/backEndData/temp21');
				break;
			}

		},
		renderPage: function() {

			var _this = this;

			this.chooseParam();
			this.chooseTpl();

			if(this.nowReqUrl) {

				this.reqUrl = this.nowReqUrl;
				this.reqParam = this.nowParam;
				this.req(function(data){
					console.log(data);
					_this.render( _this.oWrap, _this.nowTpl, data.data );

				});
				
			} else {

				_this.render( _this.oWrap, _this.nowTpl, {} );

			}

		}

	});

	var oBackEndData = new BackEndData();
	
});
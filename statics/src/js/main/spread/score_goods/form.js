/**
 *description:商品兑换积分规则添加编辑
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require("../../../tpl/spread/score_goods/form");
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oTip = require('../../../widget/dom/tip');
	var uploadBox = require('../../../box/upload/upload');
	
	var ruleAddEdit = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.pid = this.pageInfo.pkExchange;
			this.oWrap = $('[form-wrap]');
			this.judge();
		},
		judge: function() {

			if(this.pid) {

				this.subUrl = R.interfaces.edit_goodscore;
				this.edit();
				
			} else {

				this.subUrl = R.interfaces.add_goodscore;
				this.add();
			}

		},
		add: function() {

			this.render(this.oWrap, oTplList, {exchange:{}});
			this.submit();

		},
		edit: function() {

			var _this = this;

			this.reqUrl = R.interfaces.find_goodscore;
			this.reqParam = {
				pkExchange: this.pid
			};
			this.req(function(data){

				_this.render(_this.oWrap, oTplList, data.data);
				_this.submit();
			});

		},
		submit: function() {

			var _this = this;

			var oForm = new ajaxForm({

				subUrl: this.subUrl,
				fnSumbit: function(data) {

					data['exchange.pkExchange'] = _this.pid;

					return data;

				},
				sucDo: function(data) {
					
					window.location = __url__data['productExchangeList'];

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oForm.upload();

		}

	});

	var oRuleAddEdit = new ruleAddEdit();
	
});
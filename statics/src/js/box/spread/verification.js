/**
 *description:到店有礼核销弹框
 *author:fanwei
 *date:2014/09/21
 */
define(function(require, exports, module){
		
	var oTplBox = require('../../tpl/box/spread/verification_box');
	var dialog = require('../../widget/dom/dialog');
	var select = require('../../widget/dom/select');
	var oTip = require('../../widget/dom/tip');

	var verification = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.createBox();
			this.events();	
			this.pkSign = '';
			this.pkActivity = '';
			this.type = '1' //输入验证码确定 ; 2//选择会员确定;

			/*this.selecter = new select({
				ele: this.oSelect,
				tpl: '{{each data.signs}}<option value="{{$value.pkSign}}">{{$value.accountid}}</option>{{/each}}'
			});*/
			
		},
		initBox: function() {

			this.type = '1';
			this.oSelect.html('<option>请选择核销的会员</option>');
			this.oSelect.hide();
			this.oInput.val('');
			this.oCodeArea.show();

		},
		createBox: function() {

			this.oBox = new dialog({
				boxTpl: oTplBox
			});

			this.oWrap = this.oBox.dom();
			this.getEle();

		},
		judgeHasMember: function(sCode) {

			var _this = this;

			this.reqUrl = R.interfaces.gift_find_member;
			this.reqParam = {
				pkActivity: this.pkActivity,
				code: sCode
			};

			this.req(function(data){

				_this.oBox.close();
				oTip.say(data.msg);

			}, function(data){

				if(data.data) {

					_this.selecter.render(data);
					_this.oSelect.show();
					_this.oCodeArea.hide();
					_this.type = '2';
					oTip.say('存在多个会员,请选择会员核销');

				} else {

					oTip.say(data.msg);	
				}

			});

		},
		memberGift: function(mid){

			var _this = this;

			this.reqUrl = R.interfaces.gift_give_member;
			this.reqParam = {
				pkSign: mid
			};
			this.req(function(data){

				oTip.say(data.msg);
				_this.oBox.close();

			},function(data){

				oTip.say(data.msg);

			});	

		},
		getEle: function() {

			this.oSelect = this.oWrap.find('[verification-select]');
			this.oInput = this.oWrap.find('[code-input]');
			this.oConfirm = this.oWrap.find('[confirm]');
			this.oCodeArea = this.oWrap.find('[code-area]');

		},
		judge: function() {

			var sCode;

			sCode = this.oInput.val();

			if(!sCode) {

				oTip.say('验证码不能为空');
				return false;
			} else {

				return sCode;

			}

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[verification]', function(){

				_this.pkActivity = $(this).attr('aid');
				_this.oBox.show();

			});

			this.oConfirm.on('click', function(){

				if(_this.type == '1') {

					var result = _this.judge();
					if(result) {
						_this.judgeHasMember(result);
					}	

				} else if(_this.type == '2') {

					var mid = _this.oSelect.val();
					_this.memberGift( mid );

				}

			});


			this.oBox.onClosed = function() {

				_this.initBox();

			};

		}

	});

	module.exports = verification;


	
});
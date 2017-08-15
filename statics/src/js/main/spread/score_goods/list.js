/**
 *description:商品兑换积分规则列表
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require("../../../tpl/spread/score_goods/list");
	var oTplPicText = require("../../../tpl/spread/score_goods/pic_text");
	var oTip = require('../../../widget/dom/tip');
	var fenye = require("../../../widget/dom/fenye");
	var oTplChange = require("../../../tpl/box/spread/exchange");
	require('../../../box/spread/select_pic_type');
	var oSend = require('../base/send');
	var oSetBox = require('../../../box/spread/set_box');
	var dialog = require('../../../widget/dom/dialog');
	var remove = require("../../../driver/remove");
	var oTplStatus = require("../../../tpl/spread/chose_status");
	var timeBox = require('../../../box/spread/set_time_box');
	var jqcode = require('../../../widget/qcode/jqcode');
	var qcode = require('../../../widget/qcode/qcode');
	var copyBox = require("../../../box/global/copyTextBox");
	var oCopyBox = new copyBox();

	var ruleList = R.Class.create(R.until, {

		initialize: function() {
			
			var _this = this;

			this.pageInfo = this.parse();
			this.oWrap = $('[list-wrap]');
			this.defaultParam = {pageSize: 8};
			this.showPage();
			this.renderChangeBox();
			this.removeGoods();
			this.removePic();
			this.createLay();
			this.events();
			//oChoseStatus.showPage();

		},
		showCodeLay: function(oThis, url) {

			var l = oThis.offset().left;
			var t = oThis.offset().top;
			var w = oThis.width();

			this.oCodeWrap.css({
				left: l + w + 10,
				top: t,
				display: 'block'
			});

			if(!status) {
				
				this.showCode(url);	
			}
			
		},
		createLay: function(cb) {

			var tempStr = 
			'<div class="g-qcode">'+
				'<div></div>'+
				'<div class="tc">'+
					'<a href="javascript:;">复制二维码链接</a>'+
				'</div>'+
			'</div>';

			this.oCodeWrap = $(tempStr);

			this.oCodeInner = this.oCodeWrap.children().eq(0);

			this.oCopyCodeBtn = this.oCodeWrap.children().eq(1).children().eq(0);

			this.oCodeWrap.css({
				position: 'absolute',
				display: 'none'
			});

			$('body').append(this.oCodeWrap);

			cb && cb();

		},
		showCode: function(url) {

			var hasCreadTed;

			hasCreadTed = this.oCodeInner.children().length;

			if(!hasCreadTed) {

				var supportCanvas;

				try {

					document.createElement('canvas').getContext('2d');

					supportCanvas = 'canvas';

				}catch(e){

					supportCanvas = 'table';

				}
				
				this.oCodeInner.qrcode({
					render: supportCanvas,
					text: url,
					width: 120,
					height: 120
				});

			}
		},
		removeGoods: function() {

			var oRemoveGoods = new remove({
				removeUrl: R.interfaces.del_goodscore,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'pkExchange': aid
					};
				},
				onsuc: function(oThis) {

					var oList = oThis.parents('[rule-list]');
					oList.remove();

				}
			});

		},
		removePic: function() {

			var _this = this;

			var oRemovePic = new remove({
				removeUrl: R.interfaces.post_remove_gift_list,
				removeName: '[removepic]',
				onclick: function(oThis) {

					var rid = oThis.attr('rid');

					this.param = {
						'pkActivity': rid
					};
				},
				onsuc: function(oThis) {

					var oList = oThis.parents('[rule-list]');
					oList.remove();

				}
			});
		},
		events: function(){

			var _this = this;
			var timer = null;
			var delay = 500;


			this.oWrap.on('click', '[exchange]', function(){

				_this.exchange($(this));

			});	

			$(document).on('click', '[change-type]', function(){

				_this.changeType($(this));

			});

			//状态筛选图文消息
			this.oWrap.on('click', '[status]', function(){

				var status = $(this).attr('status');

				_this.DEFAULT_PARAM['status'] = status;

				_this.oPage.refresh( _this.DEFAULT_PARAM, _this.nowReqUrl, this.oNowTpl );

			});

			$(document).on('mouseover', '[view-code]', function(){

				clearTimeout(timer);
				_this.showCodeLay($(this), _this.codeUrl);

			});

			$(document).on('mouseout', '[view-code]', function(){

				timer = setTimeout(function(){

					_this.oCodeWrap.hide();

				},delay);
			});

			this.oCodeWrap.on('mouseenter', function(){

				clearTimeout(timer);

			});

			this.oCodeWrap.on('mouseleave', function(){

				_this.oCodeWrap.hide();

			});

			this.oCopyCodeBtn.on('click', function(){

				oCopyBox.copy( _this.codeUrl );

			});

		},
		changeType: function(oThis) {

			var type = oThis.attr('change-type');
			var _this = this;

			if(type == 'goods') {

				this.oNowTpl = oTplList;
				this.DEFAULT_PARAM = {pageSize: 8};
				this.nowReqUrl = R.interfaces.find_goodscore_list;

			} else if(type == 'pic') {

				this.oNowTpl = oTplPicText;
				this.DEFAULT_PARAM = {pageSize: 8, activityType:'008'};
				this.nowReqUrl = R.interfaces.get_gift_list;
			}

			this.oPage.refresh(this.DEFAULT_PARAM, this.nowReqUrl, this.oNowTpl);

			this.oPage.cb = function() {

				_this.oSelectWrap = $('[select-area]');
				oThis.addClass('active').siblings().removeClass('active');

			};
		
		},
		exchange: function(oThis) {

			this.nowChangeId = oThis.attr('aid');
			this.oBox.show();

		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.find_goodscore_list, oTplList, this.defaultParam);

			this.oPage.cb = function(data) {
				
				_this.codeUrl = data.productEWMUrl;

			};
		},
		renderChangeBox: function() {

			var oBox = $(oTplChange());
			var str,
				_this;

			_this = this;
			$('body').append(oBox);

			this.oBox = new dialog({
				boxSelector: '[change-box]'
			});

			this.oTel = $('[tel-input]');

			this.oBox.onConfirm = function() {
				
				str = _this.oTel.val();

				if(!str || !/\d{11}/gi.test(str)) {
					oTip.say('手机号格式不正确');
					return;
				}

				_this.reqUrl = R.interfaces.exchange_goodscore;
				_this.reqParam = {
					cellphone: str,
					pkExchange: _this.nowChangeId
				};
				
				_this.req(function(data){
					_this.oBox.close();
					_this.oTel.val('');
					oTip.say(data.msg);
				}, function(data){
					oTip.say(data.msg);
				});

			};		

		}

	});

	var oRuleList = new ruleList();
	
});
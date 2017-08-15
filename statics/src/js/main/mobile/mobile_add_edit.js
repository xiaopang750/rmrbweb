/**
 *description:手机建站-添加-编辑
 *author:fanwei
 *date:2014/07/20
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var mobileView = require("../../sub/mobile/mobile_view");
	var mobileForm = require("../../sub/mobile/mobile_form");
	var tree = require("../../sub/mobile/tree");
	var jqcode = require('../../widget/qcode/jqcode');
	var qcode = require('../../widget/qcode/qcode');
	var oTip = require('../../widget/dom/tip');
	//var unloadTip = require('../../lib/until/unloadTip')('您还没有保存,确定离开此页面么?');
	
	var pageIndex = R.Class.create(R.until, {

		initialize: function() {		
			
			
			this.oCodeWrap = $('[code-wrap]');
			this.oBack = $('[sc = back]');
			this.oBtnArea = $('[btn-area]');
			this.pageInfo  = this.parse();

			this.oTplMobile = '';
			this.oTplForm = '';
			this.pageInfo = this.parse();
			this.firstCreate = false;
			this.events();

			this.modelMap = {
				'indexModelOne': 'index.html',
				'indexModelTwo': 'index2.html',
				'indexModelThree': 'index3.html',
				'pageModelOne': 'card3.html',
				'pageModelTwo': 'card2.html',
				'pageModelThree': 'card.html',
				'pageModelFour': 'card4.html'
			};
			this.nowModelType = this.pageInfo.modelCode;

			this.CODE_URL_BASE = "";
			this.codeWidth = 200;
			this.codeHeight = 200;
			
		},
		init: function() {

			this.judge();
			this.reqPage();
			this.oTree = new tree();
			this.oTree.show();

		},
		events: function() {

			var _this = this;
			var timer,
				delay,
				backUrl;

			delay = 300;	
			this.oCodeWrap.on('mouseenter', function(){

				clearTimeout(timer);
				if(_this.oCodeLay) {
					_this.oCodeLay.show();
				}

			});

			this.oCodeWrap.on('mouseleave', function(){

				clearTimeout(timer);
				timer = setTimeout(function(){

					_this.oCodeLay.hide();

				},delay);

			});

			//back返回
			this.oBack.on('click', function(){

				backUrl = __url__data['pageList'] + '&pkSite=' + __url__data['pkSite'];

				window.location = backUrl;

				return false;

			});

		},
		createCodeLay: function(oWrap, url) {

			if(!this.firstCreate) {

				this.firstCreate = true;

				oWrap.css({
					position: 'relative',
					zIndex: 500
				});

				this.oCodeLay = $('<div class="g-qcode"></div>');

				this.oCodeLay.css({
					width: this.codeWidth,
					height: this.codeHeight,
					position: "absolute",
					left: 0,
					top: '29px',
					zIndex:2000,
					display: 'none'
				});

				oWrap.append(this.oCodeLay);

				this.showCode(url);

			}

		},
		showCode: function(url) {
			
			var url;

			var supportCanvas;

			try {

				document.createElement('canvas').getContext('2d');

				supportCanvas = 'canvas';

			}catch(e){

				supportCanvas = 'table';

			}

			if(!this.pageInfo.pkPage || this.pageInfo.pkPage === 'null') {

				this.pageInfo.pkPage = this.pageInfo.pkSite;

			}
			
			this.oCodeLay.qrcode({
				render: supportCanvas,
				text: url,
				width: this.codeWidth,
				height: this.codeHeight
			});

		},
		judge: function() {

			var pageType;
			pageType = this.pageInfo.modelCode;
			
			switch(pageType) {

				case 'indexModelOne':
					this.oTplMobile = require('../../tpl/mobile_view/main/type1');
					this.oTplForm = require('../../tpl/mobile_form/main/type1');
				break;

				case 'indexModelTwo':
					this.oTplMobile = require('../../tpl/mobile_view/main/type2');
					this.oTplForm = require('../../tpl/mobile_form/main/type2');
				break;

				case 'indexModelThree':
					this.oTplMobile = require('../../tpl/mobile_view/main/type3');
					this.oTplForm = require('../../tpl/mobile_form/main/type3');
				break;

				case 'pageModelOne':
					this.oTplMobile = require('../../tpl/mobile_view/sub/type1');
					this.oTplForm = require('../../tpl/mobile_form/sub/type1');
				break;

				case 'pageModelTwo':
					this.oTplMobile = require('../../tpl/mobile_view/sub/type2');
					this.oTplForm = require('../../tpl/mobile_form/sub/type2');
				break;

				case 'pageModelThree':
					this.oTplMobile = require('../../tpl/mobile_view/sub/type3');
					this.oTplForm = require('../../tpl/mobile_form/sub/type3');
				break;

				case 'pageModelFour':
				
					this.oTplMobile = require('../../tpl/mobile_view/sub/type4');
					this.oTplForm = require('../../tpl/mobile_form/sub/type4');
				break;
			}


		},
		reqPage: function() {

			var _this = this;

			this.reqUrl = R.interfaces.get_mobile_data;
			this.reqParam = this.pageInfo;

			/*if(localStorage.haha) {
				缓存数据
				var haha = JSON.parse(localStorage.haha);
				
				console.log(JSON.stringify(haha));

				console.log(haha);
				_this.render(_this.oViewWrap, _this.oTplMobile, haha);
				_this.render(_this.oFormWrap, _this.oTplForm, haha);

			} else {*/

				this.req(function(data){

					if(!_this.oTplMobile && !_this.oTplForm) {
						oTip.say('参数有误');
						return;
					}

					_this.oViewWrap = $('[data-ele = m-view-wrap]');
					_this.oFormWrap = $('[data-ele = m-view-form]');
					_this.CODE_URL_BASE = data.data.domain;
					_this.createCodeLay( _this.oCodeWrap, data.data.shortUrl );
					_this.oCodeWrap.show();
					_this.oBtnArea.show();
					
					//data.data.content.modelars.modelData[0].intro = data.data.content.modelars.modelData[0].intro.replace('script', '');



					//data.data.content.modelars.modelData[0].intro = 2;
					//return;

					//return;

					//localStorage.haha = JSON.stringify(data.data);
					window.__allPages = data.data.pages;

					//console.log(data.data);
					_this.render(_this.oViewWrap, _this.oTplMobile, data.data);
					_this.render(_this.oFormWrap, _this.oTplForm, data.data);

					var oMobile = new mobileView();

					var oForm = new mobileForm({
						formWrap : _this.oFormWrap,
						formTpl : _this.oTplForm,
						viewWrap : _this.oViewWrap,
						viewTpl : _this.oTplMobile,
						data: data.data,
						oMobile: oMobile
					});
					
					oForm.init();
					oMobile.init();
					//_this.showEditor();
				});
			/*}*/
		}

	});

	var oPageIndex = new pageIndex();

	oPageIndex.init();
	
});
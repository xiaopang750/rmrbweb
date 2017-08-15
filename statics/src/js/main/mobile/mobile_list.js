/**
 *description:查看详情
 *author:fanwei
 *date:2014/07/22
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplList = require("../../tpl/mobile_list/list");
	var fenye = require("../../widget/dom/fenye");
	var modify = require("../../widget/dom/modify2");
	var tree = require("../../sub/mobile/tree");
	var jqcode = require('../../widget/qcode/jqcode');
	var qcode = require('../../widget/qcode/qcode');
	var oTip = require('../../widget/dom/tip');
	var remove = require("../../driver/remove");
	var copyBox = require("../../box/global/copyTextBox");
	var template = require("../../lib/template/template");
	var oCopyBox = new copyBox();
	
	var Mlist = R.Class.create(R.until, {

		initialize: function() {

			this.pageInfo = this.parse();
			this.oWrap = $('[data-ele = data-wrap]');
			this.first = false;
			this.lock = false;
			this.tipMsg = '请将您的域名在域名管理中添加一条记录解析指向124.207.139.199，添加完成后发邮箱至yangguilin@jinwoniu.com';

			this.oListName = $('[mobile-list-name]');
			this.defaultParam = {pkSite: this.pageInfo.pkSite, pageSize: 8};
			this.oTree = new tree();

		},
		init: function() {

			this.showPage();

			this.oTree.show();

			this.events();

			this.createLay();

			this.initRemove();

			this.startModify();

		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.delete_mobile_site,
				onclick: function(oThis) {

					var siteId = oThis.attr('siteId');
					var pageId = oThis.attr('pageId');

					this.param = {
						'pkPage': pageId,
						'pkSite': siteId
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.defaultParam);

				}
			});

		},
		showCode: function(obj, oThis) {
			
			var url;

			obj.html('');

			var supportCanvas;

			try {

				document.createElement('canvas').getContext('2d');

				supportCanvas = 'canvas';

			}catch(e){

				supportCanvas = 'table';

			}

			url = oThis.attr('url');
			
			obj.qrcode({
				render: supportCanvas,
				text: url,
				width: 120,
				height: 120
			});

		},
		createLay: function() {

			this.oCodeWrap = $('<div class="g-qcode"><div></div></div>');

			this.oCodeInner = this.oCodeWrap.children().eq(0);

			this.oCodeWrap.css({
				position: 'absolute',
				display: 'none'
			});

			$('body').append(this.oCodeWrap);

		},
		showLay: function(oThis, l, t, site ,page, model, status) {

			this.oCodeWrap.css({
				left: l,
				top: t,
				display: 'block'
			});

			if(!status) {
				
				this.showCode(this.oCodeInner, oThis);	
			}

			//oThis.attr('status', 'yes');
			
		},
		events: function() {

			var _this = this;

			//切换是否显示
			$(document).on('click', '[data-ele = switch]', function(){
					
				if(!_this.lock) {
					_this.lock = true;
					_this.switcher($(this));
				}
				
			});

			//复制
			$(document).on('click', '[copy]', function(){

				_this.copy($(this));

			});

			//点击显示二维码
			$(document).on('click', '[data-ele = show-code]', function(){

				var l,
					t,
					site,
					page,
					status;

				l = $(this).offset().left + 40;
				t = $(this).offset().top - 65;
				site = $(this).attr('pkSite');
				page = $(this).attr('pkPage');
				model = $(this).attr('modelType');
				status = $(this).attr('status');

				_this.showLay($(this), l, t, site, page, model, status);

				return false;

			});

			$(document).on('click', function(){

				var isShow = _this.oCodeWrap.is(':visible');

				if(isShow) {
					_this.oCodeWrap.hide();
				}

			});
			

		},
		copy: function(oThis) {

			var model,
				site,
				page,
				_this;

			site = oThis.attr('pkSite');
			page = oThis.attr('pkPage');
			model = oThis.attr('modelType');
			_this = this;	

			url = oThis.attr('url');

			//老数据没有url，所以要发一个请求

			if(!url) {

				this.reqUrl = R.interfaces.findShortUrl;
				this.reqParam = {
					pkSite: site,
					pkPage: page
				};
				this.req(function(data){

					url = data.data.shortUrl;
					oCopyBox.copy(url);	
					
				});

			} else {
				oCopyBox.copy(url);	
			}
		},
		startModify: function() {

			var _this = this;

			//修改
			var oModify = new modify({
				oWrap : this.oWrap,
				target : '[data-ele=net]',
				onTrigger: function(oThis) {

					oTip.say( _this.tipMsg );

					return false;

					var oTarget = oThis.parents('[data-ele = list-wrap]').find('[data-ele=net]');

					this.oNowTarget = oTarget;

					this.showInput( oTarget );

				},
				onShow: function() {

					oTip.say( _this.tipMsg );

					return false;

				},
				onHide: function(oNow, isModify, nowStr) {

					var data,
						param,
						_this,
						page,
						site;

					if(isModify) {

						param = {};
						data = {};	
			 			data.pageUrl = nowStr;
			 			page = oNow.attr('page');
			 			site = oNow.attr('site');
			 			_this = this;

			 			param = {
			 				pkPage: page,
			 				pkSite: site,
			 				type: 'pageBasicInfo',
			 				content:  JSON.stringify(data)
			 			};

						this.reqUrl = R.interfaces.modify_site_url;
						this.reqParam = param;
						this.req(function(data){

							_this.hide();
							oNow.html(nowStr);

						}, function(data){
							oTip.say(data.msg);
							_this.hide();

						});

					} else {
						this.hide();
					}

				}
			});

		},
		switcher: function(oThis){
			
			var nowId = oThis.attr('pageId');
			var isShow,
				_this,
				nowView;

			_this = this;
			isShow = Number( !oThis.hasClass('active') );
			nowView = oThis.parents('[data-ele = list-wrap]').find('[view-btn]');

			this.reqUrl = R.interfaces.change_mobile_status;
			this.reqParam = {
				pkSite: this.pageInfo.pkSite,
				pkPage: nowId,
				type: 'pageBasicInfo',
				content: '{isused:'+  isShow+'}'
			};
			this.req(function(data){

				if(!isShow) {
					oThis.removeClass('active');
					nowView.hide();
				} else {
					oThis.addClass('active');
					nowView.show();
				}

				_this.lock = false;

			}, function(data){

				oTip.say(data.msg);

			});

		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.get_mobile_page, oTplList, this.defaultParam,'', function(data){
				console.log(data);
				if(!_this.first) {
					
					_this.CODE_URL_BASE = data.domain + "/wap/";
					_this.oListName.text(data.siteName + ' 站点列表');

					_this.first = true;

				}

			});

		}	

	});

	var oMlist = new Mlist();

	oMlist.init();
	
});
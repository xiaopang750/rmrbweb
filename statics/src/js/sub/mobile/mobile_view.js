/**
 *description:手机建站手机预览功能
 *author:fanwei
 *date:2014/07/20
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	//require("../../lib/event/scroll");

	var mobileView = R.Class.create(R.until, {

		initialize: function() {
			
			this.oCover = null;
			this.aDot = [];
			this.DOT_SIZE = 10;
			this.COVER_BORDER_WIDTH = 2;
			this.COVER_COLOR = "#ffaa3f";
			this.oViewWrap = $('[data-ele = m-view-wrap]');
			this.oFormWrap = $('[data-ele = m-view-form]');
			this.oSave = $('[data-ele = save-btn]');
			this.aPos = [
				{
					left: - this.DOT_SIZE/2,
					top: - this.DOT_SIZE/2
				},
				{
					left: '51%',
					top:- this.DOT_SIZE/2,
					marginLeft: - this.DOT_SIZE/2
				},
				{
					right: - this.DOT_SIZE/2,
					top: - this.DOT_SIZE/2
				},
				{
					left: - this.DOT_SIZE/2,
					bottom: - this.DOT_SIZE/2
				},
				{
					left: '51%',
					bottom: - this.DOT_SIZE/2,
					marginLeft: - this.DOT_SIZE/2
				},
				{
					right: - this.DOT_SIZE/2,
					bottom: - this.DOT_SIZE/2
				}
			]
			
		},
		init: function() {

			this.createLay();
			this.createCoverPoint();
			this.events();
			this.roll();

		},
		roll: function() {

			//需要修改
			var oBannerWrap = $('.mobile-banner');

			if(!oBannerWrap.length) return;

			var aLi = oBannerWrap.find('li');
			var oUl = oBannerWrap.children().eq(0);
			var num = aLi.length;
			var sinWidth = aLi.outerWidth(true);
			var iNow = 0;
			var timer;
			var sumWidth = sinWidth * num;

			oUl.css('width', sumWidth);

			//clearInterval(timer);
			timer = setInterval(function(){

				iNow++;

				if(iNow > num-1) {
					iNow = 0;
				}

				tab(iNow);

			},3000);


			function tab(iNow) {

				oUl.stop().animate({left: -sinWidth* iNow});

			}


		},
		events: function() {

			var _this = this;

			//移入碰撞检测边界
			$(document).on({

				mouseenter: function(){

					_this.showLay();

					var l,
						t,
						w,
						h,
						nowName;

					nowName = $(this).attr('data-name');
					_this.oCover.attr('module-name', nowName);

					l = $(this).offset().left - _this.COVER_BORDER_WIDTH/2;
					t = $(this).offset().top - _this.COVER_BORDER_WIDTH/2;
					w = $(this).width();
					h = $(this).height();

					_this.setLay(w, h, l ,t);
					//_this.setCoverPoint($(this), w, h);
				}

			}, '[data-ele = cd-test]');




			//移入手机高亮
			$(document).on('mouseenter', '[data-ele = m-view-wrap]' ,function(e){
				$(this).addClass('active');
			});


			this.oCover.on('mouseleave', function(){
				_this.hideLay();
			});

			//点击显示
			this.oCover.on('click', function(){
				_this.nowName = $(this).attr('module-name');
				_this.choseLay( _this.nowName );
			});

			//移出hide cover层
			$(document).on('mouseleave', '[data-ele = m-view-wrap]' ,function(){
				var isShow;
				isShow = _this.oCover.is(":visible");
				if( !isShow ) {
					$(this).removeClass('active');
				}

			});

		},
		choseLay: function(name) {

			this.selectShow(name);
			this.showCover(name);
			this.oSave.attr('name', name);

		},
		hideLay: function() {

			this.oCover.hide();

		},
		showLay: function() {

			this.oCover.show();

		},
		createLay: function() {

			this.oCover = $('<div></div>');

			for (var i=0; i<6; i++) {
				var oDot = $('<div></div>');
				oDot.css({
					position: 'absolute',
					background: this.COVER_COLOR,
					width: this.DOT_SIZE,
					height: this.DOT_SIZE
				});
				oDot.css(this.aPos[i]);
				this.oCover.append(oDot);
				this.aDot.push(oDot);
			}

			this.oCover.css({
				position: 'absolute',
				border: this.COVER_BORDER_WIDTH + 'px solid '+ this.COVER_COLOR,
				cursor: 'pointer',
				display: 'none',
				zIndex: 400
			});

			var oNew = $('<div></div>');

			oNew.css({
				width: '100%',
				height: '100%',
				postion: 'absolute',
				left: 0,
				top: 0,
				background: '#fff',
				opacity: 0
			});

			this.oCover.append(oNew);


			$('body').append(this.oCover);
		},
		createCoverPoint: function() {

			this.oCoverPoint = $('<div dejifanwei></div>');
			$('body').append(this.oCoverPoint);

		},
		setCoverPoint: function(obj, w, h) {

			this.oCoverPoint.css({
				width: w,
				height: h,
				position: 'absolute',
				left: 0,
				top: 0,
				background: '#3071a9',
				opacity: 0.5,
				zIndex: 10
			});

			obj.append(this.oCoverPoint);

		},
		setLay: function(w,h,l,t) {

			this.oCover.css({
				width: w,
				height: h,
				left: l,
				top: t
			});

		},
		selectShow: function(name) {

			var aModule = this.oFormWrap.find('[data-name]');
			var oNow = this.oFormWrap.find('[data-name = '+ name +']');
			var isShow;

			isShow = oNow.is(":visible");

			if(!isShow) {
				aModule.hide();
				oNow.show();	
			}
		},
		showCover: function(name) {

			var nowLay = this.oViewWrap.find('[data-name = '+ name +']');
			var w,h;
			w = nowLay.width();
			h = nowLay.height();
			this.setCoverPoint(nowLay, w, h);

		}

	});

	module.exports = mobileView;
	
});


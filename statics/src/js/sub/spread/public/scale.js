/**
 *description:放大屏幕
 *author:fanwei
 *date:2014/09/07
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	
	var scaleScreen = R.Class.create(R.until, {

		initialize: function(opts) {
			
			this.oFull = $('[data-role = full]');
			this.oViewWrap = $('[view-wrap]');
			this.creatHolder();
			this.events();
			
		},
		events: function() {

			var _this = this;
			//full
			this.oFull.on('click', function(){

				var role = $(this).attr('data-role');
				
				if(role == 'full') {
					_this.full($(this));
				} else if(role == 'reset') {
					_this.reset($(this));
				}

			});

			$(window).on('resize', function(){

				var role = _this.oFull.attr('data-role');

				if(role == 'reset') {
					_this.reposition();	
				}

			});
		},
		full: function(oThis) {

			$('body').css('overflow-y', 'hidden');
			$('body').append(this.oViewWrap);
			this.oHolder.show();

			var w = $(window).width();
			var h = $(window).height();

			var l = this.oHolder.offset().left;
			var t = this.oHolder.offset().top;

			this.oViewWrap.css({
				left: l,
				top: t,
				position: 'absolute',
				zIndex: 4000
			});

			this.oViewWrap.animate({
				width: w,
				height: h,
				left: 0,
				top:0,
				marginTop: 0,
				marginLeft: 0
			});

			oThis.html('还原');
			oThis.attr('data-role', 'reset');

		},
		reset: function(oThis) {

			var l = this.oHolder.offset().left;
			var t = this.oHolder.offset().top;
			var _this = this;

			this.oViewWrap.animate({
				width: this.w,
				height: this.h,
				left: l,
				top: t
			}, function(){

				_this.oViewWrap.css({
					position: 'relative',
					left: 0,
					top: 0,
					margin: '20px auto'
				});

				_this.oHolder.hide();
				oThis.html('全屏');
				oThis.attr('data-role', 'full');
				$('body').css('overflow-y', 'auto');
				_this.oViewWrap.insertBefore(_this.oHolder);

			});

		},
		reposition: function() {

			var w = document.documentElement.clientWidth;
			var h = document.documentElement.clientHeight;

			this.oViewWrap.css({
				width: w,
				height: h
			});

		},
		creatHolder: function() {

			this.w = this.oViewWrap.outerWidth();
			this.h = this.oViewWrap.outerHeight();

			this.oHolder = $('<div></div>');
			this.oHolder.css({
				width: this.w,
				height: this.h,
				margin: '20px auto',
				display: 'none' 
			});

			this.oViewWrap.after(this.oHolder);

		}

	});
	
	var oScaleScreen = new scaleScreen();
	
});
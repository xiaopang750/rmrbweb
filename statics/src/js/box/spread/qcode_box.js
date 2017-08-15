/**
 *description:会议邀约显示二维码弹框
 *author:fanwei
 *date:2014/07/31
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var qcodeBoxTpl = require('../../tpl/box/spread/qcode_box');
	var dialog = require('../../widget/dom/dialog');
	//var tab = require('../../widget/dom/tab');

	var qCodeBox = R.Class.create(R.until, {

		initialize: function() {

			this.pageInfo = this.parse();

			this.defaultImageUrl = R.uri.assets + 'lib/holder/blank.gif';
			this.loadingUrl = R.uri.assets + 'lib/loading/g_loading.gif';
			this.viewWidth = 90;
			this.viewHeight = 90;

			//移入view二维码不消失
			/*this.viewDelayTimer = null;
			this.viewDelayTime = 300;*/

			this.events();
			this.firstLoad = false;

		},
		reqData: function(cb) {

			this.reqUrl = R.interfaces.get_code;
			this.req(function(data){
				
				cb && cb(data);
			});

		},
		showBox: function(cb) {

			var _this = this;

			this.reqData(function(data){
				
				_this.aid = data.data.channels[0].accountid;
				_this.aType = data.data.channels[0].accounttype;

				data.data.activityType = _this.pageInfo.activityType;

				var sBox = qcodeBoxTpl(data.data);

				var oBox = $(sBox);

				var firstIndex;

				$('body').append(oBox);

				_this.oBox = new dialog({
					boxSelector: $('[qcode-box]')
				});

				_this.changeType($('[typeChange]'), 0);

				cb && cb();

				_this.oBox.onClosed = function() {

					_this.oViewLay.hide();
					
				};

			});

			/*var oTab = new tab({
				oWrap: $('[qcode-box]')
			});

			oTab.init();*/

		},
		events: function() {

			var _this = this;

			//点击显示二维码
			$(document).on('click', '[qcode-btn]', function(){

				var l,
					t,
					w,
					h,
					oThis;

				_this.pkActivity = $(this).attr('aid');
				oThis = $(this);

				if(!_this.firstLoad) {

					_this.showBox(function(){

						w = _this.oBox.box.width();
						h = _this.oBox.box.height();
						l = oThis.offset().left - w - 20;
						t = oThis.offset().top - h/2 + oThis.height();
						_this.firstLoad = true;
						_this.locationBox(l, t);
						_this.createViewLay();
					});		

				} else {

					w = _this.oBox.box.width();
					h = _this.oBox.box.height();
					l = $(this).offset().left - w - 20;
					t = $(this).offset().top - h/2 + $(this).height();
					_this.locationBox(l, t);	

				}

			});

			//tab-head
			/*$(document).on('click', '[widget-role = tab-head]', function(){
				
				$(this).addClass('active').siblings().removeClass('active');
				_this.aid = $(this).attr('aid');
				_this.aType = $(this).attr('atype');
				_this.oViewLay.hide();

			});*/

			//download
			$(document).on('click', '[download]', function(){
				
				var oThis = $(this);

				_this.getDownViewParam(oThis, function(param){

					oThis.attr('href', '../activity/downloadEWM?' + param);

				});

			});

			//view
			$(document).on('click', '[view]', function(){

				var l,
					t,
					h,
					w,
					oThis;

				oThis = $(this);
				h = $(this).height();
				w = $(this).width();
				l = $(this).offset().left + w +10;
				t = $(this).offset().top - (_this.viewHeight - h)/2;

				//clearTimeout( _this.viewDelayTimer );
				_this.locationView(l, t);
				_this.getDownViewParam(oThis, function(param){
					console.log(param);
					_this.reqUrl = R.interfaces.view_code + '?' + param;
					_this.req(function(data){

						_this.showViewImage(data.data.pictrue);

					});

				});	

			});

			$(document).on('click', '[qcode-view-close]', function(){

				_this.oViewLay.hide();

			});

			/*$(document).on('mouseleave', '[view]', function(){

				_this.viewDelayTimer = setTimeout(function(){

					_this.oViewLay.hide();	

				},_this.viewDelayTime);

			});

			$(document).on('mouseenter', '[qcode-view-lay]', function(){
				clearTimeout( _this.viewDelayTimer );
			});	

			$(document).on('mouseleave', '[qcode-view-lay]', function(){
				_this.oViewLay.hide();
			});*/

			$(document).on('change', '[typeChange]', function(){

				var nowIndex = $(this).get(0).selectedIndex;

				_this.changeType($(this), nowIndex);

			});



			/*this.oBox.onClosed = function() {

				console.log('fsdf');

			};*/
			
		},
		changeType: function(oThis, index) {

			var oSelect = oThis[0];
			var nowOption = oSelect.options[index];

			this.aid = nowOption.value;
			this.aType = nowOption.getAttribute('atype');

		},
		getDownViewParam: function(oThis, cb) {

			//拼接下载，预览的参数
			var info,
				param,
				arr;

			param = '';
			arr = [];
			info = {
				pkActivity: this.pkActivity,
				pkShoparea: oThis.attr('pkid'),
				useType: 'sign_in',
				activityType: this.pageInfo.activityType,
				accountId: this.aid,
				ewmType: this.aType
			}

			if(this.pageInfo.activityType == '001') {
				info.pkShoparea = '';
			}

			for (var i in info) {

				arr.push( i + '=' + info[i] );

			}

			param = arr.join('&');

			cb && cb(param);

			$(this).attr('href', '../activity/downloadEWM?'+param);

		},
		locationBox: function(l, t) {

			this.oBox.box.css({
				left: l,
				top: t,
				margin: 0,
				padding: 0,
				position: 'absolute'
			});

			this.oBox.show();
		},
		locationView: function(l, t) {

			this.oViewLay.css({
				left: l,
				top: t,
				display: 'block'
			});

		},
		createViewLay: function() {

			var viewStr =
			'<div qcode-view-lay class="g-qcode">'+
				'<img src='+ this.defaultImageUrl +' width='+ this.viewWidth +' height='+ this.viewHeight +' viewImage>'+
				'<span class="close" qcode-view-close>×</span>'+
				'<span tip></span>'+
			'</div>';

			this.oViewLay = $(viewStr);

			this.oViewLay.css({
				display: 'none',
				position: 'absolute',
				width: this.viewWidth,
				height: this.viewHeight,
				zIndex: 4001,
				lineHeight: this.viewHeight + 'px',
				textAlign: 'center',
				color:'#fff'
			});

			this.oTip = this.oViewLay.find('[tip]');
			this.oViewImage = this.oViewLay.find('[viewImage]');

			this.oTip.css({
				position: 'absolute',
				width: '100%',
				left: 0,
				top: 10,
				display: 'none',
				color: '#ccc'
			});

			this.oViewLay.find('[qcode-view-close]').css({
				position: "absolute",
				right: 0,
				top: 0,
				zIndex: 2
			});

			$('body').append(this.oViewLay);
		},
		showViewImage: function(src) {

			var _this = this;

			this.oTip.hide();
			this.makeLoading();

			if(src) {

				var oImage = new Image();

				oImage.onload = function() {

					_this.oViewImage.attr({
						'src': src,
						width: _this.viewWidth,
						height: _this.viewHeight
					});
				};

				oImage.onerror = function() {

					_this.tipPicWrong();

				};
				
				oImage.src = src;

			} else {

				this.tipPicWrong();

			}
		},
		tipPicWrong: function() {

			this.oViewImage.attr('src', this.defaultImageUrl);
			this.oTip.html('图片生成失败');
			this.oTip.show();
		},
		makeLoading: function() {
			
			this.oViewImage.attr({
				width: '24',
				height: '24'
			});

			this.oViewImage.attr('src', this.loadingUrl);

		}

	});

	var oQcodeBox = new qCodeBox();
	
});
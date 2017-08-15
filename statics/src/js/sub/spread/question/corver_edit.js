/**
 *description:问卷添加编辑-编辑框
 *author:fanwei
 *date:2014/09/01
 */
 define(function(require, exports, module){
 	
 	var global = require("../../../driver/global");
 	var moveEnd = require('../../../widget/dom/contentEnd');
 	
 	var coverEdit = R.Class.create(R.until, {
 
 		initialize: function() {
 				
 			this.firstCreate = false;
 			this.createEditLay();
 			this.events();
 			this.limit();
 			this.oTarget = null;
 			this.delayLimit = 300;

 		},
 		events: function() {

 			var _this = this;

 			$(document).on('click', '[q-edit]', function(){

 				_this.oTarget = $(this);
 				var str = _this.getNowStr();
 				_this.locaction($(this));
 				_this.onclick && _this.onclick(_this.oTarget, _this.oLast, str);
 				_this.oLast = _this.oTarget;  //上一个
 				return false;

 			});

 			//hideLay
 			$(document).on('click', function(e){

 				var isShow;

 				isShow = _this.oLay.is(':visible');

 				if(isShow) {
 					_this.layHide();
 				}

 			});

 			this.oUp.on('click', function(){
 				var str = _this.getNowStr();
 				_this.onup && _this.onup(_this.oTarget, str);
 			});

 			this.oDown.on('click', function(){
 				var str = _this.getNowStr();
 				_this.ondown && _this.ondown(_this.oTarget, str);
 			});

 			this.oRemove.on('click', function(){
 				var str = _this.getNowStr();
 				_this.onremove && _this.onremove(_this.oTarget, str);
 			});

 		},
 		createEditLay: function() {

 			var str;

 			if(!this.firstCreate) {

 				this.firstCreate = true;

 				str = '<div>'+
					'<div top-func>'+
						'<ul class="clearfix">'+
							'<li class="tc pointer" up><span class="q-icon up auto mt-5"></span></li>'+
							'<li class="tc pointer" down><span class="q-icon down auto mt-5"></span></li>'+
							'<li class="tc pointer" remove><span class="q-icon q-remove auto mt-5"></span></li>'+
						'</ul>'+
					'</div>'+
					'<div main contenteditable="true"></div>'+
 				'</div>';

 				this.oLay = $(str);
 				this.oMain = this.oLay.find('[main]');
 				this.oTop = this.oLay.find('[top-func]');
 				this.oUl = this.oLay.find('ul');
 				this.aLi = this.oLay.find('li');
 				this.oUp = this.oLay.find('[up]');
 				this.oDown = this.oLay.find('[down]');
 				this.oRemove = this.oLay.find('[remove]');

 				this.oLay.css({
 					border: '1px solid #1C658B',
 					background: '#FDF9CD',
 					zIndex: '99',
 					position: 'absolute',
 					outline: 'none',
 					fontSize: '16px',
 					minWidth: '200px',
 					display: 'none',
 					wordBreak: "break-all"
 				});

 				this.oTop.css({
 					position: 'absolute',
 					right:'-1px',
 					height: '30px',
 					top: '-31px',
 					display: 'none'
 				});

 				this.oUl.css({
 					border: '1px solid #1C658B',
 					borderBottom: "none",
 					borderRight: "none"
 				});

 				this.aLi.css({
 					float: 'left',
 					width: '30px',
 					height: '29px',
 					borderRight: "1px solid #1C658B",
 					background: "#fff",
 					borderBottom: '1px solid #1C658B'
 				});

 				this.oMain.css({
 					"outline": "none"
 				});

 				$('body').append(this.oLay);

 			}

 		},
 		locaction: function(oThis) {

 			var l,
 				t,
 				w,
 				h,
 				str,
 				pl,
 				max,
 				type;

 			pl = 5;
 			pt = 5;
 			l = oThis.offset().left;
 			t = oThis.offset().top;
 			w = oThis.width() - pl;
 			h = oThis.outerHeight(true);
 			str = oThis.html();
 			max = oThis.attr('q-text-max');
 			type = oThis.attr('edit-type');
 				
 			this.oMain.html(str);

 			this.oLay.css({
 				left: l,
 				top: t,
 				width: w,
 				paddingLeft: pl + 'px',
 				paddingTop: pt + 'px',
 				paddingBottom: pt + 'px'
 			});

 			this.layShow();

 			moveEnd( this.oMain[0] );

 			if(type == 'option') {
 				this.oTop.show();
 			} else {
 				this.oTop.hide();
 			}

 			this.oMain.attr('max', max);

 		},
 		layShow: function() {

 			this.oLay.show();
 			this.onshow && this.onshow();

 		},
 		layHide: function() {

 			var str = this.getNowStr();
 			
 			this.oLay.hide();
 			this.oTarget.html(str);
 			this.onhide && this.onhide(this.oTarget, str);

 		},
 		getNowStr: function() {

 			var str = this.oMain.html();
 			var org;
 			
 			if(!str) {
 				org = this.oTarget.attr('org');
 				str = org;
 			}

 			return str;

 		},
 		limit: function() {

 			this.oLay.on('click', function(){
 				return false;
 			});

 			var _this = this;
 			var max,
 				timer,
 				str,
 				strlen,
 				oThis;

 			this.oMain.on('keyup', function(){

 				max = parseInt( $(this).attr('max') );
 				str = $(this).html();
 				strlen = str.length;
 				oThis = $(this);

 				if(strlen > max) {

 					clearTimeout(timer);
 					timer = setTimeout(function(){

 						oThis.html( str.substring(0, max) );

 					},_this.delayLimit);
 				}

 			});

 		}
 
 	});

	module.exports = coverEdit;
 	
 }); 
/**
 *description:线下二维码生成
 *author:fanwei
 *date:2014/08/09
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var placeholder = require('../../../widget/dom/placeholder');
	var inputTip = require('../../../widget/dom/inputTip');
	var oTip = require('../../../widget/dom/tip');
	var fenye = require("../../../widget/dom/fenye");
	var oTplList = require("../../../tpl/spread/code/list");
	var remove = require("../../../driver/remove");
	var viewBox = require("../../../box/spread/code_view");
	
	var code = R.Class.create(R.until, {

		initialize: function() {
			
			this.oCodeArea = $('[qcode-text]');
			this.oCodeView = $('[qcode-view]');	
			this.oBuildBtn = $('[qcode-btn]');
			this.oListWrap = $('[data-ele = data-wrap]');
			this.oUrl = $('[url]');
			this.defaultParam = {
				pageSize: 5
			};

			this.clear();
			this.showPage();
			placeholder(this.oCodeArea);
			this.showTip();
			this.initRemove();
			this.events();
			this.oViewBox = new viewBox();

		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.code_list_remove,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'pkQcode': aid
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.defaultParam);

				}
			});

		},
		clear: function() {

			this.oCodeArea.val('');
			this.oUrl.val('http://');

		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.get_code_list, oTplList, this.defaultParam, '', function(data){

				console.log(data);

			});

		},
		events: function() {

			var _this = this;
			this.str = '';

			this.oBuildBtn.on('click', function(){

				_this.str = _this.oCodeArea.val();
				_this.url = _this.oUrl.val();
				
				if(!_this.str) {
					oTip.say('请输入自定义内容');
					return;
				} else if( !_this.IsURL( _this.url ) ) {
					oTip.say('链接格式不真确');
					return;
				}

				_this.showCode(_this.oCodeView, _this.str,  _this.url);


			});

			this.oListWrap.on('click', '[view]', function(){
				_this.view($(this));
			});

		},
		view: function(oThis) {

			var url = oThis.attr('url');
			var pk = oThis.attr('pkQcode');
			var type = oThis.attr('type');

			this.oViewBox.show();
			this.oViewBox.view(url, pk, type);

		},
		showTip: function() {

			var oInputTip = new inputTip('[limit]', '[tip]');
			oInputTip.start();

		},
		showCode: function(obj, word, url) {

			var _this = this;

			this.reqUrl = R.interfaces.build_code;
			this.reqParam = {
				"qcode.pageUrl": url,
				"qcode.customCode": word
			};			
			this.req(function(data){

				_this.clear();
				_this.oPage.refresh( _this.defaultParam );
				_this.oBuildBtn.html('继续生成');
				oTip.say(data.msg);

			}, function(data){
				oTip.say(data.msg);
			});

		},
		IsURL: function (str_url){ 
	         var strRegex = "^(.+)$";  
	        var re=new RegExp(strRegex);  
	  //re.test() 
	        if (re.test(str_url)){ 
	            return (true);  
	        }else{  
	            return (false);  
	        } 
	    }

	});

	/*var range = R.Class.create(R.until, {

		initialize: function() {

			this.oCube = $('[cube]');
			this.oLine = $('[line]');
			this.oView = $('[change-view]');
			this.lineWidth = this.oLine.innerWidth(true);
			this.cubeWidth = this.oCube.innerWidth(true);
			this.startNum = 50;
			this.endNum = 800;
			this.defaultSize = 200;
			this.max = this.lineWidth - this.cubeWidth;
			this.events();
		},
		events: function(){

			var _this = this;

			this.oCube.on('mousedown', function(e){

				var oEvent = e || event;

				var disX = oEvent.clientX - $(this).position().left;

				if(_this.oCube[0].setCapture) {

					_this.oCube.on('mousemove', function(e){

						_this.move(e, disX);

					});

					_this.oCube.on('mouseup', function(e){

						_this.up($(this));

					});

					_this.oCube[0].setCapture();


				} else {

					$(document).on('mousemove', function(e){

						_this.move(e, disX);

					});

					$(document).on('mouseup', function(e){

						_this.up($(this));

					});	

				}

				return false; 

			});

		},
		move: function(e, disX) {

			var oEvent = e || event;
			var l = oEvent.clientX - disX;
			var percent;
			var num;

			if(l < 0) l=0;
			if(l > this.max) l = this.max;
			percent = l/this.max;
			num = parseInt( (this.endNum - this.startNum) * percent) + this.startNum;
			
			this.oView.html(num);
			this.oCube.css('left', l);
			this.nowSize = num;

		},
		up: function(oThis) {

			var str;

			oThis.off('mousemove');
			oThis.off('mouseup');

			if(oThis[0].releaseCapture) {
				oThis[0].releaseCapture();
			}

			str = oCode.oCodeArea.val();

			if(str) {

				oCode.showCode(oCode.oCodeView, oCode.oCodeArea.val(), this.nowSize, this.nowSize);

			}

		}

	});*/

	var oCode = new code();
	//var oRange = new range();
	
});
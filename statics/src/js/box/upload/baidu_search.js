/**
 *description:百度搜模块
 *author:fanwei
 *date:2014/07/26
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTip = require("../../widget/dom/tip");
	var oTplSearchList = require("../../tpl/box/baidu_search_list");
	
	var baiduSearch = R.Class.create(R.until, {

		initialize: function() {
			
			this.defaultImageUrl = R.uri.assets + 'lib/holder/blank.gif';
		},
		init: function() {

			this.oSearchInput = $('[data-ele = baidu-search-input]');
			this.oInputW = $('[input-w]');
			this.oInputH = $('[input-h]');
			this.oSearchSelect = $('[data-ele = baidu-search-type]');
			this.oSearchBtn = $('[data-ele = baidu-search-btn]');
			this.oSearchListWrap = $('[data-ele = baidu-search-list]'); 
			this.oBaiduWrap = $('[data-ele = baidu-search-wrap]');
			this.oSaveBtn = $('[data-ele = save-baidu-btn]');
			this.events();

		},
		events: function() {

			var _this = this;
			var word,
				type,
				width,
				height,
				result,
				re,
				isNumWidth,
				isNumHeight;

			this.oSearchBtn.on('click', function(){

				word = _this.oSearchInput.val();
				type = _this.oSearchSelect.val();
				width = _this.oInputW.val();
				height = _this.oInputH.val();
				result = _this.judge(word);

				if(result) {

					width = width || 100;
					height = height || 100;

					re = /\d+/;
					isNumWidth = re.test(width);
					isNumHeight = re.test(height);

					if(!isNumWidth) {
						width = 100;
					}

					if(!isNumWidth) {
						height = 100;
					}

					_this.req(word, type, width, height);
				}

			});

			//选择
			$(document).on('click', '[data-ele = select-list]', function(){

				_this.selectList($(this));

			});

			//确定
			this.oSaveBtn.on('click', function(){

				var result = _this.get();
				
				_this.onconfirm && _this.onconfirm(result.url, result.name);

			});

		},
		judge: function(word) {

			if(!word) {
				oTip.say('请输入搜索关键词');
				return false;
			} else {
				return true;
			}

		},
		req: function(word, type, width, height) {

			var _this = this;
			var param = {
				word: word,
				ie : "utf-8",
				tn : "baiduimagejson",
				width : width,
				height : height
			};
			

			$.ajax({
				url: R.interfaces.baidu_pic_search,
				data: param,
				dataType: 'jsonp',
				beforeSend: function() {
					
					_this.oSearchListWrap.html('<div class="tc">图片加载中...</div>');
				},
				success: function(data){

					_this.render(_this.oSearchListWrap, oTplSearchList, data);

					_this.showImage(_this.oSearchListWrap);
				}
			});

		},
		selectList: function(oThis) {

			var url = oThis.attr('url');
			var name = oThis.attr('name');

			oThis.addClass('active').siblings().removeClass('active');
			this.oBaiduWrap.attr('uploadUrl', url);
			this.oBaiduWrap.attr('name', name);


		},
		get: function() {

			return {
				url: this.oBaiduWrap.attr('uploadUrl'),
				name: this.oBaiduWrap.attr('name')
			}

		},
		clear: function(){

			this.oBaiduWrap.attr('uploadUrl', '');

		},
		showImage: function(oWrap){

			//loadimg and clear null image;

			var aImage = oWrap.find('[baidu-image]');
			var i,
				num,
				realSrc,
				arr;	

			num = aImage.length;
			arr = [];

			for (i=0; i<num; i++) {

				realSrc = aImage.eq(i).attr('real-src');
				var oImage = new Image();
				arr.push(realSrc);

				(function(index){

					oImage.onload = function() {

						aImage.eq(index).attr('src', arr[index]);
						aImage.eq(index).addClass('active');

					};

				})(i);

				(function(index){

					oImage.onerror = function() {

						aImage.eq(index).parents('[data-ele = select-list]').hide();
						
					};

				})(i);

				oImage.src = realSrc;

			}	

		}

	});

	module.exports = baiduSearch;
	
});
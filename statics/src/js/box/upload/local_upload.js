/**
 *description:本地上模块
 *author:fanwei
 *date:2014/07/26
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTip = require("../../widget/dom/tip");
	var updateImage = require('../../widget/dom/update');
	var cutImage = require('../../widget/dom/cut');
	var imageload = require('../../widget/dom/imageload');
	
	var localUpload = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oUpload = $('[data-ele = upload-ele]');
			this.oUploadForm = $('[data-ele = upload-form]');
			this.oCutWrap = $('[cut-wrap]');
			this.oCutArea = $('[cut-area]');
			this.oViewImage = $('[data-ele = upload-view-img]');
			this.oSaveBtn = $('[data-ele = save-upload-btn]');
			this.oView = $('[right-view]');
			this.oConfirm = $('[sc = confirm]');
			this.oWMin = $('[wmin]');
			this.oWMax = $('[wmax]');
			this.oHMin = $('[hmin]');
			this.oHMax = $('[hmax]');
			this.oChangeType = $('[isChangeType]');

			this.defaultImageUrl = R.uri.assets + 'lib/holder/blank.gif';
			this.loadImageUrl = R.uri.assets + 'lib/loading/g_loading.gif';
			this.cutLineUrl = R.uri.assets + 'lib/widget/cutImage/line.gif';
			this.tempImage = '<img src="'+ R.uri.assets +'lib/loading/g_loading.gif" data-ele="upload-view-img" style="position:absolute;margin:-12px 0 0 -12px;left:50%;top:50%;">';

			this.scaleWidth = 30;
			this.scaleHeight = 20;
			this.viewWidth = 150;
			this.wrapWidth = 332;
			this.wrapHeight = 302;
			this.limitText = '请等待当前图片上传完毕';
			this.cutLock = false;
			this.lock = false;
			this.oUploadForm.attr('action', R.interfaces.local_upload);
			this.allowType = {
				'jpg': 1,
				'jpeg': 1,
				'gif': 1,
				'png': 1
			};	

			this.getAllowTipStr(); //获取允许上传的图片格式信息

			//以后页面有id后需要去掉----暂时加个死id 为了图片在线管理
			/*if(this.pageInfo.way == 'sin' || this.pageInfo.way == 'multi') {

				this.pageInfo.id = '0030101';

				console.log(this.pageInfo.id);

			}*/
			///////////////////////////

		},
		init: function() {

			this.events();
			
		},
		setInfo: function(iscut, w, h, hmin, hmax, wmin, wmax, iscale, isChangeType) {

			this.iscale = iscale;
			this.scaleWidth = w;
			this.scaleHeight = h;
			this.iscut = (iscut == "true" ? true : false);
			
			hmin = hmin ? hmin : 0;
			hmax = hmax ? hmax : 0;
			wmin = wmin ? wmin : 0;
			wmax = wmax ? wmax : 0;
			this.viewHeight = this.viewWidth * (h/w);

			this.oWMin.val(wmin);
			this.oWMax.val(wmax);
			this.oHMin.val(hmin);
			this.oHMax.val(hmax);
			this.oChangeType.val(isChangeType);

			this.oView.css({
				width: this.viewWidth,
				height: this.viewHeight
			});

		},
		cutInit: function() {

			this.oCutArea.html(this.tempImage);	

			this.oViewImage = $('[data-ele = upload-view-img]');

			if($('#cover_added').length) {
				
				$('#cover_added').remove();
			}

			if($('#shadow_added').length) {

				$('#shadow_added').remove()

			}

			$(this.oView).html('');

		},
		cutStop: function() {

			this.cutInit();
			this.cutStatus = false;
			this.lock = false;
			this.oViewImage.attr('src', this.defaultImageUrl);

		},
		coverHide: function() {

			$('#cover_added').hide();
			$('#shadow_added').hide();

		},
		coverShow: function() {

			$('#cover_added').show();
			$('#shadow_added').show();

		},
		loading: function() {

			this.oViewImage.attr('src', this.loadImageUrl);
			this.oViewImage.attr('width', '');

		},	
		reset: function() {

			this.oViewImage.attr('src', this.defaultImageUrl);

		},
		getAllowTipStr: function() {

			var	tip,
				arr

			arr = [];	

			for (var name in this.allowType) {
				arr.push( name );
			}

			tip = '请上传' + arr.join(',') + '格式的文件';

			this.nowAllowTip = tip;

		},
		events: function() {

			var _this = this;
			
			//load-upload
			this.oUploadForm.on('click', '[data-ele = upload-ele]', function(){

				if(_this.lock) {

					oTip.say(_this.limitText);
					return false;		
				}			
			});

			//change-todo-upload
			this.oUploadForm.on('change', '[data-ele = upload-ele]', function(e){

				var str = $(this).val();
				var type,
					tip;

				type = str.substring( str.lastIndexOf('.') + 1 );
				arr = [];

				if(!_this.allowType[type]) {
					
					oTip.say(_this.nowAllowTip);
					_this.refreshUploadFile();
					return;
				}

				if(!str) {
					return;
				}

				_this.cutStatus = true;
				_this.lock = true;
				_this.loading();
				_this.oUploadForm.submit();
				_this.cutInit();

			});

			//callBack
			window._callback = function(status, msg, sUrl, sType, sName) {

				if(status == 0) {

					_this.showViewImage(sUrl, sName);
					_this.nowName = sName;

				} else {

					oTip.say(msg);
					_this.cutStop();
				}

				_this.refreshUploadFile();
				_this.lock = false;
				
			};			

			//save
			this.oSaveBtn.on('click', function(){
				
				if(!_this.iscut) {

					var info = _this.get();
				
					if(info.url) {
						_this.onconfirm && _this.onconfirm(info.url, info.name);	
					}

				}
			});

		},
		refreshUploadFile: function() {

			//避免上传同一张图片，不触发change事件
			this.oUpload.remove();
			this.oUpload = $('<input type="file" name="upload" class="file" data-ele="upload-ele" value="">');
			this.oUploadForm.append(this.oUpload);

		},
		update: function(cb) {

			var _this = this;

			//自适应图片
			updateImage({
		        aEle: this.oViewImage,
		        wrapWidth: this.wrapWidth,
		        wrapHeight: this.wrapHeight
        	}, function(data){

        		cb && cb(data);

        	});

		},
		cut: function(data) {

			var _this = this;
			var param;
			param = {};

			cutImage({
				oWrap: this.oCutWrap[0],
	            oImage: this.oViewImage[0],
	            oView: this.oView[0],
	            oSubmintBtn: this.oConfirm[0],
	            width: data[0].width,
	            height: data[0].height,
	            oldWidth: data[0].oldWidth,
	            oldHeight: data[0].oldHeight,
	            left: data[0].left,
	            top: data[0].top,
	            scaleWidth: this.scaleWidth,
	            scaleHeight: this.scaleHeight,
	            lineUrl: this.cutLineUrl,
	            fnDo:function(info) {

	            	if(!_this.lock) {

	            		if(!_this.cutLock) {

		            		_this.cutLock = true;

							_this.reqUrl = R.interfaces.cut_image;
							_this.reqParam = {
								startX: parseInt(info.x),
								startY: parseInt(info.y),
								isCompression: _this.iscale,
								width: parseInt(info.cutwidth),
								height: parseInt(info.cutheight),
								cutFileName: _this.nowName,
								/*id: this.pageInfo.id,*/
								fileUrl: info.tmpimg,
								fileBelong: _this.pageInfo.id
							};

							console.log(_this.reqParam);

							_this.req(function(data){

								_this.cutLock = false;
								_this.cutStop();

								//console.log(data);
								_this.onconfirm && _this.onconfirm(data.data.cutImg, _this.nowName);

							});

						} else {

							oTip.say('请等待图片裁切完毕');

						}

	            	} else {

	            		oTip.say(_this.limitText);

	            	}	
	            }

	        });

		},
		showViewImage: function(sUrl, sName) {

			var _this = this;
			
			imageload([sUrl], function(){		

				if(_this.iscut) {

					//裁切
					_this.todoCut(sUrl, sName);
				} else {

					//不裁切
					_this.nodoCut(sUrl, sName);

				}	

			});
		},
		todoCut: function(sUrl, sName) {

			var _this = this;

			if(this.cutStatus) {

				this.oViewImage.attr({
					src: sUrl,
					name: sName
				});

				this.update(function(data){
					
					_this.cut(data);

				});

			}

		},
		nodoCut: function(sUrl, sName) {

			var _this = this;

			this.oViewImage.attr({
				src: sUrl,
				name: sName
			});

			this.update();

		},
		get: function() {

			return {
				url:this.oViewImage.attr('src'), 
				name: this.oViewImage.attr('name')
			}

		}

	});

	module.exports = localUpload;
	
});
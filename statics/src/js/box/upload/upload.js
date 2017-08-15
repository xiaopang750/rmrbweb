/**
 *description:网站上传框模块
 *author:fanwei
 *date:2014/07/26
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var baiduSearch = require('./baidu_search');
	var localUpload = require('./local_upload');
	var manage = require('./manage');
	var dialog = require('../../widget/dom/dialog');
	var oTplBox = require('../../tpl/upload_box/upload_box');
	var tab = require('../../widget/dom/tab');

	var uploadBox = R.Class.create(R.until, {

		initialize: function() {
			
			var _this = this;

			this.renderBox();

			this.oManage = new manage();

			var oTab = new tab({
				oWrap: $('[data-ele = r-upload-box]'),
				onclick: function(oThis, target, index) {
					
					if(index == 0) {

						_this.oLocalUpload.coverShow();

					} else if( index == 1 ) {

						//在线管理
						_this.oManage.init();
						_this.oLocalUpload.coverHide();

					} else {

						_this.oLocalUpload.coverHide();

					}

				}
			});

			this.oLocalUpload = new localUpload();

			this.oLocalUpload.init();

			this.oBaiduSearch = new baiduSearch();

			this.oBaiduSearch.init();

			oTab.init();

			this.oBox = new dialog({
				boxSelector: $('[data-ele = r-upload-box]')
			});

			this.events();

			this.oTarget = null;
			this.localConfirm = this.localConfirm || null;
			this.baiduConfirm = this.baiduConfirm || null;
			this.onConfirm = this.onConfirm || null;
			this.onClosed = this.onClosed || null;
		},
		events: function() {

			var _this = this;

			$(document).on('click', '[r-upload-btn]', function(){

				_this.oTarget = $(this);

				var iscut,
					w,
					h,
					min,
					max,
					iscale,
					isChangeType;

				iscut = $(this).attr('iscut');
				w = $(this).attr('w');	
				h = $(this).attr('h');	
				hmin = $(this).attr('hmin');	
				hmax = $(this).attr('hmax');
				wmin = $(this).attr('wmin');	
				wmax = $(this).attr('wmax');	
				iscale = $(this).attr('iscale');
				isChangeType = $(this).attr('isChangeType');

				_this.oLocalUpload.setInfo(iscut, w, h, hmin, hmax, wmin, wmax, iscale, isChangeType);		
				_this.oBox.show();

			});

			//baidu
			this.oBaiduSearch.onconfirm = function(url, name) {

				if(url != this.defaultImageUrl && url) {
					
					_this.showValue(url, name);	
				}

				_this.baiduConfirm && _this.baiduConfirm(url, name);

				_this.oBox.close();
			};

			//local
			this.oLocalUpload.onconfirm = function(url, name) {

				if(url != this.defaultImageUrl && url) {

					_this.showValue(url, name);
				}

				_this.localConfirm && _this.localConfirm(url, name);

				_this.oBox.close();

				this.reset();
			};


			this.oManage.onConfirm = function(url, name) {
				
				if(url && name) {

					_this.showValue(url, name);
					_this.localConfirm && _this.localConfirm(url, name);

				}
				
				_this.oBox.close();

			};	

			this.oBox.onClosed = function() {

				_this.onClosed && _this.onClosed();
				_this.oLocalUpload.reset();
				_this.oLocalUpload.cutStop();

			};

		},
		renderBox: function() {

			var html = oTplBox();
			$('body').append($(html));

		},
		showValue: function(sUrl, sName) {

			var oParent = this.oTarget.parents('[r-upload-wrap]');
			var oUrlInput = oParent.find('[r-upload-url]');
			var oUrlName = oParent.find('[r-upload-name]');
			oUrlInput.val(sUrl);
			oUrlName.val(sName);

		}


	});

	var oLocalUpload = new localUpload();
	var oBaiduSearch = new baiduSearch();
	var oUploadBox = new uploadBox();

	module.exports = oUploadBox;
	
});
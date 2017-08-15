/**
 *description:已有手机网站
 *author:fanwei
 *date:2014/07/22
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplList = require("../../tpl/mobile_hased/list");
	var fenye = require("../../widget/dom/fenye");
	var oTip = require("../../widget/dom/tip");
	var dialog = require('../../widget/dom/dialog');
	var remove = require("../../driver/remove");
	var FollowTip = require("../../widget/dom/followTip");
	var domainBox = require("../../box/mobile/domainBox");

	var oFollowTip = new FollowTip({
		oWrap: $('[data-ele = data-wrap]'),
		ele: '[mobile-list]',
		onOver: function(oThis) {

			var name = oThis.attr('name');
			name = name.replace(/\</gi, "&lt;");
			name = name.replace(/\>/gi, "&gt;");
			
			if(!name) {
				return false;	
			}

			this.write('<div class="lineH-23"><p>站点说明:</p>'+name+'</div>');
		}
	});
	
	
	var Mhas = R.Class.create(R.until, {

		initialize: function() {

			this.showPage();	
			this.events();
			this.initRemove();
		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.delete_mobile_site,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'pkPage': aid,
						'pkSite': aid
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh({pageSize: 5});

				}
			});

		},
		events: function() {

			var _this = this;

			$(document).on('mouseenter', '[mobile-list]', function(){
				$(this).find('[remove]').show();
				$(this).find('[view-wrap]').addClass('active');
			});

			$(document).on('mouseleave', '[mobile-list]', function(){
				$(this).find('[remove]').hide();
				$(this).find('[view-wrap]').removeClass('active');
			});
			
			$(document).on('click', '[mobile-list]', function(){
				
				_this.link($(this));

			});

		},
		link: function(oThis) {

			var linkUrl = oThis.attr('link');

			window.location = linkUrl;

		},
		showPage: function() {
			
			var _this = this;

			this.oPage = new fenye(R.interfaces.get_mobile_site, oTplList, {pageSize: 5},'', function(data){		
				
			}, '', '', function(data){
				
				//已有的手机网站列表页焦点图无需滚动，所以只渲染一张图;
				var i,
					num,
					arrSites;

				if(data) {

					arrSites = data.sites;
					num = arrSites.length;

					for (i=0; i<num; i++) {
						
						//如果有的模板没有banner
						if( arrSites[i].content.point ) {

							arrSites[i].content.point.modelData.length = 1;	
						}
					}	

				}	

				return data;

			});

		}

	});

	var oMhas = new Mhas();
	
});
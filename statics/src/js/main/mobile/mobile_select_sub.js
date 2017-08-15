/**
 *description:选择子模板
 *author:fanwei
 *date:2014/07/22
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');
	
	var selectSub = R.Class.create(R.until, {

		initialize: function() {

			this.aSelect = $('[data-ele = select-type]');
			this.oSub = $('[script-role = confirm-btn]');
			this.oSiteName = $('[data-siteName]');
			this.pageInfo = this.parse();

		},
		init: function() {

			this.events();
			this.submition();
			this.showSiteName();

		},
		showSiteName: function() {

			var name = this.pageInfo.siteName; //当前站点名称

			this.oSiteName.html( name );

		},
		loc: function() {

			var top = this.oSub.offset().top;

			document.body.scrollTop = document.documentElement.scrollTop = top;

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[data-ele = select-type]', function(){

				var name,
					siteName;

				siteName = $(this).attr('sitename');	
				_this.aSelect.removeClass('active');
				_this.aSelect.find('[data-ele = select-btn]').removeClass('active');
				$(this).addClass('active');
				$(this).find('[data-ele = select-btn]').addClass('active');

				name = $(this).attr('name');
				_this.oSub.attr('name', name);
				_this.loc();
				oTip.say('您已选择' + siteName);

			});
		},
		submition: function() {

			var _this = this;
			var name;

			var oSubmit = new ajaxForm({

				subUrl: R.interfaces.post_mobile_page_build,
				fnSumbit: function( data ) {

					data.modelcode = name;
					data.parentId = _this.pageInfo.parentId;
					data.parentName = _this.pageInfo.parentName;

					var tmpData = JSON.stringify(data);

					data = {};

					data.type = "pageBasicInfo";
					data.resultType = "page";
					data.pkSite = _this.pageInfo.pkSite;
					data.content = tmpData;

					return data;

				},
				otherJude: [

					function() {

						name = _this.oSub.attr('name');

						if(name) {

							return true;

						} else {

							oTip.say('请选择界面风格');
							return false;
						}

					}

				],
				sucDo: function(data) {

					var info = data.data;

					oTip.say(data.msg);
					
					window.location = __url__data['sitePageEdit'] + '&modelCode=' + info.modelCode + '&pkSite=' + info.pkSite + '&pkPage=' + info.pkPage;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oSubmit.upload();

		}

	});

	var oSelectSub = new selectSub();

	oSelectSub.init();
	
});
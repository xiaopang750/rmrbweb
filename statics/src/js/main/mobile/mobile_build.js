/**
 *description:新建手机网站
 *author:fanwei
 *date:2014/07/22
 */
define(function(require, exports, module){

	var global = require("../../driver/global");
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');
	var oTplSelect = require('../../tpl/mobile_build/build_select');

	var pageMb = R.Class.create(R.until, {

		initialize: function() {

			this.aSelect = $('[data-ele = select-type]');
			this.oSub = $('[script-role = confirm-btn]');
			this.oSelect = $('[name = siteProfession]');
			this.oJudgeName = $('[judge-name]');

		},
		init: function() {

			this.showPage();
			this.events();
			this.submition();
		},
		loc: function() {

			var top = this.oSub.offset().top;

			document.body.scrollTop = document.documentElement.scrollTop = top;

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[data-ele = select-type]', function(){

				var name,
					nowName;
				_this.aSelect.removeClass('active');
				_this.aSelect.find('[data-ele = select-btn]').removeClass('active');
				$(this).addClass('active');
				$(this).find('[data-ele = select-btn]').addClass('active');
				nowName = $(this).attr('siteName');
				name = $(this).attr('name');
				_this.oSub.attr('name', name);
				_this.loc();
				oTip.say('您已选择' + nowName);

			});

			//judge-name-is-repeat;
			$('[name = siteName]').on('keyup', function(){

				_this.judegName($(this));

			});
		},
		judegName: function(oThis) {

			var str = oThis.val();
			var _this = this;

			if(str) {

				this.reqUrl = R.interfaces.judge_site_name;
				this.reqParam = {
					siteName: str
				};
				this.req(function(data){

					var info = data.data;

					if(info.exist) {
						_this.oJudgeName.addClass('active');
						_this.isRepeat = true;
					} else {
						_this.oJudgeName.removeClass('active');
						_this.isRepeat = false;
					}

				}, function(data){

					oTip.say(data.msg);
				});

			}

		},	
		showPage: function(callBack) {

			var _this = this;

			this.reqUrl = R.interfaces.get_trade_list;
			this.req(function(data){
				
				_this.render(_this.oSelect, oTplSelect, data.data);
				callBack && callBack();

			},function(data, code){

				oTip.say(data.msg);

			});

		},
		submition: function() {

			var _this = this;
			var name,
				nowSelect,
				nowIndex;

			nowSelect = this.oSelect[0];

			var oSubmit = new ajaxForm({

				subUrl: R.interfaces.post_mobile_build,
				closeCheck: false,
				fnSumbit: function( data ) {
					
					nowIndex = nowSelect.selectedIndex; 
					data.modelcode = name;
					data.belongindusty = nowSelect.options[ nowIndex ].id;
					data.siteProfession = nowSelect.options[ nowIndex ].value;

					var tmpData = JSON.stringify(data);

					data = {};

					data.type = "siteBasicInfo";
					data.resultType = "site";
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

					}, function() {

						if(_this.isRepeat) {

							oTip.say('站点名称重复,请修改站点名称');
							return false;
						} else {

							return true;
						}

					}

				],
				sucDo: function(data, oBtn) {

					var info = data.data,
						sParam = '';

					for (var i in info) {
						sParam += '&' + i + '=' + info[i];
					}
					var nextUrl = __url__data['sitePageEdit'] + sParam;
					
					window.location = nextUrl;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oSubmit.upload();

		}

	});

	var oMb = new pageMb();

	oMb.init();
	
});
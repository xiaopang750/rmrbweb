/**
 *description:后台配置管理-用户管理
 *author:fanwei
 *date:2014/08/15
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var Calendar = require('../../../widget/form/calendar');
	var oForm = require("../../../tpl/admin/user/form");
	var oTip = require('../../../widget/dom/tip');
	//var oTplList = require("../../../tpl/admin/user/list");

	var user = R.Class.create(R.until, {

		initialize: function() {
			
			var _this = this;
			this.oWrap = $('[data-wrap]');

			this.pageInfo = this.parse();
			this.renderPage(function(id){
				
				_this.oStartDate = $('[dateStart]');
				_this.oEndDate = $('[dateEnd]');
				_this.submission(id);
				_this.showCalendar();

			});
		},
		showCalendar: function() {

			var oCalendar = new Calendar({
				ele : '[date]',
				onSetDate: function(date, time) {

					oThisWrap = $(this.inpE).parents('[script-role = check_wrap]');
					oThisTip = oThisWrap.find("[script-role = wrong_area]");
					oThisWrap.removeClass("has-error");
					oThisTip.removeClass("wrong");

					$(this.inpE).attr('time', time);

				}
			});

		},
		renderPage: function(cb) {

			var type,
				id,
				_this;

			type = this.pageInfo.type;
			id = this.pageInfo.aid;
			_this = this;
			
			if(type == 'add') {

				this.render(this.oWrap, oForm, {});

				cb && cb('');

			} else {
				
				this.reqUrl = R.interfaces.get_memberFormList;
				this.reqParam = {userid: id};
				this.req(function(data){

					_this.render(_this.oWrap, oForm, data.data.userinfo);

					cb && cb(id);

				});

			}	

		},
		submission: function(id) {

			var oNew = $('[sc = pass-new]');
			var oRnew = $('[sc = re-new-pass]');
			var _this = this;
			var url;

			url = id ? R.interfaces.post_memberInfoEdit : R.interfaces.post_memberInfoAdd;	

			var oModifyPass = new ajaxForm({

				subUrl: url,
				otherCheck:{

					reNewPassWord:[
						function(ele){

							if ( !ele.val() ) {

								return false;

							} else {

								return true;	
							}
							
						},
						function(ele){

							if ( ele.val() != oNew.val() ) {

								return false;

							} else {


								return true;
							}

						}
					]
				},
				otherJude: [

					function(){

						var sTart = _this.oStartDate.attr('time');
						var sEnd = _this.oEndDate.attr('time');

						if(sTart>=sEnd) {

							oTip.say('生效日期不能大于等于失效日期');
							return false;

						} else {

							return true;

						}

					} 

				],
				fnSumbit: function( data ) {

					if(id) {
						data['userinfo.cuserid'] = id;
					}

					if(_this.pageInfo.cid) {
						data['pkCorp'] = _this.pageInfo.cid;
					}
					
					return data;
				},
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['userManage'] + '&cid=' + _this.pageInfo.cid;

					//window.history.back();

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oModifyPass.upload();

		}

	});

	var oUser = new user();
	
});
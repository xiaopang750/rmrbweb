/**
 *description:会员编辑
 *author:fanwei
 *date:2014/08/20
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var bodyParse = require('../../lib/http/bodyParse');
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTplForm = require('../../tpl/way/member/edit_form');
	var calendar = require('../../widget/form/calendar');
	var oTip = require('../../widget/dom/tip');
	
	var MemberEdit = R.Class.create(R.until, {

		initialize: function() {	

			this.pageInfo = bodyParse();
			this.mid = this.pageInfo.memberid;
			this.oWrap = $('[data-wrap]');
			this.judge();
			this.events();
			this.lock = true;

		},
		judge: function() {

			var isAdd;

			isAdd = this.pageInfo.memberid ? false : true;

			if(isAdd) {

				this.subUrl = R.interfaces.post_member_add;
				this.afterReq({});
				this.unlock();
				

			} else {

				this.subUrl = R.interfaces.post_member_edit;
				this.reqPage();
				
			}

		},
		showCalendar: function() {

			var oCalendar = new calendar({
				ele: '[date]',
				onSetDate: function() {

					oThisWrap = $(this.inpE).parents('[script-role = check_wrap]');;
					oThisTip = oThisWrap.find("[script-role = wrong_area]");
					oThisWrap.removeClass("has-error");
					oThisTip.removeClass("wrong");
				}
			});

		},
		reqPage: function() {

			var _this = this;

			this.reqUrl = R.interfaces.get_member_edit_data;
			this.reqParam = {
				pkMemberinfo: this.mid
			};
			this.req(function(data){
				console.log(data);
				_this.afterReq( data.data.memberInfo );	

			});

		},
		afterReq: function(data) {

			this.render(this.oWrap, oTplForm, data);
			this.oCheck = $('[black]');
			this.sub();

		},
		events: function() {

			var _this = this;

			this.oWrap.on('click', '[modify-btn]', function(){

				if(_this.lock) {

					_this.unlock();	

				}

			});	

		},
		unlock: function() {

			this.lock = false;
			this.oWrap.find('[readonly]').filter('[yes]').removeAttr('readonly');
			$('[date]').attr('readonly', 'readonly');
			this.showCalendar();	
			this.memberEdit.upload();
			$('[modify-btn]').hide();

		},
		sub: function() {

			var _this = this;
			var isCheck;

			this.memberEdit = new ajaxForm({

				subUrl: this.subUrl,
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['memberManage'];

				},
				fnSumbit: function(data) {

					isCheck = _this.oCheck.attr('checked') ? 0 : 1;
					//data['member.reserve7'] = isCheck;
					data['member.pkMemberid'] = _this.mid;
					return data;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

		}

	});

	var oMemberEdit = new MemberEdit();
	
});
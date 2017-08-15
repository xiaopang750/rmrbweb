/**
 *description:添加公众号表单
 *author:fanwei
 *date:2014/08/03
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplForm = require('../../tpl/way/bind/form');
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');
	
	var addForm = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oWrap = $('[script-bound = form_check]');
			this.showPage();
			this.events();
			this.aidCheck = true;

		},
		events: function() {

			var _this = this;

			$(document).on('blur', '[press-check]', function(){
				
				_this.pressCheck($(this))

			});		
		},
		pressCheck: function(oThis) {

			var aid,
				pid,
				_this;

			_this = this;	
			if(this.way == 'add') {
				pid = '';
			} else {
				pid = this.pageInfo.aid;
			}

			aid = oThis.val(); 

			this.reqUrl = R.interfaces.check_aid_isRepeat;
			this.reqParam = {
				accountid: aid,
				publicaccountid: pid
			};
			this.req(function(data){

				_this.oCheckStatus.html("√");
				_this.oCheckStatus.removeClass('red');
				_this.oCheckStatus.addClass('green');
				_this.aidCheck = true;

			}, function(data){

				_this.oCheckStatus.html("×");
				_this.oCheckStatus.addClass('red');
				_this.oCheckStatus.removeClass('green');
				_this.aidCheck = false;
			});

		},
		showPage: function() {

			var type = this.pageInfo.type;

			var url,
				_this;

			_this = this;	

			if(type == 'add') {

				url = R.interfaces.addWayList;

				this.render(this.oWrap, oTplForm, {type: this.pageInfo.way});

				this.submissition(url);

				this.type = 'add';

			}else {

				url = R.interfaces.editWayList;
				this.reqUrl = R.interfaces.editWayListData;
				this.reqParam = {
					publicaccountid: this.pageInfo.aid
				};
				this.req(function(data){

					data.data.account.type = _this.pageInfo.way;
					_this.render(_this.oWrap, oTplForm, data.data.account);
					_this.submissition(url, 'edit');

				});

				this.type = 'edit';
			}

		},
		submissition: function(url,type) {	

			var _this = this;

			this.oCheckStatus = $('[check-status]');

			var oAddBind = new ajaxForm({

				subUrl: url,
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['accountBindList'];

					//window.history.back();

				},
				otherJude: [

					function() {

						if(_this.aidCheck) {

							return true;
						} else {
							console.log('b');
							oTip.say('该公众号id已存在');
							return false;
						}

					}

				],
				fnSumbit: function(data) {

					if(type == 'edit') {
						data['publicaccountinfo.pkAccount'] = _this.pageInfo.aid;
					}

					data['publicaccountinfo.accounttype'] = _this.pageInfo.way;
					
					return data;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oAddBind.upload();

		}

	});

	var oAddForm = new addForm();
	
});
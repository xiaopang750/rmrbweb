/**
 *description:会员详情
 *author:fanwei
 *date:2014/08/20
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTpl1 = require('../../tpl/way/member/detail1');
	var oTpl2 = require('../../tpl/way/member/detail2');
	var oTpl3 = require('../../tpl/way/member/detail3');
	var oTpl4 = require('../../tpl/way/member/detail4');
	var oTpl5 = require('../../tpl/way/member/detail5');
	var oTpl6 = require('../../tpl/way/member/detail6');
	var fenye = require('../../widget/dom/fenye');
	var bodyParse = require('../../lib/http/bodyParse');
	var addScoreBox = require('../../box/way/score_box');

	var oAddScoreBox = new addScoreBox({
		subUrl: R.interfaces.addMemberScore
	});
	
	var memberDetail = R.Class.create(R.until, {

		initialize: function() {

			this.pageInfo = bodyParse();
			this.oMemberName = $('[member-name]');
			this.aTab = $('[serach-index]');
			this.firstModule = this.aTab.eq(0);
			this.mid = this.pageInfo.memberid;

			this.DEFAULT_PARAM = {pageSize: 20, pkMember: this.mid};
			this.pid = this.pageInfo.pid;
			this.init();
			this.showPage();
			this.events();
			
		},
		init: function() {

			this.firstModule.addClass('active');

		},
		showPage: function() {

			var _this,
				name,
				firtIndex;

			_this = this;
			name = this.pageInfo.name;
			firtIndex = this.firstModule.attr('serach-index');

			if(this.pid) {
				
				this.tabPage(this.pid);
			} else {
				this.tabPage(firtIndex);	
			}

			this.oMemberName.html(name + '&nbsp;&nbsp;参与的活动详细信息');
		},
		events: function() {

			var index,
				_this,
				oThis;

			_this = this;

			$(document).on('click', '[serach-index]', function(){

				index = $(this).attr('serach-index');

				_this.tabPage(index);

			});

			//添加积分
			$(document).on('click', '[add-score]', function(){

				oAddScoreBox.show();

			});

		},
		tabPage: function(iNow) {

			var _this = this;

			if(!this.oPage) {

				this.oPage = new fenye(R.interfaces['get_member_detail' + iNow] ,eval('oTpl' + iNow), this.DEFAULT_PARAM);

			} else {

				this.oPage.refresh(this.DEFAULT_PARAM, R.interfaces['get_member_detail' + iNow], eval('oTpl' + iNow) );

			}

			this.oPage.cb = function(data) {

				_this.aTab.removeClass('active');
				$('[serach-index = '+ iNow +']').addClass('active');

			};

		}

	});

	var oMemberDetail = new memberDetail();
	
});
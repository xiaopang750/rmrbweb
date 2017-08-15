/**
 *description:选择单图文多图文
 *author:fanwei
 *date:2014/08/09
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var selectPicTypeBox = require('../../tpl/box/spread/select_pic_type');
	var dialog = require('../../widget/dom/dialog');
	
	var selectPicType = R.Class.create(R.until, {

		initialize: function() {

			this.pageInfo = this.parse();
			this.TYPE_INFO = {
				'001': '会议邀约',
				'002': '企业形象',
				'003': '每日资讯',
				'004': '促销活动',
				'005': '电子优惠券',
				'006': '电子优惠',
				'007': '到店有礼',
				'008': '',
				'009': '现场活动',
				'010': '品牌建设',
				'011': '',
				'012': ''
			};

			this.renderBox();
			this.pageInfo = this.parse();
			this.events();
			this.type = '';

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[data-ele = build-btn]', function(){

				_this.selectBox.show();

			});

			$(document).on('click', '[pic-select]', function(){

				window.location = __url__data.muliEdit + '&way=' + $(this).attr('type');

			});

		},
		renderBox: function() {

			var name = this.TYPE_INFO[ this.pageInfo.activityType ];
			var htmlBox = selectPicTypeBox({type: name});
			var oBox = $(htmlBox);
			$('body').append(oBox);

			this.selectBox = new dialog({
				boxSelector: $('[pic-select-box]')
			});		
		}

	});

	var oSelectPicType = new selectPicType();
	
});
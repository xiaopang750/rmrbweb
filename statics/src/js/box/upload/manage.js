/**
 *description:图片在线管理
 *author:fanwei
 *date:2014/09/23
 */
define(function(require, exports, module){
	
	var oTplManage = require('../../tpl/box/upload/manage_list');
	var oTip = require('../../widget/dom/tip');
	var upDateImage = require('../../widget/dom/update');

	var manage = R.Class.create(R.until, {

		initialize: function() {	

			this.oWrap = $('[manage-wrap]');
			this.oMore = $('[manage-more]');
			this.oSave = $('[data-ele = save-manage-btn]');
			this.pageSize = 8;
			this.nowPage = 1;
			this.firstLoad = false;
			this.pageInfo = this.parse();
			this.events();

			//以后页面有id后需要去掉----暂时加个死id 为了图片在线管理
			if(this.pageInfo.way == 'sin' || this.pageInfo.way == 'multi') {

				this.pageInfo.id = '0030101';

				console.log(this.pageInfo.id);

			}
			///////////////////////////
		},
		init: function() {

			this.oWrap.html('');
			this.loadData( this.nowPage );	
			this.oMore.hide();
		},
		events: function() {

			var _this = this;

			this.oMore.on('click', function(){

				_this.nowPage ++ ;

				_this.loadData( _this.nowPage );

			});

			this.oWrap.on('click', '[data-ele=manage-list]', function(){
				
				var aAllImage = $('[data-ele=manage-list]');
				var oThis = $(this);
				aAllImage.removeClass('active');
				oThis.addClass('active');

				_this.nowUrl = oThis.attr('url');
				_this.nowName = oThis.attr('name');

			});

			this.oSave.on('click', function(){

				_this.onConfirm && _this.onConfirm( _this.nowUrl, _this.nowName );

			});

		},
		loadData: function(page) {

			var _this = this;
			var isHasData;

			this.reqUrl = R.interfaces.online_manage;
			this.reqParam = {
				pageSize: this.pageSize,
				pageNum: this.nowPage,
				'pic.standy1': this.pageInfo.id

			};
			this.req(function(data){
				
				isHasData = _this.judgeShowMore(data.data.pics);

				if(isHasData) {

					_this.render(_this.oWrap, oTplManage, data.data, 'append');

					upDateImage({
						aEle: $('[update-image]'),
						wrapWidth: 120,
						wrapHeight: 80
					});

				} else {

					if(this.nowPage == 1) {

						this.oWrap.html('<div class="tc">暂无数据</div>');

					}

				}

			});

		},
		judgeShowMore: function(arr) {

			if(arr.length) {
				this.oMore.show();
				return true;
			} else {
				this.oMore.html('暂无更多数据');
				this.oMore.unbind('click');
				this.oMore.addClass('default');
				return false;

			}

		}

	});

	module.exports = manage;
	
});
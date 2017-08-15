/**
 *description:评论详情页
 *author:fanwei
 *date:2014/08/16
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplList = require('../../tpl/member/reply_list');
	var oBlogTpl = require('../../tpl/member/blog');
	var oTip = require('../../widget/dom/tip');
	
	var detail = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oSendInput = $('[commonts-area]');
			this.oSend = $('[send-btn]');
			this.oMoreBtn = $('[more-btn]');
			this.oWrap = $('[data-wrap]');
			this.oBlogWrap = $('[blog-wrap]');

			this.nowPage = 1;
			this.pageSize = 8;
			this.lock = false;
			this.reqData();

			this.events();
			this.getWeibo();
			//this.showPage();

		},
		events: function() {

			var _this = this;

			this.oMoreBtn.on('click', function(){

				if(!_this.lock) {
					_this.lock = true;
					_this.nowPage ++;
					_this.reqData();
				}

			});

			//show-reply
			$(document).on('click', '[reply-btn]' ,function(){

				_this.showReply($(this));

			});

			//以后做
			/*$(document).on('keyup', '[reply-text]', function(){
				_this.upDateHeight($(this));
			});*/
			
			//send-reply
			$(document).on('click', '[send-reply]' ,function(){

				_this.reply($(this));

			});	

			//send
			this.oSend.on('click' ,function(){

				_this.send();

			});
		},
		reply: function(oThis) {

			var oList = oThis.parents('[reply-list]');
			var oReplyArea = oList.find('[reply-text]');

			var str,
				commentId,
				_this;

			_this = this;
			str = oReplyArea.val();
			commentId = oReplyArea.attr('cid');

			if(!str) {
				oTip.say('请填写回复评论的内容');
				return;
			}

			this.reqUrl = R.interfaces.reply_weibo;
			this.reqParam = {
				accountId: this.pageInfo.accountId,
				blogId: this.pageInfo.blogId,
				content: str,
				commentId: commentId
			}
			this.req(function(data){

				_this.appendList({data:{mEvaluates: [data.data.mEvaluate]}});
				_this.clear(oReplyArea);
				oTip.say(data.msg);

			}, function(data){

				oTip.say(data.msg);

			});


		},
		send: function() {

			var str = this.oSendInput.val();
			var _this = this;

			if(!str) {
				oTip.say('请填写评论内容');
				return;
			}

			this.reqUrl = R.interfaces.send_weibo;
			this.reqParam = {
				accountId: this.pageInfo.accountId,
				blogId: this.pageInfo.blogId,
				content: str
			}
			this.req(function(data){

				_this.appendList({data:{mEvaluates: [data.data.mEvaluate]}});
				_this.clear(_this.oSendInput);
				oTip.say(data.msg);

			}, function(data){

				oTip.say(data.msg);

			});

		},	
		upDateHeight: function(oThis) {

			console.log(oThis[0].scrollHeight);

			oThis[0].style.height = oThis[0].scrollHeight + 'px';

		},
		showReply: function(oThis) {

			var oList = oThis.parents('[reply-list]');
			var oReplyArea = oList.find('[reply-area]');
			var isShow;

			isShow = oReplyArea.is(":visible");

			if(isShow) {
				oReplyArea.hide();
			} else {
				oReplyArea.show();
			}

		},
		reqData: function() {

			var _this = this;

			this.reqUrl = R.interfaces.get_weibo_detail;
			this.reqParam = {
				accountId: this.pageInfo.accountId,
				blogId: this.pageInfo.blogId,
				pageSize: this.pageSize,
				pageNum: this.nowPage
			};
			this.req(function(data){
				
				_this.judgeShowMore(data);
				_this.appendList(data);
				_this.lock = false;
			}, function(data){

				oTip.say(data.msg);

			});

		}, 
		appendList: function(data) {
			
			var sNewHtml = oTplList(data.data);
			var oNew = $(sNewHtml);
			this.oWrap.append(oNew);
		},
		judgeShowMore: function(data) {

			var info = data.data.pageutil;
			var nowSum,
				all;

			nowSum = info.pageNum * info.pageSize;
			all = info.totleNum;

			if(nowSum < all) {
				this.oMoreBtn.addClass('active');
			} else {
				this.oMoreBtn.removeClass('active');
			}	
		},
		hideNoTip: function() {

			$('[no-arg]').remove();

		},
		clear: function(obj) {

			obj.val('');

		},
		getWeibo: function() {

			var _this = this;

			this.reqUrl = R.interfaces.get_weibo;
			this.reqParam = {
				'blog.pkBlog': this.pageInfo.pkBlog
			};
			this.req(function(data){
				_this.render(_this.oBlogWrap, oBlogTpl, data.data.blog);
			}, function(data){
				console.log(data);
			});

		}

	});

	var oDetail = new detail();
	
});
/**
 *description:推广活动评论
 *author:fanwei
 *date:2014/08/21
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require('../../../tpl/spread/reply_list');
	var oTplSub = require('../../../tpl/spread/reply_sub');
	var oBlogTpl = require('../../../tpl/spread/blog');
	var oTip = require('../../../widget/dom/tip');
	
	var commont = R.Class.create(R.until, {

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
			//this.getCommontList();
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

			//showReplyBtn
			$(document).on('mouseover', '[reply-content]', function(e){

				_this.showReplyBtn($(this));

			});

			//remove
			$(document).on('click', '[remove-btn]', function(e){

				_this.removeList($(this));

			});

		},
		showReplyBtn: function(oThis) {

			var oBtn;
			
			$('[btn-wrap]').hide();

			oBtn = oThis.parents('[reply-list]').find('[btn-wrap]').eq(0);

			oBtn.show();

		},
		removeList: function(oThis) {

			var aid,
				oParent;

			aid = oThis.attr('aid');
			oParent = oThis.parents('[reply-list]').get(0);

			this.reqUrl = R.interfaces.remove_commont_list;
			this.reqParam = {
				pkReview: aid
			};	
			this.req(function(data){
				oParent.remove();
				oTip.say(data.msg);
			}, function(data){
				oTip.say(data.msg);
			});

		},
		reply: function(oThis) {

			var oList = oThis.parents('[reply-list]');
			var oReplyArea = oList.find('[reply-text]');

			var str,
				commentId,
				_this,
				pid,
				target,
				aParent,
				oParent,
				num;

			_this = this;
			str = oReplyArea.val();
			pid = oReplyArea.attr('cid');
			target = oReplyArea.attr('namer');
			aParent = oThis.parents('[reply-list]');
			num = aParent.length;
			oParent = aParent.eq(num-1);

			if(!str) {
				oTip.say('请填写回复评论的内容');
				return;
			}

			this.reqUrl = R.interfaces.add_commont_list;
			this.reqParam = {
				'review.pkActivity': this.pageInfo.pkActivity,
				'review.reviewContent': str,
				'review.reviewParentId': pid,
				'review.reviewTarget': target
			};

			this.req(function(data){

				_this.appendList(data, oParent, oTplSub);
				_this.clear(oReplyArea);
				oTip.say(data.msg);

			});

		},
		upDateHeight: function(oThis) {

			console.log(oThis[0].scrollHeight);

			oThis[0].style.height = oThis[0].scrollHeight + 'px';

		},
		showReply: function(oThis) {

			var oList = oThis.parents('[reply-list]');
			var oReplyArea = oList.find('[reply-area]').eq(0);
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

			this.reqUrl = R.interfaces.get_commont_list;
			this.reqParam = {
				pkActivity: this.pageInfo.pkActivity
			};
			this.req(function(data){
					console.log(data);
				//_this.judgeShowMore(data);
				_this.appendList(data);
				_this.lock = false;
				_this.render(_this.oBlogWrap, oBlogTpl, data.data.activity);
			});

		},
		appendList: function(data, oParent, oTpl) {
				
			oTpl = oTpl ? oTpl : oTplList;

			var sNewHtml = oTpl(data.data);
			var oNew = $(sNewHtml);

			if(oParent) {
				oParent.append(oNew);
			} else {
				this.oWrap.append(oNew);	
			}
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
		getCommontList: function() {

			var _this = this;

			this.reqUrl = R.interfaces.get_commont_list;
			this.reqParam = {
				'blog.pkBlog': this.pageInfo.pkBlog
			};
			this.req(function(data){

				_this.render(_this.oBlogWrap, oBlogTpl, data.data.blog);
			});

		}

	});

	var oCommont = new commont();
	
});
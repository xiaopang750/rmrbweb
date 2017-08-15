/**
 *description:评论管理
 *author:fanwei
 *date:2014/08/16
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var fenye = require('../../widget/dom/fenye');
	var oTip = require('../../widget/dom/tip');
	var oTplList = require('../../tpl/member/arg_manage_list');

	var mange = R.Class.create(R.until, {

		initialize: function() {
			
			this.defaultParam = {
				pageSize: 10
			};

			this.showPage();
			this.events();	
			
		},
		events: function() {

			var _this = this;

			$(document).on('click', '[get-new]', function(){

				_this.getNew($(this), R.interfaces.get_latest_weibo, 'now');

			});

			$(document).on('click', '[get-new-arg]', function(){

				_this.getNew($(this), R.interfaces.get_latest_arg, '');

			});

		},
		getNew: function(oThis, url, way) {

			var aid = oThis.attr('accountId');
			var bid = oThis.attr('blogId');
			var pkbid = oThis.attr('pkBlog');
			var oZhuan,
				oComment,
				oAttitude,
				info;

			this.reqUrl = url;
			this.reqParam = {
				'accountId': aid,
				'blog.blogId': bid,
				'blog.pkBlog': pkbid
			}

			if(!way) {
				this.reqParam.blogId = bid;
			}

			this.req(function(data){

				if(way) {

					info = data.data.blog;
					oZhuan = oThis.parents('[list]').find('[zhuan]');
					oComment = oThis.parents('[list]').find('[zhuan]');
					oAttitude = oThis.parents('[list]').find('[attitude]');
					
					oZhuan.html(info.repostCount);
					oZhuan.html(info.commentsCount);
					oZhuan.html(info.attitudesCount);

				}

				oTip.say(data.msg);

			}, function(data){

				oTip.say(data.msg);

			});

		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.get_weibo_list, oTplList, this.defaultParam,'', function(data){
				console.log(data);
			});

		}

	});

	var oMange = new mange();
	
});
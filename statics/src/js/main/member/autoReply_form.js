/**
 *description:智能回复表单填写
 *author:fanwei
 *date:2014/08/17
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplForm = require('../../tpl/member/autoReply_form');
	var bodyParse  = require('../../lib/http/bodyParse');
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');
	
	var autoAdd = R.Class.create(R.until, {

		initialize: function() {	
			
			this.pageInfo = bodyParse();
			this.oWrap = $('[script-bound]');
			this.judge();
			
		},
		judge: function() {

			var pid;

			pid = this.pageInfo.pkReply;

			if(!pid) {
				this.add();
			} else {
				this.edit(pid);
			}

		},
		add: function() {

			var _this = this;

			var  data = {

			};
			
			this.render(this.oWrap, oTplForm, data);

			this.submission(R.interfaces.add_reply);

		},	
		edit: function(id) {

			var _this = this;

			this.reqUrl = R.interfaces.get_edit_reply;
			this.reqParam = {
				pkReply: id
			};
			this.req(function(data){

				_this.render(_this.oWrap, oTplForm, data.data.autoreplys[0]);

				_this.submission(R.interfaces.edit_reply, id);

			});

		},
		submission: function(url, id) {

			var oReply = new ajaxForm({

				subUrl: url,
				sucDo: function(data) {

					oTip.say(data.msg);

					window.location = __url__data['autoReply'];

				},
				fnSumbit: function(data) {

					data['autoreply.pkReply'] = id;
					data['autoreply.replycontent'] = data['autoreply.replycontent'].replace(/(\n|\s)+/gi, '');
					return data;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oReply.upload();

		}

	});

	var oAutoAdd = new autoAdd();
	
});
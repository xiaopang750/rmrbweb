/**
 *description:关键词维护
 *author:fanwei
 *date:2014/10/13
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplForm = require('../../../tpl/admin/keywords/form');
	var oTip = require('../../../widget/dom/tip');
	var ajaxForm = require('../../../widget/form/ajaxForm');
	
	var words = R.Class.create(R.until, {

		initialize: function() {
			
			this.oWrap = $('[data-ele = data-wrap]');	
			this.showPage();
		},
		showPage: function() {

			var _this = this;
			this.reqUrl = R.interfaces.keywords_info;
			this.req(function(data){

				data = _this.changeData(data);

				_this.render(_this.oWrap, oTplForm, data.data);
				_this.aWords = $('[words]');
				_this.wordsSum = _this.aWords.length;
				_this.submit();

			});
		},
		changeData: function(data) {

			//拆分关键词
			var info = data.data.keyword;
			var keywords = info.keywordContent.split(',');
			info.word1 = keywords[0];
			info.word2 = keywords[1];
			info.word3 = keywords[2];
			info.word4 = keywords[3];
			info.word5 = keywords[4];
			
			return data;
		},
		submit: function() {

			var _this = this;

			var oSub = new ajaxForm({

				subUrl: R.interfaces.keywords_sub,
				fnSumbit: function(data){

					var arr = [];

					for (i=0; i< _this.wordsSum; i++) {

						arr.push( _this.aWords.eq(i).val() )

					}

					data['word.keywordContent'] = arr.join(',');

					return data;

				},
				sucDo: function(data) {

					oTip.say(data.msg);

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oSub.upload();

		}

	});

	var oWords = new words();
	
});
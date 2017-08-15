/**
 *description:添加积分弹框
 *author:fanwei
 *date:2014/09/12
 */
define(function(require, exports, module){
	
	//var global = require("../../driver/global");
	var dialog = require('../../widget/dom/dialog');
	var oTplBox = require('../../tpl/box/way/score_box');
	var ajaxForm = require('../../widget/form/ajaxForm');
	var oTip = require('../../widget/dom/tip');
	
	var addScoreBox = R.Class.create(R.until, {

		initialize: function(opts) {
			
			opts = opts || {};

			this.subUrl = opts.subUrl || '';
			this.pageInfo = this.parse();
			this.renderBox();
			this.subMit();

		},
		renderBox: function() {

			var oBox = $( oTplBox() );

			$('body').append(oBox);

			this.oBox = new dialog({
				boxSelector: '[score-box]'
			});
		},
		show: function() {

			this.oBox.show();

		},
		close: function() {

			this.oBox.close();

		},
		box: function() {

			return this.oBox;

		},
		subMit: function() {

			var _this = this;

			var oAdd = new ajaxForm({

				subUrl: this.subUrl,
				fnSumbit: function( data ) {

					data['integral.pkMemberid'] = _this.pageInfo.memberid;
					return data;
				},
				sucDo: function(data) {

					oTip.say(data.msg);
					_this.oBox.close();

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oAdd.upload();

		}

	});

	module.exports = addScoreBox;
	
});
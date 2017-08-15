/**
 *description:文字复制弹框
 *author:fanwei
 *date:2014/07/14
 */
define(function(require, exports, module){
	
	var dialog = require("../../widget/dom/dialog");
	var oTplCopyBox = require("../../tpl/box/global/copyTextBox");
	var selectRange = require("../../widget/dom/range");

	var copyBox = R.Class.create(R.until, {

		initialize: function() {
			
			this.oBox = new dialog({
				boxTpl: oTplCopyBox
			});

			this.oCopyInput = $('[copy-input]');

		},
		copy: function(str) {

			this.oCopyInput.val(str);
			this.oBox.show();
			selectRange(this.oCopyInput, 0, str.length);	

		}

	});

	module.exports = copyBox;	
});
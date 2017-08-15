/**
 *description:电子优惠券选择样式弹框
 *author:fanwei
 *date:2014/09/21
 */
define(function(require, exports, module){
	
	var oTplBox = require('../../tpl/box/spread/elc_type');
	var dialog = require('../../widget/dom/dialog');

	var selectType = R.Class.create(R.until, {

		initialize: function() {
			
			this.createBox();
			this.nowStyle = '';
			this.oConfirm = this.oWrap.find('[elc-confirm]');
			this.aType = this.oWrap.find('[typer]');
			this.onConfirm = null;
			this.events();
			this.chose( this.aType.eq(0) );
		},
		events: function() {

			var _this = this;

			this.oConfirm.on('click', function(){

				_this.onConfirm && _this.onConfirm( _this.nowName, _this.nowStyle );

			});

			this.oWrap.on('click', '[typer]', function(){

				_this.chose( $(this) );	

			});

		},
		chose: function(oThis) {

			this.aType.removeClass('active');
			oThis.addClass('active');

			var oImage = oThis.find('[bg]');
			var oName = oThis.find('[name]');
			var src = oImage.attr('src');
			var name = oName.attr('name');
			this.nowStyle = src;
			this.nowName = name;

		},
		createBox: function() {

			this.oBox = new dialog({
				boxTpl: oTplBox
			});

			this.oWrap = this.oBox.dom();

		},
		show: function() {

			this.oBox.show();

		},
		hide: function() {

			this.oBox.close();

		},
		getDefaultType: function() {

			return {
				name: this.nowName,
				url: this.nowStyle
			}

		}

	});

	module.exports = selectType;
	
});
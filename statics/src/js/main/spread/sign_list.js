/**
 *description:报名列表页
 *author:fanwei
 *date:2014/08/17
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var fenye = require('../../widget/dom/fenye');
	var oTplList = require('../../tpl/spread/sign_list');
	var bodyParse = require('../../lib/http/bodyParse');
	console.log('b');
	var list = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = bodyParse();
			this.defaultParam = {
				pageSize: 10,
				pkActivity: this.pageInfo.pkActivity
			};
			this.showPage();
		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.sign_list, oTplList, this.defaultParam,'', function(data){
				console.log(data);

			});


		}

	});

	var oList = new list();
	
});
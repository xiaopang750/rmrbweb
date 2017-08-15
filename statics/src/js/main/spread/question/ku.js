/**
 *description:问题库列表
 *author:fanwei
 *date:2014/09/02
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require("../../../widget/dom/fenye");
	var oTip = require("../../../widget/dom/tip");
	var oTplList = require("../../../tpl/spread/question/ku/ku_list");
	var oOption = require("../../../tpl/spread/question/ku/ku_type_option");
	var remove = require("../../../driver/remove");
	
	var list = R.Class.create(R.until, {

		initialize: function() {
			
			this.defaultParam = {
				pageSize: 8
			};

			this.oWrap = $('[data-ele = data-wrap]');
			this.oChange = $('[change-type]');
			this.oAddBtn = $('[add]');
			
			this.showPage();
			this.showType();
			this.events();
			this.initRemove();

			
		},
		initRemove: function() {

			var _this = this;

			var oRemove = new remove({
				removeUrl: R.interfaces.del_ku,
				onclick: function(oThis) {

					var pkQuestion = oThis.attr('aid');

					this.param = {
						'content': pkQuestion
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.defaultParam);

				}
			});

		},
		events: function() {

			var _this = this;

			this.oWrap.on('click', '[add]', function(){
				
			});

			this.oChange.on('change', function(){
				
				_this.select($(this));

			});

			this.oAddBtn.on('click', function(){

				_this.add($(this));

			});

		},
		add: function(oThis) {

			var aid = oThis.attr('addid');

			if(!aid) {

				oTip.say('请先选择新增的行业类型');
				return;
			}

			window.location = __url__data['questionStorageEdit'] + '&way=' + aid;

		},
		select: function(oThis) {

			var aid = oThis.val();

			this.oAddBtn.attr('addid', aid);
			this.oPage.refresh({
				"question.reserve1": aid,
				pageSize: 8
			});

		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.search_ku_question, oTplList, this.defaultParam, '', function(data){

				console.log(data);

			});

		},
		showType: function() {

			//加载问题库类型

			var _this = this;
			this.reqUrl = R.interfaces.find_question_way;
			this.req(function(data){

				_this.render(_this.oChange, oOption, data.data, 'append');

			});	


		}

	});

	var oList = new list();
	
});
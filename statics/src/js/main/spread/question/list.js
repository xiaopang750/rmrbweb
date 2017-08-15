/**
 *description:历史调查问卷
 *author:fanwei
 *date:2014/08/30
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var fenye = require("../../../widget/dom/fenye");
	var oTplList = require("../../../tpl/spread/question/list");
	var oSetBox = require('../../../box/spread/set_box');
	var oTip = require("../../../widget/dom/tip");
	var oSend = require('../base/send');
	var remove = require("../../../driver/remove");
	var dialog = require("../../../widget/dom/dialog");
	var oTplQuoteBox = require("../../../tpl/spread/question/add_box");
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var select = require('../../../widget/dom/select');
	
	var list = R.Class.create(R.until, {

		initialize: function() {
				
			this.firstLoad = false;	
			this.firstRender = false;
			this.showQuoteBox();

			this.defaultParam = {
				pageSize: 8
			};

			this.showPage();
			this.events();
			this.initRemove();
		},
		showType: function(cb) {

			var _this = this;

			var oSelect = new select({
				ele: $('[question-type]'),
				renderData: this.typeData,
				tpl: '{{each datas}}<option value="{{$value.pkDictionarySub}}" id="{{$value.pkDictionarySub}}">{{$value.dataName}}</option>{{/each}}',
				onReady: function() {

					cb && cb();

				}
			});

		},
		showSearchType: function(cb) {

			var _this = this;

			var oSelect = new select({
				ele: $('[show-type]'),
				url: R.interfaces.search_question_type,
				changeData: function(data) {

					//把select的数据缓存起来
					_this.typeData = data.data;

					return data.data;

				},
				tpl: '{{each datas}}<option value="{{$value.pkDictionarySub}}" id="{{$value.pkDictionarySub}}">{{$value.dataName}}</option>{{/each}}',
				onReady: function() {

					cb && cb();

				},
				onChange: function(oThis) {

					_this.defaultParam['rmrbWjObject.type'] = oThis.val();

					_this.oPage.refresh( _this.defaultParam );

				}
			});

		},
		showQuoteBox: function() {

			var _this = this;

			//创建引用弹框
			this.quoteBox = new dialog({
				boxTpl: oTplQuoteBox
			});

		},
		initRemove: function() {

			var _this = this;
			var oRemove = new remove({
				removeUrl: R.interfaces.del_exam_list,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'rmrbWjObject.pkObject': aid
					};
				},
				onsuc: function(oThis) {

					_this.oPage.refresh(_this.defaultParam);

				}
			});
		},
		events: function() {

			var _this = this;

			//推送的回调函数
			oSend.onSuc = function(oThis) {
				
				//var oPubStatus = oThis.parents('[list]').find('[pub-status]');

				//oPubStatus.html('已发布');

			};

			$(document).on('click', '[quote]', function(){

				_this.quote($(this));

			});

		},
		quote: function(oThis) {

			var _this = this;
			this.quoteId = oThis.attr('aid');

			if(!this.firstLoad) {

				this.firstLoad = true;

				this.showType(function(){

					_this.submition();
					_this.quoteBox.show();

				});

			} else {

				this.quoteBox.show();

			}

			
		},
		showPage: function() {

			var _this = this;

			this.oPage = new fenye(R.interfaces.get_exam_list, oTplList, this.defaultParam,'', function(data){

				if(!_this.firstRender) {

					_this.firstRender = true;

					_this.showSearchType();

				}


			});

		},
		submition: function() {

			var _this = this;

			var oSubmit = new ajaxForm({

				subUrl: R.interfaces.quote_question,
				fnSumbit: function(data) {

					data.pkObject = _this.quoteId;

					return data;

				},
				sucDo: function(data) {
					
					oTip.say(data.msg);
					
					window.location = __url__data['surveyEditForm'] + '&type=edit&eid=' + data.data.pkObject;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oSubmit.upload();
		}

	});

	var oList = new list();
	
});
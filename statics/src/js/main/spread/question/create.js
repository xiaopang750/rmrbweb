/**
 *description:历史调查问卷
 *author:fanwei
 *date:2014/08/30
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oTip = require('../../../widget/dom/tip');
	var select = require('../../../widget/dom/select');
	
	var create = R.Class.create(R.until, {

		initialize: function() {
			
			this.showSelect();
				
			
		},
		showSelect: function() {

			var _this = this;

			var oSelect = new select({
				ele: $('[question-type]'),
				url: R.interfaces.search_question_type,
				changeData: function(data) {

					return data.data;

				},
				tpl: '{{each datas}}<option value="{{$value.pkDictionarySub}}" id="{{$value.pkDictionarySub}}">{{$value.dataName}}</option>{{/each}}',
				onReady: function() {

					_this.submition();

				}
			});

		},
		submition: function() {
			var _this = this;
			var name;

			var oSubmit = new ajaxForm({

				subUrl: R.interfaces.create_question,
				sucDo: function(data) {
					
					oTip.say(data.msg);
	
					window.location = __url__data['surveyEditForm'] + '&type=add&eid=' + data.data.wjObject.pkObject;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});
			oSubmit.clear();
			oSubmit.upload();
			

		}

	});

	var oCreate = new create();
	
});
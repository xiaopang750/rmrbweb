/**
 *description:问卷添加编辑-编辑框
 *author:fanwei
 *date:2014/09/01
 */
 define(function(require, exports, module){
 	
 	var global = require("../../../driver/global");
 	var tplBox = require("../../../tpl/spread/question/form/choseBox");
 	var tplQuestion = require("../../../tpl/spread/question/form/question");
 	var dialog = require("../../../widget/dom/dialog");
 	var oTip = require("../../../widget/dom/tip");
 	
 	var choseBox = R.Class.create(R.until, {
 
 		initialize: function() {
 				
 			//this.createBox();
 			//this.events();
 			//this.firstLoad = false;

 			this.param = {

 			};
 		
 		},
 		events: function() {

			var _this;
 			var oSelectWay = $('[select-ku-way]');
 			var oSelectType = $('[select-ku-type]');
 			_this = this;

 			oSelectWay.on('change', function(){
 				_this.search($(this), 'question.reserve1');
 			});

 			oSelectType.on('change', function(){
 				_this.search($(this), 'question.questiontype');
 			});

 			this.oQuestionSelect.on('change', function(){
 				
 				_this.reqQuestion($(this));
 			});

 			this.oBox.onConfirm = function() {
 				_this.confirm && _this.confirm(_this.nowName, _this.nowType, _this.nowAoption);
 			}

 		},
 		search: function(oThis, name) {

 			var _this = this;

 			this.param[name] = oThis.val();

 			this.reqUrl = R.interfaces.search_ku_question;
 			this.reqParam = this.param;
 			this.req(function(data){
 			
 				_this.renderSelect(_this.oQuestionSelect, data.data.questions);	
 			});			

 		},
 		getData: function() {

 			if(!this.firstLoad) {

 				this.firstLoad = true;

 				var arrWay,
 					arrType,
 					result,
 					_this;

 				result = {
 					way: "",
 					type: ""
 				};
 				_this = this;
 				this.reqUrl = R.interfaces.find_question_way;
 				this.req(function(data){

 					arrWay = data.data.datas;

 					_this.reqUrl = R.interfaces.find_question_type;
 					_this.req(function(data){

						arrType = data.data.datas;
						result.way = arrWay;
						result.type = arrType; 						

						var oBox = _this.render($('body'), tplBox, result, 'append');
		 				oBox.hide();

		 				_this.oBox = new dialog({
			 				boxSelector: '[choseBox]'
			 			});

			 			_this.oBox.show();

		 				_this.oView = $('[question-view]');
			 			_this.oQuestionSelect = $('[question-select-wrap]');
			 			_this.events();

 					});

 				}, function(data){
 					oTip.say(data.msg);
 				});

 			} else {
 				this.oBox.show();
 			}

 		},
 		renderSelect: function(oWrap, arr) {

 			var i,
 				num,
 				newOption;

 			num = arr.length;
 				
 			oWrap.html('<option value="">请选择</option>');
 				
 			for (i=0; i<num; i++) {

 				newOption = $('<option value='+ arr[i].pkQuestion +' select-ku-question>'+ arr[i].questionname +'</option>');

 				oWrap.append(newOption);
 			}	

 		},
 		reqQuestion: function(oThis) {

 			var aid = oThis.val();
 			var _this = this;

 			if(!aid) return;

 			this.reqUrl = R.interfaces.find_ku;
 			this.reqParam = {
 				'pkQuestion': aid
 			};
 			this.req(function(data){
 				
 				var i,
					num,
					arr,
					info;

				info = data.data.question[0];
				num = info.options.length;	
				arr = [];

				for (i=0; i<num; i++) {
					arr.push(info.options[i].content);
				}
				
				_this.render(_this.oView, tplQuestion, info);
				_this.nowName = info.questionname;
				_this.nowType = info.questiontype;
				_this.nowAoption = arr;

 			});

 		}

 	});

	module.exports = choseBox;
 	
 }); 
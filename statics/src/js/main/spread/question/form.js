/**
 *description:问卷添加编辑
 *author:fanwei
 *date:2014/09/01
 */
define(function(require, exports, module){

	var global = require("../../../driver/global");
	var oTip = require("../../../widget/dom/tip");
	var qList = require('../../../tpl/spread/question/form/list');
	var mBox = require('../../../tpl/spread/question/form/multiAddBox');
	var optionList = require('../../../tpl/spread/question/form/option');
	var coverEdit = require('../../../sub/spread/question/corver_edit');
	var choseBox = require('../../../sub/spread/question/chose_box');
	var dialog = require("../../../widget/dom/dialog");
	var oTplInputKuName = require("../../../tpl/box/spread/question/input_name");
	var TimelyJudge = require("../../../widget/form/timely_judge");
	var oCoverEdit = new coverEdit();
	var oChoseBox = new choseBox();
	

	var question = R.Class.create(R.until, {

		initialize: function() {

			this.defaultType = 'radio';
			this.defaultName = '问题1';
			this.defaulType = 'radio';
			this.defaultOption = ['选项1', '选项2'];

			this.pageInfo = this.parse();
			this.qWrap = $('[q-list-wrap]');
			this.mainChange = $('[main-change]');
			this.mainUp = $('[main-up]');
			this.mainDown = $('[main-down]');
			this.oLeftBar = $('[left-bar]');
			this.oChoseKu = $('[chose-ku]');
			this.oSave = $('[saving]');
			this.oBack = $('[ku-back]');
			this.oSelectQuestionArea = $('[select-question]');

			this.nowNum = 0;
			this.oNow = null;
			this.oNowMultiAdd = null;

			this.judgeKuAndExam();
			this.createMultiAddArea();
			this.events();

			this.mainChange.hide();

			this.oBox = new dialog({
				title: "删除",
				content: "确认删除么？"
			});

			this.initJudeKuNameBox();
			//console.log(this.oKuInputNameBox.box[0]);

			//this.oKuInputNameBox.show();
				
		},
		initJudeKuNameBox: function() {

			var _this = this;

			this.oKuInputNameBox = new dialog({
				boxTpl: oTplInputKuName
			});

			this.oKuInputNameBox.onConfirm = function() {

				if(_this.kuIsCanAdd) {

					var nowName = _this.oJudgeName.val();

					_this.addQuestion(nowName, _this.nowType, _this.defaultOption);	
					_this.oSelectQuestionArea.hide();
					this.close();
				}

			};

			//jugeName;
			this.oJudgeName = this.oKuInputNameBox.box.find('[ku-name-input]');
			this.oJudgeNameTip = this.oKuInputNameBox.box.find('[wrong-name]');

			var oTimelyJudge = new TimelyJudge({
				ele: this.oJudgeName,
				checkUrl: R.interfaces.judgeIsNameRepeat,
				onDo: function() {

					this.param = {
						'question.questionname' : _this.oJudgeName.val(),
						'question.reserve1': _this.way
					}
				},
				onSuc: function(data) {

					var isRepeat = data.data.exist;

					if(isRepeat) {
						_this.oJudgeNameTip.addClass('wrong');
						_this.oJudgeNameTip.html('该行业下已存在该问题名称');
						_this.kuIsCanAdd = false;
					} else {
						_this.oJudgeNameTip.removeClass('wrong');
						_this.oJudgeNameTip.html('');
						_this.kuIsCanAdd = true;
					}

				}
			});

			oTimelyJudge.start();

		},
		makeDefaultData: function(name, type, aOption) {

			//构造可变的默认数据，为了复制使用
			this.defaulData = {
				data: {
					question: [
						{	
						    pkObject: this.pageInfo.eid,	
		                    pkQuestion:'',
		                    questiontype:'',
		                    questionname:'',
		                    reserve1: this.pageInfo.way,
                   		    options: [

                       		]
               			}
					]
				}
			};

			var info = this.defaulData.data.question[0];
			var i,
				num,
				newJson;
			num = aOption.length;	

			info.questiontype = type;
			info.questionname = name;

			for (i=0; i<num; i++) {

				newJson = {};

				newJson.pkQuestion = '';
				newJson.pkSelect = '';
				newJson.content = aOption[i];

				info.options.push(newJson);
			}

		},
		events: function() {

			var _this = this;

			//add-question
			$(document).on('click', '[select-type]', function(){

				_this.nowType = $(this).attr('select-type');
				_this.newIndex = $('[q-list]').length + 1;

				//当类型为问题库添加问题是需要先填问题名称,默认像问卷库添加问题时后台会验证重名,所以要先弹框填名称;
				if(_this.type == 'ku') {
					_this.oKuInputNameBox.show();
				} else {
					_this.addQuestion('问题' + _this.newIndex, _this.nowType, _this.defaultOption);
				}

			});

			//remove
			$(document).on('click', '[q-remove]', function(){

				var oThis = $(this);

				_this.oBox.show();

				_this.oBox.onConfirm = function() {
					_this.removeQuestion( oThis );
				};

			});

			//showfunc
			$(document).on('mouseenter', '[q-list]', function(){
				_this.oNow = $(this);
				_this.showfunc($(this));
			});

			$(document).on('mouseleave', '[q-list]', function(){
				_this.oNow = $(this);
				_this.hidefunc($(this));
			});

			//copy
			$(document).on('click', '[q-copy]', function(){
				_this.copyQuestion($(this));
			});

			//set
			$(document).on('click', '[q-set]', function(){
				//暂时只有切换单选，多选功能
				_this.setFunc($(this));
			});

			//add-option
			$(document).on('click', '[option-add]', function(){
				
				_this.addOption($(this));

			});

			//add-multi-option
			$(document).on('click', '[option-multi-add]', function(){

				//暂时只有切换单选，多选功能
				_this.oNowMultiAdd = $(this);
				_this.locMultiAdd($(this));

				return false;
			});

			//保存name
			oCoverEdit.onclick = function(oNow, oLast, str) {
				
				if(oLast) {
					
					_this.saveName(oLast, str, function(){

						oLast.html( str );
					});

				}

			};

			oCoverEdit.onhide = function(oNow, str) {

				//_this.saveName(oNow, str);
			};

			oCoverEdit.onup = function(oNow){
				_this.changeOptionLocaction(oNow, 'up');
			};

			oCoverEdit.ondown = function(oNow){
				_this.changeOptionLocaction(oNow, 'down');
			};

			oCoverEdit.onremove = function(oNow){

				_this.oBox.show();
				_this.oBox.onConfirm = function() {
					_this.optionRemove(oNow);
				};
			};

			this.mainUp.on('click', function(){
				_this.changeMain('up');
			});

			this.mainDown.on('click', function(){
				_this.changeMain('down');
			});

			var top = _this.oLeftBar.offset().top;
			//fix-bar
			$(window).on('scroll', function(){
				_this.fixLeftBar(top);
			});

			//关闭批量添加
			$(document).on('click', '[multi-close]', function(){
				_this.hideMultiBox();
				return false;
			});

			$(document).on('click', function(){

				var isMultiBoxShow;

				isMultiBoxShow = _this.oMultiAddLay.is(':visible');

				if(isMultiBoxShow) {
					_this.hideMultiBox();
				}

			});

			this.oMultiAddLay.on('click', function(e){

				var isClose;

				isClose = $(e.target).attr('multi-close') != undefined;

				if(!isClose) {
					return false;
				}

			});

			this.oMultiConfirm.on('click', function(){

				//var str = _this.oMultiAddText.val();

				//_this.addOption($(this), arr);

				var str = _this.oMultiAddText.val();
				var arr = str.split("\n");
				
				_this.addOption(_this.oNowMultiAdd, arr);

			});


			this.oChoseKu.on('click', function(){

				oChoseBox.getData();

			});

			oChoseBox.confirm = function(name, type ,aOption){


				_this.addQuestion(name, type, aOption);
				oChoseBox.oBox.close();

			};


			this.oSave.on('click', function(){

				if(!_this.nowNum) {
					oTip.say('请至少添加一个问题');
					return;
				}

				_this.reqUrl = R.interfaces.save_exam;
				_this.reqParam = {
					pkObject: _this.pageInfo.eid	
				};
				_this.req(function(data){

					var info = data.data;

					window.location = __url__data['surveyMuliEdit'] + '&pkActivity=' + info.pkActivity + '&activityType=' + info.activityType;

				}, function(data){

					oTip.say(data.msg);

				});

			});
		},	
		judgeKuAndExam: function() {

			//判断是问题库的添加编辑 还是 问卷的添加编辑;
			//如果有eid代表是问卷的添加编辑: eid 问卷id

			var isKu;

			isKu = this.pageInfo.eid ? false : true;

			if(isKu) {
				
				//this.nowPage = 'ku';
				this.initKu();
				this.judeAddEditKu();

			} else {

				//this.nowPage = 'question';
				this.initExam();
				this.judeAddEditExam();

			}

			//this.makeDefaultData(this.defaultName, this.defaulType, this.defaultOption);

		},
		judeAddEditKu: function() {

			//?way=哈哈&kid=2/''  根据kid判定是添加还是编辑；

			var isAdd;

			isAdd = this.pageInfo.kid ? false : true;

			if(!isAdd) {
				//编辑
				this.getPageData();
			}

			//

			//this.addQuestion(this.defaultName, 'radio', this.defaultOption);	

		},
		judeAddEditExam: function() {

			//?type=add/edit?eid=323;
			var isAdd;

			isAdd = this.pageInfo.type == 'add' ? true : false;

			/*if(isAdd) {
				
			} else {
				this.getPageData();			
			}*/

			this.getPageData();	
		},
		initKu: function() {

			this.type = 'ku'; //当前类型为问题库;
			this.qMax = 1;
			this.getDataUrl = R.interfaces.find_ku;
			this.addQuestionUrl = R.interfaces.add_ku;
			this.addOptionUrl = R.interfaces.add_ku_child;
			this.editQuestionUrl = R.interfaces.edit_ku;
			this.editOptionUrl = R.interfaces.edit_ku_child;
			this.delQuestionUrl = R.interfaces.del_ku;
			this.delOptionUrl = R.interfaces.del_ku_child;
			this.changeUrl = R.interfaces.change_ku;


			//如果有pkQuestion代表是编辑，如果没有代表添加后台生成一条默认数据，并生产问题和选项的id;

			this.getDataParam = {
				pkQuestion: this.pageInfo.kid
			};

			this.way = this.pageInfo.way; //行业类别	
			this.oBack.show();

		},
		initExam: function() {

			this.type = 'exam'; //当前类型为问卷库;
			this.qMax = 50;
			this.getDataUrl = R.interfaces.find_exam;
			this.addQuestionUrl = R.interfaces.add_exam;
			this.addOptionUrl = R.interfaces.add_exam_child;
			this.editQuestionUrl = R.interfaces.edit_exam;
			this.editOptionUrl = R.interfaces.edit_exam_child;
			this.delQuestionUrl = R.interfaces.del_exam;
			this.delOptionUrl = R.interfaces.del_exam_child;
			this.changeUrl = R.interfaces.change_exam;

			this.getDataParam = {
				pkObject: this.pageInfo.eid
			}

			//$('[edit-type = title]').show();
			//$('[description]').show();
			this.oSave.show();
			$('[question-head]').show();

		},
		getPageData: function() {

			var _this = this;

			this.reqUrl = this.getDataUrl;
			this.reqParam = this.getDataParam;
			this.req(function(data){
				//_this.render(_this.qWrap, qList, _this.data.data);
				console.log(data.data);
				//根据问题id查询如果没有数据则创建一条默认数据，并生成问题和选项的id;
				_this.render(_this.qWrap, qList, data.data);
				_this.nowNum = data.data.question.length;

			}, function(data){

				oTip.say(data.msg);

			});
			
		},
		addQuestion: function(name, type, aOption) {

			if(this.nowNum >= this.qMax ) {
				oTip.say('最多添加' + this.qMax + '个问题');	
				return;
			}

			var _this = this;
			var oNew;

			this.makeDefaultData(name, type, aOption);
			//this.defaulData.data.question[0].questiontype = type;
			this.reqUrl = this.addQuestionUrl;
			this.reqParam = {
				content: JSON.stringify(this.defaulData.data)
			};
			console.log(this.defaulData.data)
			this.req(function(data){
				
				data.data.num = _this.nowNum + 1;
				console.log(data);
				oNew = _this.render(_this.qWrap, qList, data.data, 'append');

				_this.nowNum++;

				_this.loacationToNew(oNew);

			}, function(data){

				oTip.say(data.msg);

			});

		},
		removeQuestion: function(oThis){

			/*var result = confirm('确认删除么');

			if(!result) {
				return;
			}*/
			var _this = this;
			
			if(this.nowNum <= 1) {
				oTip.say('不能删除更多');
				_this.oBox.close();
				return;
			}

			var aid = oThis.attr('aid');
			
			var oParent = oThis.parents('[q-list]');
			this.reqUrl = this.delQuestionUrl;
			this.reqParam = {
				content: aid
			};
			this.req(function(data){

				oParent.fadeOut(function(){
					oParent.remove();
					_this.resort();
					_this.nowNum--;
				});

				//_this.locMainChange( oThis.prev() );
				_this.oBox.close();
				oTip.say(data.msg);
			}, function(data){
				oTip.say(data.msg);
			});
			
		},
		copyQuestion: function(oThis){

			//复制问题
			var oTitle,
				type,
				name,
				aOption,
				aType,
				oParent,
				i,
				num,
				arr;

			oParent = oThis.parents('[q-list]');	
			oTitle = oParent.find('[q-list-title]');
			aOption = oParent.find('[option-name]');
			aType = oParent.find('[option-type]');
			type = aType.eq(0).attr('type');
			name = oTitle.html();

			num = aOption.length;
			arr = [];

			for (i=0; i<num; i++) {
				arr.push(aOption.eq(i).html());
			}

			this.addQuestion(name, type, arr);

		},
		saveName: function(oThis, str, cb) {

			var type = oThis.attr('edit-type');
			var reqType,
				oParent,
				oOption;
			
			switch(type) {

				case "title":

				break;

				case "content":

				break;

				case "question":
					this.editQuestionName(oThis, str, cb);
				break;

				case "option":
					this.editOptionName(oThis, str, cb);
				break;
			}	

		},
		setFunc: function(oThis) {

			//更换问题类型
			var aid = oThis.attr('aid');
			var type = oThis.attr('type');
			var changeType,
				name,
				oParent,
				aOption,
				_this,
				i,
				num;

			_this = this;
			oParent = oThis.parents('[q-list]');
			name = oParent.find('[q-list-title]').html();
			aOption = oParent.find('[option-type]');
			num = aOption.length;

			if(type == 'radio') {
				changeType = 'checkbox';
			} else {
				changeType = 'radio';
			}

			this.reqUrl = this.editQuestionUrl;
			this.reqParam = {
				"question.pkQuestion": aid,
				"question.questiontype": changeType,
				"question.questionname": name
			};

			this.req(function(data){

				if(changeType == 'checkbox') {

					oThis.attr('type', 'checkbox'); 

					for (i=0; i<num; i++) {
						var oNewOption = $('<input type="checkbox" option-type disabled="disabled">');
						oNewOption.insertBefore(aOption.eq(i));
					}

				}else {

					oThis.attr('type', 'radio');

					for (i=0; i<num; i++) {
						var oNewOption = $('<input type="radio" option-type disabled="disabled">');
						oNewOption.insertBefore(aOption.eq(i));
					}
				}

				aOption.remove();

			}, function(data){
				oTip.say(data.msg);
			});

		},
		addOption: function(oThis, arr) {

			var aid = oThis.attr('aid');
			var oParent = oThis.parents('[q-list]');
			var aOption = oParent.find('[option-type]');
			var oOptionWrap = oParent.find('[option-wrap]');
			var i,
				num,
				_this,
				nowIndex,
				type;

			_this = this;
			type = aOption.eq(0).attr('type') || 'radio';

			if(!arr) {
				nowIndex = '选项' + ( aOption.length + 1);
				arr = [nowIndex];
			}

			num = arr.length;

			this.reqUrl = this.addOptionUrl;
			this.reqParam = {
				"pkQuestion" : aid,
				"content": arr.join(',') ,
				"pkObject": this.pageInfo.eid 
			};

			this.req(function(data){
				
				data.data.questiontype = type;
				_this.render(oOptionWrap, optionList, data.data, 'append');
				_this.hideMultiBox();

			}, function(data){

				oTip.say(data.data);

			});
			
		},
		showfunc: function(oThis){

			var leftFunc,
				addFunc;

			leftFunc = oThis.find('[left-func]');
			addFunc = oThis.find('[handle-wrap]');

			leftFunc.addClass('active');
			addFunc.addClass('active');	
			
			this.locMainChange(oThis);
			//this.mainChange.show();

		},
		hidefunc: function(oThis){

			var leftFunc,
				addFunc;

			leftFunc = oThis.find('[left-func]');
			addFunc = oThis.find('[handle-wrap]');

			leftFunc.removeClass('active');
			addFunc.removeClass('active');	

		},
		locMainChange: function(oList) {

			var t;
			t = oList.position().top + ( oList.outerHeight(true) - this.mainChange.outerHeight(true) )/2;
			this.mainChange.css('top', t);

		},
		resort: function(){

			var aSortNum,
				i,
				num;

			aSortNum = $('[q-list-num]');
			num = aSortNum.length;

			for (i=0; i<num; i++) {
				aSortNum.eq(i).html(i+1);
			}

		},
		loacationToNew: function(oNew){

			var t = oNew.offset().top;

			$('html,body').animate({
				scrollTop: t
			});

		},
		editQuestionName: function(ele, str, cb) {

			var oParent,
				option,
				reqType,
				aid;

			oParent = ele.parents('[q-list]');
			oOption = oParent.find('[option-type]').eq(0);
			reqType = oOption.attr('type');
			aid = ele.attr('aid');

			this.reqUrl = this.editQuestionUrl;
			this.reqParam = {
				"question.pkQuestion": aid,
				"question.questionname": str,
				"question.questiontype": reqType
			};
			this.req(function(data){
				oTip.say(data.msg);
				cb && cb();
			},function(data){
				oTip.say(data.msg);
			});
		
		},
		editOptionName: function(ele, str , cb) {

			var aid = ele.attr('aid');
			this.reqUrl = this.editOptionUrl;
			this.reqParam = {
				"option.pkSelect": aid,
				"option.content": str
			};
			
			this.req(function(data){
				oTip.say(data.msg);
				cb && cb();
			},function(data){
				oTip.say(data.msg);
			});
		},
		editTitle: function() {

		},
		editContent: function() {

		},
		changeOptionLocaction: function(oNow, dir) {

			var nowList = oNow.parents('[change-list]');
			var qid,
				oid;
			qid = this.oNow.attr('aid');
			oid = nowList.attr('aid');
		

			this.reqUrl = this.changeUrl;
			this.reqParam = {
				pkQuestion: qid,
				pkSelect: oid,
				direction: dir
			};
			this.req(function(data){

				if(dir == 'up') {

					nowList.prev().before(nowList);

				} else if( dir == 'down' ) {

					nowList.next().after(nowList);
				}
				oCoverEdit.locaction(oCoverEdit.oTarget);
				oTip.say(data.msg);

			}, function(data){

				oTip.say(data.msg);

			});

		},
		optionRemove: function(oNow) {

			var _this = this;

			var nowList = oNow.parents('[change-list]');
			var aid = nowList.attr('aid');

			this.reqUrl = this.delOptionUrl;
			this.reqParam = {
				"pkSelect": aid
			};
			
			this.req(function(data){
				oNow.parents('[change-list]').remove();
				oCoverEdit.layHide();
				_this.oBox.close();
				oTip.say(data.msg);
			}, function(data){
				oTip.say(data.msg);
			});
		},
		changeMain: function(dir) {

			var aid;

			aid = this.oNow.attr('aid');
			this.reqParam = {

			};

			if(dir == 'up') {

				this.oNow.prev().before(this.oNow);

			} else if( dir == 'down' ) {

				this.oNow.next().after(this.oNow);
			}

			this.resort();
			this.loacationToNew(this.oNow);
			this.locMainChange(this.oNow);


		},
		fixLeftBar: function(top) {

			var wintop = document.documentElement.scrollTop || document.body.scrollTop;

			if(wintop >= top) {
				this.oLeftBar.addClass('active');
			} else {
			
				this.oLeftBar.removeClass('active');
			}

		},
		createMultiAddArea: function() {

			this.oMultiAddLay = $( mBox() );
			
			$('body').append(this.oMultiAddLay);

			this.oMultiAddText = $('[bulkadd]');

			this.oMultiConfirm = $('[multi-confirm]');

		},
		locMultiAdd: function(oThis) {

			var l,	
				t;

			l = oThis.offset().left + 30;
			t = oThis.offset().top - this.oMultiAddLay.outerHeight(true)/2;

			this.oMultiAddLay.css({
				left: l,
				top: t
			});
			
			this.oMultiAddLay.show();	

		},
		hideMultiBox: function() {

			this.oMultiAddLay.hide();
			this.oMultiAddText.val('');

		}


	});

	var oQuestion = new question();

});
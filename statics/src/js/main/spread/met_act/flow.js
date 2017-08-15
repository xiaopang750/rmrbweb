/**
 *description:会议/活动-流程
 *author:fanwei
 *date:2014/07/27
 */

 /*
	search参数说明：
	pkActivity: 会议主键,
	type: 模板类型, model_01 model_02
	flow: 当前流程	
 */

define(function(require, exports, module){

	var global = require("../../../driver/global");
	var uploadBox = require('../../../box/upload/upload');
	var oTip = require('../../../widget/dom/tip');
	var limit = require('../../../widget/dom/limit');
	var config = require('./config');

	var flow1 = R.Class.create(R.until, {
		
		initialize: function() {
			
			var _this = this;

			this.RFESH_TIME = 1000;
			this.START_FRESH = true;
			this.REFRESH_TIMER = null;
			this.iNow = 0;

			this.oSave = $('[save-btn]');
			this.oViewWrap = $('[data-ele = view-wrap]');
			this.oFormWrap = $('[data-ele = form-wrap]');
			this.oNavWrap =  $('[nav-wrap]');
			this.oMetStyle = $('[met-style]');
			this.oBack = $('[sc = back]');
			this.oViewListWrap = null;
			this.oFormListWrap = null;

			this.pageInfo = this.parse();
			this.getFlow();
			this.firstLoad();
			this.showNav();
			this.events();
		

			//字数限制
			var oLimit = new limit();

			oLimit.init();

		},
		getFlow: function() {

			//通过url获取当前是哪个流程;
			this.nowType = this.pageInfo.type;
			this.nowFlow = this.pageInfo.flow;
			this.nowIndex = this.nowFlow - 1;
			this.nowMake =  this.pageInfo.make;

			this.oMetStyle.addClass(this.nowType);
			this.oMetStyle.addClass('flow' + this.nowFlow);

			if(this.nowFlow != 1) {
				this.oBack.show();
			}

		},
		firstLoad: function() {

			var _this = this;

			var param = {
				type: this.nowFlow,
				pkActivity : this.pageInfo.pkActivity
			}

			this.reqUrl = R.interfaces.get_flow_data;
			this.reqParam = {
				inputJson: JSON.stringify(param)
			};	
			this.req(function(data){

				_this.showPage(data);

			});

		},	
		showPage: function(data) {
	
			this.renderView(data.data);
			this.renderForm(data.data);

			this.tempView = this.oViewWrap.find('[widget-role = tab-head]').eq(0);
			this.tempForm = this.oFormWrap.find('[widget-role = tab-content]').eq(0);

			this.oViewListWrap = $('[view-list-wrap]');
			this.oFormListWrap = $('[form-list-wrap]');

			//调用每个流程的函数
			var func = config[this.nowType].otherFunc[this.nowIndex]();

			//editor和当前类关联比较紧密
			if(func.editor) {

				this.oEditor = $('textarea[sub-name = word]')[0];
				this.ue = UE.getEditor(this.oEditor);
				this.addEditorEvent();

			}

		},
		refresh: function() {

			var _this,
				data;
			_this = this;

			clearInterval(this.REFRESH_TIMER);
			this.REFRESH_TIMER = setInterval(function(){

				_this.fixBg();
				_this.toDoFresh();

			},this.RFESH_TIME);

		},
		toDoFresh: function() {

			var data;

			data = this.scanParam();
				
			this.renderView(data);

		},
		addEditorEvent: function() {

			var _this,
				str;

			_this = this;

			_this.ue.addListener( 'contentChange', function() {

				str = this.getContent();
                _this.setValue(str);

            });
		},
		setValue: function(str) {

			$(this.oEditor).val(str);

		},
		renderView: function(data) {

			data.iNow = this.iNow;

			var oTpl = config[this.nowType].tpl.views[this.nowIndex];

			this.render(this.oViewWrap, oTpl, data);
		},
		renderForm: function(data) {

			var oTpl = config[this.nowType].tpl.formsr[this.nowIndex];

			this.render(this.oFormWrap, oTpl, data);
		},
		events: function() {
			
			var _this = this;
			var result,
				info,
				nextFlow;

			//save	
			this.oSave.on('click', function(){

				result = {};

				result['type'] = _this.nowFlow;
				result[_this.nowFlow] = _this.scanParam();

				_this.reqUrl = R.interfaces.post_flow_data;
				_this.reqParam = {
					inputJson: JSON.stringify(result), 
					pkActivity:_this.pageInfo.pkActivity
				};

				_this.req(function(data){

					info = data.data;
					
					nextFlow = parseInt(_this.nowFlow) + 1;
					
					if( nextFlow <= config[_this.nowType].nav.length ) {

						window.location = __url__data['meetEdit'] + '&pkActivity=' + info.pkActivity + '&type=' + _this.nowType + '&flow=' + nextFlow;

					} else {
						
						//最后一步
						window.location = __url__data['muliEdit'] + '&pkActivity=' + info.pkActivity + '&activityType=001';

					}

				});

			});	

			//移入-刷新view;
			if(this.START_FRESH) {

				this.oFormWrap.on('mouseenter', function(){
					_this.refresh();
				});

				this.oFormWrap.on('mouseleave', function(){
					clearInterval(_this.REFRESH_TIMER);
				});
			}

			//scroll
			this.oViewWrap.on('scroll', function(){
				
			    _this.fixBg();

			});

			//remove
			$(document).on('click', '[remove]', function(){

				_this.remove($(this));		

			});	
				
			//list-add
			$(document).on('click', '[list-add]', function(){

				_this.listAdd($(this));

			});

			//确认图片上传
			uploadBox.localConfirm = function(url){

				_this.toDoFresh();

			};

			this.oFormWrap.on('mouseenter', '[widget-role = tab-content]', function(){

				_this.iNow = $(this).index();

			});

		},
		listAdd: function(oThis) {
			/*if(this.nowNum >= this.MAX) {
				oTip.say('最多只能添加' + this.MAX + '个');
				return;
			}*/
			
			var oNewView = this.tempView.clone();
			var oNewForm = this.tempForm.clone();

			var oRemove;
			oNewForm.hide();
			oNewView.removeClass('active');

			oThis.before(oNewView);
			//this.oViewListWrap.append(oNewView);
			this.oFormListWrap.append(oNewForm);
			oRemove = oNewView.find('[remove]');
			oRemove.show();


			oNewView.trigger('click');

			//this.nowNum++;
		},
		remove: function(oThis) {

			var oNowView,
				oNowForm;

			oNowView = oThis.parents('[widget-role = tab-head]');
			this.iNow = oNowView.index();
			oNowForm = this.oFormWrap.find('[widget-role = tab-content]').eq(this.iNow);

			if(oNowView.prev().length) {
				oNowView.prev().trigger('click');
			} else {
				oNowView.next().trigger('click');	
			}

			oNowView.remove();
			oNowForm.remove();

		},
		scanParam: function() {

			var i,
				num,
				aWrap,
				content,
				oWrap,
				name,
				resultJson;

			aWrap = $('[sub-wrap]');
			num = aWrap.length;
			resultJson = {};

			for (i=0; i<num; i++) {

				oWrap = aWrap.eq(i);
				
				content = this.scanList(oWrap);
				name = oWrap.attr('name');

				resultJson[name] = content;

			}

			return resultJson;
		},
		scanList: function(oWrap) {

			var aList = oWrap.find('[sub-list]');

			var i,
				k,
				num,
				num2,
				key,
				arr,
				json,
				str,
				listName,
				subName,
				oName;

			num = aList.length;
			arr = [];
			
			for (i=0; i<num; i++) {

				aName = aList.eq(i).find('[sub-name]');
				listName = aList.eq(i).attr('name');

				num2 = aName.length;

				json = {};

				for (k=0; k<num2; k++) {
					
					oName = aName.eq(k);

					json[oName.attr('sub-name')] = oName.val() || oName.html();

					if(oName.attr('ext')) {
						
						var ext = [];
						var extJson
						var aExt = oName.parents('[deji]').find('[data-ele = ext]');
						var c,
							num3;

						num3 = aExt.length;	

						for (c=0; c<num3; c++) {
							extJson = {};
							extJson['subName'] = aExt.eq(c).find('[subName]').val();
							extJson['subContent'] = aExt.eq(c).find('[subContent]').val();

							ext.push(extJson);
						}	

						json[oName.attr('ext')] = ext;

					}

					if(oName.attr('type') == 'checkbox') {

						json[oName.attr('sub-name')] = oName.attr('checked') ? 0 : 1;
					}

					str = aName.eq(k).val();


				}

				if(!listName) {
					arr = str;
				} else {
					arr.push(json);	
				}
			}	
			
			return arr;
		},
		showNav: function() {

			//根据config配置文件渲染导航 和页面的基本信息

			var info,
				name,
				oTitle;

			info = config[this.nowType];
			name = info.nav[this.nowIndex].name;
			oTitle = $('[title-info]');

			this.render(this.oNavWrap, config.tempNav, info);
			this.aNav = $('[head-flow]');
			oTitle.html( name );

			var i,
				num,
				url,
				oNav;

			num = info.nav.length;
			
			for (i=0; i<num; i++) {

				url = __url__data['meetEdit'] + '&pkActivity=' + this.pageInfo.pkActivity + '&type=' + this.nowType + '&flow=' + (i+1);

				oNav = this.aNav.eq(i);

				oNav.attr('href', url);

			}

			this.aNav.eq(this.nowIndex).find('[head-flow-num]').addClass('active');	



		},
		fixBg: function() {

			var top = this.oViewWrap[0].scrollTop;

			$('[data-ele = bg]').css('top', top);

		}	

	});

	var oFlow1 = new flow1();
	
});
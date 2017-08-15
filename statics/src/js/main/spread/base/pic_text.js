/**
 *description:图文消息公共模块
 *author:fanwei
 *date:2014/07/31
 */
define(function(require, exports, module){	

	// 0030101 根据url 上way = sin 或者 multi

	var global = require("../../../driver/global");
	var uploadBox = require('../../../box/upload/upload');
	var oTip = require('../../../widget/dom/tip');
	var tab = require('../../../widget/dom/tab');
	var inputTip = require('../../../widget/dom/inputTip');

	var picText = R.Class.create(R.until, {

		initialize: function() {
			
			var _this,
				str;

			_this = this;	
			this.pageInfo = this.parse();
			this.type = this.pageInfo.activityType;
			this.tpl_text_view = require('../../../tpl/spread/gift/pic_text/view');
			this.tpl_form = require('../../../tpl/spread/gift/pic_text/form');
			this.oType = $('[pic-type]');


			//change-link
			if(this.type == '007') {

				str = '到店有礼图文消息';

			} else if(this.type == '002') {

				str = '企业形象图文消息';

			} else if(this.type == '001') {

				str = '会议邀约图文消息';

			}else if(this.type == '010') {

				str = '品牌建设图文消息';

			} else if(this.type == '003') {

				str = '每日资讯图文消息';

			} else if(this.type == '004') {

				str = '促销活动图文消息';

			} else if(this.type == '006') {
				
				str = '电子优惠券图文消息';

			} else if(this.type == '008') {

				str = '商品兑换图文消息';	

			} else if(this.type == '009') {

				str = '现场抽奖图文消息';

			} else if(this.type == '012') {

				str = '调查问卷图文消息';	

			} else if(this.type == '011') {

				str = '现场互动图文消息';	

			}

			this.oType.html(str);

			this.oView = $('[pic-text-view]');
			this.oForm = $('[pic-text-form]');
			this.oFormWrap = $('.pic-text-form');
			this.oAdd = $('[pic-text-add]');
			this.oHiddenId = $('[hidden-text]').val();
			this.postUrl = R.interfaces.post_pic_data;
			this.getDataUrl = R.interfaces.get_pic_data;
			this.pkActivity = this.pageInfo.pkActivity;

			this.RFESH_TIME = 1000;	
			this.REFRESH_TIMER = null;
			this.START_FRESH = true;
			this.nowNum = 1;
			this.MAX = 8;
			this.MIN = 1;
			this.iNow = 0;
			this.removeList = [];
			this.ue = null;
			this.editorTextLimit = 300;

			this.showPage();
			this.judgeType();
			this.events();

			var oTab = new tab({
				oWrap: $('[page-wrap]'),
				onclick: function(oThis, target, index) {					

					var isHasRemove = $( target ).attr('remove') != undefined;

					if( isHasRemove ) {
						return;
					}

					var nowEditorId;
					nowEditorId = oThis.attr('aid');
					_this.iNow = index;

					if(_this.hasEditor) {

						$('[sub-name = content]').css({
							width: '354px',
							height: '500px'
						});

						_this.ue.destroy();

						_this.ue = UE.getEditor('editor' + nowEditorId, {
							maximumWords: _this.editorTextLimit,
							enableAutoSave: false
						});

						_this.addEditorEvent();
						
					}

					_this.positionForm(oThis);

				}
			});

			oTab.init();
		},
		judgeType: function() {

			//判断是单图文还是多图文
			var way = this.pageInfo.way;

			if(way == 'multi') {

				this.oAdd.show();
				this.way = 'multi';

			} else {

				this.way = 'sin';
			} 

		},
		positionForm: function(oThis) {

			var _this = this;

			//delay 删除立即定位会导致位置计算有误
			setTimeout(function(){

				var t = oThis.position().top - (_this.oFormWrap.height()-oThis.height())/2;

				if(t<0) t = 0;

				_this.oFormWrap.stop().animate({top:t});

			},100);

		},
		refresh: function() {

			var _this,
			_this = this;

			clearInterval(this.REFRESH_TIMER);
			this.REFRESH_TIMER = setInterval(function(){

				//_this.todoFresh();

			},this.RFESH_TIME);

		},
		todoFresh: function(){

			var data;

			data = this.scanParam();
			data.iNow = this.iNow;
			this.renderView(data);
		},
		stopRefresh: function(){

			clearInterval(this.REFRESH_TIMER);

		},
		events: function() {

			var _this = this;

			$(document).on('click', '[data-ele = save-btn]', function(){

				var isOk = _this.judge();

				if(isOk) {

					var result = _this.scanParam();

					_this.save(result);	
				}
			});

			//移入启动刷新
			this.oForm.on('mouseenter', function(e){

				_this.iNow = $(e.target).parents('[widget-role = tab-content]').index();

				_this.refresh(_this.iNow);
			});

			this.oForm.on('mouseleave', function(){
				_this.stopRefresh();
			});

			//添加
			$(document).on('click', '[pic-text-add]', function(){

				_this.add();

			});

			//删除
			$(document).on('click', '[remove]', function(){

				_this.remove($(this));

			});	

			//确认图片上传
			uploadBox.localConfirm = function(url){

				_this.todoFresh();

			};

		},
		judge: function() {

			var aSubInput,
				i,
				num,
				result,
				sValue,
				oInput;

			aSubInput = $('[sub-input]');
			num = aSubInput.length;

			result = true;

			for (i=0; i<num; i++) {

				oInput = aSubInput.eq(i);
				sValue = oInput.val();

				if(oInput.attr('sub-input') == 'title') {

					if(oInput.val().length > 20) {
						oTip.say('标题不能超过20个字');
						result = false;
					}

				}

				if(oInput.attr('sub-input') == 'author') {

					if(oInput.val().length > 10) {
						oTip.say('作者不能超过10个字');
						result = false;
					}

				}

				if(!sValue) {

					if(this.way == 'sin') {
						
						//单图文所有项必填
						oTip.say('所有项为必填');
						result = false;	

					} else if( this.way == 'multi' ) {

						//多图文摘要不必填
						if( oInput.attr('sub-name') != 'activityAbstract') {
							
							oTip.say('所有项为必填');
							result = false;	

						}

					}

				}

				if(oInput.attr('sub-input') == 'url') {
					result = true;
				}

				//验证ueditor
				if(this.ue) {

					var ueStr;

					ueStr = this.ue.getContent();

					if(!ueStr) {
						oTip.say('图文内容不能为空');
						result = false;	
					}	
				}

			}

			return result;


		},
		add: function() {

			if(this.nowNum >= this.MAX) {
				oTip.say('最多只能添加' + this.MAX + '个');
				return;
			}

			var oNewView = this.tempView.clone();
			var oNewForm = this.tempForm.clone();
			var oRemove;

			oNewView.removeClass('active');
			
			this.oView.append(oNewView);
			this.oForm.append(oNewForm);
			oRemove = oNewView.find('[remove]');
			oRemove.show();

			oNewView.attr('aid', this.editId);
			oNewForm.find('textarea[sub-name = content]').attr('id', 'editor' + (this.editId));
			oNewForm.find('[r-upload-btn]').attr({w:50, h:50});

			this.nowNum ++;
			this.editId ++;
			oNewView.trigger('click');
		},
		addEditorEvent: function() {

			var _this,
				str;

			_this = this;

			_this.ue.addListener('contentChange', function() {

				str = this.getContent();
                _this.setValue(str);

            });
		},
		setValue: function(str) {

			var aContent,
				nowArea;
			aContent = this.oFormWrap.find('[widget-role = tab-content]');
			nowArea = aContent.eq(this.iNow).find('[sub-name = content]');
			nowArea.val(str);

		},
		remove: function(oThis) {

			if(this.nowNum <= this.MIN) {
				oTip.say('不能删除更多');
				return;
			}

			var oNowView,
				iNow,
				oNowForm,
				aid;

			aid = oThis.attr('aid');
			oNowView = oThis.parents('[widget-role = tab-head]');
			iNow = oNowView.index();
			oNowForm = $('[page-wrap]').find('[widget-role = tab-content]').eq(iNow);

			if(oNowView.prev().length) {

				oNowView.prev().trigger('click');

			} else {

				oNowView.next().trigger('click');	
			}

			oNowView.remove();
			oNowForm.remove();

			this.nowNum--;

			if(aid) {

				this.removeList.push(aid);
			}

		},
		save: function(data) {

			var _this = this;

			this.reqUrl = this.postUrl;
			this.reqParam = {
				muliType: this.way,
				activityType: this.type,
				inputJson: JSON.stringify(data.muliInfos),
				delMuliJson: JSON.stringify(this.removeList),
				parentActivity: this.pageInfo.parentActivity
			};
			//this.pageInfo.parentActivity
			this.req(function(data){

				if(_this.type == '009') {

					//活动类型为009需要请求两个接口
					_this.reqUrl = R.interfaces.concat_act;
					_this.reqParam = {
						pkInteraction: _this.pageInfo.pkInteraction,
						pkActivity: data.data.pkActivity
					};
					_this.req(function(data){

						oTip.say(data.msg);
						window.location = __url__data.muliList + '&pkActivity=' + _this.pageInfo.parentActivity;

					});

				} else if(_this.type == '011') {

					oTip.say(data.msg);
					window.location = __url__data.muliList + '&pkActivity=' + _this.pageInfo.parentActivity;

				} else {
					
					oTip.say(data.msg);
					window.location = __url__data.muliList;	
				}
				
			}, function(data){

				oTip.say(data.msg);

			});

		},
		showPage: function(flow) {

			var _this = this;
			var ue,
				tempData;

			this.reqUrl = this.getDataUrl;
			this.reqParam = {
				pkActivity: this.oHiddenId,
				activityType: this.type,
				awardType: this.pageInfo.awardType
			};

			this.req(function(data){
				
				_this.nowNum = data.data.muliInfos.length;
				_this.editId = data.data.muliInfos.length;

				_this.renderView(data.data);
				_this.renderForm(data.data);
				
				/*if(_this.type != '001' && _this.type != '009') {

					_this.oInputTip2 = new inputTip('[limit2]', '[tip2]');
					_this.oInputTip2.start();
				}*/

				_this.oInputTip1 = new inputTip('[limit1]', '[tip1]');
				_this.oInputTip1.start();

				//render-blank-model
				tempData = data.data;
				
				tempData.muliInfos = [{picurl:tempData.muliInfos[0].picurl, creator:tempData.muliInfos[0].creator}];
				_this.tempForm = $( _this.tpl_form(tempData) );
				_this.tempView = $( _this.tpl_text_view(tempData) );

				_this.hasEditor = $('#editor0').length;

				if(_this.hasEditor) {

					_this.ue = UE.getEditor('editor0', {
						maximumWords: _this.editorTextLimit,
						enableAutoSave: false
					});

					_this.addEditorEvent();

				}

			});

		},
		hideFirstRemove: function() {

			$('[remove]').eq(0).hide();

		},
		renderView: function(data) {

			data.actType = this.type;
			data.pid = this.pageInfo.pkActivity || this.pageInfo.parentActivity
			this.render(this.oView, this.tpl_text_view, data);

		},
		renderForm: function(data) {

			this.render(this.oForm, this.tpl_form, data);

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

					json[oName.attr('sub-name')] = oName.val() /*|| oName.html()*/;

					/*if(oName.attr('sub-name') == 'content') {

						if(typeof this.which[i] == 'object') {
							json[oName.attr('sub-name')] = this.which[i].getContent();	
						} 
					}*/

					json.pkActivity = this.oHiddenId;

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

						json[oName.attr('sub-name')] = oName.attr('checked') ? "Y" : "N";
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
		}

	});

	var oPicText = new picText();
	
});
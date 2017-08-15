/**
 *description:手机建站表单功能
 *author:fanwei
 *date:2014/07/23
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTip = require("../../widget/dom/tip");
	var oTplTag = require("../../tpl/mobile_temp_list/edit_tag");
	var oTplBanner = require("../../tpl/mobile_temp_list/banner");
	var oTplList = require("../../tpl/mobile_temp_list/module_list");
	var oTplList2 = require("../../tpl/mobile_temp_list/module_list2");
	var oTplList3 = require("../../tpl/mobile_temp_list/module_list3");
	var oTplList4 = require("../../tpl/mobile_temp_list/module_list4");
	var limitText = require("../../widget/dom/limit");
	var dialog = require("../../widget/dom/dialog");
	var uploadBox = require('../../box/upload/upload');
	//var unloadTip = require('../../lib/until/unloadTip')('您还没有保存,确定离开此页面么?');
	require("../../widget/form/color");
	var urlBox = require('../../box/mobile/selfUrlBox');

	var mobileForm = R.Class.create(R.until, {

		initialize: function(opts) {

			opts = opts || {};
			var oLimit = new limitText();
			oLimit.init();

			this.createHolder();
			this.oSave = $('[data-ele = save-btn]');
			this.oFormView = $('[data-ele = m-view-form]');
			this.oReset = $('[data-ele = reset-btn]');
			this.pageInfo = this.parse();

			this.oForm = opts.formWrap;
			this.oFormTpl = opts.formTpl;
			this.oMobile = opts.oMobile;
			this.oView = opts.viewWrap;
			this.oViewTpl = opts.viewTpl;
			this.orgData = opts.data;
			this.refreshTime = null;
			this.refreshFps = 1000;

			console.log(this.orgData);

			this.oConfirmBox = new dialog({
				title: "重置",
				content: "确认重置么？"
			});	

			if(this.pageInfo.pkSite == this.pageInfo.pkPage) {

				//如果站点id 和 pageid相同说明是站点
				this.subUrl = R.interfaces.sub_mobile_site;

			}else {

				this.subUrl = R.interfaces.sub_mobile_page;;
			}

			this.defaultAddData = {
				content: {
					modelars: {
						modelData:[
							""
						]
					},
					point: {
						modelData:[
							""
						]
					},
					textNav: {
						modelData:[
							""
						]
					}
				},
				pages:"",
				now: 0
			}

			
		},
		init: function() {

			this.oEditor = $('[baidu-editor]')[0];
			this.editorId = 0;
			this.events();
			this.showEditor('deji');
			this.selfUrlBox();

		},
		selfUrlBox: function() {

			//自定义链接模块
			this.oUrlBox = new urlBox({
				oWrap: this.oFormView,
				url: R.interfaces.add_url
			});

		},
		showEditor: function(id) {

			if(!$('[baidu-editor]').length) return;

			this.ue = UE.getEditor(id, {
				maximumWords: 5000,
				enableAutoSave: false
			});

		},
		createHolder: function() {

			this.oHolder = $('<tr class="placeholder"></tr>');
			$('body').append( this.oHolder );

		},
		events: function() {

			var _this = this;
			var timer1 = null;
			var timer2 = null;
			var timer3 = null;
			var timer4 = null;
			var result;

			//move
			$(document).on('mousedown', '[data-ele = list-change]', function(e){

				var oTarget = e.target || e.srcElement;

				var isNoMove = $(oTarget).attr('data-ele') == "no-move";
				var isSelfLink = $(oTarget).attr('select-link') != undefined;

				if(isNoMove || isSelfLink) {
					return;
				}

				var oEvent = e || event;
				var oThis = $(this);
				var orgLeft = oThis.position().left;
				var orgTop = oThis.position().top;
				var orgHeight = oThis.outerHeight(true);

				var disX = oEvent.clientX - orgLeft;
				var disY = oEvent.clientY - orgTop;
				var w = oThis.outerWidth(true);
				var h = oThis.outerHeight(true);
				var aSibligns = oThis.siblings();
				var num = aSibligns.length;
				var i=0;
				var oResult = null;
				var nowIndex,
					targetIndex,
					temp;

				nowIndex = oThis.index();
				oThis.addClass('active');
				_this.oHolder.hide();
				_this.oHolder.css('height', orgHeight);
				oThis.css({
					width:w,
					height:h,
					zIndex: 10000,
					cursor: 'move'
				});
				oThis.after( _this.oHolder );

				$(document).on('mousemove',/*, '[data-ele = list-change]',*/ function(e){
					
					var oEvent = e || event;
					var left = oEvent.clientX - disX;
					var top = oEvent.clientY - disY;
					
					_this.oHolder.show();
					oThis.css({
						left:left,
						top:top,
						position:'absolute'
					});

					clearTimeout( timer1 );
					timer1 = setTimeout(function(){

						oResult = _this.findNearest( oThis, aSibligns );

						if( oResult ) {

							targetIndex = oResult.index();

							if( nowIndex > targetIndex ) {

								oResult.before( _this.oHolder );	

							} else {

								oResult.after( _this.oHolder );

							}

							/*temp = nowIndex;
							nowIndex = targetIndex;
							targetIndex = temp;*/
						}

					},50);
				});

				$(document).on('mouseup'/*, '[data-ele = list-change]',*/, function(e){

					$(document).off('mousemove');
					$(document).off('mouseup');

					oThis.removeClass('active');
					oThis.css({
						width:'',
						height:'',
						left:'',
						top:'',
						position:'',
						cursor: 'default'
					});
					_this.oHolder.hide();

					clearTimeout( timer2 );
					timer2 = setTimeout(function(){
						_this.oHolder.after( oThis );
						_this.resort(oThis);

					},5);

					clearTimeout( timer3 );
					timer3 = setTimeout(function(){

						$('body').append( _this.oHolder );	

					},10);

					
					oThis.get(0).releaseCapture && oThis.get(0).releaseCapture();
					
				});

				oThis.get(0).setCapture && oThis.get(0).setCapture();
				
				return false;

			});

			//save
			this.oSave.on('click', function(){

				var isCanSave = _this.judgeSave();

				if(!isCanSave) return;

				var eleInfo = _this.judgeUploadWhich();

				result = _this.scanParam(eleInfo.ele, eleInfo.name);

				_this.savePage(result);

			});

			//remove
			$(document).on('click', '[remove-list]', function(){

				_this.removeList($(this));

			});

			//add
			$(document).on('click', '[mobile-list-add]', function(){

				var tplName = $(this).attr('add-name');

				_this.addList($(this), tplName);

			});

			//reset
			this.oReset.on('click', function(){

				_this.oConfirmBox.show();	

			});

			this.oConfirmBox.onConfirm = function() {

				_this.reset(_this.orgData);
				_this.oConfirmBox.close();

			};


			//及时刷新view
			this.oFormView.on('mouseenter', function(){

				_this.refresh();

			});

			this.oFormView.on('mouseleave', function(){

				_this.stopRefresh();

			});

			//点击确定的时候刷新一下view
			uploadBox.localConfirm = function() {

				_this.timelyView( true );
			};

		},
		reset: function(data, view) {

			if(view) {

				//只刷新view区域

				this.render(this.oView, this.oViewTpl, data);

			} else {

				//重置所有
				var oEditor;

				//重置 -----need modify------  ueeditor 重置有点问题

				$(this.oEditor).remove();
				this.render(this.oForm, this.oFormTpl, data);
				this.render(this.oView, this.oViewTpl, data);

				if($('[baidu-editor]').length) {
					this.oEditor = $('[baidu-editor]')[0];
					this.editorId ++;
					this.oEditor.id = '_editor' + this.editorId;
					this.showEditor('_editor' + this.editorId);
				}

			}

		},
		judgeSave: function() {

			//验证所有的上传图片是不是名字为空
			var aPicFile = this.oFormView.find('input[type=text], [r-upload-url]');
			var num = aPicFile.length;
			var i,
				result,
				sName,
				isHasUploadUrl;

			result = true;

			for (i=0; i<num; i++) {

				sName = aPicFile.eq(i).val();
				isHasUploadUrl = aPicFile.eq(i).attr('r-upload-url') != undefined;

				if( isHasUploadUrl ) {

					if(!sName) {
						oTip.say('图片上传为空');
						return false;
					}

				}

				if(!sName) {
					result = false;
				}

			}

			if(!result) {
				oTip.say('所有输入项不能为空');
			}

			if(this.ue) {

				var ueContent = this.ue.getContent();

				if(!ueContent) {
					oTip.say('文本编辑框内容不能为空');
					result = false;
				}
			}


			return result;

		},
		addList: function(oThis, tempName) {

			//添加
			var oParent = oThis.parents('[data-name]').find('[sub-wrap]').length ? oThis.parents('[data-name]').find('[sub-wrap]') : oThis.parents('[sub-type]').find('[sub-wrap]');
			var now = parseInt(oParent.attr('now'));
			var max = parseInt(oParent.attr('max'));

			this.defaultAddData.pages = __allPages;

			if(now >= max) {
				oTip.say('不能添加更多,最多为' + max + '条数据');
				return;
			} else {
				now++;
				this.defaultAddData.now = now;

				oParent.attr('now', now);
				var tempList = eval(tempName)(this.defaultAddData);
				var newList = $(tempList);
				oParent.append(newList);
			}

		},
		removeList: function(oThis) {
			/*-----需要修改-----*/
			//删除
			var oParent = oThis.parents('[sub-wrap]');
			var nowList = oThis.parents('[sub-list]');
			var now = parseInt(oParent.attr('now'));
			var min = parseInt(oParent.attr('min'));
			var aSort;
			
			if(now<=min) {
				oTip.say('不能删除更多,至少为' + min + '条数据');
				return;
			} else {
				nowList.remove();
				aSort = oParent.find('[data-ele = sort]');
				aSort.each(function(i){
					aSort.eq(i).html(i+1);
				});
				now--;
				oParent.attr('now', now);
			}

		},
		getDis: function(obj1, obj2) {

			var x=obj1.children().offset().left-obj2.children().offset().left;
  
		  	var y=obj1.children().offset().top-obj2.children().offset().top;
		  
		  	var dis=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
		  
		  	return dis;

		},
		findNearest: function(obj, aSiblings) {

			var iMin=9999999;
			var iMinIndex=-1;
			var num,i,dis;
			num = aSiblings.length;

			for (i=0; i<num; i++) {
				
				if( this.cdTest(obj, aSiblings.eq(i) ) ) {

				    dis = this.getDis( obj, aSiblings.eq(i) );
				   
				    if(dis < iMin){

				    	iMin = dis;
						iMinIndex = i;

				    }
				}
			}
			  
			if( iMinIndex == -1 ) {

			    return null;

			} else {

			    return aSiblings.eq( iMinIndex );
			}

		},
		cdTest: function(obj1, obj2) {

			var l1 = obj1.children().offset().left;
			var r1 = l1 + obj1.width();
			var t1 = obj1.children().offset().top;
			var b1 = t1 + obj1.height();

			var l2 = obj2.children().offset().left;
			var r2 = l2 + obj2.width();
			var t2 = obj2.children().offset().top;
			var b2 = t2 + obj2.height();

			if(r2 < l1 || l2 > r1 || b2 < t1 || t2 > b1) {

				return false;
			}
			else {

				return true;
			}

		},
		resort: function(oThis) {

			var aSort = oThis.parents('[data-ele = sort-wrap]').find('[data-ele = sort]');

			aSort.each(function(i){
			
				aSort.eq(i).html( i + 1 );

			});

		},
		judgeUploadWhich: function(isAll) {

			var aSec = this.oFormView.find('[data-name]');
			var isShow,
				aEle,
				aName,
				infoJson;

			aEle = [];
			aName = [];
			infoJson = {};

			//如果没有传isAll, 那么则上传所有数据
			aSec.each(function(i){

				if(!isAll) {

					isShow = aSec.eq(i).is(':visible');

					if(isShow) {

						aEle.push(aSec.eq(i));
						aName.push(aSec.eq(i).attr('data-name'));

					}

				}else {

					aEle.push(aSec.eq(i));
					aName.push(aSec.eq(i).attr('data-name'));

				}

			});	

			infoJson.ele = aEle;
			infoJson.name = aName;

			return infoJson;

		},
		scanParam: function(aEle, aName) {

			var i,
				num,
				uploadJson,
				content,
				resultJson;

			num = aEle.length;
			resultJson = {};
			uploadJson = {
				pkSite: this.pageInfo.pkSite,
				pkPage: this.pageInfo.pkPage,
				type: '',
				content: ''
			};
			
			for (i=0; i<num; i++) {

				uploadJson.type = aName[i];	

				content = this.scanListParam(aEle[i], aName[i]);

				resultJson[aName[i]] = content;
			}
			
			uploadJson.content = JSON.stringify(resultJson);	

			return uploadJson;

		},
		scanListParam: function(ele, name) {
			
			var aList = ele.find('[sub-list]');
			var isSin = ele.find('[sub-wrap]').attr('ctype') == 'sin';

			var i,
				k,
				num,
				num2,
				arr,
				aEle,
				outJson,
				jsonDetail,
				isHasEditor;

			num = aList.length;
			arr = [];
			outJson = {};
			//outJson[name] = {};

			for (i=0; i<num; i++) {

				aEle = aList.eq(i).find('[sub-name]');
				num2 = aEle.length;
				jsonDetail = {};

				for(k=0; k<aEle.length; k++) {

					if(aEle.eq(k).attr('type') == 'checkbox') {
						jsonDetail[aEle.eq(k).attr('sub-name')] = aEle.eq(k).attr('checked') ? 1 : 0;
					} else {
						jsonDetail[aEle.eq(k).attr('sub-name')] = aEle.eq(k).val();
					}

					isHasEditor = aEle.eq(k).attr('baidu-editor') != undefined;

					if( isHasEditor ) {

						jsonDetail[aEle.eq(k).attr('sub-name')] = this.ue.getContent();
					}
				}

				if(!isSin) {
					arr.push(jsonDetail);	
				}
				
			}

			outJson.modelName = name;

			if(!isSin) {

				outJson.modelData = arr;
				//return JSON.stringify(outJson);
				return outJson;
			} else {

				outJson.modelData = jsonDetail;

				//return JSON.stringify(outJson);
				return outJson;
			}

		},
		savePage: function(data) {

			var _this = this;

			this.reqUrl = this.subUrl;
			this.reqParam = data;
			this.req(function(data){

				//allData
				_this.timelyView(true);

				oTip.say(data.msg);
				//提交卸载不提示
				window.__dontTip = true;
				//window.location = window.location;
				//window.location = data.data;
			}, function(data){

				oTip.say(data.msg);
				
			});

		},
		timelyView: function(view) {

			var eleInfo = this.judgeUploadWhich(true);
			result = this.scanParam(eleInfo.ele, eleInfo.name);
			result.content = JSON.parse( result.content );
			result.pages = __allPages;


			this.reset( result, view );	

			//由mobile-view类传递过来的方法;	
			if( this.oMobile.nowName ) {
				this.oMobile.choseLay( this.oMobile.nowName );
				this.oMobile.roll();	
			}

		},
		refresh: function() {

			var _this = this;

			clearInterval( this.refreshTime );
			this.refreshTime = setInterval(function(){

				_this.timelyView( true );

			}, this.refreshFps);

		},
		stopRefresh: function() {

			clearInterval( this.refreshTime );

		} 

	});

	module.exports = mobileForm;
	
});


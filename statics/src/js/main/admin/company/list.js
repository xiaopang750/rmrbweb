/**
 *description:企业管理
 *author:fanwei
 *date:2014/08/06
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var tree = require('../../../widget/form/tree');
	var tplForm = require('../../../tpl/admin/company/form');
	var ajaxForm = require('../../../widget/form/ajaxForm');
	var oTip = require('../../../widget/dom/tip');
	var dialog = require("../../../widget/dom/dialog");

	var manage = R.Class.create(R.until, {

		initialize: function() {
			
			var _this = this;

			this.oTreeWrap = $('[tree-wrap]');

			this.oFormWrap = $('[form-wrap]');

			this.oFunArea = $('[func-area]');

			this.oModify = $('[modify]');

			this.oDestribution = $('[destribution]');

			this.oSubDetail = $('[sub-list]');

			this.oRole = $('[add-role]');

			this.oUser = $('[add-user]');

			this.firstLoad = false;

			this.subUrl = '';

			this.way = '';

			this.maxName = 10;

			window.oTree = new tree('oTree');

			this.reqTree(this.oTreeWrap, ''); 

			this.events();

			this.isRepeat = false;

			this.oBox = new dialog({
				title: "删除",
				content: "确认删除么？"
			});

			this.oBox.onConfirm = function(){

				_this.reqUrl = R.interfaces.del_group_com;
				_this.reqParam = {
					pkCorp: _this.nowAid
				};
				_this.req(function(data){
					oTip.say(data.msg);
					window.location = window.location;
				},function(data){
					oTip.say(data.msg);
				});

			};

		},
		events: function() {

			var _this = this;
			//var status;

			//点击请求子集
			$(document).on('click', '[data-ele = get-child]', function(){

				
				var oThis = $(this);

				//status = $(this).attr('status');
				_this.nowAid = $(this).attr('aid');
				_this.fid = $(this).attr('fid');
				_this.oFunArea.show();

				//_this.oModify.attr('aid', _this.nowAid);

				/*if(status == 'no') {*/
					
				_this.getChild($(this), function(data){

					console.log(data.data);

					_this.renderForm(data.data, '', R.interfaces.edit_group_com);

					_this.lockOrUnLock('yes');

					//needmodify -- 找到刷新后 原来点击的是哪个
					var aTree = $('[data-ele = get-child]');
					
					aTree.each(function(i){

						if(aTree.eq(i).attr('aid') == _this.nowAid) {

							aTree.eq(i).addClass('active');

						}

					});

				});
				/*}*/

			});

			//add-gourp
			$('[add-group]').on('click', function(){

				_this.add('001', function(data){
					//_this.nowAid = '';
					if(_this.nowAid) {
						_this.way = 'level2';
					} else {
						_this.way = 'level1';
					}
					data.data.userinfo = {};
					_this.renderForm(data.data, 'add', R.interfaces.add_group_com);

				});
			});

			//add-com
			$('[add-com]').on('click', function(){
				_this.add('002', function(data){
					_this.way = 'level2';
					if(!_this.nowAid) {
						oTip.say('请先选择企业');
						return;
					} else {
						_this.renderForm(data.data, 'add', R.interfaces.add_group_com);	
					}

				});
			});

			//modify
			$('[modify]').on('click', function(){
				_this.way = 'modify';
				_this.lockOrUnLock('no');
				//_this.submission(R.interfaces.edit_group_com);
			});

			//remove
			$('[remove]').on('click', function(){

				_this.remove();

			});

			//分配权限跳转
			this.oDestribution.on('click', function(){

				_this.nowAid = _this.nowAid || '';

				window.location = __url__data['corpPower'] + '&cid=' + _this.nowAid;

			});


			//判重
			$(document).on('keyup', '[name = userinfo.userCode]', function(){
				_this.checkRepeat($(this));
			});		


			//跳转至子企业
			this.oSubDetail.on('click', function(){
				
				var nowCorp = _this.nowAid ? _this.nowAid : '';

				window.location = __url__data['subCorpDetail'] + '&pkCorp=' + nowCorp;

			});	

		},
		checkRepeat: function(oThis) {

			var _this = this;

			var str = oThis.val();
			var pkCorp = this.nowAid || '';
			var oWrong = oThis.parents('[script-bound]').find('[checkRepeat]');
			this.reqUrl = R.interfaces.checkMangerRepeat;
			this.reqParam = {
				userName: str,
				pkCorp: pkCorp
			};
			this.req(function(data){
				
				oWrong.html('');
				_this.isRepeat = false;

			}, function(data){

				oWrong.html(data.msg);
				_this.isRepeat = true;

			});
		},
		remove: function() {

			if(!this.nowAid) {
					oTip.say('请选择');
			} else {

				var oNow = $('[aid = '+ this.nowAid +']');
				var isHasChild;
				isHasChild = oNow.parent().get(0).tagName == 'A';
				if(isHasChild) {

					oTip.say('有子集不能删除');
					
				}else {					

					//删除
					this.oBox.show();

				}
			}

		},
		lockOrUnLock: function(type) {

			var oTable,
				aInput,
				aArea,
				aSelect,
				aButton;

			oTable = $('[script-bound=form_check]');
			aInput = oTable.find('input');
			aArea = oTable.find('textarea');
			aSelect = oTable.find('select');
			aButton = oTable.find('[ script-role = confirm-btn]');

			if(type == 'yes') {

				aInput.attr('disabled', 'disabled');
				aArea.attr('disabled', 'disabled');
				aSelect.attr('disabled', 'disabled');
				aButton.attr('disabled', 'disabled');	

			} else {

				aInput.removeAttr('disabled', 'disabled');
				aArea.removeAttr('disabled', 'disabled');
				aSelect.removeAttr('disabled', 'disabled');
				aButton.removeAttr('disabled', 'disabled');

			}

		},
		renderForm: function(data, type, url) {

			if(type == 'add') {

				data.corps = [];
				data.corp = {};
				this.render(this.oFormWrap, tplForm, data);
			} else {
				this.render(this.oFormWrap, tplForm, data);
			}

			this.submission(url);


		},
		add: function(code, cb){

			var corpId;

			if(this.way == 'level1') {
				corpId = '';
			} else {
				corpId = this.nowAid;
			}

			this.reqUrl = R.interfaces.get_compay_select;
			this.reqParam = {
				pkCorp: corpId
			};
			this.req(function(data){
				
				cb && cb(data);

			});

		},
		getChild: function(oThis, cb) {

			var aid = oThis.attr('aid');
			var sid = oThis.attr('sourceId');

			this.reqTree(this.oTreeWrap, aid, sid, function(data){

				cb && cb(data);

			});

		},
		reqTree: function(oWrap, copId, sid, cb) {

			var _this = this;

			this.reqUrl = R.interfaces.get_company_tree;
			this.reqParam = {
				pkCorp: copId,
				sourceId: sid
			};
			this.req(function(data){
				

				_this.showTree(oWrap, data);

				//$('[aid = '+ _this.nowAid +']').attr('status', 'yes');

				cb && cb(data);
			});

		},
		showTree: function(oWrap, data) {

			if(!this.firstLoad) {

				oTree.add(data.data.firstCorpId,-1,'<span style="margin-left:-15px;">企业列表</span>');	

				this.firstLoad = true;

			}

			var i,
				info,
				num,
				orgName;

			info = data.data.corps;
			num = info.length;

			oWrap.html('');

			for (i=0; i<num; i++) {

				orgName = info[i].corpname;

				if(info[i].corpname.length > this.maxName) {
					info[i].corpname = info[i].corpname.substring(0, this.maxName) + '...';
				}

				oTree.add(info[i].pkCorp, info[i].pkFathercorp , '<a href="javascript:;" data-ele="get-child" aid='+ info[i].pkCorp +' status="no" sourceId='+ info[i].sourceId +' fid='+ info[i].pkFathercorp +' title='+ orgName +' choose>' + info[i].corpname + '</a>','');
			}

			//console.log(oTree);

			oWrap.append($(oTree.toString()));

		},
		submission: function(url) {

			var oNew = $('[sc = pass-new]');
			var oRnew = $('[sc = re-new-pass]');
			var oEnable = $('[isEnable]');
			var _this = this;

			var oSub = new ajaxForm({

				subUrl: url,
				otherCheck:{

					reNewPassWord:[
						function(ele){

							if ( !ele.val() ) {

								return false;

							} else {

								return true;	
							}
							
						},
						function(ele){

							if ( ele.val() != oNew.val() ) {

								return false;

							} else {


								return true;
							}

						}
					]
				},
				otherJude: [

					function() {

						if(_this.isRepeat) {
							oTip.say('用户编码已存在');
							return false;
						} else {
							return true;
						}

					}

				],
				fnSumbit: function( data ) {

					if(_this.way == 'level1') {

						data['corp.pkFathercorp'] = '';
						data['corp.pkCorp'] = _this.nowAid;

					} else if(_this.way == 'level2') {

						data['corp.pkFathercorp'] = _this.nowAid;
						data['corp.pkCorp'] = '';

					} else if(_this.way == 'modify') {

						data['corp.pkFathercorp'] = _this.fid;
						data['corp.pkCorp'] = _this.nowAid;
					}

					data['corp.isEnable'] = oEnable.attr('checked') ? 0 : 1;
					data['corp.corpname'] = data['corp.corpname'].replace(/\s+/gi, '');

					return data;
				},
				sucDo: function(data) {

					oTip.say(data.msg);
					
					//window.location = window.location;

				},
				failDo: function(data) {

					oTip.say(data.msg);

				}

			});

			oSub.upload();

		}

	});

	var oManage = new manage();
	
});
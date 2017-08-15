/**
 *description:区域店铺
 *author:fanwei
 *date:2014/08/07
 */
define(function(require, exports, module){

	var global = require("../../../driver/global");
	var tree = require('../../../widget/form/tree');
	var oTplList = require('../../../tpl/admin/area/list');
	var oTplForm = require('../../../tpl/admin/area/form');
	var oTip = require('../../../widget/dom/tip');
	var remove = require("../../../driver/remove");
	
	var area = R.Class.create(R.until, {

		initialize: function() {
					
			this.oTreeWrap = $('[tree-wrap]');
			this.oAreaWrap = $('[data-wrap]');
			this.oFormWrap = $('[form-wrap]');

			window.oTree = new tree('oTree');

			oTree.add(0,-1,'<span style="margin-left:-15px;">区域列表</span>');

			this.reqTree(this.oTreeWrap, 0);

			this.events();

			this.nowTarget = null;

			this.initRemove();
					
		},
		initRemove: function() {

			var oRemove = new remove({
				removeUrl: R.interfaces.areaDel,
				onclick: function(oThis) {

					var aid = oThis.attr('aid');

					this.param = {
						'shopareaid': aid
					};
				},
				onsuc: function(oThis) {

					var oParent = oThis.parents('[list-wrap]');
					oParent.remove();

				}
			});

		},
		events: function() {

			var _this = this;

			//点击请求子集
			$(document).on('click', '[data-ele = get-child]', function(){

				_this.nowTarget = $(this);
				_this.nowAid = $(this).attr('aid');
				_this.fid = $(this).attr('fid');
				_this.showList();
				_this.getChild($(this), function(data){
					
					_this.hilightNow( _this.nowAid );

				});

			});

			//添加
			$(document).on('click', '[add]', function(){
				_this.type = 'add';
				_this.add();		

			});

			//编辑
			$(document).on('click', '[edit]', function(){

				var data = {};
				data.name = $(this).attr('name');
				data.add = $(this).attr('add');
				data.code = $(this).attr('code');
				_this.type = 'edit';
				_this.eid = $(this).attr('aid');
				_this.edit(data);

			});

			//保存
			$(document).on('click', '[save]', function(){

				_this.save();

			});

		},
		hilightNow: function(nowId) {

			var aTree = $('[data-ele = get-child]');
					
			aTree.each(function(i){

				if(aTree.eq(i).attr('aid') == nowId) {

					aTree.eq(i).addClass('active');

				}

			});

		},
		save: function() {

			var oName,
				oAdd,
				oCode,
				sName,
				sAdd,
				sCode,
				result,
				url,
				_this;

			oName = $('[input-name]');
			oAdd = $('[input-add]');
			oCode = $('[input-code]');
			_this = this;

			sName = oName.val();
			sAdd = oAdd.val();
			sCode = oCode.val();
			result = {};
			result['shopareainfo.shopname'] = sName;
			result['shopareainfo.shopaddr'] = sAdd;
			result['shopareainfo.shopcode'] = sCode;
			result['shopareainfo.pkArea'] = this.nowAid;

			if(!sName) {

				oTip.say('请填写店铺名称');
				return;

			} else if(!sAdd) {

				oTip.say('请填店铺地址');
				return;

			} else if(!sCode) {

				oTip.say('请填店铺编码');
				return;
			}

			if(this.type == 'add') {
				url = R.interfaces.areaAdd;
			}else {
				url = R.interfaces.areaEdit;
				result['shopareainfo.pkShoparea'] = this.eid;
			}

			this.reqUrl = url;
			this.reqParam = result;
			this.req(function(data){
				
				_this.nowTarget.trigger('click');

				oTip.say(data.msg);

			}, function(data){

				oTip.say(data.msg);
				
			});

		},
		add: function() {

			var data = {};
			this.addEdit();
			data.name = '';
			data.add = '';
			data.code = '';
			this.renderForm(data);

		},
		edit: function(data) {

			this.addEdit();
			this.renderForm(data);

		},
		addEdit: function() {

			this.oAreaWrap.hide();
			this.oFormWrap.show();

		},
		showList: function() {

			this.oAreaWrap.show();
			this.oFormWrap.hide();

		},	
		renderForm: function(data) {

			this.render(this.oFormWrap, oTplForm, data);

		},
		getChild: function(oThis, cb) {

			var _this = this;
			var aid = oThis.attr('aid');
			var level = oThis.attr('level');

			this.reqTree(this.oTreeWrap, aid, function(data){

				// {areas:[]} 为空代表下级无区域,显示添加按钮

				var hasChildAreas = data.data.isShowShop;

				if( hasChildAreas == "Y" ) {
					
					_this.reqshop(aid, function(data){
				
						_this.renderShop(_this.oAreaWrap, oTplList, data.data);
					});

					//_this.renderShop(_this.oAreaWrap, oTplList, {});

				}

				cb && cb(data);

			});
 
		},
		reqshop: function(aid, cb) {

			this.reqUrl = R.interfaces.get_area_shop;
			this.reqParam = {
				pkArea: aid
			};
			this.req(function(data){
				
				cb && cb(data);
			});

		},
		renderShop: function(oWrap, oTpl, data) {

			this.render(oWrap, oTpl, data);

		},
		reqTree: function(oWrap, pkArea, cb) {

			var _this = this;

			this.reqUrl = R.interfaces.get_area_data;
			this.reqParam = {
				pkArea: pkArea
			};
			this.req(function(data){
				
				_this.showTree(oWrap, data);
				cb && cb(data);
			});

		},
		showTree: function(oWrap, data) {
			
			var i,
				info,
				num;

			info = data.data.areas;
			num = info.length;

			oWrap.html('');

			for (i=0; i<num; i++) {

				oTree.add(info[i].pkArea, info[i].pkFatherarea , '<a href="javascript:;" data-ele="get-child" aid='+ info[i].pkArea + ' level='+ info[i].arealevel +'>' + info[i].areaname + '</a>','');
			}

			//console.log(oTree);

			oWrap.append($(oTree.toString()));
		}

	});

	var oArea = new area();
	
});
/**
 *description:自定义菜单
 *author:fanwei
 *date:2014/10/14
 */

define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTip = require('../../widget/dom/tip');
	var dialog = require('../../widget/dom/dialog');
	var charlen = require('../../lib/until/charlen');
	var inputTip = require('../../widget/dom/inputTip');


	/* template */
	var oTplAddBox = require('../../tpl/way/bind/menu/addBox'); //添加
	var oTplDelBox = require('../../tpl/way/bind/menu/delBox'); //删除
	var oTplMainList = require('../../tpl/way/bind/menu/menuMain'); //主菜单
	var oTplSubList = require('../../tpl/way/bind/menu/menuSub'); //子菜单
	
	var Menu = R.Class.create(R.until, {

		initialize: function() {
			
			this.setParam();

			if(!this.accountId || !this.accountType) {

				oTip.say( '非法操作' );

				return;
			}

			
			this.pageInfo = this.parse();
			this.initBox();
			this.getEle();
			this.showMenu();
			this.createHolder();
			this.events();
			this.showName();

		},
		getEle: function() {

			this.oMenu = $('[sc = menu-wrap]');	
			this.oTodoFront = $('[sc = todoFront]');
			this.oTodoBack = $('[sc = todoBack]');
			this.oMenuWrap = $('[sc = menu-content]');
			this.oMenuType = $('[menu-type]');

		},
		showName: function() {

			//显示bread菜单类型
			var menuType;

			menuType = this.pageInfo.accounttype == '001' ? "微信" : "新浪微博";

			this.oMenuType.html( menuType );

		},
		setParam: function() {

			this.MAIN_LIMIT = 3;
			this.SUB_LIMIT = 5;
			this.MAIN_TEXT_LIMIT = 8; //主菜单字数限制
			this.SUB_TEXT_LIMIT = 16; //子菜单字数限制
			this.param = this.parse();
			this.accountId = this.param.accountid;
			this.accountType = this.param.accounttype;

			this.oAddParent = null;
			this.oHolder = null;
			this.listData = null;
			this.oFatherList = null;

			this.ADDURL = R.interfaces.add_weixin_menu;
			this.EDITURL = R.interfaces.edit_hased_menu;
			this.SHOWMENUURL = R.interfaces.get_hased_menu;
			this.REMOVEURL = R.interfaces.remove_hased_menu;
			this.SORTURL = R.interfaces.sort_menu;
			this.SAVEALLURL = this.accountType == '001' ? R.interfaces.build_weixin_menu : R.interfaces.build_weibo_menu;
		},
		initBox: function() {

			//初始化弹框

			//添加
			this.oAddBox = new dialog({
				boxTpl: oTplAddBox
			});
			this.oWrongTip = $('[sc = wrong-tip]');
			this.oConfirm = $('[confirm-type = add]');
			this.oInput = $('[sc = input-name]');
			this.oAddBoxTitle = this.oAddBox.boxTitle();

			//删除
			this.oDelBox = new dialog({
				boxTpl: oTplDelBox
			});

		},
		showMenu: function() {

			//显示菜单
			var _this = this;
			var info;
			this.reqUrl = this.SHOWMENUURL;
			this.reqParam = {
				accountid: this.accountId,
				type: this.accountType
			};
			this.req(function(data){

				info = data.data;
				console.log(info);
				if(info.menu_list) {

					_this.render(_this.oMenuWrap, oTplMainList, data);

					_this.cacheData( data );	
				}

			}, function(data){

				oTip.say(data.msg);

			});
		},
		cacheData: function(data) {

			var arrOut = data.data.menu_list;
			var num = arrOut.length;
			var i,
				k,
				aParent,
				aSub,
				arrInner,
				innerNum;

			aParent = $('[list-parent]');

			for ( i=0; i<num; i++ ) {

				aParent.eq(i).data('info', arrOut[i]);
				arrInner = arrOut[i].menu_son_list ? arrOut[i].menu_son_list : [];
				innerNum = arrInner.length;
				aSub = aParent.eq(i).parents('[role = main-list]').find('[list-sub]');

				for ( k=0; k<innerNum; k++ ) {

					aSub.eq(k).data('info', arrInner[k]);

				}
			}
		},	
		events: function() {

			var _this,
				oTaregt,
				sRole;

			_this = this;

			this.oMenu.on('click', function(e){

				oTaregt = $(e.target);
				sRole = oTaregt.attr('sc');

				switch( sRole ) {

					case 'add-main':

						//添加主菜单
						_this.add_edit('main', 'add', oTaregt);
					break;

					case 'list-add':
						//添加子菜单
						_this.add_edit('sub', 'add', oTaregt);
					break;

					case 'list-edit-main':
						//编辑主菜单
						_this.add_edit('main', 'edit', oTaregt);
					break;

					case 'list-edit-sub':
						//编辑子菜单
						_this.add_edit('sub', 'edit', oTaregt);
					break;

					case 'sort':

						//排序
						_this.toReadySort();
					break;

					
					case 'confirmSort':

						//确认排序
						_this.saveSort();
					break;


					case 'cancel':

						//取消排序
						_this.toCacncelSort();
					break;

					case 'list-del':

						//删除
						_this.remove( oTaregt );
					break;

				}

			});

			this.bindListEvent();

			//box
			var listType,
				reqType,
				listId,
				name;

			this.oAddBox.onConfirm = function(oThis) {

				listType = oThis.attr('listType');
				reqType = oThis.attr('reqType');
				listId = oThis.attr('list-id') ? oThis.attr('list-id') : '';
				name = _this.oInput.val();

				_this.addEditReq(listType, reqType, listId, name);

			};

			this.oAddBox.onClosed = function() {

				_this.wrongHide();
				_this.initInput('');

			};

			this.oAddBox.onStart = function() {

				_this.oInput.focus();

			};

			//input-check
			var max;

			this.oInput.on('keyup', function(){

				max = parseInt( $(this).attr('max') );

				_this.judeValue(max, '●菜单名称名字不多于'+ max/2 +'个汉字或'+ max +'个字母');

			});


			//save-all;
			$('[sc = save-all]').on('click', function(){

				_this.saveAll();

			});

		},
		saveAll: function() {

			this.reqUrl = this.SAVEALLURL;
			this.reqParam = {
				accountid: this.accountId
			};
			this.req(function(data){

				oTip.say(data.msg);

			}, function(data){

				oTip.say(data.msg);

			});

		},
		add_edit: function(listType, reqType, oThis) {

			//添加编辑菜单
			var max,
				title,
				listMax,
				num,
				oList,
				tip,
				id,
				name,
				oName;

			if( listType == 'main' ) {

				max = this.MAIN_TEXT_LIMIT;
				title = '菜单名称名字不多于'+ this.MAIN_TEXT_LIMIT/2 +'个汉字或'+ this.MAIN_TEXT_LIMIT +'个字母:';
				tip = '一级菜单最多只能'+ this.MAIN_LIMIT +'个';
				listMax = this.MAIN_LIMIT;
				oList = $('[role = main-list]');
				id = '';
				oName = oThis.parents('[sort-list-main]').find('[sc = main-name]');

			} else if( listType == 'sub' ) {

				max = this.SUB_TEXT_LIMIT;
				title = '菜单名称名字不多于'+ this.SUB_TEXT_LIMIT/2 +'个汉字或'+ this.SUB_TEXT_LIMIT +'个字母:';
				tip = '二级菜单最多只能'+ this.SUB_LIMIT +'个';
				listMax = this.SUB_LIMIT;
				this.oAddParent = oThis.parents('[sort-list-main]').find('[sc = sub-wrap]');
				oList = this.oAddParent.find('[role = sub-list]');
				id = this.oAddParent.attr('list-id');
				oName = oThis.parents('[sort-list-sub]').find('[sc = sub-name]');
				this.oFatherList = oThis.parents('[sc = hover-list]');

			}

			if( reqType == 'edit' ) {

				id = oThis.attr('list-id');
				name = oThis.attr('name');
				this.initInput( name );
				this.oConfirm.data('oName', oName);

			}

			num = oList.length;

			if( num >= listMax && reqType == 'add' ) {

				oTip.say( tip )
				return;

			}

			this.oAddBoxTitle.html( title );
			this.oAddBox.show();
			this.oConfirm.attr({
				listType : listType,
				reqType : reqType,
				'list-id' : id
			});
			this.oInput.attr('max', max);
				
		},
		addEditReq: function(listType, reqTtype, id, name) {

			//添加请求
			var isChecked,
				oList,
				reqUrl,
				result,
				oTpl,
				paramIdName,
				data,
				_this,
				oMenuWrap,
				oName,
				renderData; //渲染数据

			_this = this;
			isChecked = this.oInput.attr('check');
			data = {};

			if( listType == 'main' ) {

				oTpl = oTplMainList;
				oMenuWrap = this.oMenuWrap;	

			} else if( listType == 'sub' ) {

				oTpl = oTplSubList;	
				oMenuWrap = this.oAddParent;
			}

			if( reqTtype == 'add' ) {

				reqUrl = this.ADDURL;
				paramIdName = 'wxmenuinfo.pkParentid';
				

			} else if( reqTtype == 'edit' ) {

				reqUrl = this.EDITURL;
				paramIdName = 'wxmenuinfo.pkMenuid';
			
			}

			result = this.oInput.attr('check');

			if( result == 'right' ) {

				//通过验证
				id = id ? id : 0;
				data[paramIdName] = id;
				data['wxmenuinfo.menuname'] = name;
				data['wxmenuinfo.accountid'] = this.accountId;
				data['wxmenuinfo.account'] = this.accountType;
				
				this.reqUrl = reqUrl;
				this.reqParam = data;
				this.req(function(data){

					if( reqTtype == 'add' ) {

						if( listType == 'sub' ) {

							_this.oFatherList.attr('select-type', '-1');
							renderData = data.data;

						} else {

							//主菜单返回的数据为了适应模板需要构造一下
							renderData = {
								data: {
									menu_list: [data.data]
								}
							}

						}

						_this.render( oMenuWrap, oTpl, renderData, 'append');	

					} else if( reqTtype == 'edit' ) {

						oName = _this.oConfirm.data('oName');
						oName.html( name );
						oName.parents('[sc = hover-list]').find('[editor]').attr('name', name); //设置编辑的name属性 下次编辑的时候用

					}

					_this.initInput('');
					oRightLay.initShow();
					_this.oAddBox.close();

				}, function(data){

					oTip.say( data.msg );

				});
			}

		},
		bindListEvent: function() {

			var _this = this;

			this.oMenu.on('mouseenter', '[sc = hover-list]', function(e){

				_this.funcBtnShow( $(this) );

			});


			this.oMenu.on('mouseleave', '[sc = hover-list]', function(e){

				_this.funcBtnHide( $(this) );

			});

			this.oMenu.on('click', '[sc = hover-list]', function(e){

				var isFuncBtn;

				isFuncBtn = $(e.target).parents('[sc = func-btn-area]').length;

				if( !isFuncBtn ) {

					_this.selectMenu( $(this) );
				}	

			});

		},
		cancelListEvent: function() {

			this.oMenu.off('mouseenter');
			this.oMenu.off('mouseleave');
			this.oMenu.off('click', '[sc = hover-list]');

		},
		toReadySort: function() {

			var aMove,
				aList;
			aMove = $('[sc = list-sort]');
			aList = $('[sc = inner_menu_link]');

			this.oTodoFront.hide();
			this.oTodoBack.show();
			this.cancelListEvent();
			aMove.addClass('show');
			aList.css('cursor', 'move');
			this.move();
			oRightLay.initShow();
			
		},
		toCacncelSort: function() {

			var aMove,
				aList;
			aMove = $('[sc = list-sort]');
			aList = $('[sc = inner_menu_link]');

			this.oTodoBack.hide();
			this.oTodoFront.show();
			this.bindListEvent();
			aMove.removeClass('show');
			aList.css('cursor', 'pointer');
			this.cancelMove();

		},
		funcBtnShow: function(oThis) {

			var oFuncBtn,
				oHoverList,
				aMove;
			oFuncBtn = oThis.find('[sc = func-btn-area]');
			oHoverList = oThis.find('[sc = inner_menu_link]');
			oFuncBtn.show();
			oHoverList.addClass('active');	

		},
		funcBtnHide: function(oThis) {

			var oFuncBtn,
				oHoverList;
			oFuncBtn = oThis.find('[sc = func-btn-area]');
			oHoverList = oThis.find('[sc = inner_menu_link]');
			oFuncBtn.hide();
			oHoverList.removeClass('active');

		},
		judeValue: function(max, tip) {

			var result = this.checkValue( max );

			if( result ) {

				this.wrongHide();

			} else {

				this.wrongShow( tip );

			}

		},
		wrongShow: function(tip) {

			this.oWrongTip.html(tip);
			this.oWrongTip.removeClass('right');
			this.oWrongTip.addClass('wrong');
			this.oInput.attr('check', 'wrong');

		},	
		wrongHide: function() {

			this.oWrongTip.html('holder');
			this.oWrongTip.removeClass('wrong');
			this.oWrongTip.addClass('right');
			this.oInput.attr('check', 'right');

		},
		initInput: function(str) {

			this.oInput.val(str);
			this.oInput.attr('check', 'wrong');

		},
		checkValue: function(max) {

			max = max ? max : 0;

			var sValue,
				strLength,
				num;

			strLength = 0;
			sValue = this.oInput.val();
			num = sValue.length;

			for ( var i=0; i<num; i++ ) {

				if( sValue.charCodeAt(i) > 255 ) {

					strLength += 2;

				} else {

					strLength += 1;

				}

			}

			if( strLength <= max && strLength >= 1 ) {

				return true;

			} else {

				return false;

			}

		},
		renderList: function(oWrap, id, data, clear) {

			if( clear ) {
				oWrap.html('');
			}

			var html = $( template(id, data) );
			oWrap.append( html );

		},
		remove: function(oThis) {

			var id,
				param,
				oParent,
				type,
				_this;

			_this = this;
			type = oThis.attr('type');
			param = {};
			id = oThis.attr('list-id');
			param['wxmenuid'] = id;
			if( type == 'main' ) {

				oParent = oThis.parents('[sort-list-main]');	

			} else if( type == 'sub' ) {

				oParent = oThis.parents('[sort-list-sub]');
				//removeReq();
			}

			this.oDelBox.show();
			this.oDelBox.onConfirm = removeReq;

			function removeReq() {

				_this.reqUrl = _this.REMOVEURL;
				_this.reqParam = param;
				_this.req(function(data){

					oTip.say( data.msg );

					if( type == 'sub' ) {

						if( !oParent.siblings().length ) {

							var oMainList;
							oMainList = oParent.parents('[role = main-list]').find('[list-parent]');

							oMainList.attr('select-type', '0');
							oMainList.data('info','');								

						}
						
					}

					oRightLay.initShow();
					oParent.remove();
					_this.oDelBox.close();

				}, function(data){

					oTip.say(data.msg);

				});
			}
		},
		move: function() {

			var _this = this;
			var timer1 = null;
			var timer2 = null;
			var timer3 = null;

			//move
			this.oMenuWrap.on('mousedown', '[move]', function(e){

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
				_this.oHolder.addClass('show');
				_this.oHolder.css('height', orgHeight);
				oThis.css({
					width:w,
					height:h,
					position:'absolute'
				});
				oThis.after( _this.oHolder );

				_this.oMenuWrap.on('mousemove', '[move]', function(e){
		

					var oEvent = e || event;
					var left = oEvent.clientX - disX;
					var top = oEvent.clientY - disY;
					
					oThis.css({
						left:left,
						top:top
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

				_this.oMenuWrap.on('mouseup', '[move]', function(e){

					_this.oMenuWrap.off('mousemove');
					_this.oMenuWrap.off('mouseup');
					oThis.removeClass('active');
					_this.oHolder.removeClass('show');

					clearTimeout( timer2 );
					timer2 = setTimeout(function(){

						_this.oHolder.after( oThis );

					},5);

					clearTimeout( timer3 );
					timer3 = setTimeout(function(){

						$('body').append( _this.oHolder );	

					},10);

					oThis.css({
						width:'',
						height:'',
						left:'',
						top:'',
						position:''
					});

					oThis.get(0).releaseCapture && oThis.get(0).releaseCapture();

				});

				oThis.get(0).setCapture && oThis.get(0).setCapture();

				return false;

			});

		},
		cancelMove: function() {

			this.oMenuWrap.off('mousedown');

		},
		createHolder: function() {

			this.oHolder = $('<div class="placeholder"></div>');
			$('body').append( this.oHolder );

		},
		cdTest: function(obj1, obj2) {

			var l1 = obj1.position().left;
			var r1 = obj1.position().left + obj1.width();
			var t1 = obj1.position().top;
			var b1 = obj1.position().top + obj1.height();

			var l2 = obj2.position().left;
			var r2 = obj2.position().left + obj2.width();
			var t2 = obj2.position().top;
			var b2 = obj2.position().top + obj2.height();

			if(r2 < l1 || l2 > r1 || b2 < t1 || t2 > b1) {

				return false;
			}
			else {

				return true;
			}

		},
		getDis: function(obj1, obj2) {

			var x=obj1.position().left-obj2.position().left;
  
		  	var y=obj1.position().top-obj2.position().top;
		  
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
		saveSort: function() {

			var arr,
				aList,
				aNowSubList,
				pid,
				arrSingle,
				arrAll = [],
				result,
				_this;

			_this = this;
			aList = $('[role = main-list]');
			aList.each(function(i){

				arrSingle = [];
				pid = aList.eq(i).attr('list-id');
				aNowSubList = aList.eq(i).find('[role = sub-list]');
				aNowSubList.each(function(i){

					arrSingle.push( aNowSubList.eq(i).attr('list-id') );

				});

				arrAll.push( pid + '^' + arrSingle.join('^') );

			});	

			result = arrAll.join(',');

			this.reqUrl = this.SORTURL;
			this.reqParam = {
				wxmenuid: result,
				type: this.accountType
			};
			this.req(function(data){

				_this.toCacncelSort();

			}, function(data){

				oTip.say( data.msg );

			});

		},
		selectMenu: function(oThis) {

			var type,
				sid;
			/*	isMainList,
				listWrap,
				thisChildrenNum;

			isMainList = oThis.attr('list-parent');
				
			if( isMainList ) {

				listWrap = oThis.parents('[role = main-list]');
				thisChildrenNum = listWrap.find('[list-sub]').length;

				console.log( oThis.attr('select-type') )

				if( !thisChildrenNum && oThis.attr('select-type') == 0 ) {
					console.log('b')
					oThis.attr('select-type', '0');

				}
				
			}*/

			type = oThis.attr('select-type');
			sid = oThis.attr('list-id');
			oRightLay.NOWSELECTED_ID = sid;
			oRightLay.NOWLIST = oThis;
			oRightLay.judgeShow( type );

		} 

	});
	
	
	var RightLay = R.Class.create(R.until, {

		initialize: function() {

			this.oLinkOrg = "http://";
			this.aSelect = $('[select-lay]');
			this.oSelectWrap = $('[sc = link-select-wrap]');
			this.oInfoWrap = $('[sc = info-link-wrap]');
			this.oInfoBoxWrap = $('[sc = info-box-wrap]');
			this.oText = $('[sc = text-input]');
			this.oInfoView = $('[sc = info-view]');
			this.oTextTip = $('[sc = text-tip]');

			/*this.showSelectUrl = '/lgwx/index.php/view/weixin/diy_menu_config';
			this.infoSelectUrl = '/lgwx/index.php/view/weixin/diy_menu_information_list';*/
			this.saveUrl = R.interfaces.msg_menu;

			this.NOWSELECTED_ID = 0;
			this.NOWLIST = null;
			this.aInfoList = null;


			this.oInputTip = new inputTip( '[sc = text-input]', '[sc = text-tip]' );
			this.oInputTip.start();

			//inputTip( this.oText, this.oTextTip, 600 );

			this.events();

			this.initShow();

			//this.showSelect();

			//this.showInfoSelect();

		},
		initShow: function() {

			this.allLayHide();

			$('[order = -2]').show();

		},
		events: function() {
			//选择发布类
			var _this = this;
			var type;

			$('[sc = order-list]').on('click', function(){

				_this.selectLay( $(this) );

			});


			//选择资讯列表
			$(document).on('click', '[sc = info-select-list]', function(){

				_this.selectInfoList( $(this) );

			});


			//资讯列表弹框打开
			/*infoBox.onStart = function() {
				
				_this.initSelectInfoList();

			};*/

			//保存
			$(document).on('click', '[role = save-btn]', function(){

				_this.save( $(this) );

			});

		},
		judgeShow: function(type) {

			var nowData;
				
			this.allLayHide();
			$('[order = '+ type +']').show();
			nowData = this.NOWLIST.data('info');
			
			switch( type ) {	

				case "1":
					this.showText(nowData);
				break;

				case "2":
					this.showInfo(nowData);
				break;

				case "3":
					this.showLink(nowData);
				break;

			}

		},
		showText: function(data) {

			var str;
			if( !data ) {
				str = '';
			} else {
				str = data.menuContent;
			}
			
			this.oText.val( str );
			this.oInputTip.calc();

		},
		showInfo: function(data) {

			haha.renderList( this.oInfoView, 'info-list', data , true);

		},
		showLink: function(data) {

			if(data) {

				data.menuContent = data.menuContent ? data.menuContent : this.oLinkOrg;

				this.oSelectWrap.val( data.menuContent );	

			} else {

				this.oSelectWrap.val( this.oLinkOrg );

			}

			/*var aOptions,
				nowList,
				nowId,
				id;

			if( !data ) return;
			id = data.smd_content;
			aOptions = this.oSelectWrap.children();

			aOptions.each(function(i){

				nowList = aOptions.eq(i);
				nowId = nowList.attr('id');

				if( nowId == id ) {

					nowList.attr('selected', 'selected');

				}

			});*/

		},
		allLayHide: function() {

			this.aSelect.hide();

		},
		selectLay: function(oThis) {

			var type;

			type = oThis.attr('click-order');

			if( type == 2 ) {

				infoBox.show();

				this.initShow();

				return;				

			}

			this.judgeShow( type );

		},
		save: function(oThis) {

			var type,
				id,
				sValue,
				data,
				nowListType,
				_this;

			type = oThis.attr('type');
			id = this.NOWSELECTED_ID;
			nowListType = this.NOWLIST.attr('list-parent') ? '0' : '1';
			data = {};
			_this = this;

			switch( type ){

				case '1':
					sValue = this.oText.val();

					if( !sValue ) {

						oTip.say( '内容不能为空' );
						
						return;	
					}
				break;

				case '2':

					var nowId;
					sValue = [];
					
					this.aInfoList.each(function(i){

						if( _this.aInfoList.eq(i).hasClass('active') ) {

							nowId = _this.aInfoList.eq(i).attr('sid');
							sValue.push( nowId );	
						}

					});

					if( !sValue.length ) {

						oTip.say( '请至少选择一条资讯' );

						return;
					}

					sValue = sValue.join(',');

				break;

				case '3':
					sValue = this.oSelectWrap.val();

					if( !sValue ) {

						oTip.say( '请选择' );

						return;
					}

				break;

			}

			data['wxmenuinfo.pkMenuid'] = id;
			data['wxmenuinfo.menuType'] = type;
			data['wxmenuinfo.menuContent'] = sValue;
			//data.smd_list_type = nowListType;

			this.reqUrl = this.saveUrl;
			this.reqParam = data;
			this.req(function(data){

				oTip.say(data.msg);
				_this.NOWLIST.data('info', data.data);
				_this.NOWLIST.attr('select-type', type);

				/*if( type == 2 ) {

					_this.judgeShow( type );
					infoBox.close();

				}*/

			}, function(data){

				oTip.say(data.msg);

			});

		},
		showSelect: function() {

			/*var _this = this;

			$.post( this.showSelectUrl, function(data){

				if( !data.err ){

					haha.renderList( _this.oSelectWrap, 'select-list', data );

				}

			},'json' );*/	

		},
		showInfoSelect: function() {

			var _this = this;

			$.post( this.infoSelectUrl, function(data){

				if( !data.err ){

					haha.renderList( _this.oInfoBoxWrap, 'info-box-list', data );

					_this.aInfoList = $('[sc = info-select-list]'); 
				}

			},'json' );	
		},
		selectInfoList: function(oThis) {

			//选择资讯列表

			var isHasSelect;

			isHasSelect = oThis.hasClass('active');

			isHasSelect ? oThis.removeClass('active') : oThis.addClass('active');

			
		},
		initSelectInfoList: function() {

			$('[sc = info-select-list]').removeClass('active');

		}
	});


	var oMenu = new Menu();
	var oRightLay = new RightLay();
	
});
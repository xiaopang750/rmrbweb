/**
 *description:会员活动
 *author:fanwei
 *date:2014/08/07
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTip = require("../../widget/dom/tip");
	var oTplUserList = require('../../tpl/member/member_list');
	var oTplInfo = require('../../tpl/member/member_info_list');
	var enterDo = require('../../widget/dom/enterDo');
	require('../../lib/http/socket.io');
	
	var member = R.Class.create(R.until, {

		initialize: function() {		

			//replycont不为空为客服发送的,为空为客户发送的

			//微信type:001,微博type:002,num刷新用户的个数
			this.oApplyInput = $('[apply-input]');  
			this.oApplyBtn = $('[apply-btn]');

			this.serviceColor = 'red';
			this.guestColor = 'black';

			//btn
			this.oAuto = $('[auto]');
			this.oHand = $('[hand]');
			this.oStop = $('[stop]');
			this.oClose = $('[close-all]');
			this.oSend = $('[send-btn]');
			this.oKnowSearch = $('[know-search-input]');
			this.oKnowSearchBtn = $('[know-search-btn]');
			this.aType = $('[third-type]');  //微博or 微信切换 accountType的按钮

			this.oWrap = $('[user-wrap]');  //user-list
			this.oMemberInfo = $('[member-info]'); //memeber-info

			this.oRecordWrap = $('[record-wrap]'); //历史记录
			this.oViewText = $('[view-text]'); //历史记录滚动容器
			this.oMsg = $('[member-msg]'); //文本框

			this.oKnowWrap = $('[know-wrap]'); //知识库容器

			this.maxUser = 5;
			this.REFRESH_FPS = 2000;  //刷新用户
			this.REFRESH_TIMER = null;

			this.lock = false; //发送的lock

			this.refreshParam = {  //刷新用户的默认参数
				accounttype: "",
				number: this.maxUser
			};

			this.socketMsgName = 'weibolist';

			this.selecType( this.aType.eq(0) );
			this.events();
			//this.reqUserList();
			this.oApplyInput.val(this.maxUser);
			this.connectSocket();
			this.getKnowList();
		},
		getSocketUrl: function(cb) {

			$.get(R.interfaces.get_socket_port, function(data){
				cb && cb(data.outJson);
			});
		},
		clear: function() {

			//初始化清空
			this.oWrap.html('');
			this.oMemberInfo.html('');
			this.mid = '';
			this.aid = '';
			this.oMsg.val('');
			this.oRecordWrap.html('');
			this.stop();
			this.reqUserList();
		},
		connectSocket: function() {

			var _this,
				json,
				time,
				name,
				str,
				arr,
				type,
				socket;	

				_this = this;

				this.getSocketUrl(function(port){

					socket= io.connect( port );
					
				 	socket.on(_this.socketMsgName, function (data) {
				 		
					  	if(_this.mid == data.uid) {

					  		json = {};
					  		arr = [];
					  		time = _this.changeTime();
					  		str = data.content;
					  		name = data.name;
					  		type = data.type;

					  		if(type == 'server') {
					  			json.replycont = str;
					  			json.sendcontent = '';
					  		} else {
					  			json.replycont = '';
					  			json.sendcontent = str;
					  		}

							json.sendtime = time;
							json.replyman = name;
							arr.push(json);
							_this.renderRecord(arr);
							_this.scrollToBottom();
					  	}

					});
					
				});

		},
		events: function() {

			var _this;

			_this = this;	

			//change-type
			$('[online-wrap]').on('click', '[third-type]',function(){

				_this.selecType( $(this) );

			});

			//top-置顶
			$('[online-wrap]').on('click', '[toper]', function(){
				
				_this.top($(this));
			});

			//应用
			this.oApplyBtn.on('click', function(){

				_this.changeNum();

			});

			//atuo
			this.oAuto.on('click', function(){

				$(this).addClass('active');
				_this.auto();

			});

			//hand
			this.oHand.on('click', function(){

				_this.oAuto.removeClass('active');
				_this.hand();

			});

			//stop
			this.oStop.on('click', function(){

				_this.oAuto.removeClass('active');
				_this.stop();

			});

			//click-list
			$('[online-wrap]').on('click', '[user-list]', function(e){

				var oTarget = $(e.target);
				var isAct;

				//如果没有置顶，并且不是当前选中的，则接入
				if(oTarget.attr('toper') !== '') {

					isAct = $(this).hasClass('active');

					if(!isAct) {
						_this.chose($(this));	
					}
	
				}

			});

			//send
			this.oSend.on('click', function(){

				if(!_this.lock) {
					//发送锁
					_this.lock = true;
					_this.send();
				}

			});

			//close
			this.oClose.on('click', function(){

				_this.close();

			});


			enterDo(this.oMsg, function(){

				//回车发送
				if(!_this.lock) {
					//发送锁
					_this.lock = true;
					_this.send();
				}

			});

			//从知识库选择
			$(document).on('click', '[know-list]', function(){

				var name = $(this).attr('name');
				var content = $(this).attr('content');

				_this.upScreen(name, content);

			});

			//知识库搜索
			this.oKnowSearchBtn.on('click', function(){

				_this.knowSearch();

			});

		},
		knowSearch: function() {

			//知识库搜索
			var str = this.oKnowSearch.val();
			var param = {};

			param['rmrbBdKnowledgestorge.konwledgename'] = str;

			this.getKnowList(param);

		},
		hilight: function(oThis) {

			$('[refresh-btn]').removeClass('active');
			oThis.addClass('active');

		},
		reqUserList: function() {

			var _this = this;
			this.reqUrl = R.interfaces.get_member_list;
			this.reqParam = this.refreshParam;
			this.req(function(data){
				console.log(data);
				_this.renderList(data.data);

			});
		},
		selecType: function(oThis) {

			var type;

			this.aType.removeClass('active');
			oThis.addClass('active');

			type = oThis.attr('third-type');
			this.refreshParam.accounttype = type;
			this.clear();

		},
		changeNum: function() {

			var num,
				result;

			num = parseInt(this.oApplyInput.val());
			
			if(num <= this.maxUser) {
				this.refreshParam.number = num;
				this.reqUserList();
			} else {
				oTip.say('请输入小于等于'+ this.maxUser +'的数字');
			}
		},
		stop: function() {

			clearInterval(this.REFRESH_TIMER);

		},
		hand: function() {

			this.nowWay = 'hand';
			clearInterval(this.REFRESH_TIMER);
			this.reqUserList();

		},
		auto: function() {

			var _this = this;
			this.nowWay = 'auto';
			this.reqUserList();
			clearInterval(this.REFRESH_TIMER);
			this.REFRESH_TIMER = setInterval(function(){

				_this.reqUserList();

			}, this.REFRESH_FPS);

		},
		top: function(oThis) {

			var oList = oThis.parents('[user-list]');
			var aTop = $('[toper]');

			oList.attr('status', 'top').siblings().attr('status', 'down');
			aTop.html('置顶');
			oThis.html('已置顶');

			this.oWrap.prepend(oList);

		},
		renderList: function(data) {

			var aList = $('[user-list]');
			var isTop,
				oTop,
				oNoData;

			oNoData = $('[noDataTip]');	

			aList.each(function(i){

				isTop = $(this).attr('status') == 'top' ? true : false;

				if(!isTop) {
					aList.eq(i).remove();
				} else {
					oTop = aList.eq(i);
				}

			});
			
			//没有用户则清空原来的数据
			if(!data.customerserviceLists.length){

				this.oWrap.html('');

			} else {

				oNoData.remove();

			}

			//置顶的可能会跟重新刷新出来的数据重复
			var sNewHtml = oTplUserList(data);
			var oNew = $(sNewHtml);
			this.oWrap.append(oNew);


			if(!oTop) return;

			var i,
				num,
				aChildren,
				nowid,
				topid;

			aChildren = oNew.filter('[user-list]');
			topid = oTop.attr('mid');
			num = aChildren.length;
			for (i=0; i<num; i++) {

				nowid = aChildren.eq(i).attr('mid');

				if(nowid == topid) {
					aChildren.eq(i).remove();
				}

			}
		},
		renderInfo: function(data) {

			this.render(this.oMemberInfo, oTplInfo, data);

		},
		chose: function(oThis) {

			var aList,
				data;
			aList = $('[user-list]');
			aList.removeClass('active');
			oThis.addClass('active');
			data = {};
			data.name = oThis.attr('name');
			data.level = oThis.attr('level');
			data.tel = oThis.attr('tel');
			data.score = oThis.attr('score');
			data.address = oThis.attr('address');
			this.mid = oThis.attr('mid');
			this.aid = oThis.attr('aid');

			this.changeType(data, oThis);
			
		},
		getRecord: function(oThis) {

			//获取历史记录;	
			var _this = this;

			this.reqUrl = R.interfaces.get_member_record;
			this.reqParam = {
				uid: this.mid,
				accountid: this.aid
			};
			this.req(function(data){

				_this.renderRecord(data.data.customerserviceDetails, 'clear');
				_this.scrollToBottom();

			});

		},
		renderRecord: function(data, way) {
			
			if(!data.length) return;

			var i,
				num,
				content,
				name,
				color;
			
			if(way) this.oRecordWrap.html('');
			
			num = data.length;

			for (i=0; i<num; i++) {

				content = data[i].sendcontent || data[i].replycont;
				name = data[i].vdef2 || data[i].replyman;
				color = data[i].replycont ? this.serviceColor : this.guestColor;

				var strLi = 
				'<li style="color:'+ color +'">'+
					'<p class=time><span class="mr-10">'+ name +'</span>'+ data[i].sendtime +'</p>'+
					'<p>'+ content +'</p>'+
				'</li>';

				this.oRecordWrap.append($(strLi));

			}

		},
		send: function() {
			
			var str,
				time,
				content,
				arr,
				json,
				_this;

			str = this.oMsg.val();
			arr = [];
			json = {};
			_this = this;

			str = str.replace(/(\s|\n)+/gi, '');

			if(!str) {

				oTip.say('请输入发送消息');
				_this.lock = false;
				_this.oMsg.val('');
				return;

			} else if(!this.mid || !this.aid) {

				oTip.say('请选择接入用户');
				_this.lock = false;
				_this.oMsg.val('');
				return;
			}

			this.reqUrl = R.interfaces.post_member_msg;
			this.reqParam = {
				memberid: this.mid,
				accountid: this.aid,
				replycontent: str,
				accounttype: this.refreshParam.accounttype
			};
			this.req(function(data){

				_this.oMsg.val('');
				_this.scrollToBottom();
				_this.lock = false;

			}, function(data){

				oTip.say(data.msg);
				_this.lock = false;

			}, function(msg){

				oTip.say(msg);
				_this.lock = false;
			});

		},
		changeTime: function() {

			var oDate = new Date();
			var year,
				month,
				day,
				hour,
				min,
				sec;

			year = oDate.getFullYear();
			month = oDate.getMonth() + 1;
			day = oDate.getDate();
			hour = oDate.getHours();
			min = oDate.getMinutes();
			sec = oDate.getSeconds();

			return year + '-' + this.toDouble(month) + '-' + this.toDouble(day) + ' ' + this.toDouble(hour) + ':' + this.toDouble(min) + ':' + this.toDouble(sec);

		},
		toDouble: function(num) {

			if(num<10) {
				return '0' + num;
			} else {
				return num;
			}

		},
		close: function() {

			var _this = this;

			if(!this.mid || !this.aid) return;

			this.reqUrl = R.interfaces.close_member_msg;
			this.reqParam = {
				uid: this.mid,
				accountid: this.aid
			};
			this.req(function(data){

				_this.clear();

				if( _this.nowWay == 'hand' || !_this.nowWay ) {
					_this.hand();
				} else if( _this.nowWay == 'auto' ) {
					_this.auto();
				}

			});

		},
		changeType: function(memberData, oNowUserList) {

			var _this = this;
			//改变状态
			this.reqUrl = R.interfaces.join_member;
			this.reqParam = {
				uid: this.mid,
				accountid: this.aid
			};
			this.req(function(data){

				_this.renderInfo(memberData);
				_this.getRecord(oNowUserList);

			}, function(data){
				
				//当两个客服同时接入一个用户
				oTip.say( data.msg );
				//_this.reqUserList();
				_this.clear();

			});	

		},
		scrollToBottom: function(){

			this.oViewText[0].scrollTop = this.oViewText[0].scrollHeight - this.oViewText.height();

		},
		getKnowList: function(param) {

			var _this = this;

			this.oKnowWrap.html('');
			this.reqUrl = R.interfaces.know_all_list;
			this.reqParam = param;
			this.req(function(data){
				
				var info = data.data.knowledgestorge;
				var i,
					num,
					oNewLi;

				num = info.length;

				for (i=0; i<num; i++) {

					var oNewLi = $('<li know-list></li>'); 
					_this.oKnowWrap.append(oNewLi);

					oNewLi.attr({
						name: info[i].konwledgename,
						content: info[i].konwledgecontent
					});

					oNewLi.text( info[i].konwledgename );

				}	
				
			});	

		},
		upScreen: function(name, content) {

			this.oMsg.val( content );

		}


	});

	var oMember = new member();


});
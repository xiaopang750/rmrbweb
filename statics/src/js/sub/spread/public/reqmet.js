/**
 *description:定时拉取会议数据
 *author:fanwei
 *date:2014/09/07
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	require('../../../lib/http/socket.io');
	
	var reqMet = R.Class.create(R.until, {

		initialize: function(opts) {

			opts = opts || {};
			this.oSelect = $('[select-met]');
			this.sockUrl = "http://rqclt.rs07.com:5544/";
			this.sockGetName = "welcom";

			this.isUploadTime = opts.isUploadTime;
			this.pullParamName = opts.paramName;
			this.pullfps = 3000;
			this.pullUrl = opts.url;
			this.onrefresh = this.onrefresh || null;
			this.onchange = opts.onchange || null;
			this.events();

			this.connectSocket();

		},
		getSocketUrl: function(cb) {

			//从服务端获取scoket域名;因为有多个环境

			$.get(R.interfaces.get_socket_port, function(data){
				cb && cb(data.outJson);
			});
		},
		connectSocket: function() {

			/*
				data:返回的type类型:
				type1: 发布会员互动
				type2: 后台发布监控
				type3: 欢迎界面	
			*/
			var nowMeeting,
				socket,
				_this;

			_this = this;

			this.getSocketUrl(function(port){

				socket = io.connect( port );

				socket.on(_this.sockGetName, function (data) {
			 	
					nowMeeting = _this.oSelect.val();

					if(data.pkActivity == nowMeeting) {

						_this.onrefresh && _this.onrefresh(data, nowMeeting);	
					}

				});

			});	

		},
		events: function() {

			var _this  = this;

			//select
			this.oSelect.on('change', function(){
				
				_this.pk = $(this).val();

				//_this.pullGuest();

				//_this.rollGet();

				_this.onchange && _this.onchange(_this.pk);

			});

		},
		pullGuest: function() {

			var _this = this;
			var result;

			this.reqUrl = this.pullUrl;
			this.reqParam = {
				pkActivity: this.pk
			};

			if(this.isUploadTime) {
				this.reqParam[this.pullParamName] = this.nowTime;	
			}

			this.req(function(data){
				
				_this.nowTime = data.data[_this.pullParamName];
				//result = _this.judgeChange(data);

				/*if(result) {*/

					_this.onrefresh && _this.onrefresh(data.data, _this.pk);
				/*}*/
				
			});

		},
		rollGet: function() {

			var _this = this;
			
			clearInterval(this.pullTimer);
			this.pullTimer = setInterval(function(){

				_this.pullGuest();

			},this.pullfps);

		},
		reqSelect: function() {

			var _this = this;

			this.reqUrl = R.interfaces.get_met_list_name;

			this.reqParam = {
				activityType : '001'
			};

			this.req(function(data){

				_this.renderSelect(_this.oSelect, data);
			});

		},
		renderSelect: function(oWrap,data) {
			
			var info = data.data.activities;
			var i,
				num,
				newOption;

			num = info.length;	

			for (i=0; i<info.length; i++) {

				newOption = $('<option value='+ info[i].pkActivity + '>'+ info[i].meetingName +'</option>')

				oWrap.append(newOption);

			}

		}

	});

	module.exports = reqMet;
	
});
/**
 *description:渠道管理-会员管理
 *author:fanwei
 *date:2014/07/31
 */
define(function(require, exports, module){

	var global = require("../../driver/global");
	var oTplMember = require('../../tpl/way/member/list');
	var oTplLevel = require('../../tpl/way/member/option_level');
	var oTplStatus = require('../../tpl/way/member/option_status');
	var select = require('../../widget/dom/select');
	var fenye = require('../../widget/dom/fenye');
	var oTip = require('../../widget/dom/tip');
	var remove = require("../../driver/remove");
	var groupBox = require("../../box/way/group_box");
	
	var member = R.Class.create(R.until, {

		initialize: function() {
			
			this.aSearchText = $('[search-text]');
			this.oSearchBtn = $('[search-btn]');
			this.oFile = $('[file]');
			this.oAll = $('[all]');
			this.oCheckAll = $('[allcheck]');
			this.oWrap = $('[data-ele = data-wrap]');
			this.oUploadForm = $('[uploadForm]');
			this.oLevelSelect = $('[select-level]');
			this.oStatusSelect = $('[select-status]');
			this.oBlackSelect = $('[select-black]');
			this.oAddGroupBtn = $('[add-group-btn]');

			this.DEFAULT_PARAM = {
				pageSize: 20, 
				"nickName":'',
				"member.mainbox": '',
				"member.cellphone": '', 
				"member.memberrank":"", 
				"member.memberstatus": "",
				"member.orderCloumn": "",
				"member.orderWay": "",
				"member.isblack": '',
				"member.reserve8": ''
			};
			this.selectId = [];

			/*this.ORG_PARAM = {
				pageSize: 20, 
				"nickName":'',
				"member.mainbox": '',
				"member.cellphone": '',
				"member.memberrank":"", 
				"member.memberstatus": "",
				"member.orderCloumn": "",
				"member.orderWay": ""
			};*/

			this.oGroupBox = new groupBox();
			this.showGroup();
			this.showPage();
			this.events();
			this.initBlack();
			
		},
		initBlack: function() {

			var _this = this;

			var oBlack = new remove({
				removeUrl: R.interfaces.post_member_edit,
				title: '拉黑',
				content: '确认拉黑么？',
				removeName: '[black]',
				onclick: function(oThis) {

					//0是已拉黑 1是未拉黑
					var aid = oThis.attr('aid');
					var isBlack = oThis.attr('isBlack');
					var result;

					if(isBlack == 0) {

						this.isConfirm = false;
						result = 1;
						
					} else {

						this.isConfirm = true;
						result = 0;
					}

					this.param = {
						'member.pkMemberid': aid,
						'member.reserve7': result
					};
					
				},
				onsuc: function(oThis) {

					var isBlack = oThis.attr('isBlack');
					var result,
						msg;

					if(isBlack == 0) {
						result = 1;
						msg = '拉黑';
					} else {
						result = 0;
						msg = '取消拉黑';
					}

					oThis.attr('isBlack', result);
					//_this.oPage.refresh(_this.DEFAULT_PARAM);
					oThis.html(msg);

				}
			});

		},
		showPage: function() {

			var _this = this;
			//console.log(this.DEFAULT_PARAM);
			this.oPage = new fenye(R.interfaces.get_memberList, oTplMember, this.DEFAULT_PARAM,'', function(data){
				
				console.log(data);
				//_this.startModify();

			});

			this.showLevel();
			this.showStatus();

		},
		events: function() {

			var _this = this;

			//查询
			this.oSearchBtn.on('click', function(){

				this.aSearchText

				var i,
					num,
					nowText,
					nowName,
					sValue;

				num = _this.aSearchText.length;
				
				for (i=0; i<num; i++) {

					nowText = _this.aSearchText.eq(i);
					nowName = nowText.attr('search-text');
					sValue = nowText.val();
					_this.DEFAULT_PARAM[ nowName ] = sValue;

				}	

				_this.oPage.refresh(_this.DEFAULT_PARAM);

			});

			//显示所有
			this.oAll.on('click', function(){

				_this.aSearchText.val('');

				for (var i in _this.DEFAULT_PARAM) {
					_this.DEFAULT_PARAM[i] = '';
				}
				_this.DEFAULT_PARAM.pageSize = 20;
				_this.oPage.refresh(_this.DEFAULT_PARAM);

				$('[select-range]').each(function(i){

					$('[select-range]')[i].selectedIndex = 0;

				});

			});

			this.oUploadForm.on('change', '[file]', function(){

				_this.judgeType( $(this).val() );

			});

			window.callBack = function(status, msg) {

				oTip.say(msg);

				_this.updateUploadFile();

			};

			this.oLevelSelect.on('change', function(){
				_this.select($(this));
			});

			this.oStatusSelect.on('change', function(){
				_this.select($(this));
			});

			this.oBlackSelect.on('change', function(){
				_this.select($(this));
			});

			this.oWrap.on('click', '[allcheck]', function(){
				_this.choseAll($(this));
			});

			this.oWrap.on('click', '[check]', function(){
				_this.chose( $(this) );
			});

			//一页显示多少条
			this.oWrap.on('click', '[pageNum]', function(){

				var num = $(this).attr('pageNum');

				_this.DEFAULT_PARAM.pageSize = num;

				_this.oPage.refresh( _this.DEFAULT_PARAM);

			});

			//点击导航排序
			this.oWrap.on('click', '[sort-head]', function(){

				var oThis = $(this);
				var name = oThis.attr('sort-head');
				var order = oThis.attr('order');
				var target = order == 'asc' ? 'desc' : 'asc';

				_this.DEFAULT_PARAM['member.orderCloumn'] = name;
				_this.DEFAULT_PARAM['member.orderWay'] = order; 
				_this.oPage.refresh(_this.DEFAULT_PARAM);

				_this.oPage.cb = function(){
					
					$('[sort-head = '+ name +']').attr('order', target);	
					
				};
				
			});

			this.oPage.cb = function() {

				_this.allCheck = $('[check]');
				_this.allCheckNum = _this.allCheck.length;
				_this.oCheckAll = $('[allcheck]');
				_this.checkShow();
				_this.judgeCheckAll();

			};

			//添加分组
			this.oAddGroupBtn.on('click', function(){

				if(!_this.selectId.length) {
					oTip.say('请先选择加入分组的会员');
				} else {
					_this.oGroupBox.show();
				}

			});

			this.oGroupBox.onConfirm = function(id) {
				console.log(id);
				console.log(_this.selectId);

				this.addMemberToGroup(id, _this.selectId.join(','));
				_this.oGroupBox.hide();

			};

		},
		chose: function(oThis) {

			var i,
				num,
				count,
				pid;

			num = this.allCheckNum;
			count = 0;
			pid = oThis.attr('pid');

			if(oThis.attr('checked')) {
				this.addId( pid );
			}else {
				this.removeId( pid );
			}

			this.judgeCheckAll();

		},
		judgeCheckAll: function() {

			var count = 0;
			var num = this.allCheckNum;

			for (i=0; i<num; i++) {

				if(this.allCheck.eq(i).attr('checked')) {

					count++;

				}
			}

			if(count == this.allCheckNum) {

				this.oCheckAll.attr('checked', 'checked');

			} else {
				this.oCheckAll.removeAttr('checked');
			}

		},
		addId: function(id) {

			this.selectId.push( id );
		},
		removeId: function(id) {

			var i,
				num;

			num = this.selectId.length;
			
			for (i=0; i<num; i++) {

				if(id == this.selectId[i]) {

					this.selectId.splice(i, 1);

				}

			}

		},
		checkShow: function() {

			var i,
				j,
				num,
				num2;

			num = this.allCheck.length;
			num2 = this.selectId.length;
			
			for (i=0; i<num; i++) {

				for (j=0; j<num2; j++) {

					if(this.allCheck.eq(i).attr('pid') == this.selectId[j]) {

						this.allCheck.eq(i).attr('checked', 'checked');

					}

				}	

			}	

		},
		choseAll: function(oThis) {

			var isChecked = oThis.attr('checked');
			var i,
				num;

			num = this.allCheck.length;	

			if(isChecked) {

				this.allCheck.attr('checked', '');
				for (i=0; i<num; i++) {
					this.addId(this.allCheck.eq(i).attr('pid'));
				}

			} else {

				this.allCheck.removeAttr('checked');
				for (i=0; i<num; i++) {
					this.removeId(this.allCheck.eq(i).attr('pid'));
				}
			}


		},
		select: function(oThis) {

			var type = oThis.attr('name');
			var aid = oThis.val();

			this.DEFAULT_PARAM[type] = aid;

		},
		judgeType: function(fileName) {

			var lastIndex = fileName.lastIndexOf('.');
			var type = fileName.substring(lastIndex + 1);

			if(type != 'xls') {
				oTip.say('请上传表格格式的文件');
				return;
			}

			this.oUploadForm.submit();


		},
		updateUploadFile: function() {

			this.oFile.remove();
			this.oFile = $('<input type="file" File name="exclFilePath">');
			this.oUploadForm.append(this.oFile);

		},
		showLevel: function() {

			var _this = this;

			this.reqUrl = R.interfaces.find_member_level;
			this.reqParam = {};
			this.req(function(data){

				console.log(data);
				_this.render(_this.oLevelSelect, oTplLevel, data.data, 'append');

			});

		},
		showStatus: function() {

			var _this = this;

			this.reqUrl = R.interfaces.find_member_status;
			this.reqParam = {};
			this.req(function(data){

				_this.render(_this.oStatusSelect, oTplStatus, data.data, 'append');

			});

		},
		showGroup: function() {

			//根据分组查询
			var _this = this;

			var oSelect = new select({
				ele: $('[select-group]'),
				url: R.interfaces.findGroup,
				changeData: function(data) {
					return data.data;
				},
				tpl: '{{each groups}}<option aid="{{$value.pkMemberGroup}}">{{$value.groupName}}</option>{{/each}}',
				onChange: function(oThis, option) {

					var type = oThis.attr('name');
					var nowId = option.attr('aid');
					_this.DEFAULT_PARAM[type] = nowId;
				}
			})

		}

	});

	var oMember = new member();
	
});
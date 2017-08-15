/**
 *description:会员分组
 *author:fanwei
 *date:2014/09/19
 */
define(function(require, exports, module){
	
	var oTplBox = require('../../tpl/box/way/group_box');
	var dialog = require('../../widget/dom/dialog');
	var select = require('../../widget/dom/select');
	var oTip = require('../../widget/dom/tip');

	var group = R.Class.create(R.until, {

		initialize: function(opts) {
			
			this.createBox();
			this.oCreateArea = $('[create-area]');
			this.oCreateBtn = $('[create-btn]');
			this.oHead = $('[head]');
			this.oSelectHead = $('[select-head]');
			this.oSelect = $('[select]');
			this.oGroupBox = $('[group-box]');
			this.oConfirm = $('[confirm]');
			this.mid = null;
			this.firstLoad = false;

			this.MAX_NAME = 10;

			this.events();
					
		},
		show: function() {

			this.oBox.show();

			if(!this.firstLoad) {

				this.firstLoad = true;
				this.getData();

			}

		},
		hide: function() {

			this.oBox.close();

		},
		createBox: function() {

			this.oBox = new dialog({
				boxTpl: oTplBox
			});

			//this.oBox.show();

		},
		events: function() {

			var _this = this;

			this.oCreateBtn.on('click', function(){

				var name = _this.oCreateArea.val();
				var result = _this.judge( name );

				if(result) {

					var param = {
						"group.groupName" : name
					}

					_this.create( param );

				}

			});	

			//show-list
			this.oSelectHead.on('click', function(){

				_this.listShow();

			});

			//del
			this.oGroupBox.on('click', '[member-del]', function(){

				_this.del( $(this) );

				return false;

			});

			//select
			this.oGroupBox.on('click', '[option]', function(){

				_this.select( $(this) );

			});

			//confirm
			this.oConfirm.on('click',  function(){

				if(!_this.result) {

					oTip.say('请选择要加入的分组');

				} else {

					_this.onConfirm && _this.onConfirm( _this.result );	

				}

			});

		},
		addMemberToGroup: function(groupId, memberId) {

			this.reqUrl = R.interfaces.addMemberToGroup;
			this.reqParam = {
				pkMemberGroup: groupId,
				content: memberId
			};
			this.req(function(data){
				oTip.say(data.msg);
			}, function(data){
				oTip.say(data.msg);
			});

		},
		getData: function() {

			var _this = this;
			this.reqUrl = R.interfaces.findGroup;
			this.req(function(data){

				_this.rendeList(data);

			});

		},
		rendeList: function(data) {

			var info = data.data.groups;
			var i,
				num,
				name,
				pid;

			num = info.length;

			for (i=0; i<num; i++) {
				
				name = info[i].groupName;
				pid = info[i].pkMemberGroup;
				this.add(name, pid);
			}

		},
		listShow: function() {

			var aOption;

			aOption = this.oSelect.find('[option]');

			if(aOption.length){
				this.oSelect.addClass('active');	
			} else {
				oTip.say('暂无分组请创建');
			}
		},
		listHide: function() {

			this.oSelect.removeClass('active');

		},
		judge: function(name) {

			if(!name) {
				oTip.say('名称不能为空');
				return false;
			}else if(name.length > this.MAX_NAME){

				oTip.say('名称不能超过' + this.MAX_NAME + '个');
				return false;

			} else {
				return true;
			}

		},
		clear: function() {

			this.oCreateArea.val('');

		},
		create: function(param) {

			var _this = this;

			this.reqUrl = R.interfaces.addGroup;
			this.reqParam = param;
			this.req(function(data){

				oTip.say(data.msg);
				_this.add( param['group.groupName'], data.data.pkMemberGroup );
				_this.clear();

			}, function(data){

				oTip.say(data.msg);

			});

		},
		add: function(name, pid) {

			var str = '<li option name='+ name +' pid='+ pid +'>'+
				'<span>'+ name +'</span>'+
				'<span class="close" member-del pid='+ pid +'>×</span>'+
			'</li>';

			var oNewLi = $(str);

			this.oSelect.prepend(oNewLi);
			this.listShow();

		},
		select: function(oThis) {

			var pid = oThis.attr('pid');
			var name = oThis.attr('name');

			this.oSelect.attr('result', pid);
			this.result = pid;
			this.oHead.html( name );

			this.listHide();

		},
		del: function(oThis) {

			var oList;
			var pid = oThis.attr('pid');
			var _this = this;
			this.reqUrl = R.interfaces.delGroup;
			this.reqParam = {pkMemberGroup: pid};
			this.req(function(data){

				oList = oThis.parents('[option]');
				oList.remove();
				_this.listHide();
				oTip.say(data.msg);

			}, function(data){
				oTip.say(data.msg);
			});

		}

	});

	module.exports = group;
	
});

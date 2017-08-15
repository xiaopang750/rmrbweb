/**
 *description:角色分配权限
 *author:fanwei
 *date:2014/08/06
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTplList = require("../../../tpl/admin/role/role_list");
	var oTip = require("../../../widget/dom/tip");
	
	var roleList = R.Class.create(R.until, {

		initialize: function() {
			
			this.pageInfo = this.parse();
			this.oWrap = $('[data-wrap]');
			this.showPage();
			this.events();
		
		},
		events: function() {

			var _this = this;

			$(document).on('mousedown', '[data-ele = list]', function(){
				return false;
			});

			$(document).on('click', '[data-ele = list]', function(){
				
				_this.changePower($(this));

			});

			$(document).on('click', '[data-ele = save]', function(){
				_this.save();
			});

		},
		changePower: function(oThis) {

			var appendName = oThis.attr('appendName');
			var orgName = oThis.attr('orgName'); 

			$('[sc = '+ appendName +']').append(oThis);
			oThis.attr('appendName', orgName);
			oThis.attr('orgName', appendName);

		},
		save: function() {

			var hased,
				noHased,
				aHased,
				aNoHased,
				result;

			hased = [];
			noHased = [];
			result = {};

			aHased = $('[sc = hased]').find('[data-ele = list]');
			aNoHased = $('[sc = nohased]').find('[data-ele = list]');

			hased = this.getData(aHased);
			noHased = this.getData(aNoHased);

			result.add = hased;
			result.del = noHased;

			this.reqUrl = R.interfaces.change_role;
			this.reqParam = {
				inputJson: JSON.stringify(result),
				pkCorp: this.pageInfo.cid
			};

			this.req(function(data){
				oTip.say(data.msg);
			});


		},
		getData: function(aList) {

			var i,
				num,
				oList,
				json,
				result;

			result = [];	
			num = aList.length;

			for(i=0; i<num; i++) {

				oList = aList.eq(i);
				json = {};
				json.pkRole = this.pageInfo.aid;
				json.cuserid = oList.attr('lid');
				result.push(json);

			}	

			return result;

		},
		showPage: function() {

			var _this = this;

			this.reqUrl = R.interfaces.get_role_power;

			if(this.pageInfo.cid) {

				this.reqParam = {
					pkCorp: this.pageInfo.cid,
					pkRole: this.pageInfo.aid
				};

			} else {

				this.reqParam = {
					pkRole: this.pageInfo.aid
				};
			}

			this.req(function(data){
				
				console.log(data);

				_this.render(_this.oWrap, oTplList, data.data);

			});

		}

	});

	var oRoleList= new roleList();
	
});
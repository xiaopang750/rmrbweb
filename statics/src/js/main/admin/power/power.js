/**
 *description:菜单权限管理
 *author:fanwei
 *date:2014/08/05
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var tree = require('../../../widget/form/tree');
	var bodyParse = require('../../../lib/http/bodyParse');
	var oTip = require('../../../widget/dom/tip');

	var power = R.Class.create(R.until, {

		initialize: function() {
				
			this.oTreeWrap = $('[tree-wrap]');
			this.pageInfo = bodyParse();
			window.oTree = new tree('oTree');
			oTree.add(0,-1,'<span style="margin-left:-15px;">权限列表</span>');
			this.reqTree();
			this.events();

		},
		events: function() {

			var _this = this;

			$('[power-btn]').on('click', function(){

				_this.sub();

			});

			//chose
			$(document).on('click', '[data-ele = check-power]', function(){

				_this.chose($(this));

			});
		},
		chose: function(oThis) {

			var isParent,
				nowLevel,
				isChecked;

			isParent = oThis.parent().attr('href');
			isChecked = oThis.attr('checked') ? true : false;

			if(isParent) {
				nowLevel = oThis.parent().attr('href');
			}  else {
				nowLevel = oThis.parent().parent().attr('id');
			}

			nowLevel = nowLevel.match(/\d+/gi)[0]

			if(isParent) {

				if(isChecked) {
					$('#doTree' + nowLevel).find('input[type=checkbox]').attr('checked', 'checked');	
				} else {
					$('#doTree' + nowLevel).find('input[type=checkbox]').removeAttr('checked', 'checked');
				}

			} else {

				var aOther = oThis.parents('.dTreeNode').siblings().find('input[type=checkbox]');
				var result,
					i,
					num,
					oParent;

				num = aOther.length;
				result = false;
				oParent = this.oTreeWrap.find('input[selfid='+ oThis.attr('pid') +']');
				
				for (i=0; i<num; i++) {

					if(aOther.eq(i).attr('checked')) {
						result = true;
					}

				}

				if(isChecked) {
					oParent.attr('checked', 'checked');
				}

				if(!result && !isChecked) {
					oParent.removeAttr('checked', 'checked');
				}	
			}

		},
		sub: function() {

			var i,
				num,
				arr,
				json,
				isChecked;

			arr = [];	

			for (i=0; i<this.aCheckNum; i++) {

				json = {};
				isChecked = this.aCheck.eq(i).attr('checked') ? 0 : 1;
				json.pkFuncmenu = this.aCheck.eq(i).attr('aid');
				json.dr = isChecked;
				arr.push(json);
			}	

			this.reqUrl = R.interfaces.post_chose_menu_list;
			this.reqParam = {
				needPermission: JSON.stringify(arr),
				pkCorp: this.pageInfo.cid
			};
			this.req(function(data){

				oTip.say(data.msg);
				
			});

		},
		reqTree: function() {

			var _this = this;

			this.reqUrl = R.interfaces.chose_menu_list;
			this.reqParam = {
				pkCorp: this.pageInfo.cid
			};
			this.req(function(data){

				console.log(data);

				_this.showTree(_this.oTreeWrap, data);

			});

		},
		showTree: function(oWrap, data) {

			var i,
				info,
				num;

			info = data.data.menus;
			num = info.length;

			oWrap.html('');

			for (i=0; i<num; i++) {

				if(info[i].dr == "0") {
					oTree.add(info[i].funCode, info[i].parentid , '<input type="checkbox" aid='+ info[i].pkFuncmenu +' class="mr-10" data-ele="check-power" selfid='+ info[i].funCode +' pid='+ info[i].parentid +' checked="checked"><span>' + info[i].funName + '</span>','');
				} else {
					oTree.add(info[i].funCode, info[i].parentid , '<input type="checkbox" aid='+ info[i].pkFuncmenu +' class="mr-10" data-ele="check-power" selfid='+ info[i].funCode +' pid='+ info[i].parentid +'><span>' + info[i].funName + '</span>','');
				}	
			}

			//console.log(oTree);

			oWrap.append($(oTree.toString()));

			oTree.openAll();

			this.aCheck = $('[data-ele = check-power]');
			this.aCheckNum = this.aCheck.length;

		}

	});

	var oPower = new power();
	
});
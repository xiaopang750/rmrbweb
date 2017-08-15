/**
 *description:树形菜单
 *author:fanwei
 *date:2014/07/29
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	var oTplTree = require("../../tpl/mobile_tree/tree");
	var oTip = require('../../widget/dom/tip');

	var tree = R.Class.create(R.until, {

		initialize: function() {

			this.oLocTree = $('[data-ele = mobile-tree-content-wrap]');	
			this.pageInfo = this.parse();
			this.createAdd();

		},
		createAdd: function(){

			this.oAddBtn = $('<a href="#" class="mt-10 ml-10 fl">新建</a>');
			this.oAddBtn.hide();
			$('body').append(this.oAddBtn);

		},
		events: function() {

			var _this = this;

			//点击展开子菜单
			$(document).on('click', '[m-tree-slide]', function(){
				_this.slide($(this), '[m-tree-list]', '[m-tree-content]');
				return false;
			});

			//点击slide下拉
			$(document).on('click', '[m-add]', function(){	
				_this.slide($(this), '[m-tree-wrap]', '[m-tree-main]');
				return false;
			});

			//点击slide下拉
			$(document).on('click', '[m-slide]', function(){	
				_this.slide($(this), '[m-tree-wrap]', '[m-tree-main]');
				return false;
			});	

			//点击选中
			/*$(document).on('click', '[m-select]', function(){

				

			});*/

			//移入显示新建
			$(document).on('mouseover', '[tree-add]', function(){
				_this.select($(this));
				_this.showAdd($(this));

			});

			$(document).on('click', function(){

				var isShow;

				isShow = $('[m-tree-main]').hasClass('active');

				if(isShow) {
					$('[m-tree-main]').removeClass('active');
				}

			});

		},
		showAdd: function(oThis) {
			//console.log('a');
			this.oAddBtn.show();
			oThis.after(this.oAddBtn);


		},
		select: function(oThis) {

			var aAllList = $('[m-select]');
			aAllList.removeClass('active');
			oThis.addClass('active');

			var parentId,
				pkSite,
				parentName,
				url;

			parentId = oThis.attr('parentId') || '';
			pkSite = oThis.attr('pkSite') || '';
			parentName = oThis.attr('parentName') || '';
			url = this.oAdd.attr('link') + '&parentId='+ parentId +'&pkSite='+ pkSite +'&parentName=' + parentName;
			
			this.oAddBtn.attr('href', url);

		},
		slide: function(oThis, sParent, sTarget) {

			var oParent = oThis.parents(sParent);
			var oContent = oParent.find(sTarget);
			var	isSlide;

			isSlide = oContent.hasClass('active');

			if(isSlide) {
				oContent.removeClass('active');
				oThis.removeClass('active');
			} else {
				oContent.addClass('active');
				oThis.addClass('active');
			}

		},
		show: function() {

			var _this,
				aTree,

			_this = this;

			this.reqUrl = R.interfaces.get_tree;
			this.reqParam = {pkSite: this.pageInfo.pkSite};
			this.req(function(data){
				//data.data.url = 'mobilesite/jump?resultName=site_add_edit';
				
				aTree = data.data.tree;

				if(aTree.length) {

					_this.changeData(data, function(data){
					//console.log(data);
						_this.render(_this.oLocTree, oTplTree, data.data);
						_this.oAdd = $('[m-add]');
						_this.events();
					});
					
				}
				
			});
			
		},
		changeData: function(data, cb) {
		

			var i,
				num,
				dataTree,
				newArr,
				json;

			json = {};
			dataTree = data.data.tree;	
			num = dataTree.length;
			newArr = [];

			for (i=0; i<num; i++) {

				if(dataTree[i].parentId == "-1") {
					newArr.push(dataTree[i]);
				}
			}

			var k,
				j,
				b,
				num2,
				num3,
				aSec,
				aThird;

			num2 = newArr.length;
			aSec = [];

			for(i=0; i<num; i++){

				for(k=0; k<num2; k++) {	
					
					if(dataTree[i].parentId == newArr[0].pageId) {

						aSec.push(dataTree[i]);
						
					}
				}	
			}

			newArr[0].child = aSec;
			num3 = aSec.length;
			
			for (j=0; j<num3; j++) {

				aSec[j].child = [];

			}
			
			for (b=0; b<num; b++) {

				for (j=0; j<num3; j++) {

					if(dataTree[b].parentId == aSec[j].pageId) {

						aSec[j].child.push(dataTree[b]);
						

					}

				}

			}

			
			data.data.tree = newArr;

			cb && cb(data);

		}

	});

	module.exports = tree;
	
});
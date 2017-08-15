/**
 *description:左侧导航
 *author:fanwei
 *date:2014/07/31
 */
define(function(require, exports, module){
	
	var tab = require('../widget/dom/tab');
	
	var nav = R.Class.create(R.until, {

		initialize: function() {
			
			this.oTab = new tab({
				oWrap: $('[tab-tree]')
			})

			this.oTab.init();

			this.showNow();

			this.showModule();
			
		},
		showNow: function() {

			var aNav = $('[nav-list]');
			var i,
				num,
				sTitle = $('title').html();

			num = aNav.length;

			for (i=0; i<num; i++) {

				if(aNav.eq(i).attr('text') == sTitle) {

					aNav.eq(i).addClass('active');

				}

			}	

		},
		showModule: function() {

			var aModule = $('[tab-tree]').find('[m-name]');
			var i,
				num,
				nowModule;

			nowModule = $('body').attr('module-name');
			num = aModule.length;

			for (i=0; i<num; i++) {

				if(aModule.eq(i).attr('m-name') ==  nowModule){
					this.oTab.tab(i);
				}
			}	
		}

	});

	var oNav = new nav();
	
});
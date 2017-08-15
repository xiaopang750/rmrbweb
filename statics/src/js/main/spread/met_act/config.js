/**
 *description:会议邀约配置
 *author:fanwei
 *date:2014/10/12
 */
define(function(require, exports, module){
	
	var tabSwitch = require('../../../widget/dom/tab');
	var Calendar = require('../../../widget/form/calendar');

	var config = {

		"model_01": {
			nav: [
				{
					name: "会议主题"
				},
				{
					name: "会议日程"
				},
				{
					name: "会议嘉宾"
				},
				{
					name: "会议联系人"
				},
				{
					name: "赞助商"
				},
				{
					name: "会议报名"
				}
			],
			tpl: {
				views: [
					require('../../../tpl/spread/met_act/model1/m_view/flow1'),
					require('../../../tpl/spread/met_act/model1/m_view/flow2'),
					require('../../../tpl/spread/met_act/model1/m_view/flow3'),
					require('../../../tpl/spread/met_act/model1/m_view/flow4'),
					require('../../../tpl/spread/met_act/model1/m_view/flow5'),
					require('../../../tpl/spread/met_act/model1/m_view/flow6')
				],
				formsr: [
					require('../../../tpl/spread/met_act/model1/m_form/flow1'),
					require('../../../tpl/spread/met_act/model1/m_form/flow2'),
					require('../../../tpl/spread/met_act/model1/m_form/flow3'),
					require('../../../tpl/spread/met_act/model1/m_form/flow4'),
					require('../../../tpl/spread/met_act/model1/m_form/flow5'),
					require('../../../tpl/spread/met_act/model1/m_form/flow6')
				]
			},
			otherFunc: [
				function() {

					return {
						editor: false
					}

				},
				function() {

					var oTab = new tabSwitch({
						oWrap: $('[met-style]')
					});
					oTab.events();


					var oCalendar = new Calendar({
						ele : '[sub-name = date]'
					});

					return {
						tab: oTab,
						calendar: oCalendar,
						editor: false
					}
				},
				function() {

					var oTab = new tabSwitch({
						oWrap: $('[met-style]')
					});
					oTab.events();

					return {
						tab: oTab,
						editor: false
					}

				},
				function() {

					return  {
						editor: true
					}

				},
				function() {
					return  {
						editor: true
					}
				},
				function() {
					return  {
						editor: false
					}
				}
			]
		},
		"model_02": {
			nav: [
				{
					name: "会议编辑"
				},
				{
					name: "会议报名"
				}
			],
			tpl: {
				views: [
					require('../../../tpl/spread/met_act/model2/m_view/flow1'),
					require('../../../tpl/spread/met_act/model2/m_view/flow2')
				],
				formsr: [
					require('../../../tpl/spread/met_act/model2/m_form/flow1'),
					require('../../../tpl/spread/met_act/model2/m_form/flow2')
				]
			},
			otherFunc: [
				function() {

					return  {
						editor: true
					}

				},
				function() {
					return  {
						editor: false
					}
				}
			]
		},
		tempNav: require('../../../tpl/spread/met_act/nav_list')
	}

	module.exports = config;
	
});



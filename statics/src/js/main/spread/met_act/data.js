/**
 *description:会议邀约默认数据
 *author:fanwei
 *date:2014/10/13
 */
define(function(require, exports, module){

	var meeting_data = {
		"model_01": [
				{
					bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
					theme: R.uri.assets + 'main/spread/met_act/bg/title_bg.gif',
					title:'会议标题',
					content: '会议简介'
				},
				{
					bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
					List: [
						{
							date:'日期',
							plane:'日程内容',
							detailPic:'main/spread/met_act/bg/title_bg.gif'
						}
					]
				},
				{
					bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
					List: [
						{
							name:'姓名',
							headPic: R.uri.assets + 'main/spread/met_act/guest/default.jpeg',
							intro:'个人介绍'
						}
					]
				},
				{
					bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
					word:''
				},
				{
					bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
					word:''
				},
				{
					bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
					List: [
						{name:'姓名',type:'text',isChecked:'0',inputName:'name'},
						{name:'电话',type:'text',isChecked:'0',inputName:'tel'},
						{name:'公司',type:'text',isChecked:'0',inputName:'corp'},
						{name:'地址',type:'text',isChecked:'0',inputName:'addr'},
						{name:'介绍',type:'text',isChecked:'0',inputName:'des'}
					]
				}	
			],
		"model_02": [
			{
				bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
				word:''
			},
			{
				bg: R.uri.assets + 'main/spread/met_act/bg/default.jpeg',
				List: [
					{name:'姓名',type:'text',isChecked:'0',inputName:'name'},
					{name:'电话',type:'text',isChecked:'0',inputName:'tel'},
					{name:'公司',type:'text',isChecked:'0',inputName:'corp'},
					{name:'地址',type:'text',isChecked:'0',inputName:'addr'},
					{name:'介绍',type:'text',isChecked:'0',inputName:'des'}
				]
			}
		],
		model: {
			model: [
				{
					name: 'model_01',
					pic: R.uri.assets + 'main/spread/met_act/model1.jpg'
				},
				{
					name: 'model_02',
					pic: R.uri.assets + 'main/spread/met_act/model2.jpg'
				}
			]
		}	
	}

	module.exports = meeting_data;

});
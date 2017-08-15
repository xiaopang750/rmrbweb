/**
 *description:现场活动大转盘
 *author:fanwei
 *date:2014/08/11
 */
define(function(require, exports, module){
	
	var global = require("../../../driver/global");
	var oTip = require('../../../widget/dom/tip');
	var oTplForm = require('../../../tpl/spread/public/form');

	var step1 = R.Class.create(R.until, {

		initialize: function() {
			
			this.oDataWrap = $('[data-wrap]');
			this.oTypeView = $('[type-view]');
			this.oConfirm = $('[confirm]');
			this.oSelectTyper = $('[act-typer]');
			this.viewImageUrl = R.uri.assets + 'main/spread/public/';
			this.blankUrl = R.uri.assets + 'lib/holder/blank.gif';
			this.maxNum = 1000000;

			this.pageInfo = this.parse();	
			this.defaultData = {
				prizes: ["","","","","","",""]
			};

			this.events();
			this.judge();
			
		},
		events: function() {

			var _this = this;

			this.oConfirm.on('click', function(){

				_this.subMission();

			});

			this.oSelectTyper.on('change', function(){

				var type = $(this).val();
				var name = $(this)[0].options[ $(this)[0].selectedIndex ].text;

				_this.selectType( type, name );

			});
		},
		selectType: function(type, name) {

			this.nowType = type;
			this.nowName = name;

			if(type) {
				this.oTypeView.attr('src', this.viewImageUrl + type + '.png');	
			} else {
				this.oTypeView.attr('src', this.blankUrl);
			}
		
		},
		judge: function() {

			var aid;
			aid = this.pageInfo.pkActivity;

			if(!aid) {
				this.way = 'add';
				this.add();

			} else {	
				this.way = 'edit';
				this.edit(aid);
			}

		},
		add: function() {

			this.renderPage(this.defaultData);

		},
		edit: function(aid) {

			var _this = this;

			this.reqUrl = R.interfaces.get_act_data;
			this.reqParam = {
				pkActivity: aid
			};
			this.req(function(data){

				_this.pkInteraction = data.data.interaction.pkInteraction;
				_this.renderPage(data.data);
				_this.editChooseSelect(data);
			});

		},
		editChooseSelect: function(data) {

			var info,
				nowType,
				nowName,
				i,
				num,
				aOption,
				name;

			info = data.data.interact;
			nowType = info.activityType;
			nowName = info.title;
			console.log(data);
			aOption = this.oSelectTyper.children();
			num = aOption.length;

			for (i=0; i<num; i++) {

				name = aOption.eq(i).val();

				if(name == nowType) {
					this.oSelectTyper[0].selectedIndex = i;
					this.selectType( nowType, nowName );
				}

			}

			this.oSelectTyper.attr('disabled', 'disabled');	

		},
		renderPage: function(data) {

			this.render(this.oDataWrap, oTplForm, data);

		},
		judgeResult: function() {

			var ele = $('[need-check]');
			var i,
				num,
				result,
				sValue,
				isAllNum,
				checkedSum;

			num = ele.length;
			result = true;
			isAllNum = true;
			checkedSum = 0;
			
			for (i=0; i<num; i++) {

				sValue = ele[i].value;

				if(!sValue) {
					result = false;
				}

				if(ele.eq(i).attr('up-name') == 'count') {

					var re = /\d+/gi;

					if(!re.test(sValue) || (sValue > this.maxNum) || (sValue <= 0) ) {
						isAllNum = false;
					}

				}

				if(ele.eq(i).attr('up-name') == 'prizeLock') {

					if(ele.eq(i).attr('checked') == 'checked') {

						checkedSum ++;
					}
						
				}	

			}
			
			if(!result) {

				oTip.say('请完整填写');
				return false;

			} else if(!this.nowType) {

				oTip.say('请选择互动活动类型');
				return false;

			} else if(checkedSum == this.defaultData.prizes.length){

				oTip.say('奖项不能全锁定');
				return false;

			} else if(!isAllNum) {

				oTip.say('奖品数量必须为数字，大于0且小于等于100,000,0');

			} else {

				return result;
			}
		},
		subMission: function() {

			var result = this.judgeResult();

			if(!result) {
				return;
			}

			var aList = $('[list]');
			var i,
				j,
				num,
				num2,
				arr,
				json,
				aUp,
				oUp,
				sValue,
				_this;

			num = aList.length;
			_this = this;
			
			arr = [];

			for (i=0; i<num; i++) {

				aUp = aList.eq(i).find('[up-name]');
				num2 = aUp.length;
				json = {};

				for (j=0; j<num2; j++) {

					oUp = aUp.eq(j);

					if(oUp.attr('type') == 'checkbox') {
						sValue = oUp.attr('checked') ? 'Y' : 'N';
					} else {
						sValue = oUp.val();
					}

					if(this.way == 'add') {

						if(oUp.attr('up-name') == 'count') {
							json.residueNum = oUp.val();
						}
					}

					json[oUp.attr('up-name')] = sValue;

					//json.pkPrize = id ? id : '';

				}
				
				arr.push(json);

			}

			var aCount = $('[up-name = count]');
			var k,
				m,
				percent,
				num,
				sum,
				all;

			num = aCount.length;
			sum = 0;
			all = {
				interaction:{},
				prizes: ''
			};

			for (k=0; k<num; k++) {

				sum += parseInt(aCount.eq(k).val());

			}	

			for (m=0; m<num; m++) {

				percent = (parseInt(aCount.eq(m).val())/sum).toFixed(3);

				arr[m].probability = percent;

			}
			
			all.interaction.pkInteraction = this.pkInteraction ? this.pkInteraction : '';
			all.interaction.title = this.nowName;
			all.interaction.activityType = this.nowType;	
			all.prizes = arr;
			
			this.reqUrl = R.interfaces.post_act_data;
			this.reqParam = {
				inputJson: JSON.stringify(all)
			};

			this.req(function(data){
					
				var info = data.data;
				var url;

				if(!_this.pageInfo.pkActivity) {

					window.location = __url__data['muliEdit'] + '&pkInteraction=' + info.pkInteraction + '&parentActivity=' + _this.pageInfo.parentActivity + '&awardType=' + _this.nowType;

				} else {

					window.location = __url__data['muliEdit'] + '&pkInteraction=' + info.pkInteraction + '&pkActivity=' + _this.pageInfo.pkActivity + '&parentActivity=' + _this.pageInfo.parentActivity + '&awardType=' + _this.nowType;
				}
			});

		}

	});

	var oStep1 = new step1();
	
});
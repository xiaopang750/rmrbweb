/**
 *description:状态筛选
 *author:fanwei
 *date:2014/09/16
 */
define(function(require, exports, module){
	
	var selectActivityStatus = R.Class.create(R.until, {

		initialize: function(opts) {
			
			opts = opts || {};
			this.oSelectWrap = opts.oSelectWrap || '';
			this.oTplStatus = opts.oTpl || '';
			this.oTplTime = opts.oTplTime || '';
			this.onshow = opts.onshow || null;
			this.onselect = opts.onselect || null;
			this.onChoseTime = opts.onChoseTime || null;

			this.pageInfo = this.parse();
			this.oSelectWrap = $('[select-area]');
			this.oTimeWrap = $('[time-select]');
			this.events();		
			
		},
		events: function() {

			var _this = this;

			this.oSelectWrap.on('click', '[status]', function(){

				var oThis = $(this);
				var index = oThis.attr('index');
				var status = oThis.attr('status');
				var isChecked = oThis.attr('checked') ? "Y" : "N";
				var result;

				_this.statusData.activityStauts[index].isCheck = isChecked;
				result = JSON.stringify(_this.statusData.activityStauts);
				_this.onselect && _this.onselect( result );

			});

			this.oTimeWrap.on('click', '[time-status]', function(){

				var status = $(this).attr('status');

				_this.onChoseTime && _this.onChoseTime( status );

			});

		},
		showPage: function() {

			var _this,
				i,
				num;

			_this = this;	

			this.reqUrl = R.interfaces.get_activity_status;
			this.req(function(data){
				
				_this.statusData = data.data;
				num = _this.statusData.activityStauts.length;
				_this.render(_this.oSelectWrap, _this.oTplStatus, data.data);

				//删除name,查询时传参无需name;
				for (i=0; i<num; i++) {
					
					delete _this.statusData.activityStauts[i].statusName;

				}

				_this.onshow && _this.onshow(_this.statusData);

			});

			//只有到店有礼 007 需要时间筛选

			if(this.pageInfo.activityType == '007') {

				this.showTimeSelect();	

			} else {
				this.oTimeWrap.hide();
			}
		},
		showTimeSelect: function() {

			var _this = this;

			this.reqUrl = R.interfaces.time_select;
			this.req(function(data){
				
				_this.render(_this.oTimeWrap, _this.oTplTime, data.data);

			});

		}

	});

	module.exports = selectActivityStatus;
	
});
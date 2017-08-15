/**
 *description:自定义链接弹框
 *author:fanwei
 *date:2014/09/19
 */
define(function(require, exports, module){
	
	var oTplBox = require('../../tpl/box/mobile/selfUrlBox');
	var dialog = require('../../widget/dom/dialog');
	var placeHolder = require('../../widget/dom/placeholder');
	var oTip = require('../../widget/dom/tip');
	var enterDo = require('../../widget/dom/enterDo');

	var urlBox = R.Class.create(R.until, {

		initialize: function(opts) {
			
			opts = opts || {};
			this.onConfirm = opts.onConfirm || null;
			this.url = opts.url || '';
			this.oWrap = opts.oWrap || null;
			this.oTarget = null;
			this.oNowOption = null;
			this.nowIndex = null;
			this.maxUrlName = 200;
			this.maxName = 10;
			this.confirmLock = false;
			this.prefixs = 'http://';

			this.pageInfo = this.parse();
			this.createBox();

			this.oSelectHead = this.oBoxWrap.find('[select-head]');
			this.oSelectWrap = this.oBoxWrap.find('[select]');
			this.oConfirm = this.oBoxWrap.find('[sc = confirm]');	

			this.events();
			this.reqHasedLink();

		},
		events: function() {

			var _this = this;

			this.oBox.onConfirm = function() {
				
				_this.confirm();

			};

			enterDo(this.aUrl, function(){

				_this.confirm();
				
			});

			this.oBox.onClosed = function() {

				_this.reset();

			};

			this.oBox.onStart = function() {
				//placeHolder(_this.aUrl, {index: 5000});
			};


			this.oWrap.on('click', '[sub-name = pageUrl]', function(e){

				var nowOption = $(this).children().eq($(this)[0].selectedIndex);
				var isHasLink = nowOption.attr('select-link') != undefined;

				_this.oNowOption = nowOption;
				_this.nowIndex = _this.oNowOption.index();

				if(isHasLink) {

					_this.oTarget = $(this);

					_this.show();
					
				}

				return false;

			});

			this.oSelectHead.on('click', function(){

				_this.showContent();

			});

			this.oBoxWrap.on('click', '[remove]', function(){

				_this.removeOption( $(this) );

			});

		},
		reqHasedLink: function() {

			var _this = this;

			this.reqUrl = R.interfaces.findAllSelfLink;
			this.reqParam = {
				pkSite: this.pageInfo.pkSite,
				pkPage: this.pageInfo.pkPage
			};
			this.req(function(data){

				_this.renderOption( data.data.pages );

			}, function(data){

				oTip.say(data.msg);

			});

		},
		showContent: function() {

			var isShow = this.oSelectWrap.is(':visible');
			var isHasList = this.judgeHasList();

			if(isShow) {

				this.oSelectWrap.hide();

			} else if(!isShow && isHasList) {

				this.oSelectWrap.show();

			}

		},
		judgeHasList: function() {

			var hasList = this.oSelectWrap.children().length ? true : false;

			if(hasList) {
				
				return true;

			} else {

				return false;

			}

		},
		confirm: function() {

			if(!this.confirmLock) {

				this.lock();

				var sValue,	
					sName,
					param,
					_this;

				_this = this;	
				sValue = this.urlInput.val();
				sName = this.urlName.val();
				
				sValue = sValue.replace(/\s+/gi, '');
				sName = sName.replace(/\s+/gi, '');

				if( !sValue || !sName ) {

					oTip.say('链接名称和链接地址不能为空');
					this.unlock();

				}/*else if( !this.IsURL(sValue) ) {

					oTip.say('链接地址格式不正确');

				}*/else if( sValue.length > this.maxUrlName ) {

					oTip.say('链接不能超过'+ this.maxUrlName +'个字符');
					this.unlock();


				}else if(sName.length > this.maxName) {

					oTip.say('链接名称不能超过'+ this.maxName +'个字符');
					this.unlock();

				}else {

					param = {};
					param.pageUrl = sValue;
					param.pageName = sName;

					this.reqUrl = this.url;
					this.reqParam = {
						content: JSON.stringify( param ),
						type: 'pageBasicInfo',
						pkSite: _this.pageInfo.pkSite
					};	
					this.req(function(data){

						var newData = [{}]; //新建后列表显示的新的一条的数据

						oTip.say(data.msg);
						_this.insert(sName, data.data.url);
						_this.onConfirm && _this.onConfirm(sName, sValue, data);
						_this.oBox.close(false);

						newData[0].webname = sName;
						newData[0].pkWeblist = data.data.pkPage;
						_this.renderOption( newData );
						_this.reset(true);
						_this.unlock();

					}, function(data){

						oTip.say(data.msg);
						_this.unlock();

					});

				}

			}

		},
		insert: function(name, value) {

			var aAllUrl = $('[sub-name = pageUrl]');
			var i,
				num,
				json,
				lastOption;

			num = aAllUrl.length;
			
			for (i=0; i<num; i++) {

				var oNewOption = $('<option value='+ value +'>'+ name +'</option>');
				lastOption = aAllUrl.eq(i).children().last();
				oNewOption.insertBefore( lastOption );
			}	

			//insert-data;
			json = {};
			json.webname = name;
			json.weburl = value;
			this.oTarget[0].selectedIndex = this.nowIndex;
			__allPages.push(json);

		},
		reset: function(noResetNowSelect) {

			this.urlInput.val(this.prefixs);
			this.urlName.val('');
			this.oSelectWrap.hide();

			//不重置nowSelect
			if(!noResetNowSelect) {
				this.oTarget[0].selectedIndex = 0;	
			}

		},
		createBox: function() {

			this.oBox = new dialog({
				boxTpl: oTplBox
			});

			this.urlInput = $('[self-input]');
			this.urlName = $('[url-name]');
			this.aUrl = $('[holder]');

			this.oBoxWrap = this.oBox.dom();

		},
		show: function() {

			this.oBox.show();

		},
		IsURL: function (str_url){ 

	        var strRegex = ".+";  
	        var re=new RegExp(strRegex);  
		
	        if (re.test(str_url)){ 
	            return (true);  
	        }else{  
	            return (false);  
	        } 
	    },
	    renderOption: function(arr) {

	    	var i,
	    		num,
	    		oLi;

	    	num = arr.length;
	    	
	    	for (i=0; i<num; i++) {

	    		oLi = $('<li option><span>'+ arr[i].webname +'</span><span remove class="close" aid='+ arr[i].pkWeblist +' name='+ arr[i].webname +'>×</span></li>');
	    		this.oSelectWrap.append(oLi);
	    	}	

	    },
	    removeOption: function(oThis) {

	    	var aid = oThis.attr('aid');
	    	var name = oThis.attr('name');
	    	var _this = this;

	    	this.reqUrl = R.interfaces.delete_mobile_site;
	    	this.reqParam = {
	    		pkSite: this.pageInfo.pkSite,
	    		pkPage: aid
	    	};
	    	this.req(function(data){

	    		oThis.parents('[option]').remove();
	    		_this.removePage( name );
	    		_this.oSelectWrap.hide();
	    		
	    		oTip.say(data.msg);

	    	}, function(data){

	    		oTip.say(data.msg);

	    	});

	    },
	    removePage: function(name) {

	    	//删除当前 _allPages里面匹配的内容,  以及当前select里面匹配的内容

	    	var i,
	    		num;

	    	num = __allPages.length;

	    	for (i=0; i<num; i++) {

	    		if(__allPages[i].webname == name) {
	    			__allPages.splice(i, 1);
	    		}

	    	}

	    	var aAllUrl = $('[sub-name = pageUrl]');

	    	aAllUrl.each(function(i){
	    		
	    		var aOption = aAllUrl.eq(i).find('option');

	    		aOption.each(function(k){

	    			var nowStr = aOption.eq(k).html().replace(/\s+/gi, '');

	    			if( nowStr === name ) {

	    				aOption.eq(k).remove();

	    			}

	    		});

	    	});	

	    },
	    lock: function() {

	    	this.oConfirm.addClass('disabled');
	    	this.oConfirm.attr('disabled', 'disabled');

	    },
	    unlock: function() {

	    	this.oConfirm.removeClass('disabled');
	    	this.oConfirm.removeAttr('disabled', 'disabled');

	    }

	});

	module.exports = urlBox;
	
});
/**
 *description:二维码预览弹框
 *author:fanwei
 *date:2014/09/21
 */
define(function(require, exports, module){
	
	var oTplBox = require('../../tpl/box/spread/code_view');
	var dialog = require('../../widget/dom/dialog');
	
	var codeView = R.Class.create(R.until, {

		initialize: function() {
			
			this.creatBox();

			/*<li>
				<p>sd</p>
				<img view-img class="view-img">
				<a href="javascript:;">下载</a>
			</li>*/
			
		},
		creatBox: function() {

			this.oBox = new dialog({
				boxTpl: oTplBox
			});

			this.oView = $('[view-img]');
			this.oListWrap = $('[code-list-wrap]');

		},
		view: function(url, pk, type) {

			var _this = this;

			if(url) {
				
				var data = [{}];

				data[0].url = url;
				data[0].accountName = '普通';
				data[0].downUrl = '../activity/downloadQcode?pkQcode=' + pk;

				this.showList(data);

			} else {

				this.reqUrl = R.interfaces.offline_code_view;
				this.reqParam = {
					pkQcode: pk,
					channel: type
				};
				this.req(function(data){

					var i,
						info,
						num;

					info = data.data.results;
					num = info.length;

					if(!num) {

						_this.oListWrap.html('暂无数据');

					} else {

						for (i=0; i<num; i++) {

							info[i].downUrl = '../activity/downloadFocusEwm?picUrl=' + info[i].url;
								
						}

						_this.showList(info);	
					}

				});

			}
		},
		showList: function(data) {

			//data [ {url, accountName, downUrl} ]

			this.oListWrap.html('');

			var i,
				num,
				sNewLi,
				oNewLi,
				sum;

			num = data.length;
			sum = 0;
			
			for (i=0; i<num; i++) {

				if(!data[i].url) {
					sNewLi = 
					'<li>'+
						'<p class="mb-10">'+ data[i].accountName +'</p>'+
						'<span>生成失败</span>'+
					'</li>';	
				} else {
					sNewLi = 
					'<li>'+
						'<p>'+ data[i].accountName +'</p>'+
						'<img view-img class="view-img" src='+ data[i].url +'>'+
						'<a href='+ data[i].downUrl +'>下载</a>'+
					'</li>';	
				}

				oNewLi = $( sNewLi );

				this.oListWrap.append(oNewLi);

				sum += oNewLi.outerWidth(true);
			}

			this.oListWrap.css('width', sum);

		},
		show: function() {
			this.oBox.show();
		},
		hide: function() {
			this.oBox.close();
		}

	});

	module.exports = codeView;
	
});
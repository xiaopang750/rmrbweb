/*
 *description:获取全局url数据 在header.jsp 中有有两个隐藏的div分别放js的url数据和jsp的url数据
 *author:fanwei
 *date:2014/10/20
 */

define(function(require, exports, module){
	
    var urlInfo = require('../lib/http/bodyParse')();

	if(!window.__url__data) {

        var str = $('#url-data').html();
        
        if(str) {
            str = str.replace(/\&amp\;/gi, '&'); //符号里面有&amp; 
        	window.__url__data = JSON.parse(str);
            for (var i in urlInfo) {
                __url__data[i] = urlInfo[i];
            }
        } else {
        	window.__url__data = {};
        }
    }

}); 
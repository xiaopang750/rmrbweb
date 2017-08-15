/*
 *description:全局返回
 *author:fanwei
 *date:2014/08/07
 */

define(function(require, exports, module){
	
	$(document).on('click', '[sc = back]', function(){

		window.history.back();

	});
	
}); 
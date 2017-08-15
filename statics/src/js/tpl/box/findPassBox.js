/*TMODJS:{"version":1,"md5":"693919e956d6b74f1fa8ef056d6cbfeb"}*/
define(function(require) {
    return require("../templates")("box/findPassBox", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), msg = $data.msg, $string = $utils.$string, $out = "";
        return $out += '<div find-pass class="find-pass"> <a href="javascript:;" class="close" sc="close">×</a> <h3 class="tc font-14 mb-15"> ', 
        $out += $escape(msg.messagetopic), $out += ' </h3> <div class="content"> ', $out += $string(msg.messagecontent), 
        $out += ' </div> <div class="tc"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" sc="close">确定</a> </div> </div>', 
        new String($out);
    });
});
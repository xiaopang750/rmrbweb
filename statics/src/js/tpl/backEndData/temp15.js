/*TMODJS:{"version":1,"md5":"b4ca45d86a700f8b33e3e9b4672b6af0"}*/
define(function(require) {
    return require("../templates")("backEndData/temp15", function($data) {
        "use strict";
        var $utils = this, results = ($utils.$helpers, $data.results), $each = $utils.$each, $escape = ($data.value2, 
        $data.index2, $utils.$escape), $out = "";
        return $out += ' <table class="table striped mb-50" width="100%"> <thead> <tr> <td>日期</td> <td>微信会员评论量</td> <td>新浪微博会员评论量</td> </tr> </thead> <tbody> ', 
        results.length ? ($out += " ", $each(results, function(value2) {
            $out += " <tr> <td> ", $out += $escape(value2.dt), $out += " </td> <td> ", $out += $escape(value2.wxnum), 
            $out += " </td> <td> ", $out += $escape(value2.wbnum), $out += " </td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="3"> 暂无数据 </td> </tr> ', $out += " </tbody> </table> ", 
        new String($out);
    });
});
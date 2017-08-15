/*TMODJS:{"version":1,"md5":"415d0609f9515cc6756a4175cba16840"}*/
define(function(require) {
    return require("../templates")("backEndData/temp3", function($data) {
        "use strict";
        var $utils = this, countResult = ($utils.$helpers, $data.countResult), $each = $utils.$each, $escape = ($data.value2, 
        $data.index2, $utils.$escape), $out = "";
        return $out += '<table class="table striped mb-50" width="100%"> <thead> <tr> <td>发布日期</td> <td>活动发布总数</td> <td>微信发布数</td> <td>新浪微博发布数</td> </tr> </thead> <tbody> ', 
        countResult.length ? ($out += " ", $each(countResult, function(value2) {
            $out += " <tr> <td> ", $out += $escape(value2.dt), $out += " </td> <td> ", $out += $escape(value2.allNum), 
            $out += " </td> <td> ", $out += $escape(value2.wxNum), $out += " </td> <td> ", $out += $escape(value2.wbNum), 
            $out += " </td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="2"> 暂无数据 </td> </tr> ', $out += " </tbody> </table> ", 
        new String($out);
    });
});
/*TMODJS:{"version":9,"md5":"59945327e5cd00e7b4906d3ac64f7515"}*/
define(function(require) {
    return require("../templates")("backEndData/temp1", function($data) {
        "use strict";
        var $utils = this, table = ($utils.$helpers, $data.table), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<table class="table striped" width="100%"> <thead> <tr> <td>活动主题</td> <td>访问总数</td> <td>微信访问数</td> <td>新浪微博访问数</td> </tr> </thead> <tbody> ', 
        table.length ? ($out += " ", $each(table, function($value) {
            $out += " <tr> <td> ", $out += $escape($value.topic), $out += " </td> <td> ", $out += $escape(1 * $value.wxNum + 1 * $value.wbNum), 
            $out += " </td> <td> ", $out += $escape($value.wxNum), $out += " </td> <td> ", $out += $escape($value.wbNum), 
            $out += " </td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="4"> 暂无数据 </td> </tr> ', $out += " </tbody> </table>", 
        new String($out);
    });
});
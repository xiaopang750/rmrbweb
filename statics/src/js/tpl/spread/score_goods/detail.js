/*TMODJS:{"version":6,"md5":"ebbd72ff2d6dd25c40b8cf96991ee87b"}*/
define(function(require) {
    return require("../../templates")("spread/score_goods/detail", function($data) {
        "use strict";
        var $utils = this, details = ($utils.$helpers, $data.details), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td width="10%">会员昵称</td> <td width="30%">会员姓名</td> <td width="10%">会员手机号</td> <td width="15%">来源</td> <td width="20%">兑换时间</td> <td width="15%">兑换礼品</td> </tr> </thead> ', 
        details.length ? ($out += " ", $each(details, function($value) {
            $out += " <tr rule-list> <td>", $out += $escape($value.nickname), $out += "</td> <td> ", 
            $out += $escape($value.membername), $out += " </td> <td>", $out += $escape($value.cellphone), 
            $out += "</td> <td> ", "001" == $value.memberfrom ? $out += " 微信 " : "002" == $value.memberfrom && ($out += " 新浪微博 "), 
            $out += " </td> <td> ", $out += $escape($value.integraltime), $out += " </td> <td> ", 
            $out += $escape($value.exchangeProduct), $out += " </td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="6"> 暂无数据 </td> </tr> ', $out += " </table>", 
        new String($out);
    });
});
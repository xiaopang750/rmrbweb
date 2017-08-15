/*TMODJS:{"version":1,"md5":"a55093f052ab40e28f3321cae3e1e50e"}*/
define(function(require) {
    return require("../../templates")("spread/score/detail", function($data) {
        "use strict";
        var $utils = this, details = ($utils.$helpers, $data.details), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td width="10%">活动主题</td> <td width="30%">会员姓名</td> <td width="10%">会员昵称</td> <td width="15%">会员渠道来源</td> <td width="20%">积分规则名称</td> <td width="15%">领取时间</td> </tr> </thead> ', 
        details.length ? ($out += " ", $each(details, function($value) {
            $out += " <tr rule-list> <td>", $out += $escape($value.activitytopic), $out += "</td> <td> ", 
            $out += $escape($value.membername), $out += " </td> <td>", $out += $escape($value.nickname), 
            $out += "</td> <td> ", "001" == $value.memberfrom ? $out += " 微信 " : "002" == $value.memberfrom && ($out += " 新浪微博 "), 
            $out += " </td> <td> ", $out += $escape($value.ruleName), $out += " </td> <td> ", 
            $out += $escape($value.integraltime), $out += " </td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="6"> 暂无数据 </td> </tr> ', $out += " </table>", 
        new String($out);
    });
});
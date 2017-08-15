/*TMODJS:{"version":1,"md5":"06814337b83f4f76442465b8406dc2cf"}*/
define(function(require) {
    return require("../../templates")("admin/company/detail", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, cut = $helpers.cut, currentCorp = $data.currentCorp, $escape = $utils.$escape, childrenCorps = $data.childrenCorps, $each = $utils.$each, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td width="10%">公司名称</td> <td width="30%">是否启用</td> <td width="10%">手机网站数</td> <td width="15%">活动数</td> <td width="10%">微信账号数</td> <td width="10%">微博账号数</td> <td width="15%">会员数</td> </tr> </thead> <tbody> <tr class="active"> <td>', 
        $out += $string(cut(currentCorp.corpName, 10)), $out += "</td> <td> ", $out += 0 == currentCorp.isEnable ? " 未启用 " : " 已启用 ", 
        $out += " </td> <td>", $out += $escape(currentCorp.mobileNum), $out += "</td> <td> ", 
        $out += $escape(currentCorp.activityNum), $out += " </td> <td> ", $out += $escape(currentCorp.wxNum), 
        $out += " </td> <td> ", $out += $escape(currentCorp.wbNum), $out += " </td> <td> ", 
        $out += $escape(currentCorp.memberNum), $out += " </td> </tr> ", childrenCorps.length ? ($out += " ", 
        $each(childrenCorps, function($value) {
            $out += " <tr rule-list> <td>", $out += $string(cut($value.corpName, 10)), $out += "</td> <td> ", 
            $out += 0 == $value.isEnable ? " 未启用 " : " 已启用 ", $out += " </td> <td>", $out += $escape($value.mobileNum), 
            $out += "</td> <td> ", $out += $escape($value.activityNum), $out += " </td> <td> ", 
            $out += $escape($value.wxNum), $out += " </td> <td> ", $out += $escape($value.wbNum), 
            $out += " </td> <td> ", $out += $escape($value.memberNum), $out += " </td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="7"> 暂无数据 </td> </tr> ', $out += " </tbody> </table>", 
        new String($out);
    });
});
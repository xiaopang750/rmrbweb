/*TMODJS:{"version":12,"md5":"59c2beb2027b8aafa617989351b1ac8f"}*/
define(function(require) {
    return require("../../templates")("spread/score/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, $escape = $utils.$escape, pid = $data.pid, pointRules = $data.pointRules, $each = $utils.$each, $out = ($data.$value, 
        $data.$index, "");
        return $out += '<table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td colspan="4" class="tr"> <a class="btn btn-primary" href="', 
        $out += $string(getUrl("integralRuleEdit")), $out += "&pkActivity=", $out += $escape(pid), 
        $out += '" add-btn> 添加规则 </a> </td> </tr> </thead> <tbody> ', pointRules.length ? ($out += " <tr> <td>积分规则名称</td> <td>积分数量</td> <td>积分规则类型</td> <td>操作</td> </tr> ", 
        $each(pointRules, function($value) {
            $out += " <tr rule-list> <td>", $out += $escape($value.ruleName), $out += "</td> <td>", 
            $out += $escape($value.pointNum), $out += "</td> <td> ", $out += $escape($value.pointType), 
            $out += ' </td> <td> <a href="', $out += $string(getUrl("integralRuleEdit")), $out += "&pkActivity=", 
            $out += $escape(pid), $out += "&pkRule=", $out += $escape($value.pkRule), $out += '">编辑</a> <span>|</span> <a href="javascript:;" aid="', 
            $out += $escape($value.pkRule), $out += '" remove>删除</a> <span>|</span> <a href="', 
            $out += $string(getUrl("integralRulePart")), $out += "&pkRule=", $out += $escape($value.pkRule), 
            $out += '">积分领取详情</a> </td> </tr> ';
        }), $out += " ") : $out += ' <tr colspan="4"> <td> 暂无数据 </td> </tr> ', $out += " </tbody> </table>", 
        new String($out);
    });
});
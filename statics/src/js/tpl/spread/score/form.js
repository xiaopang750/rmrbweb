/*TMODJS:{"version":3,"md5":"f692f0c5e33a7944edb03c82d5e2e99f"}*/
define(function(require) {
    return require("../../templates")("spread/score/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), pointRule = $data.pointRule, $each = $utils.$each, ruleTypes = $data.ruleTypes, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover"> <tr> <td width="100"> 积分规则名称： </td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="pointRule.ruleName" tip="此项为必填" wrong="积分规则名称为20个字以内" re="(.{1,20})" value="', 
        $out += $escape(pointRule.ruleName), $out += '"> </div> </td> </tr> <tr> <td> 积分数量： </td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="pointRule.pointNum" tip="此项为必填" wrong="积分格式不正确" re="(\\d+)" value="', 
        $out += $escape(pointRule.pointNum), $out += '"> </div> </td> </tr> <tr> <td> 规则名称： </td> <td> <div> <select class="form-control col-xs-5" name="pointRule.pointType" form_check="sys" ischeck="true" tip="请选择规则名称" wrong="" re=".+" select-type> <option value="">请选择</option> ', 
        $each(ruleTypes, function($value) {
            $out += ' <option id="', $out += $escape($value.typeLabel), $out += '" ', "Y" == $value.selected && ($out += 'selected="selected"'), 
            $out += ">", $out += $escape($value.typeName), $out += "</option> ";
        }), $out += ' </select> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">确定</a> <a href="javascript:;" class="btn btn-danger pl-50 pr-50" sc="back">取消</a> </td> </tr> </table>', 
        new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"cdd786eccde55d27bc657beabe7eed57"}*/
define(function(require) {
    return require("../../templates")("admin/role/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), roleName = $data.roleName, roleMemo = $data.roleMemo, roleCode = $data.roleCode, usercount = $data.usercount, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="90%" class="table nohover auto mt-20"> <tr> <td width="100">角色名称：</td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="role.roleName" tip="此项为必填" wrong="角色名称不能超过10个字" re="(.{1,10})" value="', 
        $out += $escape(roleName), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td>角色备注：</td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="false" name="role.roleMemo" tip="此项为必填" wrong="角色备注不能超过10个字" re="(.{1,10})" value="', 
        $out += $escape(roleMemo), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <!-- <tr> <td>角色编码：</td> <td> <input type="text" form_check="sys" ischeck="true" name="role.roleCode" tip="此项为必填" wrong="角色编码不能超过10个字" re="(.{1,10})" value="', 
        $out += $escape(roleCode), $out += '"> </td> </tr> --> <tr> <td>用户限制：</td> <td> <div> <input type="text" class="form-control col-xs-5" name="role.usercount" form_check="sys" ischeck="true" tip="此项为必填" wrong="格式不正确" re="(\\d+)" sc="pass-new" value="', 
        $out += $escape(usercount), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray mt-7 fl ml-5">(每个角色最大分配的用户数)</span> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">确定</a> </td> </tr> </table>', 
        new String($out);
    });
});
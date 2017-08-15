/*TMODJS:{"version":1,"md5":"3a4477518a695fea25ecee1f9e1501bf"}*/
define(function(require) {
    return require("../../templates")("admin/company/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), corp = $data.corp, userinfo = $data.userinfo, $each = $utils.$each, resources = $data.resources, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="600" class="table nohover"> <tr> <td width="150">企业编码：</td> <td> <div> <input type="text" class="form-control col-xs-8" form_check="sys" ischeck="true" name="corp.corpcode" tip="此项为必填" wrong="企业编码为6-15位字母，数字或中文" re="((\\d|[a-zA-Z]|[\\u4e00-\\u9fa5]){6,15})" value="', 
        $out += $escape(corp.corpcode), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td width="150">企业名称：</td> <td> <div> <input type="text" class="form-control col-xs-8" form_check="sys" ischeck="true" name="corp.corpname" tip="此项为必填" wrong="企业名称不能超过45个字" re="(.{1,45})" value="', 
        $out += $escape(corp.corpname), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td width="150">业务负责人：</td> <td> <div> <input type="text" class="form-control col-xs-8" form_check="sys" ischeck="true" name="corp.principal" tip="此项为必填" wrong="业务负责人不能超过10个字" re="(.{1,10})" value="', 
        $out += $escape(corp.principal), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>业务负责人联系电话：</td> <td> <div> <input type="text" class="form-control col-xs-8" form_check="sys" ischeck="true" name="corp.phone" tip="此项为必填" wrong="联系电话格式不正确" re="((\\d{8})|(\\d{11}))" value="', 
        $out += $escape(corp.phone), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>管理员登录名称：</td> <td> <div> <input type="text" class="form-control col-xs-8" form_check="sys" ischeck="true" name="userinfo.userCode" tip="此项为必填" wrong="管理员名称为2-16位" re="(.{2,16})" value="', 
        $out += $escape(userinfo.userCode), $out += '"> <span checkRepeat class="repeat red"></span> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>管理员真实姓名：</td> <td> <div> <input type="text" class="form-control col-xs-8" form_check="sys" ischeck="true" name="userinfo.userName" tip="此项为必填" wrong="真实姓名不能超过10个字" re="(.{1,10})" value="', 
        $out += $escape(userinfo.userName), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>设置密码：</td> <td> <div> <input type="password" class="form-control col-xs-8" name="userinfo.userPassword" form_check="sys" ischeck="true" tip="密码不能为空" wrong="请输入6-16位密码" re="(.{6,16})" sc="pass-new" value="', 
        $out += $escape(userinfo.userPassword), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>再次输入密码：</td> <td> <div> <input type="password" class="form-control col-xs-8" sc="re-new-pass" name="reNewPassWord" form_check="self" ischeck="true" tip="密码不能为空" wrong="两次输入的密码不一致" re="(.{6,16})" value="', 
        $out += $escape(userinfo.userPassword), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>选择套餐类型：</td> <td script-role="check_wrap"> <div> <select name="corp.sourceId" class="form-control col-xs-8" form_check="sys" ischeck="true" tip="请选套餐类型" wrong="" re=".+"> <option value="" id="">请选择</option> ', 
        $each(resources, function($value) {
            $out += ' <option value="', $out += $escape($value.pkResource), $out += '" id="', 
            $out += $escape($value.pkResource), $out += '" ', -1 == $value.dr && ($out += 'selected="selected"'), 
            $out += ">", $out += $escape($value.resourceName), $out += "</option> ";
        }), $out += ' </select> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>选择有效期：</td> <td script-role="check_wrap"> <div> <select class="form-control col-xs-8" name="corp.effectiveTime" form_check="sys" ischeck="true" tip="请选择有效期" wrong="" re=".+"> <option value="" id="">请选择</option> <option value="1" id="1" ', 
        1 == corp.effectiveTime && ($out += 'selected="selected"'), $out += '>一年</option> <option value="2" id="2" ', 
        2 == corp.effectiveTime && ($out += 'selected="selected"'), $out += '>两年</option> <option value="3" id="3" ', 
        3 == corp.effectiveTime && ($out += 'selected="selected"'), $out += '>三年</option> </select> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>企业介绍：</td> <td script-role="check_wrap"> <div> <textarea class="form-control col-xs-8" name="corp.corpdes" form_check="sys" ischeck="true" tip="企业介绍不能为空" wrong="请输入100字以内的企业介绍" re="((.|\\n){1,100})">', 
        $out += $escape(corp.corpdes), $out += '</textarea> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>是否停用：</td> <td script-role="check_wrap" class="tl"> <div> <input type="checkbox" isEnable ', 
        0 == corp.isEnable && ($out += 'checked="checked"'), $out += '> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">保存</a> </td> </tr> </table>', 
        new String($out);
    });
});
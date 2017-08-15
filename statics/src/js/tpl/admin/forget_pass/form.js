/*TMODJS:{"version":1,"md5":"ecb8755ab23b2eaa53c525a35dbf5131"}*/
define(function(require) {
    return require("../../templates")("admin/forget_pass/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), msg = $data.msg, $out = "";
        return $out += '<table class="table nohover" width="100%"> <tr> <td width="100"> 主题： </td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="sysmessage.messagetopic" value="', 
        $out += $escape(msg.messagetopic), $out += '" tip="此项为必填" wrong="主题不能超过10个字" re="(.{1,20})" value=""> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td> 联系信息： </td> <td class="tl"> <div class="clearfix"> <span class="red mt-5 ml-5 font-14">*</span> </div> <div> <textarea editor class="col-xs-5" style="padding-left:0">', 
        $out += $escape(msg.messagecontent), $out += '</textarea> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td> </td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">确定</a> </td> </tr> </table>', 
        new String($out);
    });
});
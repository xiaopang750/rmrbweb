/*TMODJS:{"version":1,"md5":"32917e049aa1262912da4fbb9fa9d3ab"}*/
define(function(require) {
    return require("../templates")("member/autoReply_form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), keycontent = $data.keycontent, replycontent = $data.replycontent, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="90%" class="table nohover auto"> <tr> <td width="100">问题内容</td> <td> <div> <input type="text" class="form-control col-xs-5" value="', 
        $out += $escape(keycontent), $out += '" form_check="sys" ischeck="true" name="autoreply.keycontent" tip="此项为必填" wrong="关键字为10个以内的非空字符" re="([^\\s+]{1,10})"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td>匹配类型</td> <td> <div> <input type="text" class="form-control col-xs-5" value="全文匹配" readonly="readonly" value="全文匹配" form_check="sys" ischeck="true" name="autoreply.matchtype" tip="" wrong="" re="(.+)"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td> 回复类型 </td> <td> <div> <input type="text" class="form-control col-xs-5" value="文本" readonly="readonly" value="文本" form_check="sys" ischeck="true" name="autoreply.replytype" tip="" wrong="" re="(.+)"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>回复内容</td> <td> <div> <textarea form_check="sys" class="form-control col-xs-5 h-mid" ischeck="true" name="autoreply.replycontent" tip="此项为必填" wrong="回复内容不能超过150个字" re="((.|\\n){1,150})">', 
        $out += $escape(replycontent), $out += '</textarea> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">确定</a> </td> </tr> </table>', 
        new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"6267516c069616e0826335d67d9471e9"}*/
define(function(require) {
    return require("../../templates")("way/level/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), levelname = $data.levelname, minPoint = $data.minPoint, maxPoint = $data.maxPoint, levelremark = $data.levelremark, $out = "";
        return $out += ' <table weixin cellpadding="0" cellspacing="0" border="0" width="100%" class="table auto mt-20 nohover"> <tr> <td width="150">会员级别名称:</td> <td> <div> <input type="text" class="form-control col-xs-3" form_check="sys" ischeck="true" name="level.levelname" tip="此项为必填" wrong="此项为必填" re="(.+)" value="', 
        $out += $escape(levelname), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td>积分下限:</td> <td> <div> <input type="text" class="form-control col-xs-3" form_check="sys" ischeck="true" name="level.minPoint" tip="此项为必填" wrong="积分格式不正确" re="(\\d+)" value="', 
        $out += $escape(minPoint), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>积分上限:</td> <td> <div> <input type="text" class="form-control col-xs-3" form_check="sys" ischeck="true" name="level.maxPoint" tip="此项为必填" wrong="积分格式不正确" re="(\\d+)" value="', 
        $out += $escape(maxPoint), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td width="150">备注:</td> <td> <div> <textarea type="text" class="form-control col-xs-3" form_check="sys" ischeck="true" name="level.levelremark" tip="此项为必填" wrong="备注不能超过100个字" re="((.|\\n){1,150})">', 
        $out += $escape(levelremark), $out += '</textarea> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">提交</a> </td> </tr> </table> ', 
        new String($out);
    });
});
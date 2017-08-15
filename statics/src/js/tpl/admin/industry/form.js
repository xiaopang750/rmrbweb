/*TMODJS:{"version":1,"md5":"d28c104e29e26844183f0d04227ccaf5"}*/
define(function(require) {
    return require("../../templates")("admin/industry/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), dataName = $data.dataName, $out = "";
        return $out += '<table class="table nohover" width="100%" script-bound="form_check"> <tr> <td> 行业名称： </td> <td> <div> <input type="text" value="', 
        $out += $escape(dataName), $out += '" class="form-control col-xs-4" form_check="sys" ischeck="true" name="dataSub.dataName" tip="此项为必填" wrong="行业名称不能超过20个字" re="(.{1,20})"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">保存</a> </td> </tr> </table>', 
        new String($out);
    });
});
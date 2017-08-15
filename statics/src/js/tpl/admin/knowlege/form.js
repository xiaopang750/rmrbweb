/*TMODJS:{"version":1,"md5":"cf8f545cf01cbca3954a9e5379ba4ed4"}*/
define(function(require) {
    return require("../../templates")("admin/knowlege/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), konwledgename = $data.konwledgename, konwledgetype = $data.konwledgetype, konwledgecontent = $data.konwledgecontent, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover"> <tr> <td> 知识库名称： </td> <td> <div> <input type="text" value="', 
        $out += $escape(konwledgename), $out += '" class="form-control col-xs-5" form_check="sys" ischeck="true" name="rmrbBdKnowledgestorge.konwledgename" tip="此项为必填" wrong="知识库名称不能超过50个字" re="(.{1,50})"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td> 知识库类别： </td> <td> <div> <input type="text" value="', 
        $out += $escape(konwledgetype), $out += '" class="form-control col-xs-5" form_check="sys" ischeck="true" name="rmrbBdKnowledgestorge.konwledgetype" tip="此项为必填" wrong="知识库类别不能超过20个字" re="(.{1,20})"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td> 知识库内容： </td> <td> <div> <input type="text" value="', 
        $out += $escape(konwledgecontent), $out += '" class="form-control col-xs-5" form_check="sys" ischeck="true" name="rmrbBdKnowledgestorge.konwledgecontent" tip="此项为必填" wrong="知识库内容为100字以内" re="(.{1,100})"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">保存</a> </td> </tr> </table> ', 
        new String($out);
    });
});
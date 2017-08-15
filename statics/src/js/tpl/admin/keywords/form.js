/*TMODJS:{"version":5,"md5":"f39caaa34fd336cef437f1d5b9238255"}*/
define(function(require) {
    return require("../../templates")("admin/keywords/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), keyword = $data.keyword, $out = "";
        return $out += ' <table class="table nohover" width="100%"> <tr> <td width="100"> 关键词一： </td> <td> <div> <input type="text" class="form-control col-xs-5 fl mr-5" form_check="sys" ischeck="free" name="word.keywordContent" value="', 
        $out += $escape(keyword.word1), $out += '" tip="" wrong="关键词描述为0-10个字" re="(.{0,10})" words> </div> </td> </tr> <tr> <td> 关键词二： </td> <td> <div> <input type="text" class="form-control col-xs-5 fl mr-5" form_check="sys" ischeck="free" name="word.keywordContent" value="', 
        $out += $escape(keyword.word2), $out += '" tip="" wrong="关键词描述为0-10个字" re="(.{0,10})" words> </div> </td> </tr> <tr> <td> 关键词三： </td> <td> <div> <input type="text" class="form-control col-xs-5 fl mr-5" form_check="sys" ischeck="free" name="word.keywordContent" value="', 
        $out += $escape(keyword.word3), $out += '" tip="" wrong="关键词描述为0-10个字" re="(.{0,10})" words> </div> </td> </tr> <tr> <td> 关键词四： </td> <td> <div> <input type="text" class="form-control col-xs-5 fl mr-5" form_check="sys" ischeck="free" name="word.keywordContent" value="', 
        $out += $escape(keyword.word4), $out += '" tip="" wrong="关键词描述为0-10个字" re="(.{0,10})" words> </div> </td> </tr> <tr> <td> 关键词五： </td> <td> <div> <input type="text" class="form-control col-xs-5 fl mr-5" form_check="sys" ischeck="free" name="word.keywordContent" value="', 
        $out += $escape(keyword.word5), $out += '" tip="" wrong="关键词描述为0-10个字" re="(.{0,10})" words> </div> </td> </tr> <tr> <td> 网站描述： </td> <td class="tl"> <div> <textarea type="text" class="form-control col-xs-5 h-sm" form_check="sys" ischeck="free" name="word.descriptions" tip="" wrong="网站描述为100个字以内" re="(.{0,100})">', 
        $out += $escape(keyword.descriptions), $out += '</textarea> </div> </td> </tr> <tr> <td> </td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">确定</a> </td> </tr> </table>', 
        new String($out);
    });
});
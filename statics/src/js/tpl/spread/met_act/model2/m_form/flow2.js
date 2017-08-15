/*TMODJS:{"version":1,"md5":"72a2f5d4e3edd7e93332528141624d7a"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model2/m_form/flow2", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $each = $utils.$each, List = $data.List, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover noline"> <tr> <td class="tr"> 背景图片： </td> <td r-upload-wrap sub-wrap name="bg" class="clearfix"> <span sub-list> <input type="text" class="form-control col-xs-8 fl" value="', 
        $out += $escape(bg), $out += '" r-upload-url> <input type="hidden" value="', $out += $escape(bg), 
        $out += '" sub-name="bg" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> <tr> <td class="tr"> 标签名称： </td> <td sub-wrap name="List"> ', 
        $each(List, function($value) {
            $out += ' <span sub-list name="test"> <span class="mr-10"> <span sub-name="name">', 
            $out += $escape($value.name), $out += '</span> <input type="hidden" value="', $out += $escape($value.type), 
            $out += '" sub-name="', $out += $escape($value.type), $out += '"> <input type="checkbox" sub-name="isChecked" ', 
            "0" == $value.isChecked && ($out += 'checked="checked"'), $out += '> <input type="hidden" sub-name="inputName" value="', 
            $out += $escape($value.inputName), $out += '"> </span> </span> ';
        }), $out += " </td> </tr> </table>", new String($out);
    });
});
/*TMODJS:{"version":2,"md5":"69893efb856e5078552f998534424d3b"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_form/flow5", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, word = $data.word, $each = $utils.$each, List = $data.List, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="380" class="table nohover noline"> <tr> <td class="tr" width="100"> 背景图片： </td> <td r-upload-wrap sub-wrap name="bg" class="clearfix"> <span sub-list> <input type="text" class="form-control col-xs-8 fl" value="', 
        $out += $escape(bg), $out += '" r-upload-url> <input type="hidden" value="', $out += $escape(bg), 
        $out += '" sub-name="bg" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> <tr sub-wrap name="word"> <td class="tr"> 赞助商： </td> <td sub-list> <textarea sub-name="word" class="editor" style="width:270px">', 
        $out += $escape(word), $out += '</textarea> </td> </tr> </table> <!-- <div sub-wrap name="List" form-list-wrap> ', 
        $each(List, function($value, $index) {
            $out += ' <div widget-role="tab-content" ', 0 != $index && ($out += 'class="none"'), 
            $out += '> <table cellpadding="0" cellspacing="0" border="0" width="100%" sub-list name="test"> <tr> <td class="tr"> Logo： </td> <td r-upload-wrap> <span> <input type="text" class="r-text w-200 fl mr-10" value="', 
            $out += $escape($value.logo), $out += '" r-upload-url> <input type="hidden" value="', 
            $out += $escape($value.logo), $out += '" sub-name="logo" r-upload-url> <span class="r-btn mobile-upload" r-upload-btn></span> </span> </td> </tr> <tr> <td class="tr"> 企业介绍： </td> <td> <textarea class="r-area" sub-name="intro" text-limit text-max="100">', 
            $out += $escape($value.intro), $out += "</textarea> </td> </tr> </table> </div> ";
        }), $out += " </div> -->", new String($out);
    });
});
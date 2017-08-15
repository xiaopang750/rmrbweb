/*TMODJS:{"version":2,"md5":"3bce4743ac338c8ef947f0da9e2dc963"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_form/flow4", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, word = $data.word, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="380" class="table nohover noline"> <tr> <td class="tr" width="100"> 背景图片： </td> <td r-upload-wrap sub-wrap name="bg" class="clearfix"> <span sub-list> <input type="text" class="form-control col-xs-8 fl" value="', 
        $out += $escape(bg), $out += '" r-upload-url> <input type="hidden" value="', $out += $escape(bg), 
        $out += '" sub-name="bg" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> <tr sub-wrap name="word"> <td class="tr"> 会务组内容： </td> <td sub-list> <textarea sub-name="word" class="editor" style="width:270px">', 
        $out += $escape(word), $out += "</textarea> </td> </tr> </table> ", new String($out);
    });
});
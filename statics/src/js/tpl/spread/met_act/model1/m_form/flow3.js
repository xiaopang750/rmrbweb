/*TMODJS:{"version":3,"md5":"71f0be30353f4629d8cd6669fb27555d"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_form/flow3", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $each = $utils.$each, List = $data.List, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="380" sub-wrap name="bg" class="table nohover noline"> <tr> <td class="tr" width="100"> 背景图片： </td> <td r-upload-wrap class="clearfix"> <span sub-list> <input type="text" class="form-control col-xs-8 fl" value="', 
        $out += $escape(bg), $out += '" r-upload-url> <input type="hidden" value="', $out += $escape(bg), 
        $out += '" sub-name="bg" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> </table> <div sub-wrap name="List" form-list-wrap> ', 
        $each(List, function($value, $index) {
            $out += ' <div widget-role="tab-content" ', 0 != $index && ($out += 'class="none"'), 
            $out += '> <table cellpadding="0" cellspacing="0" border="0" width="100%" sub-list name="test" class="table nohover noline"> <tr> <td class="tr" width="100"> 嘉宾姓名： </td> <td> <input type="text" class="form-control" value="', 
            $out += $escape($value.name), $out += '" sub-name="name" text-limit text-max="10"> </td> </tr> <tr> <td class="tr"> 嘉宾头像： </td> <td r-upload-wrap class="clearfix"> <input type="text" class="form-control col-xs-8 fl" value="', 
            $out += $escape($value.headPic), $out += '" r-upload-url> <input type="hidden" value="', 
            $out += $escape($value.headPic), $out += '" sub-name="headPic" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn iscut="true" w="30" h="30" min="320">选择图片</a> </td> </tr> <tr> <td class="tr"> 嘉宾介绍： </td> <td> <textarea class="form-control h-mid" sub-name="intro" text-limit text-max="100">', 
            $out += $escape($value.intro), $out += "</textarea> </td> </tr> </table> </div> ";
        }), $out += " </div>", new String($out);
    });
});
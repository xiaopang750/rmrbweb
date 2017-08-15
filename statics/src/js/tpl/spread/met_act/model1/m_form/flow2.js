/*TMODJS:{"version":3,"md5":"ca43055965cc18a610a79a65183325bf"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_form/flow2", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $each = $utils.$each, List = $data.List, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="380" sub-wrap name="bg" class="table nohover noline"> <tr> <td class="tr" width="100"> 背景图片： </td> <td r-upload-wrap class="clearfix"> <span sub-list> <input type="text" class="form-control col-xs-8 fl" value="', 
        $out += $escape(bg), $out += '" r-upload-url> <input type="hidden" value="', $out += $escape(bg), 
        $out += '" sub-name="bg" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> </table> <div sub-wrap name="List" form-list-wrap> ', 
        $each(List, function($value, $index) {
            $out += ' <div widget-role="tab-content" ', 0 != $index && ($out += 'class="none"'), 
            $out += '> <table cellpadding="0" cellspacing="0" border="0" width="380" sub-list name="test" class="table nohover noline"> <tr> <td class="tr" width="100"> 日期： </td> <td> <input type="text" class="form-control" value="', 
            $out += $escape($value.date), $out += '" sub-name="date" readonly="readonly"> </td> </tr> <tr> <td class="tr"> 日程安排： </td> <td> <input type="text" class="form-control" value="', 
            $out += $escape($value.plane), $out += '" sub-name="plane" text-limit text-max="15"> </td> </tr> <!-- <tr> <td class="tr"> 日程详细图： </td> <td r-upload-wrap class="clearfix"> <span> <input type="text" class="form-control col-xs-8 fl" value="', 
            $out += $escape($value.detailPic), $out += '" r-upload-url> <input type="hidden" value="', 
            $out += $escape($value.detailPic), $out += '" sub-name="detailPic" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> --> </table> </div> ';
        }), $out += " </div>", new String($out);
    });
});
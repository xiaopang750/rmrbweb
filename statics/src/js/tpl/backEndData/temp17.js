/*TMODJS:{"version":1,"md5":"55e6aa954960ff6c1deca7f91ae32303"}*/
define(function(require) {
    return require("../templates")("backEndData/temp17", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), results = $data.results, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = ($data.value2, $data.index2, "");
        return $out += '<div tab-inner-wrap-level> <div class="mb-10 tl"> ', $each(results, function($value, $index) {
            $out += ' <a class="btn btn-default ', 0 == $index && ($out += "active"), $out += '" href="javascript:;" widget-tab-head-inner-level>', 
            $out += $escape($value.channel), $out += "</a> ";
        }), $out += " </div> ", $each(results, function($value, $index) {
            $out += ' <div widget-tab-content-inner-level class="', 0 != $index && ($out += "none"), 
            $out += '"> <table class="table striped mb-50" width="100%"> <thead> <tr> <td colspan="4">', 
            $out += $escape($value.channel), $out += "</td> </tr> <tr> <td>活动类型</td>  <td>互动评论量</td> <td>会员参与量</td> </tr> </thead> <tbody> ", 
            $value.results.length ? ($out += " ", $each($value.results, function(value2) {
                $out += " <tr> <td> ", $out += $escape(value2.typeName), $out += " </td> <!-- <td> ", 
                $out += $escape(value2.readNum), $out += " </td> --> <td> ", $out += $escape(value2.reviewNum), 
                $out += " </td> <td> ", $out += $escape(value2.cyNum), $out += " </td> </tr> ";
            }), $out += " ") : $out += ' <tr> <td colspan="3"> 暂无数据 </td> </tr> ', $out += " </tbody> </table> </div> ";
        }), $out += " </div>", new String($out);
    });
});
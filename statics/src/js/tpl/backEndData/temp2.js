/*TMODJS:{"version":2,"md5":"af123467e44b8789adc429673dfdd1aa"}*/
define(function(require) {
    return require("../templates")("backEndData/temp2", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), countResult = $data.countResult, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = ($data.value2, $data.index2, "");
        return $out += '<div tab-inner-wrap> <div class="mb-10"> ', $each(countResult, function($value, $index) {
            $out += ' <a class="btn btn-default ', 0 == $index && ($out += "active"), $out += '" href="javascript:;" widget-tab-head-inner>', 
            $out += $escape($value.channel), $out += "</a> ";
        }), $out += " </div> ", $each(countResult, function($value, $index) {
            $out += ' <div widget-tab-content-inner class="', 0 != $index && ($out += "none"), 
            $out += '"> <table class="table striped mb-50" width="100%"> <thead> <tr> <td colspan="2"> ', 
            $out += $escape($value.channel), $out += "(总数：", $out += $escape($value.totle ? $value.totle : 0), 
            $out += ') </td> </tr> <tr> <td width="50%">关注时间</td> <td width="50%">会员关注数</td> </tr> </thead> <tbody> ', 
            $each($value.results, function(value2) {
                $out += " <tr> <td>", $out += $escape(value2.dt), $out += "</td> <td>", $out += $escape(value2.num), 
                $out += "</td> </tr> ";
            }), $out += " </tbody> </table> </div> ";
        }), $out += " </div> ", new String($out);
    });
});
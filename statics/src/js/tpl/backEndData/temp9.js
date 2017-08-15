/*TMODJS:{"version":1,"md5":"58c3837c9c5fcaa3caa526f76c758b3d"}*/
define(function(require) {
    return require("../templates")("backEndData/temp9", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), results = $data.results, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = ($data.value2, $data.index2, "");
        return $out += '<div tab-inner-wrap> <div class="mb-10"> ', $each(results, function($value, $index) {
            $out += ' <a class="btn btn-default ', 0 == $index && ($out += "active"), $out += '" href="javascript:;" widget-tab-head-inner>', 
            $out += $escape($value.type), $out += "</a> ";
        }), $out += " </div> ", $each(results, function($value, $index) {
            $out += ' <table class="table striped mb-50 ', 0 != $index && ($out += "none"), 
            $out += '" width="100%" widget-tab-content-inner> <thead> <tr> <td colspan="4">', 
            $out += $escape($value.type), $out += "&nbsp;&nbsp;会员总数:", $out += $escape($value.memAddNum), 
            $out += "</td> </tr> <tr> <td>活动类型</td> <td>活动阅读量</td> <td>活动分享量</td> <td>活动会员参与量</td> </tr> </thead> <tbody> ", 
            $value.results.length ? ($out += " ", $each($value.results, function(value2) {
                $out += " <tr> <td> ", $out += $escape(value2.typeName), $out += " </td> <td> ", 
                "微信" == $value.type ? ($out += " ", $out += $escape(value2.readNumWx), $out += " ") : ($out += " ", 
                $out += $escape(value2.readNumWb), $out += " "), $out += " </td> <td> ", $out += $escape(value2.fxNum), 
                $out += " </td> <td> ", $out += $escape(value2.cyNum), $out += " </td> </tr> ";
            }), $out += " ") : $out += ' <tr> <td colspan="4"> 暂无数据 </td> </tr> ', $out += " </tbody> </table> ";
        }), $out += " </div>", new String($out);
    });
});
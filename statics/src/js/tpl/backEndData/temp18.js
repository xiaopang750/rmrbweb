/*TMODJS:{"version":1,"md5":"efc6c10f59d5674f3fada6a46a9601cd"}*/
define(function(require) {
    return require("../templates")("backEndData/temp18", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), results = $data.results, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = ($data.value2, $data.index2, "");
        return $out += '<div tab-inner-wrap> <div class="mb-10"> ', $each(results, function($value, $index) {
            $out += ' <a class="btn btn-default ', 0 == $index && ($out += "active"), $out += '" href="javascript:;" widget-tab-head-inner>', 
            $out += $escape($value.channel), $out += "</a> ";
        }), $out += " </div> ", $each(results, function($value, $index) {
            $out += ' <div widget-tab-content-inner class="', 0 != $index && ($out += "none"), 
            $out += '"> <table class="table striped mb-50" width="100%"> <thead> <tr> <td colspan="4">', 
            $out += $escape($value.channel), $out += "</td> </tr> <tr> <td>日期</td> <td>积分总量</td> <td>积分增量</td> <td>积分兑换量</td> </tr> </thead> <tbody> ", 
            $value.results.length ? ($out += " ", $each($value.results, function(value2) {
                $out += " <tr> <td> ", $out += $escape(value2.dt), $out += " </td> <td> ", $out += $escape(value2.allnum), 
                $out += " </td> <td> ", $out += $escape(value2.addnum), $out += " </td> <td> ", 
                $out += $escape(value2.reducenum), $out += " </td> </tr> ";
            }), $out += " ") : $out += ' <tr> <td colspan="4"> 暂无数据 </td> </tr> ', $out += " </tbody> </table> </div> ";
        }), $out += " </div>", new String($out);
    });
});
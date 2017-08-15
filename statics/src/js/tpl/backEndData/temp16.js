/*TMODJS:{"version":1,"md5":"8433401ac674001fd481b001e6136a8c"}*/
define(function(require) {
    return require("../templates")("backEndData/temp16", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), results = $data.results, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = ($data.value2, $data.index2, "");
        return $out += '<div tab-inner-wrap> <div class="mb-10"> ', $each(results, function($value, $index) {
            $out += ' <a class="btn btn-default ', 0 == $index && ($out += "active"), $out += '" href="javascript:;" widget-tab-head-inner>', 
            $out += $escape($value.channel), $out += "</a> ";
        }), $out += " </div> ", $each(results, function($value, $index) {
            $out += ' <div widget-tab-content-inner class="', 0 != $index && ($out += "none"), 
            $out += '"> <table class="table striped mb-50" width="100%"> <thead> <tr> <td colspan="4">', 
            $out += $escape($value.channel), $out += "</td> </tr> <tr> <td>会员级别</td>  <td>参与互动评论量</td> <td>活动会员参与量</td> </tr> </thead> <tbody> ", 
            $value.results.length ? ($out += " ", $each($value.results, function(value2) {
                $out += " <tr> <td> ", $out += $escape(value2.levelName), $out += " </td> <!-- <td> ", 
                $out += $escape(value2.readNum), $out += " </td> --> <td> ", $out += $escape(value2.reviewNum), 
                $out += " </td> <td> ", $out += $escape(value2.cyNum), $out += " </td> </tr> ";
            }), $out += " ") : $out += ' <tr> <td colspan="3"> 暂无数据 </td> </tr> ', $out += " </tbody> </table> </div> ";
        }), $out += " </div>", new String($out);
    });
});
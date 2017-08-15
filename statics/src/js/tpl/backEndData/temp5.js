/*TMODJS:{"version":3,"md5":"c1351d2d78f0afe501d885371de05b28"}*/
define(function(require) {
    return require("../templates")("backEndData/temp5", function($data) {
        "use strict";
        var $utils = this, results = ($utils.$helpers, $data.results), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<table class="table striped" width="100%"> <thead> <tr> <td>渠道名称</td> <td>活动阅读数</td> <td>活动分享数</td> <td>活动会员参与数</td> <td>会员增量</td> </tr> </thead> <tbody> ', 
        results.length ? ($out += " ", $each(results, function($value) {
            $out += " <tr> <td>", $out += $escape($value.channel), $out += "</td> <td>", $out += $escape($value.accessnum), 
            $out += "</td> <td>", $out += $escape($value.fxnum), $out += "</td> <td>", $out += $escape($value.mempartnum), 
            $out += "</td> <td>", $out += $escape($value.memberAddNum), $out += "</td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="5"> 暂无数据 </td> </tr> ', $out += " </tbody> </table>", 
        new String($out);
    });
});
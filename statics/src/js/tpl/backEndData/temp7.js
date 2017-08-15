/*TMODJS:{"version":1,"md5":"9fdafeb9046a96ef159ea259606ee75c"}*/
define(function(require) {
    return require("../templates")("backEndData/temp7", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), results = $data.results, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<table class="table striped" width="100%"> <thead> <tr> <td>渠道</td> <td>活动阅读量</td> <td>活动分享量</td> <td>活动会员参与量</td> <td>会员增量</td> </tr> </thead> <tbody> ', 
        $each(results, function($value) {
            $out += " <tr> <td>", $out += $escape($value.channel), $out += "</td> <td>", $out += $escape($value.accessnum), 
            $out += "</td> <td>", $out += $escape($value.fxnum), $out += "</td> <td>", $out += $escape($value.mempartnum), 
            $out += "</td> <td>", $out += $escape($value.memberAddNum), $out += "</td> </tr> ";
        }), $out += " </tbody> </table>", new String($out);
    });
});
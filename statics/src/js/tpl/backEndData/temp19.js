/*TMODJS:{"version":1,"md5":"da720ce87ff6ece87eaaecafeb34efd5"}*/
define(function(require) {
    return require("../templates")("backEndData/temp19", function($data) {
        "use strict";
        var $utils = this, results = ($utils.$helpers, $data.results), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <table class="table striped mb-50" width="100%"> <thead> <tr> <td>日期</td> <td>报名积分</td> <td>签到积分</td> <td>分享积分</td> </tr> </thead> <tbody> ', 
        results.length ? ($out += " ", $each(results, function($value) {
            $out += " <tr> <td> ", $out += $escape($value.dt), $out += " </td> <td> ", $out += $escape($value.signUpNum), 
            $out += " </td> <td> ", $out += $escape($value.signInNum), $out += " </td> <td> ", 
            $out += $escape($value.browseNum), $out += " </td> </tr> ";
        }), $out += " ") : $out += ' <tr> <td colspan="4"> 暂无数据 </td> </tr> ', $out += " </tbody> </table> ", 
        new String($out);
    });
});
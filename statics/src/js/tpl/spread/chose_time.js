/*TMODJS:{"version":1,"md5":"d568af1d499a884e60dfa307cf54ebc3"}*/
define(function(require) {
    return require("../templates")("spread/chose_time", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), OverdueStatus = $data.OverdueStatus, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<div class="clearfix"> <span class="mr-5 fl">根据时间筛选：</span> ', $each(OverdueStatus, function($value, $index) {
            $out += ' <span> <span class="mr-10"> <input type="radio" class="mr-5" status="', 
            $out += $escape($value.isOverdue), $out += '" name="status" ', "Y" == $value.isCheck && ($out += 'checked="checked"'), 
            $out += ' index="', $out += $escape($index), $out += '" time-status> <span class="mt-5">', 
            $out += $escape($value.statusName), $out += "</span> </span> </span> ";
        }), $out += " </div>", new String($out);
    });
});
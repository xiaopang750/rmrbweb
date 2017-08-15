/*TMODJS:{"version":1,"md5":"84110061ba36813da57a940e06b5aee9"}*/
define(function(require) {
    return require("../templates")("spread/chose_status", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), activityStauts = $data.activityStauts, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<div class="clearfix"> <span class="mr-5 fl">根据状态筛选：</span> ', $each(activityStauts, function($value, $index) {
            $out += ' <span> <span class="mr-10"> <input type="checkbox" class="mr-5" status="', 
            $out += $escape($value.statusCode), $out += '" name="status" ', "Y" == $value.isCheck && ($out += 'checked="checked"'), 
            $out += ' index="', $out += $escape($index), $out += '"> <span class="mt-5 ', "新建" == $value.statusName ? $out += "red" : "等待推送" == $value.statusName ? $out += "blue" : "进行中" == $value.statusName && ($out += "yellow"), 
            $out += '">', $out += $escape($value.statusName), $out += "</span> </span> </span> ";
        }), $out += " </div>", new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"6c5e28ba0b206734fc40f562924c28dd"}*/
define(function(require) {
    return require("../../../templates")("spread/gift/pic_text/view", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), muliInfos = $data.muliInfos, iNow = ($data.$value, 
        $data.$index, $data.iNow), $escape = $utils.$escape, actType = $data.actType, $out = "";
        return $out += " ", $each(muliInfos, function($value, $index) {
            $out += ' <div class="list-view b-r font-14 ', $index == iNow && ($out += "active"), 
            $out += '" widget-role="tab-head" aid=', $out += $escape($index), $out += '> <a href="javascript:;" class="font-18 remove ', 
            0 == $index && ($out += "none"), $out += '" remove aid="', $out += $escape($value.pkInfo), 
            $out += '">x</a> <h3 class="mb-10 font-14">', $out += $escape($value.subject), $out += '</h3> <img class="mb-10" src="', 
            $out += $escape($value.picurl), $out += '" width="100%"> <p class="mb-10"> ', $out += "001" == actType ? " 提示信息 " : " 摘要 ", 
            $out += ' </p> <div class="text lineH-23"> ', $out += $escape($value.activityAbstract), 
            $out += " </div> </div> ";
        }), $out += " ", new String($out);
    });
});
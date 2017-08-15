/*TMODJS:{"version":1,"md5":"bd6edb5d047d82a100a32068c434fc07"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_view/flow2", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $each = $utils.$each, List = $data.List, iNow = ($data.$value, 
        $data.$index, $data.iNow), $out = "";
        return $out += ' <img src="', $out += $escape(bg), $out += '" class="bg" width="234" height="392" data-ele="bg"> <div class="cover"> <div class="line"></div> <ul class="m-l" view-list-wrap> ', 
        $each(List, function($value, $index) {
            $out += ' <li widget-role="tab-head" class="rel ', $index == iNow && ($out += "active"), 
            $out += '"> <span remove class="remove-list ', 0 == $index && ($out += "none"), 
            $out += '">×</span> <dl> <dt> <div class="ml-5 pt-7"> <p clear>', $out += $escape($value.date), 
            $out += '</p> </div> </dt> <dd class="tc"> <p class="pt-5" clear>', $out += $escape($value.plane), 
            $out += "</p> </dd> </dl> </li> ";
        }), $out += ' <li data-ele="ele-add" class="tc" list-add> <span class="r-btn mobile-list-add mt-25 mb-5"></span> </li> </ul> </div>', 
        new String($out);
    });
});
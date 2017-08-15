/*TMODJS:{"version":1,"md5":"1094c8b3eeae3a349c48d07e931ea5d6"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_view/flow3", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $each = $utils.$each, List = $data.List, iNow = ($data.$value, 
        $data.$index, $data.iNow), $out = "";
        return $out += ' <img src="', $out += $escape(bg), $out += '" class="bg" width="234" height="392" data-ele="bg"> <div class="cover"> <div class="line"></div> <ul view-list-wrap> ', 
        $each(List, function($value, $index) {
            $out += ' <li widget-role="tab-head" class="', $index == iNow && ($out += "active"), 
            $out += '"> <dl class="clearfix"> <dt class="rel"> <span remove class="remove-list ', 
            0 == $index && ($out += "none"), $out += '">×</span> <img src="', $out += $escape($value.headPic), 
            $out += '"> </dt> <dd> ', $out += $escape($value.name), $out += " </dd> </dl> </li> ";
        }), $out += ' <li data-ele="ele-add" class="tc ele-add" list-add> <span class="r-btn mobile-list-add mt-25 mb-5"></span> </li> </ul> </div>', 
        new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"30f459d3934982ffdc9cf7b7ea7043c5"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_view/flow5", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $string = $utils.$string, word = $data.word, $each = $utils.$each, List = $data.List, iNow = ($data.$value, 
        $data.$index, $data.iNow), $out = "";
        return $out += ' <img src="', $out += $escape(bg), $out += '" class="bg" width="234" height="392" data-ele="bg"> <div class="cover mt-30"> ', 
        $out += $string(word), $out += ' <!-- <h3 class="tc red bold font-14 mb-10">', $out += $escape(word), 
        $out += '</h3> --> <!-- <div class="add-wrap"> <ul class="clearfix" view-list-wrap> ', 
        $each(List, function($value, $index) {
            $out += ' <li widget-role="tab-head" class="rel ', $index == iNow && ($out += "active"), 
            $out += '"> <span remove class="remove-list ', 0 == $index && ($out += "none"), 
            $out += '">×</span> <img src="', $out += $escape($value.logo), $out += '" width="88" height="32"> </li> ';
        }), $out += ' <li data-ele="ele-add" class="tc ele-add" list-add style="width:90%"> <span class="r-btn mobile-list-add mt-25 mb-5"></span> <br> <span>添加赞助商</span> </li> </ul> </div> --> </div>', 
        new String($out);
    });
});
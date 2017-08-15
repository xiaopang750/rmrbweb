/*TMODJS:{"version":1,"md5":"42c2fef3834bb3a5bdae269a0acfffae"}*/
define(function(require) {
    return require("../../templates")("spread/met_act/nav_list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), nav = $data.nav, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $each(nav, function($value, $index) {
            $out += ' <li> <a href="#" head-flow="', $out += $escape($value.name), $out += '"> <span class="r-icon met-head" head-flow-num>', 
            $out += $escape($index + 1), $out += "</span> <span>", $out += $escape($value.name), 
            $out += "</span> </a> </li> ";
        }), new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"c92877b75a8582b1d42810484bbce477"}*/
define(function(require) {
    return require("../../templates")("box/upload/manage_list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), pics = $data.pics, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", $each(pics, function($value) {
            $out += ' <li data-ele="manage-list" url="', $out += $escape($value.storeUrl), $out += '" name="', 
            $out += $escape($value.standy4), $out += '"> <img src="', $out += $escape($value.standy3), 
            $out += '" update-image _src="', $out += $escape($value.standy3), $out += '"> </li> ';
        }), new String($out);
    });
});
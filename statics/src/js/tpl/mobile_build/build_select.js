/*TMODJS:{"version":1,"md5":"13f287d77929ac80844ab2c60642e3c1"}*/
define(function(require) {
    return require("../templates")("mobile_build/build_select", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), profession = $data.profession, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<option value="" id="">请选择</option> ', $each(profession, function($value) {
            $out += ' <option value="', $out += $escape($value.dataName), $out += '" id="', 
            $out += $escape($value.pkDictionarySub), $out += '">', $out += $escape($value.dataName), 
            $out += "</option> ";
        }), new String($out);
    });
});
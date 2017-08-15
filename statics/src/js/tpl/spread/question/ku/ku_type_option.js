/*TMODJS:{"version":1,"md5":"aefdddeaf4805eba5793a3a74350f448"}*/
define(function(require) {
    return require("../../../templates")("spread/question/ku/ku_type_option", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), datas = $data.datas, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $each(datas, function($value) {
            $out += ' <option value="', $out += $escape($value.pkDictionarySub), $out += '">', 
            $out += $escape($value.dataName), $out += "</option> ";
        }), new String($out);
    });
});
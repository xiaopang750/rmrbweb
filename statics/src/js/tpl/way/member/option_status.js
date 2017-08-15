/*TMODJS:{"version":1,"md5":"6ba2cbec40a31c6f6f34026cea787ed1"}*/
define(function(require) {
    return require("../../templates")("way/member/option_status", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), status = $data.status, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $each(status, function($value) {
            $out += ' <option value="', $out += $escape($value.code), $out += '">', $out += $escape($value.name), 
            $out += "</option> ";
        }), new String($out);
    });
});
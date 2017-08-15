/*TMODJS:{"version":1,"md5":"f1cc46e46343d4c90ff8373a152e2824"}*/
define(function(require) {
    return require("../templates")("index/test", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), data = $data.data, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $each(data.list, function($value) {
            $out += " <li>", $out += $escape($value), $out += "</li> ";
        }), new String($out);
    });
});
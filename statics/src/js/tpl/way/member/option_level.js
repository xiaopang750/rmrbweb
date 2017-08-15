/*TMODJS:{"version":1,"md5":"5d0e1a3789a466cf28b3f90025f36ac4"}*/
define(function(require) {
    return require("../../templates")("way/member/option_level", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), mLevels = $data.mLevels, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $each(mLevels, function($value) {
            $out += ' <option value="', $out += $escape($value.pkMemberlevel), $out += '">', 
            $out += $escape($value.levelname), $out += "</option> ";
        }), new String($out);
    });
});
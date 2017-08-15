/*TMODJS:{"version":1,"md5":"6468845dfe56cf8ee71e66cd83705793"}*/
define(function(require) {
    return require("../../../templates")("spread/question/form/option1", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), options = $data.options, $escape = ($data.$value, 
        $data.$index, $utils.$escape), questiontype = $data.questiontype, nowPage = $data.nowPage, $out = "";
        return $out += " ", $each(options, function($value) {
            $out += ' <li class="clearfix mb-10" aid="', $out += $escape($value.pkSelect), $out += '" change-list> <span class="fl mr-5"> <input type="', 
            $out += "radio" == questiontype ? "radio" : "checkbox", $out += '" option-type name="test" disabled="disabled"> </span> <span class="fl" option-name q-edit q-text-max="20" edit-type="option" org="', 
            $out += $escape($value.contents), $out += '" aid="', $out += $escape($value.pkSelect), 
            $out += '"> ', $out += $escape(nowPage), $out += " </span> </li> ";
        }), new String($out);
    });
});
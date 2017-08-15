/*TMODJS:{"version":1,"md5":"13bf85953023f629cc0e6af50d1405c0"}*/
define(function(require) {
    return require("../../../templates")("spread/question/form/option", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), options = $data.options, $escape = ($data.$value, 
        $data.$index, $utils.$escape), questiontype = $data.questiontype, $out = "";
        return $out += " ", $each(options, function($value) {
            $out += ' <li class="clearfix mb-10" aid="', $out += $escape($value.pkSelect), $out += '" change-list> <span class="fl mr-5"> <input type="', 
            $out += $escape(questiontype), $out += '" option-type name="test" disabled="disabled"> </span> <span class="fl" option-name q-edit q-text-max="20" edit-type="option" org="', 
            $out += $escape($value.content), $out += '" aid="', $out += $escape($value.pkSelect), 
            $out += '"> ', $out += $escape($value.content), $out += " </span> </li> ";
        }), new String($out);
    });
});
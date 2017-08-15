/*TMODJS:{"version":1,"md5":"449de9d596367092d98f2e73a52fd4cf"}*/
define(function(require) {
    return require("../../../templates")("spread/question/form/question", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), questionname = $data.questionname, $each = $utils.$each, options = $data.options, $out = ($data.$value, 
        $data.$index, "");
        return $out += '<h3 class="mb-20">', $out += $escape(questionname), $out += "</h3> <ul> ", 
        $each(options, function($value) {
            $out += ' <li> <input type="radio" name="test" disabled="disabled"> <span>', $out += $escape($value.content), 
            $out += "</span> </li> ";
        }), $out += " </ul>", new String($out);
    });
});
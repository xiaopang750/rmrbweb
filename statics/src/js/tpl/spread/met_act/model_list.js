/*TMODJS:{"version":1,"md5":"b9d15e96dfc4eff4f06a3baec087c625"}*/
define(function(require) {
    return require("../../templates")("spread/met_act/model_list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), model = $data.model, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", $each(model, function($value) {
            $out += ' <div class="mobile-view-wrap fl" data-ele="select-type" typer="', $out += $escape($value.name), 
            $out += '"> <img src="', $out += $escape($value.pic), $out += '" class="view-img" width="234" height="399"> <span class="r-btn mobile-select-btn" data-ele="select-btn"></span> </div> ';
        }), new String($out);
    });
});
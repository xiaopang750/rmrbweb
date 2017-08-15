/*TMODJS:{"version":1,"md5":"c9faa4a5cce564a9cce3ae7b1d052030"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_view/flow6", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $each = $utils.$each, List = $data.List, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <img src="', $out += $escape(bg), $out += '" class="bg" width="234" height="392" data-ele="bg"> <div class="cover"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover noline"> <tr> <td colspan="2">欢迎报名</td> </tr> ', 
        $each(List, function($value) {
            $out += " ", "0" == $value.isChecked && ($out += ' <tr> <td class="tr pb-20" width="50">', 
            $out += $escape($value.name), $out += '：</td> <td class="pb-20"> <input type="', 
            $out += $escape($value.type), $out += '" class="form-control" disabled="disabled"> </td> </tr> '), 
            $out += " ";
        }), $out += " </table> </div>", new String($out);
    });
});
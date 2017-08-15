/*TMODJS:{"version":1,"md5":"331e730cdc6b3471fa002df038647f6c"}*/
define(function(require) {
    return require("../../templates")("spread/public/qcode_list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), qrCodes = $data.qrCodes, $escape = ($data.$value, 
        $data.$index, $utils.$escape), promptMsg = $data.promptMsg, $out = "";
        return $out += '<ul class="mb-20 clearfix"> ', $each(qrCodes, function($value) {
            $out += " ", $value.picUrl && ($out += ' <li> <dl> <dt> <img src="', $out += $escape($value.picUrl), 
            $out += '"> </dt> <dd>', $out += $escape($value.accountName), $out += "</dd> </dl> </li> "), 
            $out += " ";
        }), $out += " </ul> <p>", $out += $escape(promptMsg), $out += "</p>", new String($out);
    });
});
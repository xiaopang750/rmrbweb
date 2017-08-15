/*TMODJS:{"version":1,"md5":"93c4eea7ae537d88a42bdbcc765443dd"}*/
define(function(require) {
    return require("../../templates")("mobile_view/main/type2", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), content = $data.content, $each = $utils.$each, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <div class="main-type2"> <div class="mobile-view-inner">  <div class="mobile-lead"></div>  <div class="mobile-head clearfix" data-ele="cd-test" data-name="', 
        $out += $escape(content.logo.modelName), $out += '"> <img src="', $out += $escape(content.logo.modelData.logoUrl), 
        $out += '" width="232" height="28"> </div>  <div class="mobile-banner" data-ele="cd-test" data-name="', 
        $out += $escape(content.point.modelName), $out += '"> <ul class="clearfix"> ', $each(content.point.modelData, function($value) {
            $out += ' <li> <img src="', $out += $escape($value.imgUrl), $out += '"> </li> ';
        }), $out += ' </ul> </div>  <div class="mobile-list" data-ele="cd-test" data-name="', 
        $out += $escape(content.modelars.modelName), $out += '"> <ul class="clearfix"> ', 
        $each(content.modelars.modelData, function($value) {
            $out += ' <li> <div class="module tc"> <table cellpadding="0" cellspacing="0" border="0" width="100%"> <tr> <td height="60" class="pt-2"> ', 
            $value.iconBgUrl && ($out += ' <img src="', $out += $escape($value.iconBgUrl), $out += '" width="30" class="block auto"> '), 
            $out += " <p>", $out += $escape($value.modelName), $out += "</p> </td> </tr> </table> </div> </li> ";
        }), $out += " </ul> </div> </div> </div>", new String($out);
    });
});
/*TMODJS:{"version":3,"md5":"2e292c895eb67cd70863c15f5b203fb1"}*/
define(function(require) {
    return require("../../templates")("mobile_view/main/type1", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), content = $data.content, $each = $utils.$each, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <div class="main-type1"> <div class="mobile-view-inner">  <div class="mobile-lead"></div> <div id="mobile-view"> <div>  <div class="mobile-head clearfix" data-ele="cd-test" data-name="', 
        $out += $escape(content.logo.modelName), $out += '"> <img src="', $out += $escape(content.logo.modelData.logoUrl), 
        $out += '" width="232" height="28"> </div>  <div class="mobile-nav" data-ele="cd-test" data-name="', 
        $out += $escape(content.textNav.modelName), $out += '"> <ul class="clearfix"> ', 
        $each(content.textNav.modelData, function($value) {
            $out += ' <li style="background:', $out += $escape($value.labelColor), $out += '"> <span style="color:', 
            $out += $escape($value.fontColor), $out += '">', $out += $escape($value.textName), 
            $out += "</span> </li> ";
        }), $out += ' </ul> </div>  <div class="mobile-banner" data-ele="cd-test" data-name="', 
        $out += $escape(content.point.modelName), $out += '"> <ul class="clearfix"> ', $each(content.point.modelData, function($value) {
            $out += ' <li> <img src="', $out += $escape($value.imgUrl), $out += '"> </li> ';
        }), $out += ' </ul> </div>  <div class="mobile-add" data-ele="cd-test" data-name="', 
        $out += $escape(content.textAdv.modelName), $out += '"> <div class="ml-7 mt-5"> <h2 class="font_14 bold" style="color:', 
        $out += $escape(content.textAdv.modelData.mainFontColor), $out += '">', $out += $escape(content.textAdv.modelData.mainTitle), 
        $out += '</h2> <h3 style="color:', $out += $escape(content.textAdv.modelData.subFontColor), 
        $out += '">', $out += $escape(content.textAdv.modelData.subTitle), $out += '</h3> </div> </div>  <div class="mobile-list" data-ele="cd-test" data-name="', 
        $out += $escape(content.modelars.modelName), $out += '"> <ul> ', $each(content.modelars.modelData, function($value) {
            $out += ' <li> <span style="color:', $out += $escape($value.fontColor), $out += '">', 
            $out += $escape($value.modelName), $out += "</span> </li> ";
        }), $out += " </ul> </div> </div> </div> </div> </div>", new String($out);
    });
});
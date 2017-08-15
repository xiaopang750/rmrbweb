/*TMODJS:{"version":11,"md5":"8c745f90a26aee1ef65c3c8ad4f49106"}*/
define(function(require) {
    return require("../../templates")("mobile_view/sub/type2", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), content = $data.content, $each = $utils.$each, $out = ($data.$value, 
        $data.$index, "");
        return $out += '<div class="sub-type2"> <div class="mobile-view-inner"> <img src="', 
        $out += $escape(content.bgImg.modelData.bgImgUrl), $out += '" class="bg-img">  <div class="mobile-lead"></div>  ', 
        "undefined" != typeof content.textNav && ($out += ' <div class="mobile-nav"> <ul class="clearfix"> ', 
        $each(content.textNav.modelData, function($value) {
            $out += ' <li style="background:', $out += $escape($value.labelColor), $out += '"> <span style="color:', 
            $out += $escape($value.fontColor), $out += '">', $out += $escape($value.textName), 
            $out += "</span> </li> ";
        }), $out += " </ul> </div> "), $out += ' <div class="mobile-list mt-10"> <ul> ', 
        $each(content.modelars.modelData, function($value, $index) {
            $out += ' <li data-name="module', $out += $escape($index), $out += '"> <span class="r-icon mobile-dec2"></span> <dl class="clearfix"> <dt class="mb-5 fl ml-5 mr-5"> <img src="', 
            $out += $escape($value.iconBgUrl), $out += '" width="60" height="24" class="fl mt-6"> </dt> <dd class="fl"> <h2 class="mb-5 bold" style="color:', 
            $out += $escape($value.mainFontColor), $out += '">', $out += $escape($value.mainTitle), 
            $out += "</h2> </dd> </dl> </li> ";
        }), $out += " </ul> </div> </div> </div>", new String($out);
    });
});
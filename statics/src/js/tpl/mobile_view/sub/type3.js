/*TMODJS:{"version":3,"md5":"1df758c2240c9c64eef93d862f5ae3bf"}*/
define(function(require) {
    return require("../../templates")("mobile_view/sub/type3", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $escape = $utils.$escape, content = $data.content, $each = $utils.$each, $string = ($data.$value, 
        $data.$index, $utils.$string), cut = $helpers.cut, $out = "";
        return $out += '<div class="sub-type1"> <div class="mobile-view-inner"> <img src="', 
        $out += $escape(content.bgImg.modelData.bgImgUrl), $out += '" class="bg-img">  <div class="mobile-lead"></div>  ', 
        "undefined" != typeof content.textNav && ($out += ' <div class="mobile-nav"> <ul class="clearfix"> ', 
        $each(content.textNav.modelData, function($value) {
            $out += ' <li style="background:', $out += $escape($value.labelColor), $out += '"> <span style="color:', 
            $out += $escape($value.fontColor), $out += '">', $out += $escape($value.textName), 
            $out += "</span> </li> ";
        }), $out += " </ul> </div> "), $out += ' <div class="mobile-list mt-10"> <ul class="clearfix"> ', 
        $each(content.modelars.modelData, function($value, $index) {
            $out += " <li ", 0 == $index % 2 && ($out += 'class="b-r-n"'), $out += ' data-name="module', 
            $out += $escape($index), $out += '"> <span class="r-icon mobile-dec"></span> <dl> <dt class="mb-5"> <img src="', 
            $out += $escape($value.iconBgUrl), $out += '" alt="" width="90" class="fl"> </dt> <dd> <h2 class="mb-5 bold" style="color:', 
            $out += $escape($value.mainFontColor), $out += '">', $out += $escape($value.mainTitle), 
            $out += '</h2> <p style="color:', $out += $escape($value.intorFontColor), $out += '"> ', 
            $out += $string(cut($value.intro, 10)), $out += " </p> </dd> </dl> </li> ";
        }), $out += " </ul> </div> </div> </div>", new String($out);
    });
});
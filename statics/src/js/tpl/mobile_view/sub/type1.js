/*TMODJS:{"version":3,"md5":"32a167069e1342bcc142e2826e55abab"}*/
define(function(require) {
    return require("../../templates")("mobile_view/sub/type1", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, content = $data.content, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, xss = $helpers.xss, $out = "";
        return $out += '<div class="sub-type3"> <div class="mobile-view-inner">  <div class="mobile-lead"></div>  ', 
        "undefined" != typeof content.textNav && ($out += ' <div class="mobile-nav"> <ul class="clearfix"> ', 
        $each(content.textNav.modelData, function($value) {
            $out += ' <li style="background:', $out += $escape($value.labelColor), $out += '"> <span style="color:', 
            $out += $escape($value.fontColor), $out += '">', $out += $escape($value.textName), 
            $out += "</span> </li> ";
        }), $out += " </ul> </div> "), $out += ' <div class="banner mb-20"> <img src="', 
        $out += $escape(content.modelars.modelData[0].iconBgUrl), $out += '" width="232"> </div> <div class="content"> <div class="inner"> <h3 class="tc bold" style="color:', 
        $out += $escape(content.modelars.modelData[0].mainFontColor), $out += '">', $out += $escape(content.modelars.modelData[0].mainTitle), 
        $out += '</h3> </div> <div class="main"> ', $out += $string(xss(content.modelars.modelData[0].intro)), 
        $out += " </div> </div> </div> </div>", new String($out);
    });
});
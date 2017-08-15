/*TMODJS:{"version":4,"md5":"6c4bf121089760ca54db7689ba1df49f"}*/
define(function(require) {
    return require("../../templates")("mobile_view/sub/type4", function($data) {
        "use strict";
        var $utils = this, content = ($utils.$helpers, $data.content), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, $out = "";
        return $out += ' <div class="main-type1"> <div class="mobile-view-inner">  <div class="mobile-lead"></div>  ', 
        "undefined" != typeof content.textNav && ($out += ' <div class="mobile-nav"> <ul class="clearfix"> ', 
        $each(content.textNav.modelData, function($value) {
            $out += ' <li style="background:', $out += $escape($value.labelColor), $out += '"> <span style="color:', 
            $out += $escape($value.fontColor), $out += '">', $out += $escape($value.textName), 
            $out += "</span> </li> ";
        }), $out += " </ul> </div> "), $out += ' <div id="mobile-view"> <div class="main-type3"> ', 
        $out += $string(content.editor.modelData.editorContent), $out += " </div> </div> </div> </div>", 
        new String($out);
    });
});
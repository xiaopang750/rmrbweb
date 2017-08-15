/*TMODJS:{"version":3,"md5":"bd9cd25922ef691ab70854deae882060"}*/
define(function(require) {
    return require("../../templates")("mobile_form/sub/type4", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, content = $data.content, $escape = $utils.$escape, $each = $utils.$each, $string = ($data.$value, 
        $data.$index, $utils.$string), xss = $helpers.xss, $out = "";
        return $out += " ", "undefined" != typeof content.textNav && ($out += ' <div sub-wrap ctype="multi" data-name="', 
        $out += $escape(content.textNav.modelName), $out += '" class="none"> ', $each(content.textNav.modelData, function($value) {
            $out += ' <div sub-list> <input type="text" value="', $out += $escape($value.textName), 
            $out += '" sub-name="textName"> <input type="text" value="', $out += $escape($value.fontColor), 
            $out += '" sub-name="fontColor"> <input type="text" value="', $out += $escape($value.labelColor), 
            $out += '" sub-name="labelColor"> <div sub-name="pageUrl">', $out += $escape($value.pageUrl), 
            $out += '</div> <div sub-name="isused">', $out += $escape($value.isused), $out += "</div> </div> ";
        }), $out += " </div> "), $out += '  <div> <span class="red mt-5 ml-5 font-14">*</span> </div> <div data-name="', 
        $out += $escape(content.editor.modelName), $out += '"> <div sub-wrap ctype="sin"> <div sub-list> <textarea baidu-editor id="deji" style="height:420px;" sub-name="editorContent">', 
        $out += $string(xss(content.editor.modelData.editorContent)), $out += "</textarea> </div> </div> </div> ", 
        new String($out);
    });
});
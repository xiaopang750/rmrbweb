/*TMODJS:{"version":1,"md5":"36e6ed166809c7d39690111d8543f547"}*/
define(function(require) {
    return require("../../templates")("mobile_form/main/type3", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), content = $data.content, $out = "";
        return $out += ' <div> <span class="red mt-5 ml-5 font-14">*</span> </div> <div data-name="', 
        $out += $escape(content.editor.modelName), $out += '"> <div sub-wrap ctype="sin"> <div sub-list> <textarea baidu-editor id="deji" style="height:420px;" sub-name="editorContent">', 
        $out += $escape(content.editor.modelData.editorContent), $out += "</textarea> </div> </div> </div>", 
        new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"7859f5feb9d5068a05c7c5b12e203735"}*/
define(function(require) {
    return require("../../templates")("mobile_view/main/type3", function($data) {
        "use strict";
        var $utils = this, $string = ($utils.$helpers, $utils.$string), content = $data.content, $out = "";
        return $out += ' <div class="main-type1"> <div class="mobile-view-inner">  <div class="mobile-lead"></div> <div id="mobile-view"> <div class="main-type3"> ', 
        $out += $string(content.editor.modelData.editorContent), $out += " </div> </div> </div> </div>", 
        new String($out);
    });
});
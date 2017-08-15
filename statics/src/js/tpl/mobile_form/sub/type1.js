/*TMODJS:{"version":6,"md5":"ff56d6fce46adb0ba43a8d4f4c88d58c"}*/
define(function(require) {
    return require("../../templates")("mobile_form/sub/type1", function($data) {
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
        }), $out += " </div> "), $out += '  <div class="text-edit mobile-edit-section" data-name="', 
        $out += $escape(content.modelars.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-text-add ml-8 mr-5"></span> <span class="blue">文字广告：</span> </div> <div class="mobile-edit-content clearfix" sub-wrap ctype="multi"> <div class="inner" sub-list> <table cellspacing="0" cellpadding="0" border="0" width="100%"> <tr> <td width="100">主标题内容：</td> <td> <input type="text" class="r-text edit-main fl" value="', 
        $out += $escape(content.modelars.modelData[0].mainTitle), $out += '" sub-name="mainTitle" text-limit text-max="10"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>主题图片：</td> <td r-upload-wrap> <input type="text" class="r-text fl mr-6 edit-main" value="', 
        $out += $escape(content.modelars.modelData[0].iconBgName), $out += '" sub-name="iconBgName" r-upload-name> <input type="hidden" value="', 
        $out += $escape(content.modelars.modelData[0].iconBgUrl), $out += '" sub-name="iconBgUrl" r-upload-url> <span class="r-btn mobile-upload fl" r-upload-btn iscut="true" w="40" h="30" wmin="320" iscale="Y"></span> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <!-- <tr> <td>主标题颜色：</td> <td> <input type="text" class="r-text edit-color" value="', 
        $out += $escape(content.modelars.modelData[0].mainFontColor), $out += '" sub-name="mainFontColor"> </td> </tr> --> <tr> <td>正文：</td> <td class="baidu-editor-wrap"> <div> <span class="red mt-5 ml-5 font-14">*</span> </div> <div> <textarea sub-name="intro" id="deji" baidu-editor class="baidu-editor">', 
        $out += $string(xss(content.modelars.modelData[0].intro)), $out += "</textarea> </div> </td> </tr> </table> </div> </div> </div>", 
        new String($out);
    });
});
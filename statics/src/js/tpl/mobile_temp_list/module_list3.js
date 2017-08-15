/*TMODJS:{"version":3,"md5":"bd6c71dbd9d29e5733d215ef6ff949e8"}*/
define(function(require) {
    return require("../templates")("mobile_temp_list/module_list3", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), content = $data.content, $escape = ($data.$value, 
        $data.$index, $utils.$escape), pages = $data.pages, $out = ($data.value1, $data.index, 
        "");
        return $out += " ", $each(content.modelars.modelData, function($value) {
            $out += ' <table cellspacing="0" cellpadding="0" border="0" width="100%" sub-list class="list-table sub-table"> <tr> <td width="100">选择图片：</td> <td r-upload-wrap> <input type="text" class="r-text fl mr-6 edit-main" value="', 
            $out += $escape($value.iconBgName), $out += '" data-ele="no-move" sub-name="iconBgName" r-upload-name> <input type="hidden" value="', 
            $out += $escape($value.iconBgUrl), $out += '" r-upload-url data-ele="no-move" sub-name="iconBgUrl"> <span class="r-btn mobile-upload fl" r-upload-btn iscut="true" w="50" h="20" wmin="320" wmax="640" iscale="Y"></span> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>主题内容：</td> <td> <input type="text" class="r-text edit-main fl" value="', 
            $out += $escape($value.mainTitle), $out += '" data-ele="no-move" sub-name="mainTitle" text-limit text-max="10"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>主题颜色：</td> <td> <input type="text" class="r-text edit-main fl" value="', 
            $out += $escape($value.mainFontColor), $out += '" data-ele="no-move" sub-name="mainFontColor" readonly="readonly" widget-color> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>摘要内容：</td> <td> <input type="text" class="r-text edit-main fl" value="', 
            $out += $escape($value.intro), $out += '" data-ele="no-move" sub-name="intro" text-limit text-max="10"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>摘要文字颜色：</td> <td> <input type="text" class="r-text edit-color fl" value="', 
            $out += $escape($value.intorFontColor), $out += '" data-ele="no-move" sub-name="intorFontColor" readonly="readonly" widget-color> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>链接：</td> <td> <select class="fl edit-select" data-ele="no-move" sub-name="pageUrl"> <option value="">请选择</option> ', 
            $each(pages, function(value1) {
                $out += ' <option value="', $out += $escape(value1.weburl), $out += '" ', value1.weburl == $value.pageUrl && ($out += 'selected="selected"'), 
                $out += ">", $out += $escape(value1.webname), $out += "</option> ";
            }), $out += ' <option value="" select-link>自定义链接</option> </select> </td> </tr> <tr> <td>是否页面显示：</td> <td> <input type="checkbox" ', 
            1 == $value.isused && ($out += 'checked="checked"'), $out += ' data-ele="no-move" sub-name="isused"> </td> </tr> <tr> <td></td> <td> <span class="fr r-btn mobile-list-remove mt-5" data-ele="no-move" remove-list=""></span> </td> </tr> </table> ';
        }), $out += " ", new String($out);
    });
});
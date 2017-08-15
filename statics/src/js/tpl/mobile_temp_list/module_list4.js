/*TMODJS:{"version":3,"md5":"4e17d56f2188a30416f36c573046b848"}*/
define(function(require) {
    return require("../templates")("mobile_temp_list/module_list4", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), content = $data.content, now = ($data.$value, 
        $data.$index, $data.now), $escape = $utils.$escape, pages = $data.pages, $out = ($data.value1, 
        $data.index, "");
        return $out += " ", $each(content.modelars.modelData, function($value, $index) {
            $out += ' <tr class="clearfix" sub-list data-ele="list-change"> <td class="tc" width="60"> <span class="sort mt-5" data-ele="sort"> ', 
            now ? ($out += " ", $out += $escape(now), $out += " ") : ($out += " ", $out += $escape($index + 1), 
            $out += " "), $out += ' </span> </td> <td width="130"> <input type="text" class="r-text edit-name fl" value="', 
            $out += $escape($value.modelName), $out += '" sub-name="modelName" data-ele="no-move" text-limit text-max="10"> <span class="fl red ml-5 font-14">*</span> </td> <td width="205"> <input type="text" class="r-text fl ml-50" value="', 
            $out += $escape($value.fontColor), $out += '" data-ele="no-move" sub-name="fontColor" readonly="readonly" widget-color style="width:100px"> <span class="fl red ml-5 font-14">*</span> </td> <td width="100"> <select class="edit-select fl" sub-name="pageUrl" data-ele="no-move"> <option value="">请选择</option> ', 
            $each(pages, function(value1) {
                $out += ' <option value="', $out += $escape(value1.weburl), $out += '" ', value1.weburl == $value.pageUrl && ($out += 'selected="selected"'), 
                $out += ">", $out += $escape(value1.webname), $out += "</option> ";
            }), $out += ' <option value="" select-link>自定义链接</option> </select> </td> <td width="100"> <span class="r-btn mobile-list-remove" data-ele="no-move" remove-list></span> </td> </tr> ';
        }), $out += " ", new String($out);
    });
});
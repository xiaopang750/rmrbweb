/*TMODJS:{"version":37,"md5":"fcd93fef08110f7a89f04e7eb96c2a56"}*/
define(function(require) {
    return require("../templates")("mobile_temp_list/module_list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $each = $utils.$each, content = $data.content, now = ($data.$value, 
        $data.$index, $data.now), $escape = $utils.$escape, $string = $utils.$string, basePath = $helpers.basePath, pages = $data.pages, $out = ($data.value1, 
        $data.index, "");
        return $out += " ", $each(content.modelars.modelData, function($value, $index) {
            $out += ' <tr class="clearfix" sub-list data-ele="list-change"> <td class="tc" width="74"> <span class="sort" data-ele="sort"> ', 
            now ? ($out += " ", $out += $escape(now), $out += " ") : ($out += " ", $out += $escape($index + 1), 
            $out += " "), $out += ' </span> </td> <td width="169"> <input type="text" class="r-text edit-name fl" value="', 
            $out += $escape($value.modelName), $out += '" sub-name="modelName" data-ele="no-move" text-limit text-max="4"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> <td width="158"> <select class="edit-select fl" sub-name="iconBgUrl" data-ele="no-move"> <option value="', 
            $out += $string(basePath()), $out += 'sys/mobile/module_list/icon1.png" ', $value.iconBgUrl == basePath + "sys/mobile/module_list/icon1.png" && ($out += 'selected="selected"'), 
            $out += '>图标1</option> <option value="', $out += $string(basePath()), $out += 'sys/mobile/module_list/icon2.png" ', 
            $value.iconBgUrl == basePath + "sys/mobile/module_list/icon2.png" && ($out += 'selected="selected"'), 
            $out += '>图标2</option> <option value="', $out += $string(basePath()), $out += 'sys/mobile/module_list/icon3.png" ', 
            $value.iconBgUrl == basePath + "sys/mobile/module_list/icon3.png" && ($out += 'selected="selected"'), 
            $out += '>图标3</option> <option value="', $out += $string(basePath()), $out += 'sys/mobile/module_list/icon4.png" ', 
            $value.iconBgUrl == basePath + "sys/mobile/module_list/icon4.png" && ($out += 'selected="selected"'), 
            $out += '>图标4</option> <option value="', $out += $string(basePath()), $out += 'sys/mobile/module_list/icon5.png" ', 
            $value.iconBgUrl == basePath + "sys/mobile/module_list/icon5.png" && ($out += 'selected="selected"'), 
            $out += '>图标5</option> <option value="', $out += $string(basePath()), $out += 'sys/mobile/module_list/icon6.png" ', 
            $value.iconBgUrl == basePath + "sys/mobile/module_list/icon6.png" && ($out += 'selected="selected"'), 
            $out += '>图标6</option> </select> <span class="fl red mt-5 ml-5 font-14">*</span> </td> <td width="143"> <select class="edit-select" sub-name="pageUrl" data-ele="no-move"> <option value="">请选择</option> ', 
            $each(pages, function(value1) {
                $out += ' <option value="', $out += $escape(value1.weburl), $out += '" ', value1.weburl == $value.pageUrl && ($out += 'selected="selected"'), 
                $out += ">", $out += $escape(value1.webname), $out += "</option> ";
            }), $out += ' <option value="" select-link>自定义链接</option> </select> </td> <td width="37"> <span class="r-btn mobile-list-remove" data-ele="no-move" remove-list></span> </td> </tr> ';
        }), $out += " ", new String($out);
    });
});
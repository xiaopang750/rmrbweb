/*TMODJS:{"version":3,"md5":"881c996448e8e6fc331c1a5bb31b2e0c"}*/
define(function(require) {
    return require("../templates")("mobile_temp_list/edit_tag", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), content = $data.content, now = ($data.$value, 
        $data.$index, $data.now), $escape = $utils.$escape, pages = $data.pages, $out = ($data.value1, 
        $data.index, "");
        return $out += " ", $each(content.textNav.modelData, function($value, $index) {
            $out += ' <tr class="clearfix" data-ele="list-change" sub-list> <td width="66"> <div class="sort fl mr-20 ml-15" data-ele="sort"> ', 
            now ? ($out += " ", $out += $escape(now), $out += " ") : ($out += " ", $out += $escape($index + 1), 
            $out += " "), $out += ' </div> </td> <td width="124"> <input type="text" class="r-text fl mr-2 edit-name" value="', 
            $out += $escape($value.textName), $out += '" data-ele="no-move" sub-name="textName" text-limit text-max="4"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> <td width="91"> <input type="text" class="r-text fl mr-2 edit-color" value="', 
            $out += $escape($value.fontColor), $out += '" data-ele="no-move" sub-name="fontColor" readonly="readonly" widget-color> <span class="fl red mt-5 ml-5 font-14">*</span> </td> <td width="91"> <input type="text" class="r-text fl mr-2 edit-color" value="', 
            $out += $escape($value.labelColor), $out += '" data-ele="no-move" sub-name="labelColor" readonly="readonly" widget-color> <span class="fl red mt-5 ml-5 font-14">*</span> </td> <td width="103"> <select class="fl edit-select" data-ele="no-move" sub-name="pageUrl"> <option value="">请选择</option> ', 
            $each(pages, function(value1) {
                $out += ' <option value="', $out += $escape(value1.weburl), $out += '" ', value1.weburl == $value.pageUrl && ($out += 'selected="selected"'), 
                $out += ">", $out += $escape(value1.webname), $out += " </option>  ";
            }), $out += ' <option value="" select-link>自定义链接</option> </select> </td> <td width="81"> <input type="checkbox" class="fl mt-10 ml-40" ', 
            1 == $value.isused && ($out += 'checked="checked"'), $out += ' data-ele="no-move" sub-name="isused"> </td> <td width="25"> <span class="fr r-btn mobile-list-remove mt-5" data-ele="no-move" remove-list=""></span> </td> </tr> ';
        }), $out += " ", new String($out);
    });
});
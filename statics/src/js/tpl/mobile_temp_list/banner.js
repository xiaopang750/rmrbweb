/*TMODJS:{"version":3,"md5":"e252a50f1739c2595660df00786cb021"}*/
define(function(require) {
    return require("../templates")("mobile_temp_list/banner", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), content = $data.content, now = ($data.$value, 
        $data.$index, $data.now), $escape = $utils.$escape, pages = $data.pages, $out = ($data.value1, 
        $data.index, "");
        return $out += " ", $each(content.point.modelData, function($value, $index) {
            $out += ' <tr class="clearfix" sub-list data-ele="list-change"> <td width="74"> <div class="sort fl mr-20 ml-15" data-ele="sort"> ', 
            now ? ($out += " ", $out += $escape(now), $out += " ") : ($out += " ", $out += $escape($index + 1), 
            $out += " "), $out += ' </div> </td> <td width="239"> <div class="fl" r-upload-wrap> <input type="text" class="r-text fl mr-6 w-100" value="', 
            $out += $escape($value.imgName), $out += '" sub-name="imgName" data-ele="no-move" r-upload-name> <input type="hidden" class="r-text fl mr-6 w-100" value="', 
            $out += $escape($value.imgUrl), $out += '" sub-name="imgUrl" data-ele="no-move" r-upload-url> <span class="r-btn mobile-upload" data-ele="no-move" r-upload-btn iscut="true" w="40" h="30" wmin="320" iscale="Y"></span> </div> <span class="fl red mt-5 ml-5 font-14">*</span> </td> <td width="149"> <select class="fl edit-select ml-20 mr-10" sub-name="pageUrl" data-ele="no-move"> <option value="">请选择</option> ', 
            $each(pages, function(value1) {
                $out += ' <option value="', $out += $escape(value1.weburl), $out += '" ', value1.weburl == $value.pageUrl && ($out += 'selected="selected"'), 
                $out += ">", $out += $escape(value1.webname), $out += "</option> ";
            }), $out += ' <option value="" select-link>自定义链接</option> </select> </td> <td width="89"> <input type="checkbox" class="fl mt-10 ml-50" ', 
            1 == $value.isused && ($out += 'checked="checked"'), $out += ' sub-name="isused" data-ele="no-move"> </td> <td width="30"> <span class="fr r-btn mobile-list-remove mt-5" data-ele="no-move" remove-list></span> </td> </tr> ';
        }), $out += " ", new String($out);
    });
});
/*TMODJS:{"version":3,"md5":"12a268ef511603a442e06c67e4d313ad"}*/
define(function(require) {
    return require("../../mobile_temp_list/module_list3"), require("../../templates")("mobile_form/sub/type3", function($data, $filename) {
        "use strict";
        var $utils = this, content = ($utils.$helpers, $data.content), $escape = $utils.$escape, $each = $utils.$each, include = ($data.$value, 
        $data.$index, function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }), $out = "";
        return $out += " ", "undefined" != typeof content.textNav && ($out += ' <div sub-wrap ctype="multi" data-name="', 
        $out += $escape(content.textNav.modelName), $out += '" class="none"> ', $each(content.textNav.modelData, function($value) {
            $out += ' <div sub-list> <input type="text" value="', $out += $escape($value.textName), 
            $out += '" sub-name="textName"> <input type="text" value="', $out += $escape($value.fontColor), 
            $out += '" sub-name="fontColor"> <input type="text" value="', $out += $escape($value.labelColor), 
            $out += '" sub-name="labelColor"> <div sub-name="pageUrl">', $out += $escape($value.pageUrl), 
            $out += '</div> <div sub-name="isused">', $out += $escape($value.isused), $out += "</div> </div> ";
        }), $out += " </div> "), $out += '  <div class="edit-pic mobile-edit-section" data-name="', 
        $out += $escape(content.bgImg.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-pic ml-8 mr-5"></span> <span class="blue">背景图片：</span> </div> <div class="mobile-edit-content"> <div class="inner clearfix" sub-wrap ctype="sin" r-upload-wrap> <span sub-list> <input type="text" class="r-text fl mr-6 edit-main" value="', 
        $out += $escape(content.bgImg.modelData.bgImgName), $out += '" sub-name="bgImgName" r-upload-name> <input type="hidden" value="', 
        $out += $escape(content.bgImg.modelData.bgImgUrl), $out += '" sub-name="bgImgUrl" r-upload-url> </span> <span class="r-btn mobile-upload fl" r-upload-btn></span> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </div> </div>  <div class="edit-card mobile-edit-section" data-name="', 
        $out += $escape(content.modelars.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-pic ml-8 mr-5"></span> <span class="blue">卡片区域编辑：</span> </div> <div class="mobile-edit-content"> <div class="inner clearfix" sub-wrap ctype="multi" data-ele="sort-wrap" now="', 
        $out += $escape(content.modelars.modelData.length), $out += '" min="6" max="12"> ', 
        include("../../mobile_temp_list/module_list3"), $out += ' </div> <div class="tc pb-10"> <span class="r-btn mobile-list-add mt-10" mobile-list-add add-name="oTplList3"></span> </div> </div> </div> ', 
        new String($out);
    });
});
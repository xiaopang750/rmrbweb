/*TMODJS:{"version":3,"md5":"8ab547b927382ecb57277c73240730e8"}*/
define(function(require) {
    return require("../../mobile_temp_list/edit_tag"), require("../../mobile_temp_list/banner"), 
    require("../../mobile_temp_list/module_list4"), require("../../templates")("mobile_form/main/type1", function($data, $filename) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), content = $data.content, include = function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }, $each = $utils.$each, pages = $data.pages, $out = ($data.value1, $data.index, 
        "");
        return $out += '  <div class="edit-pic mobile-edit-section" data-name="', $out += $escape(content.logo.modelName), 
        $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-pic ml-8 mr-5"></span> <span class="blue">标识图片：</span> <span class="gray">建议图片尺寸（宽640高100）</span> </div> <div class="mobile-edit-content"> <div class="inner clearfix" sub-wrap ctype="sin" r-upload-wrap> <span sub-list> <input type="text" class="r-text fl mr-6 edit-main" value="', 
        $out += $escape(content.logo.modelData.logoName), $out += '" sub-name="logoName" r-upload-name> <input type="hidden" value="', 
        $out += $escape(content.logo.modelData.logoUrl), $out += '" sub-name="logoUrl" r-upload-url> </span> <span class="r-btn mobile-upload fl" r-upload-btn iscut="true" w="80" h="10" wmin="320" iscale="Y"></span> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </div> </div>  <div class="edit-tag mobile-edit-section none" data-name="', 
        $out += $escape(content.textNav.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-tag ml-8 mr-5"></span> <span class="blue">编辑标签：</span> </div> <div class="mobile-edit-content clearfix"> <table cellspacing="0" cellpadding="0" border="0" width="100%" class="list-head"> <thead> <tr> <td>显示顺序</td> <td>标签名称</td> <td>文字颜色</td> <td>标签颜色</td> <td>链接</td> <td>是否页面显示</td> <td></td> </tr> </thead> <tbody class="list-detail" data-ele="sort-wrap" sub-wrap ctype="multi" now="', 
        $out += $escape(content.textNav.modelData.length), $out += '" min="4" max="10"> ', 
        include("../../mobile_temp_list/edit_tag"), $out += ' </tbody> </table> <div class="tc"> <span class="r-btn mobile-list-add mt-10" mobile-list-add add-name="oTplTag"></span> </div> </div> </div>  <div class="pic-add mobile-edit-section none" data-name="', 
        $out += $escape(content.point.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-add ml-8 mr-5"></span> <span class="blue">轮播广告：</span> </div> <div class="mobile-edit-content clearfix"> <table cellspacing="0" cellpadding="0" border="0" width="100%" class="list-head"> <thead> <tr> <td>显示顺序</td> <td>图片（宽640高400）</td> <td>链接</td> <td>是否页面显示</td> <td>删除</td> </tr> </thead> <tbody class="list-detail" sub-wrap ctype="multi" data-ele="sort-wrap" now="', 
        $out += $escape(content.point.modelData.length), $out += '" min="3" max="6"> ', 
        include("../../mobile_temp_list/banner"), $out += ' </tbody> </table> <div class="tc"> <span class="r-btn mobile-list-add mt-10" mobile-list-add add-name="oTplBanner"></span> </div> </div> </div>  <div class="text-edit mobile-edit-section none" data-name="', 
        $out += $escape(content.textAdv.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-text-add ml-8 mr-5"></span> <span class="blue">文字广告：</span> </div> <div class="mobile-edit-content clearfix" sub-wrap ctype="sin"> <div class="inner"> <table cellspacing="0" cellpadding="0" border="0" width="100%" sub-list> <tr> <td width="100">主标题内容：</td> <td> <input type="text" class="r-text edit-main fl" value="', 
        $out += $escape(content.textAdv.modelData.mainTitle), $out += '" sub-name="mainTitle" text-limit text-max="10"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>主标题颜色：</td> <td> <input type="text" class="r-text edit-color fl" value="', 
        $out += $escape(content.textAdv.modelData.mainFontColor), $out += '" sub-name="mainFontColor" readonly="readonly" widget-color> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>副标题内容：</td> <td> <input type="text" class="r-text edit-main fl" value="', 
        $out += $escape(content.textAdv.modelData.subTitle), $out += '" sub-name="subTitle" text-limit text-max="15"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>副标题颜色：</td> <td> <input type="text" class="r-text edit-color fl" value="', 
        $out += $escape(content.textAdv.modelData.subFontColor), $out += '" sub-name="subFontColor" readonly="readonly" widget-color> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <tr> <td>链接：</td> <td> <select class="fl edit-select" sub-name="pageUrl"> <option value="">请选择</option> ', 
        $each(pages, function(value1) {
            $out += ' <option value="', $out += $escape(value1.weburl), $out += '" ', value1.weburl == content.textAdv.modelData.pageUrl && ($out += 'selected="selected"'), 
            $out += ">", $out += $escape(value1.webname), $out += "</option> ";
        }), $out += ' <option value="" select-link>自定义链接</option> </select> </td> </tr> </table> </div> </div> </div>  <div class="list-edit mobile-edit-section none" data-name="', 
        $out += $escape(content.modelars.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-list ml-8 mr-5"></span> <span class="blue">列表编辑：</span> </div> <div class="mobile-edit-content clearfix"> <table cellspacing="0" cellpadding="0" border="0" width="100%" class="list-head"> <thead> <tr> <td>显示顺序</td> <td>标签名称</td> <td>文字颜色</td> <td>链接</td> <td>删除</td> </tr> </thead> <tbody class="list-detail" sub-wrap ctype="multi" data-ele="sort-wrap" now="', 
        $out += $escape(content.modelars.modelData.length), $out += '" min="4" max="8"> ', 
        include("../../mobile_temp_list/module_list4"), $out += ' </tbody> </table> <div class="tc"> <span class="r-btn mobile-list-add mt-10" mobile-list-add add-name="oTplList4"></span> </div> </div> </div> ', 
        new String($out);
    });
});
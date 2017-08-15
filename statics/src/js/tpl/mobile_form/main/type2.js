/*TMODJS:{"version":1,"md5":"574de09f0f6a04907d1feb1426dd268b"}*/
define(function(require) {
    return require("../../mobile_temp_list/banner"), require("../../mobile_temp_list/module_list"), 
    require("../../templates")("mobile_form/main/type2", function($data, $filename) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), content = $data.content, include = function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }, $out = "";
        return $out += '  <div class="edit-pic mobile-edit-section" data-name="', $out += $escape(content.logo.modelName), 
        $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-pic ml-8 mr-5"></span> <span class="blue">标识图片：</span> <span class="gray">建议图片尺寸（宽640高100）</span> </div> <div class="mobile-edit-content"> <div class="inner clearfix" sub-wrap ctype="sin" r-upload-wrap> <span sub-list> <input type="text" class="r-text fl mr-6 edit-main" value="', 
        $out += $escape(content.logo.modelData.logoName), $out += '" sub-name="logoName" r-upload-name> <input type="hidden" value="', 
        $out += $escape(content.logo.modelData.logoUrl), $out += '" sub-name="logoUrl" r-upload-url> </span> <span class="r-btn mobile-upload fl" r-upload-btn iscut="true" w="40" h="5" wmin="320" iscale="Y"></span> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </div> </div>  <div class="pic-add mobile-edit-section none" data-name="', 
        $out += $escape(content.point.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-add ml-8 mr-5"></span> <span class="blue">轮播广告：</span> </div> <div class="mobile-edit-content clearfix"> <table cellspacing="0" cellpadding="0" border="0" width="100%" class="list-head"> <thead> <tr> <td>显示顺序</td> <td>图片（宽640高400）</td> <td>链接</td> <td>是否页面显示</td> <td>删除</td> </tr> </thead> <tbody sub-wrap ctype="multi" data-ele="sort-wrap" now="', 
        $out += $escape(content.point.modelData.length), $out += '" min="3" max="6"> ', 
        include("../../mobile_temp_list/banner"), $out += ' </tbody> </table> <div class="tc"> <span class="r-btn mobile-list-add mt-10" mobile-list-add add-name="oTplBanner"></span> </div> </div> </div>  <div class="list-edit mobile-edit-section none" data-name="', 
        $out += $escape(content.modelars.modelName), $out += '"> <div class="mobile-edit-title font_13 bold"> <span class="r-icon mobile-list ml-8 mr-5"></span> <span class="blue">列表编辑：</span> </div> <div class="mobile-edit-content clearfix"> <table cellspacing="0" cellpadding="0" border="0" width="100%" class="list-head"> <thead> <tr> <td>显示顺序</td> <td>标签名称</td> <td>模块图标</td> <td>链接</td> <td>删除</td> </tr> </thead> <tbody sub-wrap ctype="multi" data-ele="sort-wrap" now="', 
        $out += $escape(content.modelars.modelData.length), $out += '" min="6" max="8" class="list-detail"> ', 
        include("../../mobile_temp_list/module_list"), $out += ' </tbody> </table> <div> <!-- <ul class="list-detail" sub-wrap ctype="multi" data-ele="sort-wrap" now="', 
        $out += $escape(content.modelars.modelData.length), $out += '" min="', $out += $escape(content.modelars.modelData.length), 
        $out += '" max="8"> ', include("../../mobile_temp_list/module_list"), $out += ' </ul> --> <div class="tc"> <span class="r-btn mobile-list-add mt-10" mobile-list-add add-name="oTplList"></span> </div> </div> </div> </div>', 
        new String($out);
    });
});
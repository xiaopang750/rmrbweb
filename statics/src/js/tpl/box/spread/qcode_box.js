/*TMODJS:{"version":1,"md5":"77e608b1458477543762954fdb015923"}*/
define(function(require) {
    return require("../../templates")("box/spread/qcode_box", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), channels = $data.channels, $escape = ($data.$value, 
        $data.$index, $utils.$escape), activityType = $data.activityType, shops = $data.shops, $out = "";
        return $out += ' <div class="nr-box qcode-box" qcode-box> <a href="javascript:;" class="close" sc="close">×</a> <div class="inner mt-10"> <div class="tab-head-wrap clearfix mb-10"> <span class="fl mt-7 mr-10 font-14 ml-10">渠道选择：</span> <select class="form-control col-xs-5" typeChange> ', 
        $each(channels, function($value) {
            $out += ' <option value="', $out += $escape($value.accountid), $out += '" atype="', 
            $out += $escape($value.accounttype), $out += '"> ', $out += $escape($value.accountname), 
            $out += " </option> ";
        }), $out += ' </select> </div> <div class="tab-content-wrap"> <div class="tab-content" widget-role="tab-content"> ', 
        "001" != activityType ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%"> <thead> <tr> <td>店铺名称</td> <td>下载链接</td> <td>直接预览</td> </tr> </thead> <tbody> ', 
        $each(shops, function($value) {
            $out += " <tr> <td>", $out += $escape($value.shopname), $out += '</td> <td> <a href="javascript:;" class="r-btn download" download pkid="', 
            $out += $escape($value.pkShoparea), $out += '"></a> </td> <td> <a href="javascript:;" view pkid="', 
            $out += $escape($value.pkShoparea), $out += '">预览</a> </td> </tr> ';
        }), $out += " </tbody> </table> ") : $out += '  <div class="tc mt-50"> <a href="javascript:;" class="r-btn download mb-10" download pkid=""></a> <p class="mb-10">下载二维码</p> <p> <a href="javascript:;" view pkid="">预览二维码</a> </p> </div> ', 
        $out += ' </div> </div> <div class="white font-14 mt-5"> 二维码尺寸请按照43像素的整数倍缩放，以保持最佳效果。 </div> </div> </div>', 
        new String($out);
    });
});
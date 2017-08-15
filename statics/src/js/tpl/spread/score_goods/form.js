/*TMODJS:{"version":3,"md5":"7e71cb6fcb8dd99c89848e67a6b54a88"}*/
define(function(require) {
    return require("../../templates")("spread/score_goods/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), exchange = $data.exchange, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover"> <tr> <td width="150"> 商品名称： </td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="exchange.exchangeProduct" tip="此项为必填" wrong="商品名称为20个字以内" re="(.{1,20})" value="', 
        $out += $escape(exchange.exchangeProduct), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td> 商品图片： </td> <td> <div r-upload-wrap class="clearfix"> <input type="text" class="form-control col-xs-5 fl mr-5" form_check="sys" ischeck="true" name="exchange.productPrcUrl" tip="请上传图片" wrong="" re="(.+)" value="', 
        $out += $escape(exchange.productPrcUrl), $out += '" r-upload-url class="upload-input"> <a href="javascript:;" class="btn btn-default fl" r-upload-btn>选择图片</a> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td> 商品兑换所需积分： </td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="exchange.exchangeIntegral" tip="此项为必填" wrong="请填写非0的数字" re="([1-9]|([1-9]\\d+))" value="', 
        $out += $escape(exchange.exchangeIntegral), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td> 描述： </td> <td> <div> <textarea type="text" class="form-control col-xs-5 h-mid" form_check="sys" ischeck="true" name="exchange.des" tip="此项为必填" wrong="请填写100字以内的描述" re="((.+|\\n){1,100})">', 
        $out += $escape(exchange.des), $out += '</textarea> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">确定</a> <a href="javascript:;" class="btn btn-danger pl-50 pr-50" sc="back">取消</a> </td> </tr> </table>', 
        new String($out);
    });
});
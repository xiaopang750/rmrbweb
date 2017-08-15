/*TMODJS:{"version":1,"md5":"d5449d71006a1e308529854b92a36cd8"}*/
define(function(require) {
    return require("../../templates")("spread/elc_sale/detail", function($data) {
        "use strict";
        var $utils = this, mCouponsList = ($utils.$helpers, $data.mCouponsList), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return mCouponsList.length ? ($out += ' <table class="table striped" width="100%"> <tr> <td>领取的会员名称</td> <td>领取渠道</td> <td>领取时间</td> <td>当前状态</td> <td>核销时间</td> </tr> ', 
        $each(mCouponsList, function($value) {
            $out += " <tr> <td>", $out += $escape($value.reserve3), $out += "</td> <td> ", "001" == $value.reserve2 ? $out += " 微信 " : "002" == $value.reserve2 && ($out += " 新浪微博 "), 
            $out += " </td> <td>", $out += $escape($value.vdef1), $out += "</td> <td> ", $out += 1 == $value.couponsStatus ? " 已核销 " : " 未核销 ", 
            $out += " </td> <td> ", $out += $escape($value.cancelTime), $out += " </td> </tr> ";
        }), $out += " </table> ") : $out += ' <div class="tc">暂无任何详情</div> ', new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"b17c5843708db3bedecd98a254eefd97"}*/
define(function(require) {
    return require("../../templates")("way/member/detail2", function($data) {
        "use strict";
        var $utils = this, mCouponsList = ($utils.$helpers, $data.mCouponsList), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", mCouponsList.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="auto table mt-20"> <thead class="list-head"> <tr> <td width="15%">优惠券编码</td> <td width="15%">优惠券状态</td> <td width="15%">核销时间</td> <td width="15%">领取时间</td> <td width="20%">开始时间</td> <td width="20%">结束时间</td> </tr> </thead> <tbody data-ele="data-wrap" class="list-body"> ', 
        $each(mCouponsList, function($value) {
            $out += " <tr> <td>", $out += $escape($value.couponsCode), $out += "</td> <td> ", 
            $out += "1" == $value.couponsStatus ? " 已核销 " : " 未核销 ", $out += " </td> <td>", 
            $out += $escape($value.cancelTime), $out += "</td> <td>", $out += $escape($value.vdef1), 
            $out += "</td> <td>", $out += $escape($value.startTime), $out += "</td> <td>", $out += $escape($value.endTime), 
            $out += "</td> </tr> ";
        }), $out += " </tbody> </table> ") : $out += ' <div class="tc">暂无数据</div> ', new String($out);
    });
});
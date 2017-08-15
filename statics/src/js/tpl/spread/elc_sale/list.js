/*TMODJS:{"version":4,"md5":"236bb176addfb6b51dd5d1bff0d9965d"}*/
define(function(require) {
    return require("../../templates")("spread/elc_sale/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $each = $utils.$each, coupons = $data.coupons, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, getUrl = $helpers.getUrl, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped auto mt-20"> <thead> <tr> <td width="5%">序号</td> <td width="10%">活动名称</td> <td width="20%">活动主题</td> <td width="20%">活动效果</td> <td width="15%">活动开始时间</td> <td width="15%">活动结束时间</td> <td width="15%">管理</td> </tr> </thead> <tbody> ', 
        $each(coupons, function($value, $index) {
            $out += " <tr> <td>", $out += $escape($index + 1), $out += "</td> <td>", $out += $escape($value.reserve1), 
            $out += "</td> <td>", $out += $escape($value.reserve2), $out += "</td> <td> <p>发放数量:", 
            $out += $escape($value.couponsNum), $out += '</p> <p> <a href="', $out += $string(getUrl("couponsDetail")), 
            $out += $escape("&pid=" + $value.couponsId), $out += '">累计领取:', $out += $escape($value.couponsNum - $value.residueNum), 
            $out += "</a> </p> <p>累计核销:", $out += $escape($value.reserve5), $out += "</p> <p>当日领取:", 
            $out += $escape($value.reserve3), $out += "</p> <p>当日核销:", $out += $escape($value.reserve4), 
            $out += "</p> </td> <td> ", $out += $escape($value.startDate), $out += " </td> <td> ", 
            $out += $escape($value.endDate), $out += ' </td> <td> <a href="', $out += $string(getUrl("couponsEdit")), 
            $out += $escape("&aid=" + $value.couponsId + "&pid=" + $value.pkActivity), $out += '">编辑</a> <span>|</span> <a href="javascript:;" remove aid="', 
            $out += $escape($value.couponsId), $out += '">删除</a> <span>|</span> <a href="javascript:;" box-set lid="', 
            $out += $escape($value.pkActivity), $out += '">发布渠道</a> <span>|</span> <a href="javascript:;" send sid="', 
            $out += $escape($value.pkActivity), $out += '">推送</a> <span>|</span> <a href="', 
            $out += $string(getUrl("integralRuleList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">积分规则</a> <span>|</span> <a href="', $out += $string(getUrl("singList")), 
            $out += $escape("&pkActivity=" + $value.pkActivity), $out += '">报名情况</a> </td> </tr> ';
        }), $out += " </tbody> </table>", new String($out);
    });
});
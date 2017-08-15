/*TMODJS:{"version":2,"md5":"bb5f84f26f3102f5ace90f0d655b1bcd"}*/
define(function(require) {
    return require("../../templates")("spread/elc_sale/build_view", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, basePath = $helpers.basePath, $escape = $utils.$escape, couponsPic = $data.couponsPic, couponsLimit = $data.couponsLimit, startDate = $data.startDate, endDate = $data.endDate, $out = "";
        return $out += ' <img src="', $out += $string(basePath()), $out += '/main/spread/elc_sale/ticket_bg.jpg" elc-style alt="电子优惠券" class="ticket-bg"> <div class="ticket"> <img src="', 
        $out += $escape(couponsPic), $out += '" view-image> <span class="rmb">￥</span> <span class="price">', 
        $out += $escape(couponsLimit), $out += '</span> <span class="yuan">YUAN</span> <span class="typer">优惠券</span> <div class="time"> <p>有效期:</p> <p> <span class="mr-5">', 
        $out += $escape(startDate), $out += "</span> <span>-</span> <span>", $out += $escape(endDate), 
        $out += "</span> </p> </div> </div>", new String($out);
    });
});
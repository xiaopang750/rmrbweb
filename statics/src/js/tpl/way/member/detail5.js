/*TMODJS:{"version":1,"md5":"163fc317c041a4efbcfc82b932deda94"}*/
define(function(require) {
    return require("../../templates")("way/member/detail5", function($data) {
        "use strict";
        var $utils = this, mIntegrals = ($utils.$helpers, $data.mIntegrals), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", mIntegrals.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="auto table mt-20"> <thead class="list-head"> <tr> <td width="15%">积分时间</td> <td width="15%">积分数量</td> <td width="15%">积分来源</td> <td width="15%">积分链接</td> <td width="20%">积分有效期</td> <td width="20%">积分用途</td> </tr> </thead> <tbody data-ele="data-wrap" class="list-body"> ', 
        $each(mIntegrals, function($value) {
            $out += " <tr> <td>", $out += $escape($value.integraltime), $out += "</td> <td>", 
            $out += $escape($value.integralnum), $out += "</td> <td>", $out += $escape($value.reserve2), 
            $out += "</td> <td>", $out += $escape($value.integralurl), $out += "</td> <td>", 
            $out += $escape($value.integralvalidate), $out += "</td> <td>", $out += $escape($value.integraluse), 
            $out += "</td> </tr> ";
        }), $out += ' <tr> <td colspan="6" class="tr"> <a href="javascript:;" class="btn btn-primary" add-score>添加积分</a> </td> </tr> </tbody> </table> ') : $out += ' <div class="noData"> <p>暂无数据</p> <a href="javascript:;" class="btn btn-primary" add-score>添加积分</a> </div> ', 
        new String($out);
    });
});
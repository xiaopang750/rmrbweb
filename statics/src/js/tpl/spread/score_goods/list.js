/*TMODJS:{"version":5,"md5":"f52a2a34f33b6d5d94aaeb5b235b1ca3"}*/
define(function(require) {
    return require("../../templates")("spread/score_goods/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, exchanges = $data.exchanges, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td colspan="5"> <div> <a href="javascript:;" class="fl font-12 default" view-code> 商品二维码 </a> <a class="btn btn-primary fr" href="', 
        $out += $string(getUrl("productExchangeEdit")), $out += '" add-btn> 添加商品 </a> </div> </td> </tr> </thead> ', 
        exchanges.length ? ($out += ' <thead> <tr> <td width="10%">兑换商品</td> <td width="30%" height="50">图片</td> <td width="10%">所需积分</td> <td width="30%">描述</td> <td width="20%">操作</td> </tr> </thead> ', 
        $each(exchanges, function($value) {
            $out += " <tr rule-list> <td>", $out += $escape($value.exchangeProduct), $out += '</td> <td> <img src="', 
            $out += $escape($value.productPrcUrl), $out += '" height="100"> </td> <td>', $out += $escape($value.exchangeIntegral), 
            $out += "</td> <td>", $out += $escape($value.des), $out += '</td> <td> <a href="', 
            $out += $string(getUrl("productExchangeEdit")), $out += "&pkExchange=", $out += $escape($value.pkExchange), 
            $out += '">编辑</a> <span>|</span> <a href="javascript:;" aid="', $out += $escape($value.pkExchange), 
            $out += '" remove>删除</a> <span>|</span> <a href="javascript:;" aid="', $out += $escape($value.pkExchange), 
            $out += '" exchange>兑换</a> <span>|</span> <a href="', $out += $string(getUrl("productExchangePart")), 
            $out += "&pkExchange=", $out += $escape($value.pkExchange), $out += '">兑换详情</a> </td> </tr> ';
        }), $out += " ") : $out += ' <tr colspan="4"> <td> 暂无数据 </td> </tr> ', $out += " </table>", 
        new String($out);
    });
});
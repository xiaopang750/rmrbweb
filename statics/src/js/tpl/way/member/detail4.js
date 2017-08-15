/*TMODJS:{"version":1,"md5":"744de21e00b3c0e019d80ba6b293c911"}*/
define(function(require) {
    return require("../../templates")("way/member/detail4", function($data) {
        "use strict";
        var $utils = this, memberCols = ($utils.$helpers, $data.memberCols), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", memberCols.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="auto table mt-20"> <thead class="list-head"> <tr> <td>收藏时间</td> <td>收藏类型</td> <td>收藏内容</td> </tr> </thead> <tbody data-ele="data-wrap" class="list-body"> ', 
        $each(memberCols, function($value) {
            $out += " <tr> <td>", $out += $escape($value.collecttime), $out += "</td> <td>", 
            $out += $escape($value.collecttype), $out += "</td> <td>", $out += $escape($value.collectcontent), 
            $out += "</td> </tr> ";
        }), $out += " </tbody> </table> ") : $out += ' <div class="tc">暂无数据</div> ', new String($out);
    });
});
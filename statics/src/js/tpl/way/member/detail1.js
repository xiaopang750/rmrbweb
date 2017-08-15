/*TMODJS:{"version":1,"md5":"b24a2b091977bb343747e43b986d4e05"}*/
define(function(require) {
    return require("../../templates")("way/member/detail1", function($data) {
        "use strict";
        var $utils = this, mInteracts = ($utils.$helpers, $data.mInteracts), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", mInteracts.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="auto table mt-20"> <thead class="list-head"> <tr> <td>发起时间</td> <td>结束时间</td> <td>互动内容</td> <td>互动对象</td> </tr> </thead> <tbody data-ele="data-wrap" class="list-body"> ', 
        $each(mInteracts, function($value) {
            $out += " <tr> <td>", $out += $escape($value.starttime), $out += "</td> <td>", $out += $escape($value.endtime), 
            $out += "</td> <td>", $out += $escape($value.interactioncontent), $out += "</td> <td>", 
            $out += $escape($value.interactionobject), $out += "</td> </tr> ";
        }), $out += " </tbody> </table> ") : $out += ' <div class="tc">暂无数据</div> ', new String($out);
    });
});
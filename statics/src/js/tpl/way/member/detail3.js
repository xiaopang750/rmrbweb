/*TMODJS:{"version":1,"md5":"04d54eb68ceb24954c496a1f738a8b78"}*/
define(function(require) {
    return require("../../templates")("way/member/detail3", function($data) {
        "use strict";
        var $utils = this, memberActs = ($utils.$helpers, $data.memberActs), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", memberActs.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="auto table mt-20"> <thead class="list-head"> <tr> <td width="20%">参与时间</td> <td width="20%">参与内容</td> <td width="20%">参与结果</td> <td width="20%">参与奖励</td> <td width="20%">互动内容</td> </tr> </thead> <tbody data-ele="data-wrap" class="list-body"> ', 
        $each(memberActs, function($value) {
            $out += " <tr> <td>", $out += $escape($value.participatetime), $out += "</td> <td>", 
            $out += $escape($value.participatecontent), $out += "</td> <td>", $out += $escape($value.participateresult), 
            $out += "</td> <td>", $out += $escape($value.participatereward), $out += "</td> <td>", 
            $out += $escape($value.participatedetail), $out += "</td> </tr> ";
        }), $out += " </tbody> </table> ") : $out += ' <div class="tc">暂无数据</div> ', new String($out);
    });
});
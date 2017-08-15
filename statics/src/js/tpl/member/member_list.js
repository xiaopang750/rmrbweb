/*TMODJS:{"version":1,"md5":"caaea77269400ae3bdab2260dfa06748"}*/
define(function(require) {
    return require("../templates")("member/member_list", function($data) {
        "use strict";
        var $utils = this, customerserviceLists = ($utils.$helpers, $data.customerserviceLists), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", customerserviceLists.length ? ($out += " ", $each(customerserviceLists, function($value) {
            $out += ' <li user-list mid="', $out += $escape($value.memberid), $out += '" aid="', 
            $out += $escape($value.accountid), $out += '" name="', $out += $value.vdef1 ? $escape($value.vdef1) : "游客", 
            $out += '" level="', $out += $escape($value.vdef5), $out += '" tel="', $out += $escape($value.vdef3), 
            $out += '" score="', $out += $escape($value.vdef4), $out += '" address="', $out += $escape($value.vdef2), 
            $out += '" mid="', $out += $escape($value.memberid), $out += '"> <span class="ml-20"> ', 
            $value.vdef1 ? ($out += " ", $out += $escape($value.vdef1), $out += " ") : $out += " 游客 ", 
            $out += ' </span> <span class="red">待办:', $out += $escape($value.needdealnum), $out += '</span> <a href="javascript:;" class="member-btn" toper>置顶</a> </li> ';
        }), $out += " ") : $out += ' <div class="tc" noDataTip>暂无接入用户</div> ', new String($out);
    });
});
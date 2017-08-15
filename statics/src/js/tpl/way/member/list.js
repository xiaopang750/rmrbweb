/*TMODJS:{"version":7,"md5":"550012c5def5f991218852b8a67ae5af"}*/
define(function(require) {
    return require("../../templates")("way/member/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, memberInfos = $data.memberInfos, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), pageutil = $data.pageutil, $string = $utils.$string, getUrl = $helpers.getUrl, $out = "";
        return $out += " ", memberInfos.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="90%" class="table auto mt-20 striped"> <thead class="list-head"> <tr> <td width="5%"> 序号 <input type="checkbox" allCheck> </td> <td width="10%"> <a href="javascript:;" sort-head="nickname" order="asc">会员名称</a> </td> <td width="10%"> <a href="javascript:;" sort-head="memberrank" order="asc">会员级别</a> </td> <td width="10%"> <a href="javascript:;" sort-head="memberstatus" order="asc">会员状态</a> </td> <td width="10%">手机号码</td> <td width="10%"> <a href="javascript:;" sort-head="memberintegral" order="asc">会员积分</a> </td> <td width="10%">账号名称</td> <td width="10%"> <a href="javascript:;" sort-head="memberfrom" order="asc">来源渠道</a> </td> <td width="10%">参加活动总数</td> <td>管理</td> </tr> </thead> <tbody class="list-body"> ', 
        $each(memberInfos, function($value, $index) {
            $out += " <tr> <td> ", $out += $escape(1 * pageutil.pageSize * (pageutil.pageNum - 1) + ($index + 1)), 
            $out += ' <input type="checkbox" check pid="', $out += $escape($value.pkMemberid), 
            $out += '"> </td> <td> <a href="', $out += $string(getUrl("memberForm")), $out += "&memberid=", 
            $out += $escape($value.pkMemberid), $out += '">', $out += $escape($value.nickname), 
            $out += '</a> </td> <td> <a href="', $out += $string(getUrl("memberLevelForm")), 
            $out += "&type=edit&aid=", $out += $escape($value.memberrank), $out += '"> ', $out += $escape($value.vdef10), 
            $out += " </a> </td> <td> ", $out += 1 == $value.memberstatus ? " 已关注 " : " 未关注 ", 
            $out += " </td> <td>", $out += $escape($value.cellphone), $out += '</td> <td> <a href="', 
            $out += $string(getUrl("memberDetail")), $out += "&memberid=", $out += $escape($value.pkMemberid), 
            $out += "&name=", $out += $escape($value.nickname), $out += '&pid=5">', $out += $escape($value.memberintegral), 
            $out += "</a> </td> <td>", $out += $escape($value.accountid), $out += "</td> <td> ", 
            $out += "001" == $value.memberfrom ? " 微信 " : "002" == $value.memberfrom ? " 新浪微博 " : " 其他 ", 
            $out += " </td> <td>", $out += $escape($value.activitycount), $out += '</td> <td> <!-- <a href="javascript:;" aid="', 
            $out += $escape($value.pkMemberid), $out += '" remove>删除</a> --> <a href="', $out += $string(getUrl("memberDetail")), 
            $out += "&memberid=", $out += $escape($value.pkMemberid), $out += "&name=", $out += $escape($value.nickname), 
            $out += '">详情</a> <span>|</span> <a href="javascript:;" aid="', $out += $escape($value.pkMemberid), 
            $out += '" isBlack="', $out += $escape($value.reserve7), $out += '" black> ', $out += 0 == $value.reserve7 ? " 取消拉黑 " : " 拉黑 ", 
            $out += " </a> </td> </tr> ";
        }), $out += ' </tbody> </table> <div class="inner-wrap"> <span>每页显示：</span> <a href="javascript:;" pageNum="20" class="btn btn-primary btn-xs">20</a> <a href="javascript:;" pageNum="50" class="btn btn-primary btn-xs">50</a> <a href="javascript:;" pageNum="80" class="btn btn-primary btn-xs">80</a> </div> ') : $out += ' <div class="tc mt-20">暂无任何会员</div> ', 
        new String($out);
    });
});
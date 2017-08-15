/*TMODJS:{"version":4,"md5":"d7a5ab648e09947d1c289b0909538877"}*/
define(function(require) {
    return require("../templates")("member/autoReply_list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, autoreplys = $data.autoreplys, $string = $utils.$string, getUrl = $helpers.getUrl, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", autoreplys.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="90%" class="table striped auto mt-20"> <thead> <tr> <td colspan="6" class="tr"> <a class="btn btn-primary" href="', 
        $out += $string(getUrl("autoReplyEdit")), $out += '">添加</a> </td> </tr> <tr> <td width="10%">序号</td> <td width="15%">问题内容</td> <td width="15%">匹配类型</td> <td width="10%">答复类型</td> <td width="30%">答复内容</td> <td width="20%">操作</td> </tr> </thead> <tbody> ', 
        $each(autoreplys, function($value, $index) {
            $out += " <tr> <td>", $out += $escape($index + 1), $out += "</td> <td>", $out += $escape($value.keycontent), 
            $out += "</td> <td>", $out += $escape($value.matchtype), $out += "</td> <td>", $out += $escape($value.replytype), 
            $out += "</td> <td>", $out += $escape($value.replycontent), $out += '</td> <td> <a href="', 
            $out += $string(getUrl("autoReplyEdit")), $out += "&pkReply=", $out += $escape($value.pkReply), 
            $out += '">编辑</a> <span>|</span> <a href="javascript:;" remove aid="', $out += $escape($value.pkReply), 
            $out += '">删除</a> </td> </tr> ';
        }), $out += " </tbody> </table> ") : ($out += ' <div class="noData"> <p>暂无数据</p> <a class="btn btn-primary" href="', 
        $out += $string(getUrl("autoReplyEdit")), $out += '">添加</a> </div> '), new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"f9eca28900760503f0b75c9d17411236"}*/
define(function(require) {
    return require("../../templates")("way/member/detail6", function($data) {
        "use strict";
        var $utils = this, mEvaluates = ($utils.$helpers, $data.mEvaluates), $each = $utils.$each, $escape = ($data.value1, 
        $data.index1, $data.value2, $data.index2, $utils.$escape), $out = "";
        return $out += " ", mEvaluates.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="auto table mt-20"> <thead class="list-head"> <tr> <td width="15%">主题</td> <td width="15%">评论人名称</td> <td width="15%">评论内容</td> <td width="15%">评论来源</td> <td width="20%">评论类型</td> <td width="20%">评论时间</td> </tr> </thead> <tbody data-ele="data-wrap" class="list-body"> ', 
        $each(mEvaluates, function(value1) {
            $out += " ", $each(value1.evaluates, function(value2, index2) {
                $out += " <tr> ", 0 == index2 && ($out += ' <td rowspan="', $out += $escape(value1.evaluates.length), 
                $out += '">', $out += $escape(value1.topic), $out += "</td> "), $out += " <td>", 
                $out += $escape(value2.commentusername), $out += "</td> <td> ", $out += $escape(value2.evaluatecontent), 
                $out += " </td> <td> ", "001" == value2.evaluatefrom ? $out += " 微信 " : "002" == value2.evaluatefrom ? $out += " 新浪微博 " : "003" == value2.evaluatefrom && ($out += " 腾讯微博 "), 
                $out += " </td> <td> ", $out += "act" == value2.evaluatetype ? " 活动 " : " 微博 ", 
                $out += " </td> <td>", $out += $escape(value2.evaluatetime), $out += "</td> </tr> ";
            }), $out += " ";
        }), $out += " </tbody> </table> ") : $out += ' <div class="tc">暂无数据</div> ', new String($out);
    });
});
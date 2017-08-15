/*TMODJS:{"version":2,"md5":"d49fc1e1bcd481e17b57e5b141fb11ef"}*/
define(function(require) {
    return require("../templates")("member/arg_manage_list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, blogs = $data.blogs, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, getUrl = $helpers.getUrl, $out = "";
        return $out += " ", blogs.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="90%" class="table striped auto mt-20"> <thead> <tr> <td width="10%">微博渠道</td> <td width="10%">是否已收藏</td> <td width="10%">转发数</td> <td width="10%">评论数</td> <td width="15%">微博内容</td> <td width="15%">操作</td> </tr> </thead> <tbody> ', 
        $each(blogs, function($value) {
            $out += " <tr> <td> ", "001" == $value.blogWay ? $out += " 微信 " : "002" == $value.blogWay ? $out += " 新浪微博 " : "003" == $value.blogWay && ($out += " 腾讯微博 "), 
            $out += " </td> <td> ", $out += "1" == $value.favorited ? " 是 " : " 否 ", $out += " </td> <td zhuan>", 
            $out += $escape($value.repostCount), $out += "</td> <td comment>", $out += $escape($value.commentsCount), 
            $out += "</td> <td>", $out += $escape($value.blogContent), $out += '</td> <td> <a href="', 
            $out += $string(getUrl("commentList")), $out += "&accountId=", $out += $escape($value.standby1), 
            $out += "&blogId=", $out += $escape($value.blogId), $out += "&pkBlog=", $out += $escape($value.pkBlog), 
            $out += '">查看评论</a> <span>|</span> <a href="javascript:;" get-new accountId="', 
            $out += $escape($value.standby1), $out += '" blogId="', $out += $escape($value.blogId), 
            $out += '" pkBlog="', $out += $escape($value.pkBlog), $out += '">获取最新信息</a> <span>|</span> <a href="javascript:;" get-new-arg accountId="', 
            $out += $escape($value.standby1), $out += '" blogId="', $out += $escape($value.blogId), 
            $out += '" pkBlog="', $out += $escape($value.pkBlog), $out += '">获取最新评论</a> </td> </tr> ';
        }), $out += " </tbody> </table> ") : $out += ' <div class="noData"> <p>暂无数据</p> </div> ', 
        new String($out);
    });
});
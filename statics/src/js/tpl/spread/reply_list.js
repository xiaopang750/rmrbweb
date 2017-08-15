/*TMODJS:{"version":1,"md5":"4620f9270d7fd935be0529f5c05f7826"}*/
define(function(require) {
    return require("./reply_sub"), require("../templates")("spread/reply_list", function($data, $filename) {
        "use strict";
        var $utils = this, reviews = ($utils.$helpers, $data.reviews), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), include = function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }, $out = "";
        return $out += " ", reviews.length ? ($out += " ", $each(reviews, function($value) {
            $out += ' <li reply-list> <div reply-content> <span class="blue mr-10">', $out += $escape($value.reviewPerson), 
            $out += ':</span> <span class="mr-10 black">', $out += $escape($value.reviewContent), 
            $out += '</span> <span class="mr-10">', $out += $escape($value.reviewTime), $out += '</span> <span class="red"> 来自： ', 
            "001" == $value.reviewSource ? $out += " 微信 " : "002" == $value.reviewSource && ($out += " 微博 "), 
            $out += ' <span class="ml-10">', $out += $escape($value.reviewLocation), $out += '</span> </span> </div> <div reply-area class="reply-area"> <textarea class="WB_media_expand" namer="', 
            $out += $escape($value.reviewPerson), $out += '" cid="', $out += $escape($value.pkReview), 
            $out += '" reply-text></textarea> <div class="clearfix"> <span class="send-btn fr bg-gray" send-reply>评论</span> </div> </div> <div class="btn-wrap" btn-wrap> <a href="javascript:;" class="reply-btn" reply-btn>回复</a> <a href="javascript:;" class="remove-btn" remove-btn aid="', 
            $out += $escape($value.pkReview), $out += '">删除</a> </div> <div sub-wrap> ', include("./reply_sub", $value), 
            $out += " </div> </li> ";
        }), $out += " ") : $out += ' <div class="tc" no-arg>暂无评论</div> ', new String($out);
    });
});
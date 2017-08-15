/*TMODJS:{"version":1,"md5":"51d3f76f9342603168f9cc960bc666c8"}*/
define(function(require) {
    return require("../templates")("spread/reply_sub", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), reviews = $data.reviews, $escape = ($data.$value2, 
        $data.index, $utils.$escape), pkReview = $data.pkReview, $out = "";
        return $each(reviews, function($value2) {
            $out += ' <div class="rel ml-50 pt-10 pb-10" reply-list> <div reply-content> <span class="blue mr-10">', 
            $out += $escape($value2.reviewPerson), $out += "回复</span> <span>", $out += $escape($value2.reviewTarget), 
            $out += ':</span> <span class="mr-10 black">', $out += $escape($value2.reviewContent), 
            $out += '</span> <span class="mr-10">', $out += $escape($value2.reviewTime), $out += '</span> <span class="red"> 来自： ', 
            "001" == $value2.reviewSource ? $out += " 微信 " : "002" == $value2.reviewSource && ($out += " 微博 "), 
            $out += ' <span class="ml-10">', $out += $escape($value2.reviewLocation), $out += '</span> </span> </div> <div reply-area class="reply-area"> <textarea class="WB_media_expand" namer="', 
            $out += $escape($value2.reviewPerson), $out += '" cid="', $out += $escape(pkReview), 
            $out += '" reply-text></textarea> <div class="clearfix"> <span class="send-btn fr bg-gray" send-reply>评论</span> </div> </div> <div class="btn-wrap" btn-wrap> <a href="javascript:;" class="reply-btn" reply-btn>回复</a> <a href="javascript:;" class="remove-btn" remove-btn aid="', 
            $out += $escape($value2.pkReview), $out += '">删除</a> </div> </div> ';
        }), new String($out);
    });
});
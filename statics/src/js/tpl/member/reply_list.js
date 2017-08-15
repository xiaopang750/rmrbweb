/*TMODJS:{"version":1,"md5":"c512dca08fd82bb83cd7eb8e53fb73d3"}*/
define(function(require) {
    return require("../templates")("member/reply_list", function($data) {
        "use strict";
        var $utils = this, mEvaluates = ($utils.$helpers, $data.mEvaluates), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", mEvaluates.length ? ($out += " ", $each(mEvaluates, function($value) {
            $out += ' <li reply-list> <div> <span class="blue mr-10">', $out += $escape($value.commentusername), 
            $out += ':</span> <span class="mr-10 black">', $out += $escape($value.evaluatecontent), 
            $out += "</span> <span>", $out += $escape($value.ts), $out += '</span> </div> <div reply-area class="reply-area"> <textarea class="WB_media_expand" namer="', 
            $out += $escape($value.commentusername), $out += '" cid="', $out += $escape($value.commentid), 
            $out += '" reply-text></textarea> <div class="clearfix"> <span class="send-btn fr bg-gray" send-reply>评论</span> </div> </div> <a href="javascript:;" class="reply-btn" reply-btn>回复</a> </li> ';
        }), $out += " ") : $out += ' <div class="tc" no-arg>暂无评论</div> ', new String($out);
    });
});
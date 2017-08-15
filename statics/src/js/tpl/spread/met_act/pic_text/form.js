/*TMODJS:{"version":1,"md5":"7ea796e7db368f9c2993edf4ce5a3d49"}*/
define(function(require) {
    return require("../../../templates")("spread/met_act/pic_text/form", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), muliInfos = $data.muliInfos, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <div class="tab-wrap" sub-wrap name="muliInfos"> ', $each(muliInfos, function($value) {
            $out += ' <div class="tab-content" widget-role="tab-content" sub-list name="test"> <div class="item"> <p>标题</p> <input type="text" value="', 
            $out += $escape($value.subject), $out += '" sub-name="subject"> <input type="hidden" value="', 
            $out += $escape($value.activityAbstract), $out += '" sub-name="activityAbstract"> <input type="hidden" value="', 
            $out += $escape($value.pkInfo), $out += '" sub-name="pkInfo"> <input type="hidden" value="', 
            $out += $escape($value.activityAbstract), $out += '" sub-name="activityAbstract"> </div> <div class="item"> <p>作者</p> <input type="text" value="', 
            $out += $escape($value.creator), $out += '" sub-name="creator"> </div> <div class="item"> <p>上传</p> <div r-upload-wrap name="bg"> <span> <input type="text" class="r-text fl upload" value="', 
            $out += $escape($value.picurl), $out += '" r-upload-url> <input type="hidden" value="', 
            $out += $escape($value.picurl), $out += '" sub-name="picurl" r-upload-url> <span class="r-btn mobile-upload" r-upload-btn></span> </span> </div> </div> <div class="item"> <p>摘要</p> <textarea sub-name="activityAbstract">', 
            $out += $escape($value.activityAbstract), $out += '</textarea> </div> <div class="item"> <p>到店有礼链接</p> <input type="text" value="', 
            $out += $escape($value.url), $out += '" readonly="readonly"> </div> </div> ';
        }), $out += " </div>", new String($out);
    });
});
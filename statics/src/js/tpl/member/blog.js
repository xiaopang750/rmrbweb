/*TMODJS:{"version":1,"md5":"37696feaf663de8f22cb97286a282836"}*/
define(function(require) {
    return require("../templates")("member/blog", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), blogContent = $data.blogContent, picUrl = $data.picUrl, ts = $data.ts, $out = "";
        return $out += ' <p class="font-18 mb-20">', $out += $escape(blogContent), $out += "</p> ", 
        picUrl && ($out += ' <img src="', $out += $escape(picUrl), $out += '"> '), $out += ' <p class="gray">', 
        $out += $escape(ts), $out += "</p>", new String($out);
    });
});
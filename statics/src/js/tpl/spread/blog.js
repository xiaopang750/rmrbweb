/*TMODJS:{"version":1,"md5":"475f8c2b5fa100680e57f391aab73a2f"}*/
define(function(require) {
    return require("../templates")("spread/blog", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), activitytopic = $data.activitytopic, picUrl = $data.picUrl, ts = $data.ts, $out = "";
        return $out += ' <p class="font-18 mb-20">', $out += $escape(activitytopic), $out += "</p> <!-- ", 
        picUrl && ($out += ' <img src="', $out += $escape(picUrl), $out += '"> '), $out += ' --> <p class="gray">', 
        $out += $escape(ts), $out += "</p>", new String($out);
    });
});
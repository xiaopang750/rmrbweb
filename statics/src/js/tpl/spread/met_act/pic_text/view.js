/*TMODJS:{"version":1,"md5":"b71bd2440d854e46df29898655319ddb"}*/
define(function(require) {
    return require("../../../templates")("spread/met_act/pic_text/view", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), muliInfos = $data.muliInfos, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", $each(muliInfos, function($value) {
            $out += ' <div class="list-view b-r font-14" data-ele="tab-head"> <h3 class="mb-10 font-14">', 
            $out += $escape($value.subject), $out += '</h3> <img class="mb-10" src="', $out += $escape($value.picurl), 
            $out += '" width="100%"> <p class="mb-10">图文内容</p> <div class="text lineH-23"> ', 
            $out += $escape($value.activityAbstract), $out += " </div> </div> ";
        }), new String($out);
    });
});
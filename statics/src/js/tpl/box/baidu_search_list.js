/*TMODJS:{"version":2,"md5":"1a6db2e11a3c1557be29d726ce74be4d"}*/
define(function(require) {
    return require("../templates")("box/baidu_search_list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $each = $utils.$each, data = $data.data, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, basePath = $helpers.basePath, $out = "";
        return $out += " ", $each(data, function($value) {
            $out += ' <li data-ele="select-list" data-ele="select-ele" url="', $out += $escape($value.objURL), 
            $out += '" name="', $out += $escape($value.fromPageTitleEnc), $out += '"> <img real-src="', 
            $out += $escape($value.objURL), $out += '" src="', $out += $string(basePath()), 
            $out += '/lib/loading/g_loading.gif" baidu-image> </li> ';
        }), new String($out);
    });
});
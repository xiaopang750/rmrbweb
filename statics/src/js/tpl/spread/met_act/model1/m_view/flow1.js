/*TMODJS:{"version":1,"md5":"4f9a4223ca164706537ae4d8199c0fc1"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_view/flow1", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, theme = $data.theme, title = $data.title, content = $data.content, $out = "";
        return $out += ' <img src="', $out += $escape(bg), $out += '" class="bg" width="234" height="392" data-ele="bg"> <img src="', 
        $out += $escape(theme), $out += '" class="topic"> <div class="cover"> <h3 class="font-14 bold mb-15 tc">', 
        $out += $escape(title), $out += '</h3> <h4 class="font-12 bold mb-15">', $out += $escape(content), 
        $out += "</h4> </div> ", new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"531fc40c56ec140f2ef3f09f4be253a7"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_view/flow4", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, $string = $utils.$string, word = $data.word, $out = "";
        return $out += ' <img src="', $out += $escape(bg), $out += '" class="bg" width="234" height="392" data-ele="bg"> <div class="cover mt-30 ml-5"> ', 
        $out += $string(word), $out += "  </div>", new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"ac8e19dbc780a6bcd637fba11022e9fb"}*/
define(function(require) {
    return require("../templates")("member/member_info_list", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), name = $data.name, level = $data.level, tel = $data.tel, score = $data.score, address = $data.address, $out = "";
        return $out += ' <div class="inner mt-10 pl-10 pt-10 pb-10"> <p> <span class="black">用户真实姓名：</span> <span class="gray">', 
        $out += $escape(name), $out += '</span> </p> <p> <span class="black">会员级别：</span> <span class="gray">', 
        $out += $escape(level), $out += '</span> </p> <p> <span class="black">联系电话：</span> <span class="gray">', 
        $out += $escape(tel), $out += '</span> </p> <p> <span class="black">积分数量：</span> <span class="gray">', 
        $out += $escape(score), $out += '</span> </p> <p> <span class="black">常用地址：</span> </p> <p> ', 
        $out += $escape(address), $out += " </p> </div>", new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"3f5d18305aef15349d91f5f473e40ff6"}*/
define(function(require) {
    return require("../../templates")("spread/elc_sale/backEnd_list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $escape = $utils.$escape, nickname = $data.nickname, isAllow = $data.isAllow, reviewContent = $data.reviewContent, $string = $utils.$string, filter = $helpers.filter, filterWords = $data.filterWords, filter2 = $helpers.filter2, membername = $data.membername, levelname = $data.levelname, activitycount = $data.activitycount, $out = "";
        return $out += ' <li list> <dl class="clearfix"> <dt class="fl rel"> <div class="ml-25 mt-21"> <p class="mb-10">', 
        $out += $escape(nickname), $out += '：</p> <p class="black"> ', "Y" == isAllow ? ($out += " ", 
        $out += $escape(reviewContent), $out += " ") : ($out += " ", $out += $string(filter(reviewContent, filterWords)), 
        $out += " "), $out += ' </p> <input type="checkbox" class="check" check content="', 
        $out += $escape(nickname + "说："), $out += $string(filter2(reviewContent, filterWords)), 
        $out += '"> <button class="act-btn" act-btn>上屏</button> </div> </dt> <dd class="fr"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="ml-25 mt-21"> <tr> <td width="120">昵称：</td> <td class="black">', 
        $out += $escape(nickname), $out += '</td> </tr> <tr> <td>真实姓名:</td> <td class="black">', 
        $out += $escape(membername), $out += '</td> </tr> <tr> <td>会员等级：</td> <td class="black">', 
        $out += $escape(levelname), $out += '</td> </tr> <tr> <td>参与活动次数：</td> <td class="black">', 
        $out += $escape(activitycount), $out += "</td> </tr> </table> </dd> </dl> </li> ", 
        new String($out);
    });
});
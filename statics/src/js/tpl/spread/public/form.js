/*TMODJS:{"version":1,"md5":"fcee1f82de81ef908748f847a00275f6"}*/
define(function(require) {
    return require("../../templates")("spread/public/form", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $each = $utils.$each, prizes = $data.prizes, $string = ($data.$value, 
        $data.$index, $utils.$string), changeIndex = $helpers.changeIndex, $escape = $utils.$escape, $out = "";
        return $out += " ", $each(prizes, function($value, $index) {
            $out += " <tr list> <td> <p> ", $index == prizes.length - 1 ? $out += " 其他 " : ($out += " ", 
            $out += $string(changeIndex($index)), $out += "等奖 "), $out += ' </p> <input type="text" up-name="prize" value="', 
            $out += $escape($value.prize), $out += '" need-check class="p-text"> <input type="hidden" up-name="grade" value="', 
            $index == prizes.length - 1 ? $out += "其他" : ($out += $string(changeIndex($index)), 
            $out += "等奖"), $out += '"> <input type="hidden" up-name="pkPrize" value="', $out += $escape($value.pkPrize), 
            $out += '"> <input type="hidden" up-name="residueNum" value="', $out += $escape($value.residueNum), 
            $out += '"> </td> <td> <p>数量</p> <input type="text" up-name="count" value="', $out += $escape($value.count), 
            $out += '" need-check class="p-text"> </td> <td> <span class="fl">锁定奖项</span> <input type="checkbox" class="fl mt-2 ml-5" up-name="prizeLock" need-check ', 
            "Y" == $value.prizeLock && ($out += 'checked="checked"'), $out += ">  </td> </tr> ";
        }), new String($out);
    });
});
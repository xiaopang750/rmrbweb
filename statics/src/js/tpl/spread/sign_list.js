/*TMODJS:{"version":7,"md5":"424b0b6af30264584acdafae957d72d2"}*/
define(function(require) {
    return require("../templates")("spread/sign_list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), activitySigns = $data.activitySigns, $escape = ($data.$value, 
        $data.$index, $utils.$escape), count = $data.count, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped mb-20"> <thead> <tr> <td width="10%">姓名</td> <td width="20%">公司</td> <td width="30%">地址</td> <td width="30%">电话</td> <td width="5%">状态</td> <td width="5%">渠道</td> </tr> </thead> <tbody> ', 
        $each(activitySigns, function($value) {
            $out += " <tr> <td>", $out += $escape($value.name), $out += "</td> <td>", $out += $escape($value.corp), 
            $out += "</td> <td>", $out += $escape($value.addr), $out += "</td> <td>", $out += $escape($value.tel), 
            $out += "</td> <td> ", "1" == $value.issuccess ? $out += " 已报名 " : "0" == $value.issuccess && ($out += " 已签到 "), 
            $out += " </td> <td> ", "001" == $value.signChannel ? $out += " 微信 " : "002" == $value.signChannel && ($out += " 微博 "), 
            $out += " </td> </tr> ";
        }), $out += " </tbody> </table> <div> <p>报名人数:", $out += $escape(count.signNum), 
        $out += "人</p> <p>签到人数:", $out += $escape(count.joinNum), $out += "人</p> </div>", 
        new String($out);
    });
});
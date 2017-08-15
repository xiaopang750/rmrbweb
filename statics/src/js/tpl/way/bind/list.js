/*TMODJS:{"version":6,"md5":"db756008901daa0ab4c73ddf75f3fedc"}*/
define(function(require) {
    return require("../../templates")("way/bind/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, accounts = $data.accounts, $each = $utils.$each, $string = ($data.$value, 
        $data.$index, $utils.$string), getUrl = $helpers.getUrl, $escape = $utils.$escape, $out = "";
        return $out += " ", accounts.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td>账号名称</td> <td>账号类别</td> <td>关注会员量</td> <td>绑定时间</td> <td>操作</td> </tr> </thead> <tbody> ', 
        $each(accounts, function($value) {
            $out += ' <tr list-wrap> <td> <a href="', $out += $string(getUrl("accountBindForm")), 
            $out += "&type=edit&aid=", $out += $escape($value.pkAccount), $out += "&way=", $out += $escape($value.accounttype), 
            $out += '" edit> ', $out += $escape($value.accountname), $out += ' </a> </td> <td> <a href="', 
            $out += $string(getUrl("accountBindForm")), $out += "&type=edit&aid=", $out += $escape($value.pkAccount), 
            $out += "&way=", $out += $escape($value.accounttype), $out += '" edit> ', "001" == $value.accounttype ? $out += " 微信 " : "002" == $value.accounttype ? $out += " 新浪微博 " : "003" == $value.accounttype && ($out += " 腾讯微博 "), 
            $out += " </a> </td> <td>", $out += $escape($value.reserve1), $out += "</td> <td>", 
            $out += $escape($value.ts), $out += '</td> <td> <a href="', $out += $string(getUrl("accountBindForm")), 
            $out += "&type=edit&aid=", $out += $escape($value.pkAccount), $out += "&way=", $out += $escape($value.accounttype), 
            $out += '" edit>编辑</a> <span>|</span> <a href="', $out += $string(getUrl("autoMenuIndex")), 
            $out += "&accountid=", $out += $escape($value.accountid), $out += "&accounttype=", 
            $out += $escape($value.accounttype), $out += '">自定义菜单</a> <span>|</span> <a href="javascript:;" remove aid="', 
            $out += $escape($value.pkAccount), $out += '">删除</a> <!-- <span>|</span> <a href="javascript:;" entry accountid="', 
            $out += $escape($value.pkAccount), $out += '" status="', $out += $escape($value.vdef1), 
            $out += '" ', 1 == $value.vdef1 && ($out += 'class="default"'), $out += "> ", $out += 1 == $value.vdef1 ? " 已接入 " : " 接入 ", 
            $out += " </a> --> </td> </tr> ";
        }), $out += " </tbody> </table> ") : $out += ' <div class="noData"> <p>暂无数据</p> </div> ', 
        new String($out);
    });
});
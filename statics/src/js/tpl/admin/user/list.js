/*TMODJS:{"version":9,"md5":"f6e4fc538a63801584f5782253f55b31"}*/
define(function(require) {
    return require("../../templates")("admin/user/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, userinfoes = $data.userinfoes, $string = $utils.$string, getUrl = $helpers.getUrl, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return userinfoes.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="90%" class="table auto mt-20 striped">  <thead> <tr> <td colspan="4" class="tr"> <a class="btn btn-primary pl-50 pr-50" href="', 
        $out += $string(getUrl("userEdit")), $out += '&type=add" add>添加</a> </td> </tr> <tr> <td width="20%">用户名称</td> <td width="20%">生效日期</td> <td width="20%">失效日期</td> <td width="40%">操作</td> </tr> </thead> <tbody> ', 
        $each(userinfoes, function($value) {
            $out += " <tr list> <td>", $out += $escape($value.userName), $out += "</td> <td>", 
            $out += $escape($value.ableTime), $out += "</td> <td>", $out += $escape($value.disableTime), 
            $out += '</td> <td> <a href="', $out += $string(getUrl("userEdit")), $out += "&type=edit&aid=", 
            $out += $escape($value.cuserid), $out += '" edit>编辑</a> <span>|</span> <a href="javascript:;" remove aid="', 
            $out += $escape($value.cuserid), $out += '">删除</a> </td> </tr> ';
        }), $out += " </tbody> </table> ") : ($out += ' <div class="noData"> <p>暂无数据</p> <a class="btn btn-primary" href="', 
        $out += $string(getUrl("userEdit")), $out += '&type=add" add>添加</a> </div> '), $out += " ", 
        new String($out);
    });
});
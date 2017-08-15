/*TMODJS:{"version":9,"md5":"48bcd6913940a56d4d9ad9c4bfc0e83e"}*/
define(function(require) {
    return require("../../templates")("admin/role/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, roles = $data.roles, $string = $utils.$string, getUrl = $helpers.getUrl, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", roles.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="90%" class="table striped auto mt-20"> <thead> <tr> <td class="tr" colspan="5"> <a class="btn btn-primary pl-50 pr-50" href="', 
        $out += $string(getUrl("roleEdit")), $out += '&type=add" add>添加</a> </td> </tr> <tr> <td>角色名称</td> <td>角色备注</td> <td>用户限制</td> <td>操作</td> </tr> </thead> <tbody> ', 
        $each(roles, function($value) {
            $out += " <tr list> <td>", $out += $escape($value.roleName), $out += "</td> <td>", 
            $out += $escape($value.roleMemo), $out += "</td> <td>", $out += $escape($value.usercount), 
            $out += '</td> <td> <a href="', $out += $string(getUrl("roleEdit")), $out += "&type=edit&aid=", 
            $out += $escape($value.pkRole), $out += '" edit>编辑</a> <span>|</span> <a href="javascript:;" remove aid="', 
            $out += $escape($value.pkRole), $out += '">删除</a> <span>|</span> <a href="', $out += $string(getUrl("roleUserList")), 
            $out += "&aid=", $out += $escape($value.pkRole), $out += '" role>管理用户</a> <span>|</span> <a href="', 
            $out += $string(getUrl("rolePower")), $out += "&pkRole=", $out += $escape($value.pkRole), 
            $out += '">角色权限</a> </td> </tr> ';
        }), $out += " </tbody> </table> ") : ($out += ' <div class="noData"> <p>暂无数据</p> <a class="btn btn-primary" href="', 
        $out += $string(getUrl("roleEdit")), $out += '&type=add" add>添加</a> </div> '), $out += " ", 
        new String($out);
    });
});
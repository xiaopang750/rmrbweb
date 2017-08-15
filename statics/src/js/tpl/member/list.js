/*TMODJS:{"version":1,"md5":"dfe233a92863aa54cdb204d18af99b81"}*/
define(function(require) {
    return require("../templates")("member/list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), memberInfos = $data.memberInfos, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += " ", $each(memberInfos, function($value) {
            $out += " <tr> <td>", $out += $escape($value.nickname), $out += "</td> <td>", $out += $escape($value.memberrank), 
            $out += "</td> <!-- <td>", $out += $escape($value.cellphone), $out += "</td> --> <td>", 
            $out += $escape(200), $out += "</td> <td>", $out += $escape($value.memberfrom), 
            $out += "</td> <td>", $out += $escape($value.activitycount), $out += '</td> <td> <a href="javascript:;" onclick="alert(\'功能正在开发中\')">编辑</a> <span>|</span> <a href="javascript:;" onclick="alert(\'功能正在开发中\')">删除</a> <span>|</span> <a href="javascript:;" onclick="alert(\'功能正在开发中\')">详情</a> <span>|</span> <a href="javascript:;" onclick="alert(\'功能正在开发中\')">拉黑</a> </td> </tr> ';
        }), new String($out);
    });
});
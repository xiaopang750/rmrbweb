/*TMODJS:{"version":4,"md5":"f1973e9734121bf22f3234ae712540c9"}*/
define(function(require) {
    return require("../../templates")("admin/knowlege/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, knowledgestorge = $data.knowledgestorge, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td colspan="4" class="tr"> <a href="', 
        $out += $string(getUrl("knowledgeEdit")), $out += '" class="btn btn-primary">添加</a> </td> </tr> <tr> <td width="25%">名称</td> <td width="25%">内容</td> <td width="25%">类别</td> <td width="25%">操作</td> </tr> </thead> <tbody> ', 
        knowledgestorge.length ? ($out += " ", $each(knowledgestorge, function($value) {
            $out += " <tr rule-list> <td>", $out += $escape($value.konwledgename), $out += "</td> <td>", 
            $out += $escape($value.konwledgecontent), $out += "</td> <td>", $out += $escape($value.konwledgetype), 
            $out += '</td> <td> <a href="', $out += $string(getUrl("knowledgeEdit")), $out += "&kid=", 
            $out += $escape($value.pkKnowledgestorge), $out += '">编辑</a> <a href="javascript:;" remove aid="', 
            $out += $escape($value.pkKnowledgestorge), $out += '">删除</a> </td> </tr> ';
        }), $out += " ") : ($out += ' <tr> <td colspan="4"> <p>暂无数据</p> <a href="', $out += $string(getUrl("knowledgeEdit")), 
        $out += '" class="btn btn-primary">添加</a> </td> </tr> '), $out += " </tbody> </table>", 
        new String($out);
    });
});
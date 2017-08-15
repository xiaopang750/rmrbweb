/*TMODJS:{"version":4,"md5":"464dc998d9fb8cef9bb3217c1a53da28"}*/
define(function(require) {
    return require("../../../templates")("spread/question/ku/ku_list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, questions = $data.questions, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, getUrl = $helpers.getUrl, $out = "";
        return questions.length ? ($out += ' <tr> <td width="10%">序号</td> <td width="70%">问题</td> <td width="20%">操作</td> </tr> ', 
        $each(questions, function($value, $index) {
            $out += " <tr> <td>Q", $out += $escape($index + 1), $out += "</td> <td>", $out += $escape($value.questionname), 
            $out += '</td> <td> <a href="', $out += $string(getUrl("questionStorageEdit")), 
            $out += "&way=", $out += $escape($value.reserve1), $out += "&kid=", $out += $escape($value.pkQuestion), 
            $out += '">编辑</a> <span>|</span> <a href="javascript:;" remove aid="', $out += $escape($value.pkQuestion), 
            $out += '">删除</a> </td> </tr> ';
        }), $out += " ") : $out += ' <tr> <td colspan="3">暂无数据</td> </tr> ', new String($out);
    });
});
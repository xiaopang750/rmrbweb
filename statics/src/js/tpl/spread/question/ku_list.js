/*TMODJS:{"version":1,"md5":"c0acd74943bbc2136a60cb413521f9d7"}*/
define(function(require) {
    return require("../../templates")("spread/question/ku_list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), questins = $data.questins, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<table cellpadding="0" cellspacing="0" border="0" width="100%"> <tr> <td colspan="3">  <div class="fr mr-5"> <span class="black mr-10 font-14">按问题库类别查询:</span> <select change-type> <option value="">请选择</option> </select> </div> </td> </tr> <tr> <td>序号1</td> <td width="70%">问题</td> <td>操作</td> </tr> ', 
        $each(questins, function($value, $index) {
            $out += " <tr> <td>Q", $out += $escape($index + 1), $out += '</td> <td>您一般在哪里买XX?</td> <td> <a href="javascript:;">编辑</a> </td> </tr> ';
        }), $out += " </table>", new String($out);
    });
});
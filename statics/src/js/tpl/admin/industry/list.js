/*TMODJS:{"version":4,"md5":"726c188ac4e1ff6d2b11b38d5a8f0b71"}*/
define(function(require) {
    return require("../../templates")("admin/industry/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, datas = $data.datas, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += '<table class="table striped" width="100%"> <thead> <tr> <td colspan="2"> <a href="', 
        $out += $string(getUrl("dataDictionaryEdit")), $out += '" class="btn btn-primary pl-50 pr-50 fr" link>添加</a> </td> </tr> <tr> <td width="50%">行业名称</td> <td width="50%">管理</td> </tr> </thead> <tbody> ', 
        datas.length ? ($out += " ", $each(datas, function($value) {
            $out += " <tr> <td>", $out += $escape($value.dataName), $out += '</td> <td> <a href="', 
            $out += $string(getUrl("dataDictionaryEdit")), $out += $escape("&pid=" + $value.pkDictionarySub), 
            $out += '" link>编辑</a> <span>|</span> <a href="javascript:;" remove aid="', $out += $escape($value.pkDictionarySub), 
            $out += '">删除</a> </td> </tr> ';
        }), $out += " ") : $out += ' <tr> <td colspan="2"> <div>暂无数据</div> </td> </tr> ', 
        $out += " </tbody> </table>", new String($out);
    });
});
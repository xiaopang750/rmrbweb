/*TMODJS:{"version":7,"md5":"14625e7b85353b5169bf9a43413f3fff"}*/
define(function(require) {
    return require("../../templates")("way/level/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, mLevels = $data.mLevels, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, getUrl = $helpers.getUrl, $out = "";
        return $out += " ", mLevels.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped auto mt-20"> <thead> <tr> <td></td> <td>会员级别名称</td> <td> 积分下限 </td> <td>积分上限</td> <td>备注</td> <td>操作</td> </tr> </thead> <tbody> ', 
        $each(mLevels, function($value, $index) {
            $out += ' <tr list-wrap> <td width="50"> <span class="level"></span> <span>', $out += $escape($index + 1), 
            $out += "</span> </td> <td>", $out += $escape($value.levelname), $out += "</td> <td>", 
            $out += $escape($value.minPoint), $out += "</td> <td>", $out += $escape($value.maxPoint), 
            $out += "</td> <td>", $out += $escape($value.levelremark), $out += '</td> <td> <a href="', 
            $out += $string(getUrl("memberLevelForm")), $out += "&type=edit&aid=", $out += $escape($value.pkMemberlevel), 
            $out += '" aid="', $out += $escape($value.pkMemberlevel), $out += '">编辑</a> <span>|</span> <a href="javascript:;" aid="', 
            $out += $escape($value.pkMemberlevel), $out += '" remove>删除</a> </td> </tr> ';
        }), $out += ' <tr> <td colspan="6" class="tr"> <a add href="', $out += $string(getUrl("memberLevelForm")), 
        $out += '&type=add" class="btn btn-primary pl-50 pr-50">添加</a> </td> </tr> </tbody> </table> ') : ($out += ' <div class="noData"> <p>暂无数据</p> <a add href="', 
        $out += $string(getUrl("memberLevelForm")), $out += '&type=add" class="btn btn-primary">添加</a> </div> '), 
        new String($out);
    });
});
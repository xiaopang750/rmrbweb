/*TMODJS:{"version":13,"md5":"1338f03065867f8fa5ae353828040c4a"}*/
define(function(require) {
    return require("../../templates")("spread/question/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, wjObjects = $data.wjObjects, $string = $utils.$string, getUrl = $helpers.getUrl, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return wjObjects.length ? ($out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td colspan="7"> <a href="', 
        $out += $string(getUrl("surveyAddForm")), $out += '" class="btn btn-primary fr">创建问卷</a> </td> </tr> <tr> <td width="10%">序号</td> <td width="10%">问卷名称</td> <td width="15%">创建时间</td> <td width="15%">编辑时间</td> <td width="10%">当前状态</td> <td width="10%">收到答卷数</td> <td width="30%">管理</td> </tr> </thead> <tbody data-ele="data-wrap"> ', 
        $each(wjObjects, function($value, $index) {
            $out += " <tr list> <td>", $out += $escape($index + 1), $out += "</td> <td>", $out += $escape($value.title), 
            $out += "</td> <td>", $out += $escape($value.createtime), $out += "</td> <td>", 
            $out += $escape($value.lastedittime), $out += "</td> <td pub-status> ", $out += 1 == $value.state ? " 未发布 " : " 已发布 ", 
            $out += " </td> <td>", $out += $escape($value.answernum), $out += '</td> <td> <a href="', 
            $out += $string(getUrl("surveyEditForm")), $out += "&type=edit&eid=", $out += $escape($value.pkObject), 
            $out += '" edit>编辑</a> <span>|</span> <a href="javascript:;" aid="', $out += $escape($value.pkObject), 
            $out += '" remove>删除</a> <span>|</span> <a href="javascript:;" box-set lid="', $out += $escape($value.pkActivity), 
            $out += '">发布渠道</a> <span>|</span> <a href="javascript:;" send sid="', $out += $escape($value.pkActivity), 
            $out += '">推送</a> <span>|</span> <a href="', $out += $string(getUrl("surveyResultCollect")), 
            $out += "&pkObject=", $out += $escape($value.pkObject), $out += '">结果搜集</a> <span>|</span> <a href="javascript:;" aid="', 
            $out += $escape($value.pkObject), $out += '" quote>引用问卷</a> </td> </tr> ';
        }), $out += " </tbody> </table> ") : $out += ' <div class="tc">暂无数据</div> ', $out += " ", 
        new String($out);
    });
});
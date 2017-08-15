/*TMODJS:{"version":13,"md5":"1046f5b7b9cb7b7f9204c1978340c7ba"}*/
define(function(require) {
    return require("../../templates")("spread/score_goods/pic_text", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, activities = $data.activities, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, getUrl = $helpers.getUrl, $out = "";
        return $out += '<table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <thead> <tr> <td colspan="6"> <span class="select-area fl mt-10" select-area> </span> <a class="btn btn-primary fr" href="javascript:;" data-ele="build-btn" select-pic-type> 添加图文消息 </a> </td> </tr> </thead> ', 
        activities.length ? ($out += ' <thead> <tr> <td width="10%">名称</td> <td width="30%">发布状态</td> <td width="10%">创建时间</td> <td width="10%">创建人</td> <td width="20%">封面图片</td> <td width="20%">操作</td> </tr> </thead> ', 
        $each(activities, function($value) {
            $out += " <tr rule-list> <td>", $out += $escape($value.activitytopic), $out += "</td> <td> ", 
            "001" == $value.activitystatus ? $out += ' <span class="red">新建</span> ' : "002" == $value.activitystatus ? $out += ' <span class="blue">等待推送</span> ' : "003" == $value.activitystatus && ($out += ' <span class="yellow">进行中</span> '), 
            $out += " </td> <td>", $out += $escape($value.ts), $out += "</td> <td>", $out += $escape($value.activityiowner), 
            $out += '</td> <td> <img src="', $out += $escape($value.activityheader), $out += '" height="100"> </td> <td> <a class="mr-5" href="', 
            $out += $string(getUrl("muliEdit")), $out += $escape("&pkActivity=" + $value.pkActivity + "&way=" + $value.vdef1), 
            $out += '"> 编辑 </a> <a class="mr-5" href="javascript:;" removepic rid="', $out += $escape($value.pkActivity), 
            $out += '"> 删除 </a> <a class="mr-5" href="javascript:;" box-set lid="', $out += $escape($value.pkActivity), 
            $out += '"> 发布渠道 </a> <a class="mr-5" href="javascript:;" send sid="', $out += $escape($value.pkActivity), 
            $out += '"> 推送 </a> <a href="', $out += $string(getUrl("integralRuleList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">积分规则</a> <a href="', $out += $string(getUrl("reviewList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">评论情况</a> <a href="javascript:;" pid="', $out += $escape($value.pkActivity), 
            $out += '" set-time>有效期</a> </td> </tr> ';
        }), $out += " ") : $out += ' <tr colspan="4"> <td> 暂无数据 </td> </tr> ', $out += " </table>", 
        new String($out);
    });
});
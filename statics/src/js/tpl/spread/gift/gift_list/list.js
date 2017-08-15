/*TMODJS:{"version":37,"md5":"8ffa316fc82dfda295cdad6ea6c411ac"}*/
define(function(require) {
    return require("../../../templates")("spread/gift/gift_list/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, activities = $data.activities, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), listType = $data.listType, $string = $utils.$string, getUrl = $helpers.getUrl, $out = "";
        return $out += " ", activities.length ? ($out += " ", $each(activities, function($value) {
            $out += ' <li class="main-list"> <div class="list show rel"> <div class="top rel font-14"> <dl> <dt> <table cellpadding="0" cellspacing="0" border="0" width="100%"> <tr> <td width="100">名称：</td> <td>', 
            $out += $escape($value.activitytopic), $out += "</td> </tr> <tr> <td>发布状态：</td> <td> ", 
            "001" == $value.activitystatus ? $out += ' <span class="red">新建</span> ' : "002" == $value.activitystatus ? $out += ' <span class="blue">等待推送</span> ' : "003" == $value.activitystatus && ($out += ' <span class="yellow">进行中</span> '), 
            $out += ' </td> </tr> </table> </dt> <dd class="rel"> <!-- <img src="', $out += $escape($value.activityheader), 
            $out += '" width="100%" class="bg"> --> <div class="content"> ', $out += $escape($value.activitycontent), 
            $out += ' </div> <div class="qcode"> <a href="javascript:;" class="r-btn download" qcode-btn aid="', 
            $out += $escape($value.pkActivity), $out += '"></a> <p>下载二维码</p> </div> </dd> </dl> </div> ', 
            "nofunc" != listType && ($out += ' <div class="bot"> <ul class="clearfix font-14 pl-20"> <li> <span class="r-icon met-edit mr-2"></span> <a href="', 
            $out += $string(getUrl("muliEdit")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">编辑</a> </li> <li> <span class="r-icon met-remove mr-2"></span> <a href="javascript:;" remove rid="', 
            $out += $escape($value.pkActivity), $out += '">删除</a> </li> <li> <span class="r-icon met-set mr-2"></span> <a href="javascript:;" box-set lid="', 
            $out += $escape($value.pkActivity), $out += '">发布渠道</a> </li> <li> <span class="r-icon met-send mr-2"></span> <a href="javascript:;" send sid="', 
            $out += $escape($value.pkActivity), $out += '">推送</a> </li> </ul> <ul class="clearfix font-14 pl-20"> <li class="ml-10"> <a href="', 
            $out += $string(getUrl("singList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">报名情况</a> </li> <li class="ml-10"> <a href="', $out += $string(getUrl("reviewList")), 
            $out += $escape("&pkActivity=" + $value.pkActivity), $out += '">评论情况</a> </li> <li class="ml-10"> <a href="', 
            $out += $string(getUrl("integralRuleList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">积分规则</a> </li> <li class="ml-10"> <a href="javascript:;" aid="', $out += $escape($value.pkActivity), 
            $out += '" verification>核销</a> </li> <li class="ml-10"> <a href="javascript:;" pid="', 
            $out += $escape($value.pkActivity), $out += '" set-time>有效期</a> </li> </ul> </div> '), 
            $out += " </div> </li> ";
        }), $out += " ") : $out += ' <div class="noData"> <p>暂无数据</p> </div> ', new String($out);
    });
});
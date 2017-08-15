/*TMODJS:{"version":15,"md5":"4545e16ea5e90a952fb94b101eab34c4"}*/
define(function(require) {
    return require("../../templates")("spread/met_act/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, $each = $utils.$each, activities = $data.activities, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <li class="main-list"> <div class="list"> <div class="inner"> <div class="add-area tc"> <a class="r-btn mobile-build-btn" data-ele="build-btn" href="', 
        $out += $string(getUrl("createMeetModel")), $out += '"></a> <br> <span class="font-14">新建会议</span> </div> </div> </div> </li> ', 
        $each(activities, function($value) {
            $out += ' <li class="main-list"> <div class="list show rel"> <div class="top rel ml-20 pt-30 font-14"> <ul> <li>会议名称：<span class="bold black">', 
            $out += $escape($value.activitytopic), $out += '</span></li> <li>当前状态： <span class="bold black"> ', 
            "001" == $value.activitystatus ? $out += ' <span class="red">新建</span> ' : "002" == $value.activitystatus ? $out += ' <span class="blue">等待推送</span> ' : "003" == $value.activitystatus && ($out += ' <span class="yellow">进行中</span> '), 
            $out += ' </span> </li> <li>开始时间：<span class="bold black">', $out += $escape($value.starttime), 
            $out += '</span></li> <li>结束时间：<span class="bold black">', $out += $escape($value.endtime), 
            $out += '</span></li>  </ul> <div class="qcode"> <a href="javascript:;" class="r-btn download" qcode-btn aid="', 
            $out += $escape($value.pkActivity), $out += '"></a> <p>下载二维码</p> </div> </div> <div class="bot"> <ul class="clearfix font-14"> <li> <span class="r-icon met-edit mr-6"></span> <a href="', 
            $out += $string(getUrl("meetEdit")), $out += $escape("&pkActivity=" + $value.pkActivity + "&type=" + $value.vdef5 + "&flow=1"), 
            $out += '">编辑</a> </li> <li> <span class="r-icon met-remove mr-6"></span> <a href="javascript:;" remove rid="', 
            $out += $escape($value.pkActivity), $out += '">删除</a> </li> <li> <span class="r-icon met-set mr-6 ml-6"></span> <a href="javascript:;" box-set lid="', 
            $out += $escape($value.pkActivity), $out += '">发布渠道</a> </li> <li> <span class="r-icon met-send mr-6"></span> <a href="javascript:;" send sid="', 
            $out += $escape($value.pkActivity), $out += '">推送</a> </li> </ul> <ul class="clearfix font-14"> <li class="ml-10"> <a href="', 
            $out += $string(getUrl("integralRuleList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">积分规则</a> </li> <li class="ml-10"> <a href="', $out += $string(getUrl("singList")), 
            $out += $escape("&pkActivity=" + $value.pkActivity), $out += '">报名情况</a> </li> <li class="ml-10"> <a href="', 
            $out += $string(getUrl("awardList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">现场抽奖</a> </li> <li class="ml-10"> <a href="', $out += $string(getUrl("meetInteract")), 
            $out += $escape("&pkActivity=" + $value.pkActivity), $out += '">会议互动</a> </li> </ul> </div> </div> </li> ';
        }), new String($out);
    });
});
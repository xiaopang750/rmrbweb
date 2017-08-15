/*TMODJS:{"version":15,"md5":"8a8afa377e31b78ce0fe4a7e365cc8c6"}*/
define(function(require) {
    return require("../../templates")("spread/public/list2", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, $escape = $utils.$escape, $each = $utils.$each, activities = $data.activities, $out = ($data.$value, 
        $data.$index, "");
        return $out += ' <li class="main-list"> <div class="list"> <div class="inner"> <div class="add-area tc"> <a class="r-btn mobile-build-btn" href="', 
        $out += $string(getUrl("muliEdit")), $out += $escape("&parentActivity="), $out += $string(getUrl("pkActivity")), 
        $out += '"></a> <br> <span class="font-14">新建</span> </div> </div> </div> </li> ', 
        $each(activities, function($value) {
            $out += ' <li class="main-list"> <div class="list show rel"> <div class="top rel ml-20 pt-30 font-14"> <ul> <li>名称：<span class="bold black">', 
            $out += $escape($value.activitytopic), $out += '</span></li> <li>发布状态： <span class="bold black"> ', 
            "001" == $value.activitystatus ? $out += ' <span class="red">新建</span> ' : "002" == $value.activitystatus ? $out += ' <span class="blue">等待推送</span> ' : "003" == $value.activitystatus && ($out += ' <span class="yellow">进行中</span> '), 
            $out += ' </span> </li> <li>创建时间：<span class="bold black">', $out += $escape($value.ts), 
            $out += '</span></li> <li>创建人：<span class="bold black">', $out += $escape($value.activityiowner), 
            $out += '</span></li> </ul> </div> <div class="bot"> <ul class="clearfix font-14"> <li> <span class="r-icon met-edit mr-6"></span> <a href="', 
            $out += $string(getUrl("muliEdit")), $out += "&parentActivity=", $out += $escape($value.parentActivity), 
            $out += "&pkActivity=", $out += $escape($value.pkActivity), $out += '">编辑</a> </li> <li> <span class="r-icon met-remove mr-6"></span> <a href="javascript:;" remove rid="', 
            $out += $escape($value.pkActivity), $out += '">删除</a> </li> <!-- <li> <span class="r-icon met-set mr-6 ml-6"></span> <a href="javascript:;" box-set lid="', 
            $out += $escape($value.pkActivity), $out += '">发布渠道</a> </li> --> <li> <span class="r-icon met-send mr-6"></span> <a href="javascript:;" send sid="', 
            $out += $escape($value.pkActivity), $out += '">推送</a> </li> </ul> <ul class="clearfix font-14"> <li> <a href="', 
            $out += $string(getUrl("integralRuleList")), $out += $escape("&pkActivity=" + $value.pkActivity), 
            $out += '">积分规则</a> </li> <li> <a href="', $out += $string(getUrl("reviewList")), 
            $out += $escape("&pkActivity=" + $value.pkActivity), $out += '">评论情况</a> </li> </ul> </div> </div> </li> ';
        }), $out += " ", new String($out);
    });
});
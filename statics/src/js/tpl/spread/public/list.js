/*TMODJS:{"version":10,"md5":"37eb96fa2fb6f01193fcf3e98ff49230"}*/
define(function(require) {
    return require("../../templates")("spread/public/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, $escape = $utils.$escape, $each = $utils.$each, activities = $data.activities, menus = ($data.$value, 
        $data.$index, $data.menus), $out = ($data.$value2, $data.index, "");
        return $out += ' <li class="main-list"> <div class="list"> <div class="inner"> <div class="add-area tc"> <a class="r-btn mobile-build-btn" href="', 
        $out += $string(getUrl("awardEdit")), $out += $escape("&parentActivity="), $out += $string(getUrl("pkActivity")), 
        $out += '"></a> <br> <span class="font-14">新建</span> </div> </div> </div> </li> ', 
        $each(activities, function($value) {
            $out += ' <li class="main-list"> <div class="list show rel"> <div class="top rel ml-20 pt-30 font-14"> <ul> <li>名称：<span class="bold black">', 
            $out += $escape($value.activitytopic), $out += '</span></li> <li>发布状态： <span class="bold black"> ', 
            "001" == $value.activitystatus ? $out += ' <span class="red">新建</span> ' : "002" == $value.activitystatus ? $out += ' <span class="blue">等待推送</span> ' : "003" == $value.activitystatus && ($out += ' <span class="yellow">进行中</span> '), 
            $out += ' </span> </li> <li>创建时间：<span class="bold black">', $out += $escape($value.ts), 
            $out += '</span></li> <li>创建人：<span class="bold black">', $out += $escape($value.activityiowner), 
            $out += '</span></li> </ul> </div> <div class="bot"> <ul class="clearfix font-14"> <li> <span class="r-icon met-edit mr-6"></span> <a href="', 
            $out += $string(getUrl("awardEdit")), $out += "&parentActivity=", $out += $escape($value.parentActivity), 
            $out += "&pkActivity=", $out += $escape($value.pkActivity), $out += '">编辑</a> </li> <li> <span class="r-icon met-remove mr-6"></span> <a href="javascript:;" remove rid="', 
            $out += $escape($value.pkActivity), $out += '">删除</a> </li> <!-- <li> <span class="r-icon met-set mr-6 ml-6"></span> <a href="javascript:;" box-set lid="', 
            $out += $escape($value.pkActivity), $out += '">发布渠道</a> </li> --> <li> <span class="r-icon met-send mr-6"></span> <a href="javascript:;" send sid="', 
            $out += $escape($value.pkActivity), $out += '">推送</a> </li> </ul> <ul class="clearfix font-14"> ', 
            $each(menus, function($value2) {
                $out += ' <li> <a href="..', $out += $escape($value2.labelhref), $out += $escape($value.pkActivity), 
                $out += '">', $out += $escape($value2.labelName), $out += "</a> </li> ";
            }), $out += " </ul> </div> </div> </li> ";
        }), $out += " ", new String($out);
    });
});
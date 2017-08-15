/*TMODJS:{"version":9,"md5":"b70684ae20697b665c470b1895480a87"}*/
define(function(require) {
    return require("../mobile_view/main/type1"), require("../mobile_view/main/type2"), 
    require("../templates")("mobile_hased/list", function($data, $filename) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, sites = $data.sites, $each = $utils.$each, $string = ($data.$value, 
        $data.$index, $utils.$string), getUrl = $helpers.getUrl, $escape = $utils.$escape, domainIp = $data.domainIp, include = function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }, basePath = $helpers.basePath, $out = "";
        return sites && ($out += " ", $each(sites, function($value) {
            $out += ' <li class="hased" mobile-list link="', $out += $string(getUrl("pageList")), 
            $out += $escape("&pkSite=" + $value.siteBasic.siteId), $out += '" name="', $out += $escape($value.siteBasic.reserve2), 
            $out += '"> <span class="r-btn mobile-remove" remove aid="', $out += $escape($value.siteBasic.siteId), 
            $out += '"></span> <div class="domain-related"> <a href="javascript:;" class="font-14" domain-related aid="', 
            $out += $escape($value.siteBasic.siteId), $out += '" ip="', $out += $escape(domainIp), 
            $out += '" url="', $out += $escape($value.domain), $out += '">域名映射</a> </div> <div class="mobile-view-wrap" view-wrap> ', 
            "indexModelOne" == $value.siteBasic.modelcode ? ($out += " ", include("../mobile_view/main/type1", $value), 
            $out += " ") : "indexModelTwo" == $value.siteBasic.modelcode ? ($out += " ", include("../mobile_view/main/type2", $value), 
            $out += " ") : "indexModelThree" == $value.siteBasic.modelcode && ($out += '  <div class="mobile-view-inner"> <div class="mobile-lead"></div> <div> <img src="', 
            $out += $string(basePath()), $out += '/lib/logo/snail_logo_l2.jpg" alt="金蜗牛">  </div> </div> '), 
            $out += ' <div class="mobile-lay"> <div class="shadow"></div> <div class="content"> <div class="inner font-14 bold"> <p> <span class="yellow">网站名称：</span> <span class="white">', 
            $out += $escape($value.siteBasic.siteName), $out += '</span> </p> <p> <span class="yellow">行业类型：</span> <span class="white">', 
            $out += $escape($value.siteBasic.siteProfession), $out += '</span> </p> <p> <span class="yellow">建站者：</span> <span class="white">', 
            $out += $escape($value.siteBasic.creator), $out += '</span> </p> <p> <span class="yellow">建站时间：</span> <span class="white"> ', 
            $value.siteBasic.createtime && ($out += " ", $out += $escape(($value.siteBasic.createtime + "").substring(0, 10)), 
            $out += " "), $out += ' </span> </p> <p> <span class="yellow">目前状态：</span> <span class="white"> ', 
            $out += "1" == $value.siteBasic.isused ? " 启用 " : " 未启用 ", $out += ' </span> </p> </div> <a class="detail" href="', 
            $out += $string(getUrl("pageList")), $out += $escape("&pkSite=" + $value.siteBasic.siteId), 
            $out += '"> <span class="r-icon mobile-hased-detail pointer"></span> </a> </div> </div> </div> </li> ';
        }), $out += " "), $out += ' <li class="build"> <div class="mobile-view-wrap add"> <span class="mobile-build-wrap"> <a class="r-btn mobile-build-btn" href="', 
        $out += $string(getUrl("siteAddForm")), $out += '"></a> <p class="tc font-14 mt-5">新建手机网站</p> </span> </div> </li>', 
        new String($out);
    });
});
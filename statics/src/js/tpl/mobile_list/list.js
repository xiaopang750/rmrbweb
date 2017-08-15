/*TMODJS:{"version":23,"md5":"4eb1501ab34fd5739aef62b39ab65b28"}*/
define(function(require) {
    return require("../templates")("mobile_list/list", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, pages = $data.pages, $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, cutDomain = $helpers.cutDomain, cutDomainName = $helpers.cutDomainName, getUrl = $helpers.getUrl, $out = "";
        return $out += " ", pages.length ? ($out += ' <table cellspacing="0" cellpadding="0" border="0" width="90%" class="table striped auto mt-20"> <thead> <tr> <td width="10%">页面名称</td> <td width="10%">访问量</td> <td width="50%">页面地址</td> <td width="10%">页面状态</td> <td width="20%">操作</td> </tr> </thead> <tbody> ', 
        $each(pages, function($value) {
            $out += ' <tr data-ele="list-wrap"> <td>', $out += $escape($value.webname), $out += "</td> <td>", 
            $out += $escape($value.visitAccount), $out += '</td> <td> <div class="mt-5 clearfix pl-20"> <!-- <span class="fl">', 
            $out += $string(cutDomain($value.weburl)), $out += '</span> --> <span class="fl" page="', 
            $out += $escape($value.pkWeblist), $out += '" site="', $out += $escape($value.referId), 
            $out += '"> ', $out += $string(cutDomainName($value.weburl)), $out += ' </span> <span class="fl mr-10">.html</span> <span class="modify-area fl">  <span view-btn class="', 
            0 == $value.isused && ($out += "none"), $out += ' fl mr-10"> <a href="javascript:;" class="fl" data-ele="show-code" url="', 
            $out += $escape($value.reserve10), $out += '">预览</a> </span> <a href="javascript:;" class="fl" copy url="', 
            $out += $escape($value.reserve10), $out += '" pkSite="', $out += $escape($value.referId), 
            $out += '" pkPage="', $out += $escape($value.pkWeblist), $out += '">复制完整链接</a> </span> </div> </td> <td> <div class="r-btn turn-on-off-btn ', 
            1 == $value.isused && ($out += "active"), $out += '" data-ele="switch" pageId="', 
            $out += $escape($value.pkWeblist), $out += '"></div> </td> <td> <a class="" href="', 
            $out += $string(getUrl("sitePageEdit")), $out += $escape("&modelCode=" + $value.modelcode + "&pkSite=" + $value.referId + "&pkPage=" + $value.pkWeblist), 
            $out += '">编辑</a> <span>|</span> <a href="javascript:;" remove siteId="', $out += $escape($value.referId), 
            $out += '" pageId="', $out += $escape($value.pkWeblist), $out += '">删除</a> </td> </tr> ';
        }), $out += " </tbody> </table> ") : $out += ' <div class="tc">该站点已经删除</div> ', 
        new String($out);
    });
});
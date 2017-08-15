/*TMODJS:{"version":25,"md5":"1c8cf8ce3a258fffce78d8512b038cd3"}*/
define(function(require) {
    return require("../templates")("mobile_tree/tree", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, getUrl = $helpers.getUrl, $each = $utils.$each, tree = $data.tree, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = ($data.value1, $data.index, $data.value2, 
        "");
        return $out += ' <div class="tree-moudle" m-tree-wrap> <span class="r-btn tree-btn"> <div class="m-add" m-add link="', 
        $out += $string(getUrl("pageAddForm")), $out += '"></div> <div class="m-slide" m-slide></div> </span> <div class="tree-main" m-tree-main> <ul> ', 
        $each(tree, function($value) {
            $out += ' <li class="main-list" m-tree-list> <dl> <dt class="clearfix" m-tree-head> <span class="r-icon mobile-tree-dec ml-17 mr-6 fl mt-10"></span> <a class="font-14 blue bold fl mt-5 m-select" href="', 
            $out += $string(getUrl("sitePageEdit")), $out += $escape("&modelCode=" + $value.modelCode + "&pkSite=" + $value.pageId + "&pkPage=" + $value.pageId), 
            $out += '" m-select parentName="', $out += $escape($value.parentName), $out += '" pkSite="', 
            $out += $escape($value.pageId), $out += '" parentId="', $out += $escape($value.pageId), 
            $out += '" tree-add> ', $out += $escape($value.pageName), $out += " </a> </dt> ", 
            $value.child.length && ($out += " <dd m-tree-content ", $value.child || ($out += 'status="no-data"'), 
            $out += "> <ul> ", $value.child && ($out += " ", $each($value.child, function(value1) {
                $out += ' <li> <span class="r-icon mobile-tree-list fl"></span> <a href="', $out += $string(getUrl("sitePageEdit")), 
                $out += $escape("&modelCode=" + value1.modelCode + "&pkSite=" + $value.pageId + "&pkPage=" + value1.pageId), 
                $out += '" m-select class="m-select fl mt-9" parentName="', $out += $escape(value1.pageName), 
                $out += '" pkSite="', $out += $escape($value.pageId), $out += '" parentId="', $out += $escape(value1.pageId), 
                $out += '" tree-add> ', $out += $escape(value1.pageName), $out += ' </a> <div class="clear"></div> <ul> ', 
                $each(value1.child, function(value2) {
                    $out += ' <li> <span class="r-icon mobile-tree-list fl"></span> <a href="', $out += $string(getUrl("sitePageEdit")), 
                    $out += $escape("&modelCode=" + value2.modelCode + "&pkSite=" + $value.pageId + "&pkPage=" + value2.pageId), 
                    $out += '" class="m-select fl mt-9">', $out += $escape(value2.pageName), $out += '</a> <div class="clear"></div> </li> ';
                }), $out += " </ul> </li> ";
            }), $out += " "), $out += " </ul> </dd> "), $out += " </dl> </li> ";
        }), $out += " </ul> </div> </div>", new String($out);
    });
});
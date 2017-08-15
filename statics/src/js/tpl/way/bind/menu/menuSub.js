/*TMODJS:{"version":1,"md5":"5caee72705bfa97aa11438311de76c9e"}*/
define(function(require) {
    return require("../../../templates")("way/bind/menu/menuSub", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), pkMenuid = $data.pkMenuid, menuType = $data.menuType, menuname = $data.menuname, $out = "";
        return $out += ' <li class="list list-head move" sc="hover-list" role="sub-list" sort-list-sub move list-id="', 
        $out += $escape(pkMenuid), $out += '" ', menuType ? ($out += "select-type=", $out += $escape(menuType)) : $out += 'select-type="0"', 
        $out += ' list-sub="sub"> <i class="icon_dot">●</i> <a href="javascript:void(0);" class="inner_menu_link" sc="inner_menu_link"> <strong sc="sub-name">', 
        $out += $escape(menuname), $out += '</strong> </a> <span class="menu_opr"> <span sc="func-btn-area" class="func-btn-area"> <a href="javascript:void(0);" class="edit" sc="list-edit-sub" role="sub" list-id="', 
        $out += $escape(pkMenuid), $out += '" name="', $out += $escape(menuname), $out += '" editor>编辑</a> <a href="javascript:void(0);" class="del" sc="list-del" role="sub" list-id="', 
        $out += $escape(pkMenuid), $out += '" type="sub">删除</a> </span> <a href="javascript:void(0);" class="sort" sc="list-sort" role="sub">排序</a> </span> </li>', 
        new String($out);
    });
});
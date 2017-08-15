/*TMODJS:{"version":1,"md5":"865531a5865178e248135abb458a68f8"}*/
define(function(require) {
    return require("./menuSub"), require("../../../templates")("way/bind/menu/menuMain", function($data, $filename) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), data = $data.data, $escape = ($data.$value, 
        $data.$index, $utils.$escape), include = ($data.$value2, $data.index2, function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }), $out = "";
        return $out += " ", $each(data.menu_list, function($value) {
            $out += ' <div class="main-list move" role="main-list" sort-list-main move list-id="', 
            $out += $escape($value.pkMenuid), $out += '"> <div class="list list-head" sc="hover-list" ', 
            $value.menuType || $value.menu_son_list.length ? $value.menuType && !$value.menu_son_list.length ? ($out += "select-type=", 
            $out += $escape($value.menuType)) : $value.menu_son_list.length && ($out += 'select-type="-1"') : $out += 'select-type="0"', 
            $out += ' list-id="', $out += $escape($value.pkMenuid), $out += '" list-parent="parent"> <i class="trangle"></i> <a href="javascript:void(0);" class="inner_menu_link first" sc="inner_menu_link"> <strong sc="main-name">', 
            $out += $escape($value.menuname), $out += '</strong> </a> <span class="menu_opr"> <span sc="func-btn-area" class="func-btn-area"> <a href="javascript:void(0);" class="add" sc="list-add" role="main" list-id="', 
            $out += $escape($value.pkMenuid), $out += '">添加</a> <a href="javascript:void(0);" class="edit" sc="list-edit-main" role="main" list-id="', 
            $out += $escape($value.pkMenuid), $out += '" name="', $out += $escape($value.menuname), 
            $out += '" editor>编辑</a> <a href="javascript:void(0);" class="del" sc="list-del" role="main" list-id="', 
            $out += $escape($value.pkMenuid), $out += '" type="main">删除</a> </span> <a href="javascript:void(0);" class="sort" sc="list-sort" role="main">排序</a> </span> </div> <ul sc="sub-wrap" class="sub-wrap" list-id="', 
            $out += $escape($value.pkMenuid), $out += '"> ', $each($value.menu_son_list, function($value2) {
                $out += " ", include("./menuSub", $value2), $out += " ";
            }), $out += " </ul> </div> ";
        }), $out += " ", new String($out);
    });
});
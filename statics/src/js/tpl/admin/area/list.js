/*TMODJS:{"version":1,"md5":"cb4320d14fb41f372c809b4d47b5c8d9"}*/
define(function(require) {
    return require("../../templates")("admin/area/list", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), shopareas = $data.shopareas, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped mt-20"> <thead> <tr> <td colspan="4" class="tr"> <a href="javascript:;" class="btn btn-primary" add show-form>添加</a> </td> </tr> </thead> <tbody> <tr> <td>店铺名称</td> <td>店铺地址</td> <td>店铺编码</td> <td>操作</td> </tr> ', 
        $each(shopareas, function($value) {
            $out += " <tr list-wrap> <td>", $out += $escape($value.shopname), $out += "</td> <td>", 
            $out += $escape($value.shopaddr), $out += "</td> <td>", $out += $escape($value.shopcode), 
            $out += '</td> <td> <a href="javascript:;" aid="', $out += $escape($value.pkShoparea), 
            $out += '" edit show-form name="', $out += $escape($value.shopname), $out += '" add="', 
            $out += $escape($value.shopaddr), $out += '" code="', $out += $escape($value.shopcode), 
            $out += '">编辑</a> <span>|</span> <a href="javascript:;" aid="', $out += $escape($value.pkShoparea), 
            $out += '" remove>删除</a> </td> </tr> ';
        }), $out += " </tbody> </table>", new String($out);
    });
});
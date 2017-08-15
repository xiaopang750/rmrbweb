/*TMODJS:{"version":1,"md5":"597d7b51e0b45c5ac7c401fb1633ee1d"}*/
define(function(require) {
    return require("../../templates")("way/bind/menu_form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), menucode = $data.menucode, menuname = $data.menuname, menuurl = $data.menuurl, token = $data.token, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table striped"> <tr class="none"> <td>微信编码</td> <td> <input type="text" class="form-control" value="', 
        $out += $escape(menucode), $out += '" sub-name="wxmenuinfo.menucode"> </td> </tr> <tr> <td>菜单名称</td> <td> <input type="text" class="form-control col-xs-8" value="', 
        $out += $escape(menuname), $out += '" sub-name="wxmenuinfo.menuname"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </td> </tr> <tr> <td>菜单url</td> <td> <input type="text" class="form-control col-xs-8" value="', 
        $out += $escape(menuurl), $out += '" sub-name="wxmenuinfo.menuurl"> <span class="fl red mt-5 ml-5 font-14">*</span> </td> </tr> <!-- <tr class="none"> <td>token</td> <td> <input type="text" class="r-text" value="', 
        $out += $escape(token), $out += '" sub-name="wxmenuinfo.token"> </td> </tr> --> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" confirm>确定</a> </td> </tr> </table>', 
        new String($out);
    });
});
/*TMODJS:{"version":1,"md5":"567ed7a2cf273e98e92cd68072ab8934"}*/
define(function(require) {
    return require("../../templates")("admin/area/form", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), name = $data.name, add = $data.add, code = $data.code, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover"> <tr> <td>店铺名称：</td> <td> <div> <input type="text" value="', 
        $out += $escape(name), $out += '" input-name class="form-control col-xs-6"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td>店铺地址：</td> <td> <div> <input type="text" value="', 
        $out += $escape(add), $out += '" input-add class="form-control col-xs-6"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>店铺编码：</td> <td> <div> <input type="text" value="', 
        $out += $escape(code), $out += '" input-code class="form-control col-xs-6"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td></td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-50 pr-50" save>保存</a> </td> </tr> </table> ', 
        new String($out);
    });
});
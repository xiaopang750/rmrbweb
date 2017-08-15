/*TMODJS:{"version":8,"md5":"c5247c8e4ea29a01faa4a400b367a09c"}*/
define(function(require) {
    return require("../../templates")("way/bind/form", function($data) {
        "use strict";
        var $utils = this, type = ($utils.$helpers, $data.type), $escape = $utils.$escape, accountname = $data.accountname, accountid = $data.accountid, apiurl = $data.apiurl, token = $data.token, appKey = $data.appKey, appSecret = $data.appSecret, mail = $data.mail, $out = "";
        return $out += ' <table weixin cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover"> <tr> <td width="150"> ', 
        $out += "002" == type ? " 微博账号名称: " : " 公众号名称: ", $out += ' </td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="publicaccountinfo.accountname" tip="此项为必填" wrong="此项为必填" re="(.+)" value="', 
        $out += $escape(accountname), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="gray fl mt-5 ml-20">(<span class="red">*</span>号标记的为必填项)</span> </div> </td> </tr> <tr> <td> ', 
        $out += "002" == type ? " 微博号ID: " : " 公众号原始ID: ", $out += ' <td> <div> <input type="text" class="form-control col-xs-5 fl" form_check="sys" ischeck="true" name="publicaccountinfo.accountid" tip="此项为必填" wrong="ID不能是中文" re="([^\\u4e00-\\u9fa5]+)" value="', 
        $out += $escape(accountid), $out += '" press-check> <span class="fl red mt-5 ml-5 font-14">*</span> <span class="green fl mt-5 ml-5" check-status></span> </div> </td> </tr> <tr> <td>接口地址:</td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="publicaccountinfo.apiurl" tip="此项为必填" wrong="此项为必填" re="(.+)" value="', 
        $out += $escape(apiurl), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>Token:</td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="publicaccountinfo.token" tip="此项为必填" wrong="此项为必填" re="(.+)" value="', 
        $out += $escape(token), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>appKey:</td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="publicaccountinfo.appKey" tip="此项为必填" wrong="此项为必填" re="(.+)" value="', 
        $out += $escape(appKey), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>appSecret:</td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="publicaccountinfo.appSecret" tip="此项为必填" wrong="此项为必填" re="(.+)" value="', 
        $out += $escape(appSecret), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td>公众号邮箱:</td> <td> <div> <input type="text" class="form-control col-xs-5" form_check="sys" ischeck="true" name="publicaccountinfo.mail" tip="此项为必填" wrong="邮箱格式不正确" re="(\\d{8}|\\d{11})|([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)" value="', 
        $out += $escape(mail), $out += '"> <span class="fl red mt-5 ml-5 font-14">*</span> </div> </td> </tr> <tr> <td></td> <td> <a href="javascript:;" class="btn btn-primary pl-50 pr-50 fl" script-role="confirm-btn">提交</a> </td> </tr> </table> ', 
        new String($out);
    });
});
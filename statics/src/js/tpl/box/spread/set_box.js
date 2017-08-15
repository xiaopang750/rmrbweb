/*TMODJS:{"version":2,"md5":"87b3cea3e40573e682de901c55385a61"}*/
define(function(require) {
    return require("../../templates")("box/spread/set_box", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), memberLevels = $data.memberLevels, $escape = ($data.$value, 
        $data.$index, $utils.$escape), channels = $data.channels, $out = "";
        return $out += ' <div class="inner mt-30"> <div class="head pb-10 font-20 tc"> 发布渠道设置 </div> <div class="content"> <table cellpadding="0" cellspacing="0" border="0" width="96%" class="auto pt-10 font-14"> <tr member> <td width="100">选择会员级别：</td> <td> ', 
        $each(memberLevels, function($value) {
            $out += ' <span class="mr-10"> <span>', $out += $escape($value.levelname), $out += '</span> <input type="checkbox" value="', 
            $out += $escape($value.pkMemberlevel), $out += '" ', 1 == $value.dr && ($out += 'checked="checked"'), 
            $out += "> </span> ";
        }), $out += ' </td> </tr> <tr time> <td>选择时间：</td> <td> <div class="mb-10 mt-7"> <input type="text" class="form-control col-xs-6" data-ele="send-time" value="" class="r-text" readonly="readonly"> </div> </td> </tr> <tr way> <td>选择渠道：</td> <td> <span class="mr-10"> ', 
        $each(channels, function($value) {
            $out += ' <span class="mr-5" third-way-wrap> <span>', $out += $escape($value.accountname), 
            $out += '</span> <input type="checkbox" ', "Y" == $value.isCheck && ($out += 'checked="checked"'), 
            $out += ' third-way-select accountid="', $out += $escape($value.accountid), $out += '" accounttype="', 
            $out += $escape($value.accounttype), $out += '"> </span> ';
        }), $out += ' </span> </td> </tr> </table> </div> </div> <div class="btn-area tc"> <a href="javascript:;" class="btn btn-primary pl-20 pr-20" set-save>确定</a> <a href="javascript:;" class="btn btn-danger pl-20 pr-20" sc="close">取消</a> </div> <a href="javascript:;" class="close" sc="close">×</a> ', 
        new String($out);
    });
});
/*TMODJS:{"version":5,"md5":"bedf6bbb23f807de4229819b104510d8"}*/
define(function(require) {
    return require("../../templates")("spread/code/list", function($data) {
        "use strict";
        var $utils = this, qcodes = ($utils.$helpers, $data.qcodes), $each = $utils.$each, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $out = "";
        return $out += ' <table class="table striped" width="100%"> <thead> <tr> <td width="30%">链接地址</td> <td width="10%">自定义字段</td> <td width="10%">普通二维码扫描数</td> <td width="10%">微信扫描数/关注数</td> <td width="10%">微博扫描数/关注数</td> <td width="20%">二维码预览</td> <td width="10%">管理</td> </tr> </thead> <tbody> ', 
        qcodes.length ? ($out += " ", $each(qcodes, function($value) {
            $out += " <tr> <td> ", $out += $escape($value.pageUrl), $out += " </td> <td> ", 
            $out += $escape($value.customCode), $out += " </td> <td> ", $out += $escape($value.scanCount), 
            $out += " </td> <td> ", $out += $escape($value.standby9 ? $value.standby9 : 0), 
            $out += "/", $out += $escape($value.standby7 ? $value.standby7 : 0), $out += " </td> <td> ", 
            $out += $escape($value.standby10 ? $value.standby10 : 0), $out += "/", $out += $escape($value.standby8 ? $value.standby8 : 0), 
            $out += ' </td> <td> <a href="javascript:;" view url="', $out += $escape($value.qcodeUrl), 
            $out += '" pkQcode="', $out += $escape($value.pkQcode), $out += '">普通</a> <span>|</span> <a href="javascript:;" view type="001" pkQcode="', 
            $out += $escape($value.pkQcode), $out += '">微信</a> <span>|</span> <a href="javascript:;" view type="002" pkQcode="', 
            $out += $escape($value.pkQcode), $out += '">微博</a> <!-- <a href="../activity/downloadQcode?pkQcode=', 
            $out += $escape($value.pkQcode), $out += '" download>下载</a> <span>|</span> --> </td> <td> <a href="javascript:;" remove aid="', 
            $out += $escape($value.pkQcode), $out += '">删除</a> </td> </tr> ';
        }), $out += " ") : $out += ' <tr> <td colspan="4"> 暂无数据 </td> </tr> ', $out += " </tbody> </table>", 
        new String($out);
    });
});
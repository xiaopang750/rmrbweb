/*TMODJS:{"version":2,"md5":"c4bfb786089f4faa172a61fe6da27914"}*/
define(function(require) {
    return require("../../templates")("admin/role/role_list", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), roleName = $data.roleName, $each = $utils.$each, noUserInfos = $data.noUserInfos, isUserInfos = ($data.$value, 
        $data.$index, $data.isUserInfos), $out = "";
        return $out += ' <div class="fl list-wrap"> <div class="tc mt-10"> <span>未拥有<span class="bold red">', 
        $out += $escape(roleName), $out += '</span>角色的用户</span> </div> <ul sc="nohased"> ', 
        $each(noUserInfos, function($value) {
            $out += ' <li data-ele="list" lid="', $out += $escape($value.cuserid), $out += '" appendName="hased" orgName="nohased">', 
            $out += $escape($value.userName), $out += "</li> ";
        }), $out += ' </ul> </div> <div class="fr list-wrap"> <div class="tc mt-10"> <span>拥有<span class="bold red">', 
        $out += $escape(roleName), $out += '</span>角色的用户</span> </div> <ul sc="hased"> ', 
        $each(isUserInfos, function($value) {
            $out += ' <li data-ele="list" lid="', $out += $escape($value.cuserid), $out += '" appendName="nohased" orgName="hased">', 
            $out += $escape($value.userName), $out += "</li> ";
        }), $out += " </ul> </div>", new String($out);
    });
});
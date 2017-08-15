/*TMODJS:{"version":2,"md5":"ddbbff45b1d72aa020e659c3b4e80acb"}*/
define(function(require) {
    return require("../../templates")("box/spread/select_pic_type", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, basePath = $helpers.basePath, $escape = $utils.$escape, type = $data.type, $out = "";
        return $out += ' <div class="nr-box pic-select-box" pic-select-box> <a href="javascript:;" class="close" sc="close">×</a> <div class="inner mt-20"> <div class="bg-head tc font-16 mb-20"> 选择图文消息类别 </div> <div class="content"> <ul class="clearfix"> <li type="sin" pic-select> <dl> <dt> <img src="', 
        $out += $string(basePath()), $out += '/main/spread/select_box/sin.jpg" alt="新建单图文消息"> </dt> <dd>新建<span class="red">', 
        $out += $escape(type), $out += '</span>单图文消息</dd> </dl> </li> <li type="multi" pic-select> <dl> <dt> <img src="', 
        $out += $string(basePath()), $out += '/main/spread/select_box/multi.jpg" alt="新建多图文消息"> </dt> <dd>新建<span class="red">', 
        $out += $escape(type), $out += "</span>多图文消息</dd> </dl> </li> </ul> </div> </div> </div>", 
        new String($out);
    });
});
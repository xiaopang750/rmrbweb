/*TMODJS:{"version":2,"md5":"9aa8ea44e8aaed54d6dbcc17143fb5e9"}*/
define(function(require) {
    return require("../../templates")("box/spread/elc_type", function() {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, basePath = $helpers.basePath, $out = "";
        return $out += ' <div class="nr-box elc-type"> <a href="javascript:;" class="close" sc="close">×</a> <div class="content"> <ul class="clearfix mb-10"> <li typer> <dl> <dt> <img src="', 
        $out += $string(basePath()), $out += '/main/spread/elc_sale/ticket1.png" alt="" width="100" bg> </dt> <dd class="tc" name="样式一"> 样式一 </dd> </dl> </li> <li typer> <dl> <dt> <img src="', 
        $out += $string(basePath()), $out += '/main/spread/elc_sale/ticket2.png" alt="" width="100" bg> </dt> <dd class="tc" name="样式二"> 样式二 </dd> </dl> </li> <li typer> <dl> <dt> <img src="', 
        $out += $string(basePath()), $out += '/main/spread/elc_sale/ticket3.png" alt="" width="100" bg> </dt> <dd class="tc" name="样式三"> 样式三 </dd> </dl> </li> <li typer> <dl> <dt> <img src="', 
        $out += $string(basePath()), $out += '/main/spread/elc_sale/ticket4.png" alt="" width="100" bg> </dt> <dd class="tc" name="样式四"> 样式四 </dd> </dl> </li> <li typer> <dl> <dt> <img src="', 
        $out += $string(basePath()), $out += '/main/spread/elc_sale/ticket5.png" alt="" width="100" bg> </dt> <dd class="tc" name="样式五"> 样式五 </dd> </dl> </li> </ul> </div> <div class="tc"> <a href="javascript:;" class="btn btn-primary" elc-confirm>确定</a> <a href="javascript:;" class="btn btn-danger" sc="close">取消</a> </div> </div>', 
        new String($out);
    });
});
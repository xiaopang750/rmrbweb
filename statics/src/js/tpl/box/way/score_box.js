/*TMODJS:{"version":1,"md5":"67aab8ae2688a21cec7358a1ea5041f0"}*/
define(function(require) {
    return require("../../templates")("box/way/score_box", ' <div class="nr-box score-box none" score-box script-bound="form_check"> <a href="javascript:;" class="close" sc="close">×</a> <div class="inner mt-30"> <div class="content"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover noline"> <tr> <td width="50"> 积分数量 </td> <td> <input type="text" class="form-control col-xs-11" name="integral.integralnum" form_check="sys" ischeck="true" tip="此项为必填" wrong="格式输入不正确" re="((-|\\d)+)"> </td> </tr> <tr> <td width="50"> 积分用途 </td> <td> <input type="text" class="form-control col-xs-11" name="integral.integraluse" form_check="sys" ischeck="true" tip="此项为必填" wrong="此项为必填" re="(.+)"> </td> </tr> <tr> <td> </td> <td class="tl"> <a href="javascript:;" class="btn btn-primary pl-20 pr-20" script-role="confirm-btn">确定</a> <a href="javascript:;" class="btn btn-danger pl-20 pr-20" sc="close">取消</a> </td> </tr> </table> </div> </div> </div>');
});
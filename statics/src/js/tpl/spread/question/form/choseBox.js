/*TMODJS:{"version":1,"md5":"6b9b2100e6f826d4a21ae802c13b606c"}*/
define(function(require) {
    return require("../../../templates")("spread/question/form/choseBox", function($data) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), way = $data.way, $escape = ($data.$value, 
        $data.$index, $utils.$escape), type = $data.type, $out = "";
        return $out += '<div class="nr-box choseBox" choseBox> <a href="javascript:;" class="close" sc="close">×</a>  <div class="select-wrap mb-40"> <ul class="clearfix"> <li> <span class="fl mt-5 mr-5">选择类别：</span> <select select-ku-way class="form-control col-xs-2"> <option value="">请选择</option> ', 
        $each(way, function($value) {
            $out += ' <option value="', $out += $escape($value.pkDictionarySub), $out += '" aid="', 
            $out += $escape($value.pkDictionarySub), $out += '">', $out += $escape($value.dataName), 
            $out += "</option> ";
        }), $out += ' </select> </li> <li> <span class="fl mt-5 mr-5">选择题型：</span> <select select-ku-type class="form-control col-xs-2"> <option value="">请选择</option> ', 
        $each(type, function($value) {
            $out += ' <option value="', $out += $escape($value.dataCode), $out += '" aid="', 
            $out += $escape($value.dataCode), $out += '">', $out += $escape($value.dataName), 
            $out += "</option> ";
        }), $out += ' </select> </li> <li> <span class="fl mt-5 mr-5">选择题目：</span> <select question-select-wrap class="form-control col-xs-2"> <option value="">请选择</option> </select> </li> </ul> </div> <div class="question-view mb-20" question-view> </div> <div class="tc wj-copy-btn"> <a href="javascript:;" class="btn btn-primary" sc="confirm">引用该问题</a> </div> </div>', 
        new String($out);
    });
});
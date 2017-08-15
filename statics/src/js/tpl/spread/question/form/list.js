/*TMODJS:{"version":1,"md5":"cedc88732fe0c849f68da94581f096e7"}*/
define(function(require) {
    return require("./option"), require("../../../templates")("spread/question/form/list", function($data, $filename) {
        "use strict";
        var $utils = this, $each = ($utils.$helpers, $utils.$each), question = $data.question, $escape = ($data.$value, 
        $data.$index, $utils.$escape), num = $data.num, include = function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }, $out = "";
        return $out += " ", $each(question, function($value, $index) {
            $out += ' <li class="q-list clearfix" q-list aid="', $out += $escape($value.pkQuestion), 
            $out += '"> <div class="q-list-l"> <div class="q-func-wrap ml-5 mt-7"> <div class="q-list-num font-16 mb-10 clearfix"> <span class="fl">Q</span> <span q-list-num class="fl"> ', 
            num ? ($out += " ", $out += $escape(num), $out += " ") : ($out += " ", $out += $escape($index + 1), 
            $out += " "), $out += ' </span> </div> <div class="left-func" left-func> <a href="javascript:;" class="q-icon q-set ml-1" title="切换题型" aid="', 
            $out += $escape($value.pkQuestion), $out += '" q-set type="', $out += $escape($value.questiontype), 
            $out += '"></a> <a href="javascript:;" class="q-icon q-copy ml-2" title="复制" q-copy></a> <a href="javascript:;" class="q-icon q-remove ml-2" title="删除" q-remove aid="', 
            $out += $escape($value.pkQuestion), $out += '"></a> </div> </div> </div> <div class="q-list-r"> <div class="inner"> <h3 class="q-list-title" q-list-title q-edit q-text-max="20" edit-type="question" aid="', 
            $out += $escape($value.pkQuestion), $out += '">', $out += $escape($value.questionname), 
            $out += '</h3> <ul class="font-14" option-wrap> ', include("./option", $value), 
            $out += ' </ul> <div class="handle-wrap mt-20 clearfix" handle-wrap> <a class="q-icon option-add fl mr-10" href="javascript:;" title="添加" option-add aid="', 
            $out += $escape($value.pkQuestion), $out += '"></a> <a class="q-icon option-multi-add fl" href="javascript:;" title="批量添加" option-multi-add aid="', 
            $out += $escape($value.pkQuestion), $out += '"></a> </div> </div> </div> </li> ';
        }), new String($out);
    });
});
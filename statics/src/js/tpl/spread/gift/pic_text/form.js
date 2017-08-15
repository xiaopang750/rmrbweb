/*TMODJS:{"version":16,"md5":"50222f343a6226cf3d6db10af6b597c0"}*/
define(function(require) {
    return require("../../../templates")("spread/gift/pic_text/form", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $each = $utils.$each, muliInfos = $data.muliInfos, $escape = ($data.$value, 
        $data.$index, $utils.$escape), actType = $data.actType, getUrl = $helpers.getUrl, pid = $data.pid, $out = "";
        return $out += " ", $each(muliInfos, function($value, $index) {
            $out += ' <div class="tab-content ', 0 != $index && ($out += "none"), $out += '" widget-role="tab-content" sub-list name="test" > <div class="item"> <p> 标题 <span class="red mt-5 ml-5 font-14">*</span> <span class="gray ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span> </p> <input type="text" class="form-control" value="', 
            $out += $escape($value.subject), $out += '" sub-name="subject" sub-input="title"> <input type="hidden" value="', 
            $out += $escape($value.pkInfo), $out += '" sub-name="pkInfo"> </div> <div class="item"> <p> 作者 <span class="red mt-5 ml-5 font-14">*</span> </p> <input type="text" class="form-control" value="', 
            $out += $escape($value.creator), $out += '" sub-name="creator" sub-input="author"> </div> <div class="item"> <p> 上传 <span class="red mt-5 ml-5 font-14">*</span> </p> <div r-upload-wrap name="bg" class="clearfix"> <span> <input type="text" class="form-control fl upload fl" value="', 
            $out += $escape($value.picurl), $out += '" r-upload-url readonly="readonly" sub-input> <input type="hidden" value="', 
            $out += $escape($value.picurl), $out += '" sub-name="picurl" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn iscut="true" ', 
            $out += 0 == $index ? 'w="18" h="10"' : 'w="25" h="25"', $out += ' min="100" hmax="200" iscale="Y" isChangeType="Y">选择图片</a> </span> </div> </div> <div class="item" inputTipWrap> <p class="clearfix"> <span class="fl"> ', 
            "001" == actType ? $out += ' 提示信息<span class="red mt-5 ml-5 font-14">*</span> ' : ($out += ' 摘要 <span class="red mt-5 ml-5 font-14"> ', 
            "multi" != getUrl("way") && ($out += "*"), $out += " </span> "), $out += ' </span> <span class="fr mr-20"> <span>您还可以输入:</span> <span tip1 class="green"></span> <span>个字</span> </span> </p> <textarea type="text" class="form-control" sub-name="activityAbstract" limit1 max="20" sub-input class="remark">', 
            $out += $escape($value.activityAbstract), $out += "</textarea> </div> ", "001" != actType && "009" != actType && "006" != actType && "012" != actType && ($out += ' <div class="item" inputTipWrap> <p> 图文内容<span class="red mt-5 ml-5 font-14">*</span> </p> <textarea id="editor', 
            $out += $escape($index), $out += '" sub-name="content">', $out += $escape($value.content), 
            $out += "</textarea> </div> "), $out += " ", $value.url && ($out += ' <div class="item"> <p> ', 
            "001" == actType ? $out += " 会议邀约链接 " : "002" == actType ? $out += " 企业形象链接 " : "003" == actType ? $out += " 每日资讯链接 " : "004" == actType ? $out += " 促销活动链接 " : "006" == actType ? $out += " 电子优惠券链接 " : "007" == actType ? $out += " 到店有礼链接 " : "009" == actType ? $out += " 现场活动链接 " : "010" == actType && ($out += " 品牌建设链接 "), 
            $out += ' </p> <input class="form-control" type="text" value="', $out += $escape($value.url + "?pkActivity=" + pid), 
            $out += '" readonly="readonly"> </div> '), $out += ' <input type="hidden" sub-name="url" value="', 
            $out += $escape($value.url), $out += '"> ', ("006" == actType || "007" == actType) && ($out += ' <div class="mb-20"> <input type="checkbox" sub-name="vdef10" ', 
            "Y" == $value.vdef10 && ($out += 'checked="checked"'), $out += "> <span>是否绑定会员后生效</span> </div> "), 
            $out += " </div> ";
        }), $out += " ", new String($out);
    });
});
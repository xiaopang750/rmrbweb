/*TMODJS:{"version":2,"md5":"bc4ce3b725b14728c8656ccee0de55fc"}*/
define(function(require) {
    return require("../../../../templates")("spread/met_act/model1/m_form/flow1", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), bg = $data.bg, theme = $data.theme, title = $data.title, content = $data.content, $out = "";
        return $out += ' <table cellpadding="0" cellspacing="0" border="0" width="100%" class="table nohover noline"> <tr> <td width="100"> 背景图片： </td> <td r-upload-wrap sub-wrap name="bg" class="clearfix"> <span sub-list> <input type="text" class="form-control col-xs-8 fl" value="', 
        $out += $escape(bg), $out += '" r-upload-url> <input type="hidden" value="', $out += $escape(bg), 
        $out += '" sub-name="bg" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> <tr> <td> 主题图片： </td> <td r-upload-wrap sub-wrap name="theme" class="clearfix"> <span sub-list> <input type="text" class="form-control col-xs-8 fl" value="', 
        $out += $escape(theme), $out += '" r-upload-url> <input type="hidden" value="', 
        $out += $escape(theme), $out += '" sub-name="theme" r-upload-url> <a href="javascript:;" class="btn btn-default fr" r-upload-btn>选择图片</a> </span> </td> </tr> <tr> <td> 会议标题： </td> <td sub-wrap name="title"> <span sub-list> <input type="text" class="form-control" value="', 
        $out += $escape(title), $out += '" sub-name="title" text-limit text-max="20"> </span> </td> </tr> <tr> <td>会议主题：</td> <td sub-wrap name="content"> <span sub-list> <textarea class="form-control h-mid" sub-name="content" text-limit text-max="100">', 
        $out += $escape(content), $out += "</textarea> </span> </td> </tr> </table>", new String($out);
    });
});
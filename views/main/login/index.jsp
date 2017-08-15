<% String path=(String)request.getAttribute("basePath");
    response.setHeader("Cache-Control","no-store"); 
    response.setHeader("Pragrma","no-cache"); 
    response.setDateHeader("Expires",-1); 
%>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>金蜗牛登录</title>
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/login/login.css">
</head>

<body>
<!-- header -->
<div class="header">
	<div class="logobox">
        <img src="<%=path %>statics/assets/main/login/logo.gif" height="52" border="0" alt="金蜗牛" />
    </div>
</div>

<!-- main -->
<div class="content-wrap" script-bound="form_check">
	<div class="login-box">
    	<div class="login-bg clearfix">

        	<div class="login-window fl">
            	<div class="clearfix">
                    <a href="javascript:;" class="fr">
                        <img src="<%=path %>statics/assets/main/login/qcode_coner.png" width="46" height="48" border="0" data-ele="show-qcode" alt="金蜗牛" />
                    </a>
                </div>

                <div class="login-inner pl-20">
                    <div class="mb-10">
                        <span class="font-14 white">登录</span>
                    </div>

                    <div class="user-input-box clearfix">
                        <input type="text" class="login-input fl" form_check="sys" ischeck="true" name="userName" tip="请填写用户名" wrong="请填写用户名" re="(.+)"/>
                    </div>

                    <div class="pass-input-box clearfix">
                        <input type="password" class="login-input fl" data-ele="pass" form_check="sys" ischeck="true" name="userPass" tip="请填写密码" wrong="请填写密码" re="(.+)" />
                    </div>

                    <div class="checkcode clearfix mb-10">
                        <input type="text" class="login-input fl mr-21" form_check="sys" ischeck="true" name="code" tip="请填写验证码" wrong="请填写验证码" re="(.+)" class="fl mr-20" />
                        <img src="../loginSys/validateCode" alt="点击刷新" width="100" height="32" class="fl pointer" code>
                    </div>

                    <div class="tr mr-10 fun-area mb-5">
                    	<a href="javascript:;" class="white mr-10" refresh>点击刷新</a>
                        <a href="javascript:;" class="white" forget>忘记密码？</a>
                    </div>

                    <div data-ele="login-btn">
                        <a href="javascript:;" class="login-btn auto" script-role="confirm-btn"></a>
                    </div>
                </div>

            </div>
            <!--打开二维码图片-->
            <div class="code-box tc" data-ele="qcode">
                <img src="<%=path %>statics/assets/main/login/qcode_bg.gif" width="200" height="200" />
            </div>

        </div>
    </div>
</div>

<!-- footer -->
<div class="footer">
	<div class="tc mb-10">
        <a href="http://www.jinwoniu.com/ask.php?id=20" target="_blank">关于金蜗牛</a>&nbsp;
        <span>|</span>&nbsp;
        <a href="http://www.jinwoniu.com/ask.php?id=6" target="_blank">诚征英才</a>&nbsp;<span class="t12_white">|</span>&nbsp;
        <a href="http://www.jinwoniu.com/about.php?id=94" target="_blank">联系我们</a>
    </div>
    <div class="tc">
        <span>Copyright ©2014-2014 GOLDEN SNAIL Corporation, All Rights Reserved</span>
    </div>
	
</div>

<!-- login-tip-msg -->
<input type="hidden" value="${mid}" pcode>
<input type="hidden" value="${emsg}" pmsg>

<div class="nr-box chrome-box" chrome-box>
  <h3 class="mt-25 tc mb-10 font-14">推荐使用IE9以上或谷歌(chrome)浏览器</h3>
  <p class="tc">在谷歌(chrome)，IE9浏览器下，本平台输出效果与手持设备最为接近</p>
  <a href="javascript:;" class="close" sc="close">×</a>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
    seajs.use('main/login/login.js');
</script>
</body>
</html>

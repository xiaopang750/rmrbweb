<% String path=request.getContextPath();
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
<div class="topbox" align="center">
    <div class="logobox" align="left"><img src="<%=path %>statics/assets/main/login/logo.gif" width="95" height="52" border="0" /></div>
</div>
<div class="BigIMG" align="center" script-bound="form_check">
    <div class="loginBox" align="left">
        <div class="loginBG">
            <div class="loginWindows">
                <div class="QR_Code" align="right">
                    <a href="#"><img src="<%=path %>statics/assets/main/login/erweimaICO.png" width="46" height="48" border="0" data-ele="show-qcode" /></a>
                </div>
                <div class="loginName">
                    <span class="t15_white">登录</span>
                </div>
                <div class="userInputBox">
                    <div class="userID">
                        <input type="text" class="input01" form_check="sys" ischeck="true" name="userName" tip="请填写用户名" wrong="请填写用户名" re="(.+)"/>
                    </div>
                    <!-- <div class="TestICO"><img src="<%=path %>statics/assets/main/login/testICO.gif" width="18" height="17" /></div> -->
                </div>
                <div class="posswordBox">
                    <input type="password" class="input01" data-ele="pass" form_check="sys" ischeck="true" name="userPass" tip="请填写密码" wrong="请填写密码" re="(.+)" />
                </div>
                <div class="checkcode claerfix ml-22">
                    <input type="text" form_check="sys" ischeck="true" name="code" tip="请填写验证码" wrong="请填写验证码" re="(.+)" class="fl mr-20" />
                    <img src="../loginSys/adminValidateCode" alt="验证码" width="100" height="33" class="fl pointer" code>
                </div>
                <div class="RememberBox">
                    <div class="textRight" align="right">
                         <a href="javascript:;" class="t12_blue mr-12" refresh>点击刷新</a>
                        <a href="#" class="t12_blue">忘记密码？</a>
                    </div>
                </div>
                <div class="loginBtn" align="center" data-ele="login-btn">
                    <a href="javascript:;" class="loginEnter" script-role="confirm-btn"></a>
                </div>
            </div>
            <!--打开二维码图片-->
            <div id="codeBox" align="center" data-ele="qcode">
                <img src="<%=path %>statics/assets/main/login/codeIMG.gif" width="200" height="200" />
            </div>
        </div>
    </div>
</div>
<div class="announcement" align="center">
<div class="announ960">
        <div class="announIco"><img src="<%=path %>statics/assets/main/login/announICO.gif" width="17" height="16" /></div>
        <div class="announName" align="left"><span class="t12_gray">系统公告：</span></div>
        <div class="announTxt" align="left"><a href="#" class="link01">● "金蜗牛公开课"第二季启动报名啦！</a><img src="<%=path %>statics/assets/main/login/hotIco.gif" width="17" height="9" border="0" /></div>
        <div class="morelink" align="right"><a href="#" class="link01">查看更多 >></a> </div>
  </div>
</div>
<div class="hezuo" align="center">
    <div class="hezuo960">
        <div align="left" class="hezuoName"><span class="t12_gray">自媒体矩阵</span></div>
        <div align="left" class="hezuo_logo">
            <div class="logoBox">
                <img src="<%=path %>statics/assets/main/login/logo01.gif" width="37" height="37" border="0" />
            </div>
            <div class="logoBox">
                 <img src="<%=path %>statics/assets/main/login/logo02.gif" width="109" height="37" border="0" />
            </div>
            <!-- <div class="logoBox">
                <img src="<%=path %>statics/assets/main/login/logo03.gif" width="105" height="37" border="0" />
            </div>
            <div class="logoBox">
               <img src="<%=path %>statics/assets/main/login/logo04.gif" width="121" height="37" border="0" />
            </div> -->
      </div>
    </div>
    <div></div>
</div>
<div class="copyRight" align="center">
  	<div class="link02"><a href="http://www.jinwoniu.com/ask.php?id=20" class="t12_white">关于金蜗牛</a>&nbsp;<span class="t12_white">|</span>&nbsp;<a href="http://www.jinwoniu.com/ask.php?id=6" class="t12_white">诚征英才</a>&nbsp;<span class="t12_white">|</span>&nbsp;<a href="http://www.jinwoniu.com/about.php?id=94" class="t12_white">联系我们</a></div>
    <div class="copyTxt"><span class="enTxt">Copyright ©2014-2014 GOLDEN SNAIL Corporation, All Rights Reserved</span></div>
	
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
    seajs.use('main/superLogin/login.js');
</script>
</body>
</html>
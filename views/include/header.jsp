<%@page import="com.rsdataservice.o2o.pojo.RmrbSmUser"%>
<%@page contentType="text/html;charset=utf-8"%>
<%@taglib prefix="s"  uri="/struts-tags"%>
<div class="main-header-wrap clearfix">
	<h1 class="fl ml-23 mt-8">
		<a href="../jumppage/indexPage">
			<img src="<%=path %>statics/assets/lib/logo/snail.png" alt="金蜗牛互联网的营销推广专家" title="金蜗牛互联网的营销推广专家">
		</a>
	</h1>
	<a class="login-out fr" href="../loginSys/loginOut">
		退出
	</a>
	<div class="user-info fr mr-27">
		<span class="mr-10">${userInfo.pwdparam}</span>
		<span class="mr-10">${userInfo.userName}</span>
		<span class="pointer mr-10" modify-pass>密码修改</span>
		<!-- <a href="javascript:;" my-plane-btn>我的日程</a> -->
	</div>
</div>

<!-- 获取url -->
<div id="url-data" class="none" style="position:fixed;right:0;top:0;z-index:10000;width:500px;height:200px;background:#fff">${menuJsonStr}</div>

<!-- 获取jsp-url -->
<div id="url-data-jsp" class="none" style="position:fixed;right:0;top:0;z-index:10000;width:500px;height:100px;background:#fff;opacity:0.8;font-size:14px;overflow:auto">
	<s:iterator value="funMenuMap">
		${key }=${value }<br/>
	</s:iterator>
</div>	


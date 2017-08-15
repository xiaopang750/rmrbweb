<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<title>忘记密码</title>
</head>
<body>
<div class="r-bg-layer"></div>	
<!-- header -->
<%@include file="../../../include/header.jsp" %>

<div class="main-layer-content">

	<!-- tree -->
	<%@include file="../../../include/tree.jsp" %>
	
	<div class="main-content">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text fl">忘记密码</span>
		</div>

		<div class="inner-wrap clearfix" data-wrap script-bound="form_check">
			
		</div>
	</div>
</div>

<input type="hidden" msgType value="${msgType}">

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script src="../ueditor/ueditor.config.js"></script>
<script src="../ueditor/ueditor.all.js"></script>
<script src="../ueditor/lang/zh-cn/zh-cn.js"></script>
<script>
	seajs.use('main/admin/forget_pass/add');
</script>
</body>
</html>
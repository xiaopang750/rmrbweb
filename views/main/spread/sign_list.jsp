<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/gift/pic_text.css">
<title>报名</title>
</head>
<body module-name="推广活动">
<div class="r-bg-layer"></div>	

<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">报名</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<!-- content -->
		<div class="admin-wrap" data-ele="data-wrap">
			
		</div>

		<%@include file="../../include/fenye.jsp" %>
	</div>

</div>

<input type="hidden" value="${pkActivity}" hidden-text>
<input type="hidden" value="${activityType}" hidden-text1>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/sign_list');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<title>行程安排</title>
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
			<span class="bread-text fl">行程安排</span>
		</div>

		<div class="inner-wrap" data-ele="data-wrap">
			
		</div>

	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/admin/calendar/index');
</script>
</body>
</html>
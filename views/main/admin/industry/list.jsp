<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<title>行业管理</title>
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
			<span class="bread-text fl">行业管理</span>
			<div class="fl mt-10 ml-10" data-ele="mobile-tree-content-wrap"></div>
		</div>
		
		<div class="inner-wrap clearfix">
			<span class="fl mt-8 mr-10">网站模块</span>
			<select class="form-control col-xs-2" module-select>
			</select>
		</div>
	
		<div data-ele="data-wrap" class="inner-wrap">
			
		</div>
		<!-- fenye -->
		<%@include file="../../../include/fenye.jsp" %>

	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/admin/industry/list');
</script>
</body>
</html>
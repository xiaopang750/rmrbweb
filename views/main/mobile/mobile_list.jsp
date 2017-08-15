<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/mobile/mobile_list.css">
<title>查看详情</title>
</head>
<body module-name="手机网站">
<div class="r-bg-layer"></div>	
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content">

		<!-- bread -->
		<div class="bread">
			<span class="bread-text fl">查看详情</span>
			<div class="fl mt-10 ml-10" data-ele="mobile-tree-content-wrap"></div>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="head-list mt-9">
			<span class="r-icon mobile-select mr-17 ml-26"></span>
			<span class="blue" mobile-list-name></span>
			<div class="line"></div>
		</div>

		<div class="mobile-list-content">
			<div data-ele="data-wrap">
				
			</div>
			<%@include file="../../include/fenye.jsp" %>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/mobile/mobile_list.js');
</script>
</body>
</html>
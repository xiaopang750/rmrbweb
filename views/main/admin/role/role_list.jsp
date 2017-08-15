<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/admin/role.css">
<title>角色管理</title>
</head>
<body module-name="后台配置管理">
<div class="r-bg-layer"></div>	
<!-- header -->
<%@include file="../../../include/header.jsp" %>

<div class="main-layer-content">

	<!-- tree -->
	<%@include file="../../../include/tree.jsp" %>
	
	<div class="main-content">

		<!-- bread -->
		<div class="bread">
			<span class="bread-text fl">角色管理</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>

		<div class="admin-wrap clearfix" data-wrap>
			
		</div>

		<div class="inner-wrap tc">
			<a href="javascript:;" class="btn btn-primary pl-50 pr-50" data-ele="save">保存</a>
		</div>

	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/admin/role/role_list');
</script>
</body>
</html>
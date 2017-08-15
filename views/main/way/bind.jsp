<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/way/bind.css">
<title>账号绑定</title>
</head>
<body module-name="自媒体渠道管理">
<div class="r-bg-layer"></div>
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">账号绑定</span>
		</div>
		
		<div class="inner-wrap">
			<div class="btn-wrap mb-20">
				<a href="javascript:;" class="btn btn-primary" typer="001">添加微信公众号</a>
				<a href="javascript:;" class="btn btn-primary" typer="002">添加新浪微博</a>
			</div>
			
			<div data-wrap>
				
			</div>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/way/bind.js');
</script>
<script>
	
</script>
</body>
</html>
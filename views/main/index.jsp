<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../include/meta.jsp" %>
<%@include file="../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/met_act/index.css">
<title>首页</title>
</head>
<body>
<div class="r-bg-layer"></div>		

<!-- header -->
<%@include file="../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">首页</span>
		</div>
		
		<div class="inner-wrap">
			<img src="<%=path %>statics/assets/main/index/index.jpg" alt="金蜗牛" width="100%">
		</div>
		
	</div>

</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/index');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/gift/list.css">
<title>到店有礼</title>
</head>
<body>
<div class="r-bg-layer"></div>		

<!-- header -->
<%@include file="../../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">到店有礼</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>

		<%@include file="../../../include/chose_status.jsp" %>
		
		<!-- content -->
		<div class="gift-list-wrap">
			<ul class="clearfix" data-ele="data-wrap">
				
			</ul>

			<!-- fenye -->
			<%@include file="../../../include/fenye.jsp" %>
		</div>

	</div>

</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/gift/list.js');
</script>
</body>
</html>
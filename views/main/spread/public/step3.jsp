<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/public/public.css">
<title>发布会后台监控</title>
</head>
<body module-name="推广活动">
<div class="r-bg-layer"></div>	

<!-- header -->
<%@include file="../../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">发布会后台监控</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="msg-list-wrap pt-20">
			<select select-met class="form-control">
				<option value="">选择会议</option>
			</select>
			<div class="mt-20 mb-20">
				<input type="checkbox" check-all>
				<span class="mr-20">全选</span>
				<a class="btn btn-default" all-act-btn href="javascript:;">上屏</a>
			</div>
			<div class="roll-wrap" roll-wrap>
				<ul data-wrap>
					
				</ul>
			</div>
		</div>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/public/step3.js');
</script>
</body>
</html>
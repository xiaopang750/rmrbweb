<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<title>电子优惠券</title>
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
			<span class="bread-text">电子优惠券</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>

		<div class="inner-wrap clearfix">
			<div class="mb-20 clearfix">
				<span class="fl mt-8 mr-10">核销状态</span>
				<select class="form-control col-xs-2" module-select>
					<option value="">请选择</option>
				</select>
			</div>
		
		
			<div data-ele="data-wrap">
				
			</div>

		</div>

		<!-- fenye -->
		<%@include file="../../../include/fenye.jsp" %>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/elc_sale/detail.js');
</script>
</body>
</html>
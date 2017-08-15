<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/elc_sale/elc_sale.css">
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
		
		<div class="inner-wrap">
			<div class="clearfix mb-20">
				<div class="fl col-xs-2">
					<span class="fl mt-7">日期：</span>
					<input type="text" class="form-control fr col-xs-9" search-time readonly="readonly">
				</div>
				<div class="fl col-xs-3">
					<span class="fl mt-7">活动名称：</span>
					<input type="text" class="form-control fl col-xs-8" search-name>
				</div>
				<div class="fl select-time col-xs-3">
					<span class="fl mt-7">是否过期：</span>
					<select class="form-control fl" select-time>
						<option value="">请选择</option>
						<option value="outdate">过期</option>
						<option value="indate">未过期</option>
					</select>
				</div>
				<a href="javascript:;" class="fl btn btn-primary" search-btn>快速查询</a>
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
	seajs.use('main/spread/elc_sale/list.js');
</script>
</body>
</html>
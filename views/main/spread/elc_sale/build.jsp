<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/elc_sale/elc_sale.css">
<title>新建电子优惠券</title>
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
			<span class="bread-text">新建电子优惠券</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="elc-sale-build clearfix">
			<div class="mobile-view-wrap fl">
				<div class="view" view-wrap>
					<!-- view:tpl/spread/ele_sale/build_view -->
				</div>
			</div>
			<div class="ele-form-wrap fr" script-bound="form_check">
				<ul form-wrap>
					<!-- form:tpl/spread/ele_sale/build_form -->
				</ul>
				<a href="javascript:;" class="btn btn-primary all" script-role="confirm-btn">下一步</a>
			</div>
		</div>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/elc_sale/build.js');
</script>
</body>
</html>
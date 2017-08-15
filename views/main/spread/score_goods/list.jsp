<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/score/score.css">
<title>积分兑换</title>
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
				<span class="bread-text">积分兑换</span>
			</div>
			
			<div class="inner-wrap">
				<div>
					<ul class="tab clearfix">
						<li class="active" change-type="goods">
							商品兑换
						</li>
						<li change-type="pic">
							图文消息
						</li>
					</ul>
				</div>
				<div class="exchange-list-wrap" admin-wrap list-wrap data-ele="data-wrap">
					
				</div>
				<%@include file="../../../include/fenye.jsp" %>
			</div>
		</div>
	</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/score_goods/list');
</script>
</body>
</html>
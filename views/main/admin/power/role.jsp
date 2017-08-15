<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/admin/power.css">
<title>权限管理</title>
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
			<span class="bread-text fl">权限管理</span>
			<div class="fl mt-10 ml-10" data-ele="mobile-tree-content-wrap"></div>
		</div>

		<div class="clearfix">
			<!-- <div class="sys-role fl ml-20">
				<dl>
					<dt class="mt-10">系统角色</dt>
					<dd class="ml-20 mt-5">
						<ul>
							<li tree-change-list>管理员</li>
						</ul>
					</dd>
				</dl>
			</div> -->
			<div class="sys-detail mt-10 ml-10" tree-wrap>
				
			</div>
			<button class="power-btn ml-10 mt-10" power-btn>确定</button>
		</div>		
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/admin/power/role');
</script>
</body>
</html>

<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/admin/company.css">
<title>企业管理</title>
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
			<span class="bread-text fl">企业管理</span>
			<div class="fl mt-10 ml-10" data-ele="mobile-tree-content-wrap"></div>
		</div>

		<div class="inner-wrap clearfix">
			<div class="left-tree fl mr-50" tree-wrap>
				
			</div>
			<div class="right-content fl">
				<div class="clearfix">
					<div class="fl mr-5">
						<a href="javascript:;" class="btn btn-primary" add-group>添加企业</a>
						<a href="javascript:;" class="btn btn-primary" modify>修改</a>
						<a href="javascript:;" class="btn btn-primary" remove>删除</a>
						<a href="javascript:;" class="btn btn-primary" sub-list>子企业详情</a>
					</div>
					<div func-area class="none fl">
						<a href="javascript:;" class="btn btn-primary" destribution>分配权限</a>
						<!-- <button add-role>分配角色</button>
						<button add-user>分配用户</button> -->
					</div>
				</div>
				<div form-wrap class="mt-20" script-bound="form_check">
					
				</div>
			</div>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/admin/company/list');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/common.css">
<title>调查问卷</title>
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
			<span class="bread-text">调查问卷</span>
		</div>
		
		<table cellpadding="0" cellspacing="0" border="0" width="100%" class="list-type-icon">
			<tr>
				<td>
					<a href="${funMenuMap['surveyAddForm']}">
						<img src="<%=path %>statics/assets/main/spread/gift/head1.png" alt="新建调查问卷">
						<p>新建调查问卷</p>
					</a>
				</td>
				<td >
					<a href="${funMenuMap['surveyList']}">
						<img src="<%=path %>statics/assets/main/spread/elc_sale/head3.png" alt="历史调查问卷">
						<p>问卷管理</p>
					</a>
				</td>
				<td>
					<a href="${funMenuMap['questionStorageList']}">
						<img src="<%=path %>statics/assets/main/spread/gift/head3.png" alt="调查问卷问题库">
						<p>问题库</p>
					</a>
				</td>
			</tr>
		</table>
	</div>
</div>




<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	//seajs.use('main/spread/gift/index.js');
</script>
</body>
</html>
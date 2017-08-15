<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<title>问卷管理</title>
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
			<span class="bread-text">问卷管理</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
			
		<div class="inner-wrap">
			<div class="clearfix mb-10">
				<span class="fl font-12 mt-5 mr-10">根据问题分类查询：</span>
				<select class="form-control fl col-xs-3" show-type>
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
	seajs.use('main/spread/question/list.js');
</script>
</body>
</html>
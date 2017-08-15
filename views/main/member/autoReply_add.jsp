<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/member/member.css">
<title>智能答复</title>
</head>
<body module-name="会员互动">
<div class="r-bg-layer"></div>	
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">

	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content">

		<!-- bread -->
		<div class="bread">
			<span class="bread-text fl">智能答复</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>

		<div class="auto-add pt-50" script-bound="form_check">
			
		</div>

		<%@include file="../../include/fenye.jsp" %>		
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/member/autoReply_form.js');
</script>
</body>
</html>
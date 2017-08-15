<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/member/member.css">
<title>评论管理</title>
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
			<span class="bread-text fl">评论管理</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>

		<div class="commonts-detail">
			<div class="mb-10" blog-wrap>
				
			</div>
			<textarea class="commonts-area mb-10" commonts-area></textarea>
			<div class="clearfix">
				<span class="send-btn fr" send-btn>发送</span>
			</div>
			<ul data-wrap>
				<!-- tpl/member/reply_list -->
			</ul>
			<div class="tc">
				<a href="javascript:;" class="more-btn" more-btn>加载更多</a>
			</div>
		</div>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/member/arg_detail.js');
</script>
</body>
</html>
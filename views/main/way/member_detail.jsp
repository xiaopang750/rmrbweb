<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/way/member.css">
<title>会员管理</title>
</head>
<body module-name="自媒体渠道管理">
<div class="r-bg-layer"></div>
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text" member-name>会员管理</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="member-detail">
			<div class="member-detail-head">
				<!-- <button serach-index="1">会员互动详情</button>
				<button serach-index="2">会员优惠券详情</button>
				<button serach-index="3">会员参与活动详情</button>
				<button serach-index="4">会员收藏记录</button>
				<button serach-index="5">会员积分详情</button>
				<button serach-index="6">会员评论详情</button> -->

				<a href="javascript:;" serach-index="2" class="btn btn-primary">会员优惠券详情</a>
				<a href="javascript:;" serach-index="3" class="btn btn-primary">会员参与活动详情</a>
				<a href="javascript:;" serach-index="5" class="btn btn-primary">会员积分详情</a>
				<a href="javascript:;" serach-index="6" class="btn btn-primary">会员评论详情</a>

			</div>
		
			<div class="content-wrap" data-ele="data-wrap">
			
			</div>
		</div>
		<!-- fenye -->
		<%@include file="../../include/fenye.jsp" %>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/way/member_detail.js');
</script>
</body>
</html>
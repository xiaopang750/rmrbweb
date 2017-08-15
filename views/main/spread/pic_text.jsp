<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/gift/pic_text.css">
<title>图文消息</title>
</head>
<body module-name="推广活动">
<div class="r-bg-layer"></div>	

<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text" pic-type></span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<!-- content -->
		<div class="clearfix" page-wrap>
			<div class="pic-text-wrap clearfix b-r">
				<div class="pic-text-view fl">
					<div pic-text-view></div>
					<button pic-text-add class="btn btn-primary all none">添加</button>
				</div>
				<div class="pic-text-form fr b-r">
					<div class="tab-wrap" sub-wrap name="muliInfos" pic-text-form>

					</div>
					<a class="btn btn-primary all" data-ele="save-btn">完成</a>	
				</div>
			</div>
		</div>
	</div>

</div>

<input type="hidden" value="${pkActivity}" hidden-text>
<input type="hidden" value="${activityType}" hidden-text1>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script src="../ueditor/ueditor.config.js"></script>
<script src="../ueditor/ueditor.all.js"></script>
<script src="../ueditor/lang/zh-cn/zh-cn.js"></script>
<script>
	seajs.use('main/spread/base/pic_text.js');
</script>
</body>
</html>
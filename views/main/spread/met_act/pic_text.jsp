<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/met_act/pic_text.css">
<title>图文消息</title>
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
			<span class="bread-text">图文消息</span>
			<a href="javascript:;" sc="back" class="r-g-btn">返回</a>
		</div>
		
		<!-- content -->
		<div class="clearfix" page-wrap>
			<div class="pic-text-wrap clearfix b-r">
				<div class="pic-text-view fl" pic-text-view>
					
				</div>
				<div class="pic-text-form fr b-r" pic-text-form>
					
				</div>
			</div>
		</div>
	</div>

</div>

<input type="hidden" value="${pkActivity}" hidden-text>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/met_act/pic_text.js');
</script>
</body>
</html>
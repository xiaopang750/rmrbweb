<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/mobile/mobile_add_edit.css">
<title>新建手机网站</title>
</head>
<body>
<div class="r-bg-layer"></div>	
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">

	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content">

		<!-- bread -->
		<div class="bread">
			<span class="bread-text fl">手机网站</span>
			<div class="fl mt-10 ml-10" data-ele="mobile-tree-content-wrap"></div>
			<div class="fl mt-16 ml-20 rel none" code-wrap>
				<a href="javascript:;">页面二维码</a>
			</div>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>

		<div class="head-list mt-9">
			<span class="r-icon mobile-select mr-17 ml-26"></span>
			<span class="blue"><span class="mr-5">3</span>请编辑手机网页内容</span>
			<div class="line"></div>
		</div>

		<div class="mobile-add-edit clearfix pt-30 pb-30">
			<!-- mobile-view -->
			<div class="mobile-view-wrap fl" data-ele="m-view-wrap">
				
			</div>
			<!-- mobile-form -->
			<div class="mobile-form-wrap fr">
				<div class="pt-10 pb-10">
					<span class="gray ml-10">(<span class="red">*</span>号标记的为必填)</span>
				</div>
				<div class="mobile-form-inner" data-ele="m-view-form">
					
				</div>

				<!-- btn -->
				<div class="tc none" btn-area>
					<a href="javascript:;" class="btn btn-primary btn-lg pl-50 pr-50 mt-21 mr-10" data-ele="save-btn">
						保存
					</a>
					<a href="javascript:;" class="btn btn-danger btn-lg pl-50 pr-50 mt-21" data-ele="reset-btn">
						重置
					</a>
				</div>
			</div>
		</div>

	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script src="../ueditor/ueditor.config.js"></script>
<script src="../ueditor/ueditor.all.js"></script>
<script src="../ueditor/lang/zh-cn/zh-cn.js"></script>
<script>
	seajs.use('main/mobile/mobile_add_edit.js');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/mobile/mobile_select_sub.css">
<title>添加子页面</title>
</head>
<body module-name="手机网站">
<div class="r-bg-layer"></div>	
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">

	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">

		<!-- bread -->
		<div class="bread">
			<span class="bread-text">
				站点：
				<span data-siteName>${siteName}</span>
			</span>
			<span class="bread-text">添加子页面</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
			
		<div class="select-sub">

			<!-- head -->
			<div class="head-list mt-9">
				<span class="r-icon mobile-write mr-17 ml-26"></span>
				<span class="blue"><span class="mr-5">1</span>填写基本资料</span>
				<div class="line"></div>
			</div>

			<!-- write-base -->
			<table cellspacing="0" cellpadding="0" border="0" width="350" class="auto write-area">
				<tr>
					<td width="75" class="tc">页面名称：</td>
					<td>
						<input type="text" class="form-control site-name fl" form_check="sys" ischeck="true" name="pageName" tip="此项为必填" wrong="页面名称由10位以内的数字，字母，下划线，以及中文组成" re="(([a-zA-Z]|(\_)|(\d)|([\u4e00-\u9fa5])){1,10})">
						<span class="fl red mt-5 ml-5 font-14">*</span>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<span class="gray">(<span class="red">*</span>号标记的为必填项)</span>
					</td>
				</tr>
			</table>

			<!-- head -->
			<div class="head-list mt-9">
				<span class="r-icon mobile-select mr-17 ml-26"></span>
				<span class="blue"><span class="mr-5">2</span>选择界面风格</span>
				<div class="line"></div>
			</div>

			<!-- select -->
			<div class="mobile-select-sub">
				<ul class="clearfix">
					<li>
						<div class="mobile-view-wrap" data-ele="select-type" name="pageModelOne" sitename="模板一">
							<img src="<%=path %>statics/assets/main/mobile/sub1.jpg" class="view-img" height="399">
							<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
							<div class="mobile-name">模板一</div>
						</div>
					</li>
					<li>
						<div class="mobile-view-wrap" data-ele="select-type" name="pageModelTwo" sitename="模板二">
							<img src="<%=path %>statics/assets/main/mobile/sub2.jpg" class="view-img"  height="399">
							<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
							<div class="mobile-name">模板二</div>
						</div>
					</li>
					<li>
						<div class="mobile-view-wrap" data-ele="select-type" name="pageModelThree" sitename="模板三">
							<img src="<%=path %>statics/assets/main/mobile/sub3.jpg" class="view-img"  height="399">
							<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
							<div class="mobile-name">模板三</div>
						</div>
					</li>

					<li>
						<div class="mobile-view-wrap fl"  data-ele="select-type" name="pageModelFour" sitename="模板四">
							<div class="self tc font-30">自定义模板</div>
							<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
							<div class="mobile-name">模板四</div>
						</div>
					</li>
				</ul>
			</div>

		</div>
		<!-- confirm -->
		<div class="tc pt-50 pb-50">
			<span class="btn btn-primary btn-lg pl-50 pr-50" script-role="confirm-btn">下一步</span>
		</div>


	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/mobile/mobile_select_sub.js');
</script>
</body>
</html>
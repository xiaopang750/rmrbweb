<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/mobile/mobile_build.css">
<title>新建手机网站</title>
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
			<span class="bread-text">新建手机网站</span>
		</div>
		
		<div class="mobile-build">
			<!-- head -->
			<div class="head-list mt-9">
				<span class="r-icon mobile-write mr-17 ml-26"></span>
				<span class="blue"><span class="mr-5">1</span>填写基本资料</span>
				<div class="line"></div>
			</div>
			<!-- write-base -->
			<table cellspacing="0" cellpadding="0" border="0" width="500" class="auto write-area">
				<tr>
					<td width="75" class="tc">网站名称</td>
					<td>
						<input type="text" class="form-control fl" form_check="sys" ischeck="true" name="siteName" tip="此项为必填" wrong="网站名称由20位以内的数字，字母，下划线，以及中文组成" re="(([a-zA-Z]|(\_)|(\d)|([\u4e00-\u9fa5])){1,20})">
						<span class="fl red mt-5 ml-5 font-14">*</span>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<span class="judge-name fl mt-5" judge-name>已经存在站点名称</span>
					</td>
				</tr>
				<tr>
					<td class="tc">行业类型</td>
					<td>
						<select class="form-control fl" name="siteProfession" form_check="sys" ischeck="true" tip="请选择行业类型" wrong="" re=".+">
							
						</select>
						<span class="fl red mt-5 ml-5 font-14">*</span>
					</td>
				</tr>
				<tr>
					<td class="tc">站点说明</td>
					<td>
						<textarea class="form-control fl" name="reserve2" form_check="sys" ischeck="free" tip="请填写站点说明" wrong="站点说明为200字以内" re="((.|\n){1,200})"></textarea>
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
			<!-- select-model -->
			<div class="select-wrap clearfix auto">
				<div class="mobile-view-wrap fl" data-ele="select-type" name="indexModelOne" sitename="模板一">
					<img src="<%=path %>statics/assets/sys/mobile/main_model1.jpg" class="view-img" width="234" height="399">
					<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
					<div class="mobile-name">模板一</div>
				</div>
				<div class="mobile-view-wrap fl"  data-ele="select-type" name="indexModelTwo" sitename="模板二">
					<img src="<%=path %>statics/assets/sys/mobile/main_model2.jpg" class="view-img" width="234" height="399">
					<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
					<div class="mobile-name">模板二</div>
				</div>
				<div class="mobile-view-wrap fl"  data-ele="select-type" name="indexModelThree" sitename="模板三">
					<div class="self tc font-30">自定义模板</div>
					<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
					<div class="mobile-name">模板三</div>
				</div>
			</div>
		</div>
		
		<!-- save -->
		<div class="tc pt-50 pb-30">
			<a href="javascript:;" class="btn btn-primary btn-lg pl-50 pr-50" script-role="confirm-btn" next-url="${funMenuMap['sitePageEdit']}">下一步</a>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/mobile/mobile_build.js');
</script>
</body>
</html>
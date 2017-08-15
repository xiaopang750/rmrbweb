<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/met_act/select_type.css">
<title>选择界面风格</title>
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
			<span class="bread-text">选择界面风格</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="met-act-select">

			<!-- <input type="text" widget-color> -->

			<div data-ele="step1">
				<!-- head -->
				<div class="head-list mt-9">
					<span class="r-icon mobile-write mr-17 ml-26"></span>
					<span class="blue"><span class="mr-5">1</span>填写基本资料</span>
					<div class="line"></div>
				</div>
				<!-- write-base -->
				<div script-bound="form_check">
					<table cellspacing="0" cellpadding="0" border="0" width="500" class="auto write-area">
						<tr>
							<td width="75" class="tc pb-20">会议主题：</td>
							<td class="pb-20">
								<input type="text" class="form-control" form_check="sys" ischeck="true" name="activity.activitytopic" tip="此项为必填" wrong="会议主题不能超过10个字" re="(.{1,10})">
							</td>
						</tr>
						<tr>
							<td width="75" class="tc pb-20">开始时间：</td>
							<td class="pb-20">
								<div script-role="check_wrap">
									<input type="text" class="form-control" form_check="sys" ischeck="true" name="activity.starttime" tip="此项为必填" wrong="此项为必填" re="(.+)" data-ele="time" readonly="readonly">
								</div>
							</td>
						</tr>
						<tr>
							<td width="75" class="tc pb-20">结束时间：</td>
							<td class="pb-20">
								<div script-role="check_wrap">
									<input type="text" class="form-control" form_check="sys" ischeck="true" name="activity.endtime" tip="此项为必填" wrong="此项为必填" re="(.+)" data-ele="time" readonly="readonly">
								</div>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">确认</a>
							</td>
						</tr>
					</table>
					
				</div>
			</div>
			
			<div class="none" data-ele="step2">
				<!-- head -->
				<div class="head-list mt-9">
					<span class="r-icon mobile-select mr-17 ml-26"></span>
					<span class="blue"><span class="mr-5">2</span>选择界面风格</span>
					<div class="line"></div>
				</div>
				<!-- select-model -->
				<div class="select-wrap clearfix auto">
					<div class="select-wrap-inner" select-type-wrap>
						
					</div>
				</div>

				<!-- save -->
				<div class="tc pt-30 pb-30">
					<span class="r-btn mobile-save" data-ele="next">下一步</span>
				</div>
			</div>
		</div>
	</div>

</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/met_act/select_type.js');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/met_act/flow.css">
<title>会议嘉宾</title>
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
			<span class="bread-text">会议嘉宾</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		<!-- flow-head -->
		<%@include file="../../../include/met_act_head.jsp" %>
		<!-- content -->
		<div class="flow flow3 clearfix" page-wrap>
			<div class="mobile-view-wrap fl">
				<!-- 视图预览 -->
				<div class="met-act-view" data-ele="view-wrap">
					
				</div>
			</div>
			<div class="met-form-wrap fr">
				<div class="head">
					<span class="ml-22">会议嘉宾</span>
				</div>
				<!-- 表单填写 -->
				<div class="main">
					<div data-ele="form-wrap">
						
					</div>
					<table class="table nohover noline" width="100%">
						<tr>
							<td width="80"></td>
							<td class="tl">
								<a href="javascript:;" class="btn btn-primary" sc="back">上一步</a>
								<a href="javascript:;" class="btn btn-success" save-btn>下一步</a>
							</td>
						</tr>	
					</table>
				</div>
			</div>
		</div>
	</div>

</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/met_act/flow.js');
</script>
</body>
</html>
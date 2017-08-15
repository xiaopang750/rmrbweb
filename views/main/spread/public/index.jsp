<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/public/public.css">
<title>现场活动</title>
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
			<span class="bread-text">现场活动</span>
		</div>
		
		<table cellpadding="0" cellspacing="0" border="0" width="100%" class="elc-index">
			<tr>
				<td >
					<a href="${funMenuMap['memberConference']}" sum-btn>
						<img src="<%=path %>statics/assets/main/spread/public/head2.png" alt="到店核销">
						<p>发布会员互动屏幕</p>
					</a>
				</td>
				<td>
					<a href="${funMenuMap['monitor']}">
						<img src="<%=path %>statics/assets/main/spread/public/head3.png" alt="店铺二维码">
						<p>发布会后台监控</p>
					</a>
				</td>
				<td>
					<a href="${funMenuMap['welcome']}">
						<img src="<%=path %>statics/assets/main/spread/public/head4.png" alt="修改活动">
						<p>会议签到欢迎界面设置</p>
					</a>
				</td>
			</tr>
		</table>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/public/index.js');
</script>
</body>
</html>
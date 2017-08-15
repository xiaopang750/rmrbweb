<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/gift/index.css">
<title>到店有礼</title>
</head>
<body>
<div class="r-bg-layer"></div>	

<!-- header -->
<%@include file="../../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">到店有礼</span>
		</div>
		
		<table cellpadding="0" cellspacing="0" border="0" width="100%" class="gift-index">
			<tr>
				<td>
					<a href="${funMenuMap['muliEdit']}">
						<img src="<%=path %>statics/assets/main/spread/gift/head1.png" alt="新建活动">
						<p>新建活动</p>
					</a>
				</td>
				
				<td>
					<a href="${funMenuMap['muliList']}">
						<img src="<%=path %>statics/assets/main/spread/gift/head4.png" alt="修改活动">
						<p>修改活动</p>
					</a>
				</td>
				<td>
					<a href="${funMenuMap['shopEwm']}">
						<img src="<%=path %>statics/assets/main/spread/gift/head3.png" alt="店铺二维码">
						<p>店铺二维码</p>
					</a>
				</td>
			</tr>
		</table>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/gift/index.js');
</script>
</body>
</html>
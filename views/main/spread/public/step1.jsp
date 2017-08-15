<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/public/public.css">
<title>现场抽奖</title>
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
			<span class="bread-text">现场抽奖</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="pic-text-wrap clearfix">
			<div class="mobile-view-wrap fl" data-ele="select-type" name="pageModelOne">
				<img src="<%=path %>statics/assets/main/spread/public/view_bg.jpg" class="view-img" width="233" height="399" data-ele="view-bg">
				<span class="r-btn mobile-select-btn" data-ele="select-btn"></span>
				<img src="<%=path %>statics/assets/lib/holder/blank.gif" class="view-circle" type-view>
				<div class="view-title">
					
				</div>
			</div>
			<div class="view-form fr">
				<div class="view-form-title">
					
				</div>
				<div class="view-form-content">
					<table cellpadding="0" cellspacing="0" border="0" width="90%" class="auto pt-10 pb-10">
						<tr>
							<td class="">互动活动</td>
							<td>
								<select act-typer>
									<option value="">请选择</option>
									<option value="001">大转盘</option>
									<option value="002">刮刮卡</option>
								</select>
							</td>
						</tr>
					</table>
					<div class="set-gift-wrap">
						<table cellpadding="0" cellspacing="0" border="0" width="100%" data-wrap>
							
						</table>
					</div>
					<div class="tc mt-20 mb-20">
						<a href="javascript:;" confirm class="btn btn-primary pl-50 pr-50">确定</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/public/step1.js');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/public/public.css">
<title>会议签到欢迎界面设置</title>
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
			<span class="bread-text">会议签到欢迎界面设置</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="view-area" view-wrap>
			<img src="<%=path %>statics/assets/lib/holder/blank.gif" view-image class="view-image">
			<div class="roll-text" roll-wrap>
				<div class="roll-text-inner" roll-text>
					
				</div>
			</div>
			<div class="view-text" view-text></div>
			<a href="javascript:;" data-role="full" class="full btn btn-default">全屏</a>
			<div class="qcode-wrap" qcode-wrap>
				
			</div>
		</div>

		<div class="upload-area">
			<div class="upload-head"></div>
			<table class="table nohover noline" width="90%">
				<tr>
					<td width="80">
						会议名称：
					</td>
					<td>
						<select select-met class="form-control">
							<option value="">选择会议</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>
						背景图片：
					</td>
					<td>
						<input type="text" class="form-control col-xs-8 fl" r-upload-name>
						<input type="hidden" r-upload-url>
						<a href="javascript:;" class="btn btn-default fr" r-upload-btn iscut="true" w="32" h="18" wmin="320" iscale="Y">选择图片</a>
					</td>
				</tr>
				<tr>
					<td>欢迎文字：</td>
					<td>
						<textarea view-input class="form-control"></textarea>
					</td>
				</tr>
				<tr>
					<td>文字颜色：</td>
					<td>
						<input type="text" class="form-control col-xs-8" readonly="readonly" widget-color>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/public/step4.js');
</script>
</body>
</html>
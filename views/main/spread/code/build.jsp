<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/code/build.css">
<title>线下活动二维码</title>
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
			<span class="bread-text">线下活动二维码</span>
		</div>

		<div class="code-wrap clearfix" inputtipwrap>

			<div class="code-input-wrap clearfix">

				<div class="code-input-left fl">
					<div class="mb-31 clearfix">
						<span class="fl mt-5 mr-20">页面链接：</span>
						<input type="text" class="form-control col-xs-8 fl" url>
					</div>
					<div class="tc">
						<a href="javascript:;" class="btn btn-primary" qcode-btn>生成二维码</a>
					</div>
				</div>

				<div class="code-input-right fr">
					<div class="pb-10">
						<span>您还可以输入：</span>
						<span tip></span>
						<span>个字</span>
					</div> 
					<textarea class="form-control h-sm mb-20" text="请输入自定义内容" qcode-text limit max="10"></textarea>
					<span class="gray">(自定义内容为必填)</span>
				</div>
			</div>
			<!-- <div class="code-view fr">
				<table cellpadding="0" cellspacing="0" border="0" width="100%">
					<tr>
						<td qcode-view height="290" class="tc code-td" width="290"></td>
					</tr>
				</table>
				<div class="change-size clearfix mt-10">
					<span class="fl mr-10">尺寸</span>
					<div class="range-area fl mr-10">
						<div class="line" line></div>
						<div class="cube" cube></div>
					</div>
					<span class="change-view fl" change-view>50</span>
				</div>
			</div> -->

			<div class="list-wrap mt-20">
				<div data-ele="data-wrap">
					
				</div>
				<%@include file="../../../include/fenye.jsp" %>
			</div>
		</div>
	</div>

</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/code/build.js');
</script>
</body>
</html>
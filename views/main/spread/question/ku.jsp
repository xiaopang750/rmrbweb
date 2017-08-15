<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/common.css">
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/question/question.css">
<title>问题库</title>
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
			<span class="bread-text">问题库</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="inner-wrap">
			<table cellpadding="0" cellspacing="0" border="0" width="100%" class="table">
				<thead>
					<tr>
						<td colspan="3">
							<span class="fl mt-5 mr-10 font-12">按问题库类别查询:</span>
							<select change-type class="form-control fl col-xs-2 mr-10">
								<option value="">请选择</option>
							</select>
							<a href="javascript:;" class="btn btn-primary fl" add>添加问题</a>
						</td>
					</tr>
				</thead>
				<tbody data-ele="data-wrap">
					
				</tbody>
			</table>
		</div>

		<%@include file="../../../include/fenye.jsp" %>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/question/ku.js');
</script>
</body>
</html>
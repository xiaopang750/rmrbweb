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
<title>创建问卷</title>
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
			<span class="bread-text">创建问卷</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<!-- write-base -->
		<div class="create-wrap auto mt-20" script_bound="form_check">

			<table cellspacing="0" cellpadding="0" border="0" width="100%" class="table nohover noline nobg">
				<tr>
					<td class="tc">调查问卷问题目设置</td>
					<td>
						<input type="text" class="form-control col-xs-11" form_check="sys" ischeck="true" name="rmrbWjObject.title" tip="此项为必填" wrong="调查问卷问题目设置为20个字以内" re="(.{1,20})">
						<span class="fl red mt-5 ml-5 font-14">*</span>
					</td>
				</tr>
				<tr>
					<td class="tc">选择问卷类型</td>
					<td>
						<select type="text" class="form-control col-xs-11" form_check="sys" ischeck="true" name="rmrbWjObject.type" tip="此项为必填" wrong="此项为必填" re="(.+)" question-type>
							<option value="">请选择</option>
						</select>
						<span class="fl red mt-5 ml-5 font-14">*</span>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<span class="gray fl ml-5 mt-5">(<span class="red">*</span>号标记的为必填项)</span>
					</td>
				</tr>
				<tr>
					<td class="tc">调查问卷说明</td>
					<td>
						<textarea type="text" class="form-control h-mid col-xs-11" form_check="sys" ischeck="true" name="rmrbWjObject.discribe" tip="此项为必填" wrong="调查问卷说明为100个字以内" re="((.|\n){1,100})"></textarea>
						<span class="fl red mt-5 ml-5 font-14">*</span>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<a href="javascript:;" class="btn btn-primary pl-50 pr-50" script-role="confirm-btn">创建</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/question/create.js');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/way/member.css">
<title>会员管理</title>
</head>
<body>

<div class="r-bg-layer"></div>
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">会员管理</span>
		</div>
		
		<div class="search-area">

			<div class="inner clearfix">
				
				<div class="clearfix mb-20">
					<span class="fl mt-5">会员名称：</span>
					<input type="text" search-text="nickName" class="form-control col-xs-2 mr-10">

					<span class="fl mt-5">手机号码：</span>
					<input type="text" search-text="member.cellphone" class="form-control col-xs-2 mr-10">

					<span class="fl mt-5">邮箱：</span>
					<input type="text" search-text="member.mainbox" class="form-control col-xs-2 mr-10">
				</div>	

				<div class="clearfix">
					<div class="clearfix mb-20">
						<select class="form-control col-xs-2 mr-10" select-range select-level name="member.memberrank">
							<option value="">请选择会员级别</option>
						</select>

						<select class="form-control col-xs-2 mr-10" select-range select-status name="member.memberstatus">
							<option value="">请选择会员状态</option>
						</select>

						<select class="form-control col-xs-2 mr-10" select-range select-black name="member.reserve7">
							<option value="">请选择拉黑状态</option>
							<option value="0">已拉黑</option>
							<option value="1">未拉黑</option>
						</select>
					</div>

					<div class="clearfix mb-20">
						<select class="form-control col-xs-2 mr-10" select-range select-group name="member.reserve8">
							<option value="">请选择会员分组</option>
						</select>
						<a search-btn class="btn btn-primary fl mr-10" href="javascript:;">快速查找</a>
						<a all class="btn btn-primary fl mr-10" href="javascript:;">显示所有</a>
					</div>
				</div>

				<div class="clearfix pb-10">
				
					<div class="fl import-member mr-10">
						<form action="../excel/impExcel" target="upload-excel" enctype="multipart/form-data" method="post" uploadForm>
							<a href="javascript:;" class="btn btn-primary">会员导入</a>
							<input type="file" file name="exclFilePath">
							<input type="hidden" name="entity" value="memberinfo">
							<iframe frameborder="0" class="none" name="upload-excel"></iframe>
						</form>
					</div>

					<a class="btn btn-primary fl mr-10" href="javascript:;" add-group-btn>会员添加分组</a>
					<a class="btn btn-primary fl mr-10" href="${funMenuMap['memberForm']}">会员添加</a>

					<a class="btn btn-info fl" href="<%=path %>statics/assets/xls_template/memberImport.xls">会员导入模板下载</a>
					<span class="fl mt-8 mr-20">（请上传xls格式的文件）</span>
				</div>
			</div>
		</div>
	
		<div data-ele="data-wrap">
			
		</div>

		<!-- fenye -->
		<%@include file="../../include/fenye.jsp" %>
		
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/way/member.js');
</script>
</body>
</html>
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
<title>新建问题</title>
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
			<span class="bread-text">新建问题</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<div class="q-main clearfix auto">

			<div class="question-head" question-head>
				<ul class="clearfix fr mr-10 mt-10">
					<li>
						<a href="javascript:;" class="block" chose-ku>
							<span class="q-icon chose fl"></span>
							<span class="fl mt-5 ml-5">从问题库选择问题</span>
						</a>
					</li>
				</ul>
			</div>

			<!-- left-bar -->
			<div class="left-bar fl" left-bar>
				<div class="inner">
					<h3 class="font-16 tc">基本题型</h3>
					<ul select-question>
						<li select-type="radio">
							<a href="javascript:;" class="clearfix">
								<span class="q-icon radio fl"></span>
								<span class="fl">单选题</span>
							</a>
						</li>
						<li select-type="checkbox">
							<a href="javascript:;" class="clearfix">
								<span class="q-icon checkbox fl"></span>
								<span class="fl">多选题</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- right-content -->
			<div class="right-content fr rel">
				<div exam-head class="exam-head">
					<h2 class="title tc" q-edit q-text-max="20" org="pangzi" edit-type="title">pangzi</h2>
					<div class="q-list clearfix description" description>
						<div class="q-list-l">
						</div>
						<div class="q-list-r mt-5">
							<div class="inner" q-edit q-text-max="100" org="sdfsd" edit-type="content">
								sdfsd
							</div>
						</div>
					</div>
				</div>
				<ul class="q-list-wrap mb-20" q-list-wrap>
					
				</ul>
				<div class="main-change" main-change>
					<a href="javascript:;">
						<i title="上移本题" class="q-icon main-up" main-up></i>
					</a>
					<a href="javascript:;">
						<i title="下移本题" class="q-icon main-down" main-down></i>
					</a>
				</div>
				<div class="tc">
					<!-- <div class="WJButton wj_blue smallfontsize postionbtn Batch_push test_class_A saving-btn" >
						保存
					</div> -->
					<a href="javascript:;" class="btn btn-primary pl-50 pr-50 none" saving>保存</a>
					<a href="javascript:;" class="btn btn-primary pl-50 pr-50 none" sc="back" ku-back>确定</a>
				</div>	
			</div>
		</div>	
		
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/question/form.js');
</script>
</body>
</html>
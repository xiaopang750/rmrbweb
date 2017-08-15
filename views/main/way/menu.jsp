<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/way/menu.css">
<title>自定义菜单</title>
</head>
<body>
<div class="r-bg-layer"></div>
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text"><span menu-type></span>菜单</span>
			<a href="javascript:;" class="btn btn-info btn-sm page-back" sc="back">返回</a>
		</div>
		
		<!-- main -->
		<div class="weixin-box clearfix">
			<div class="line"></div>
			<div class="menu fl" sc="menu-wrap">
				<div class="menu-head">
					<span class="ml-15">菜单管理</span>
					<span sc="todoFront" class="todoFront">
						<a href="javascript:;" sc="add-main" class="btn btn-primary add">添加</a>
						<a href="javascript:;" sc="sort" class="btn btn-default rank">排序</a>
					</span>
					<span sc="todoBack" class="todoBack">
						<a href="javascript:;" sc="confirmSort" class="btn btn-primary rank-confirm">完成</a>
						<a href="javascript:;" sc="cancel" class="btn btn-default cancel">取消</a>	
					</span>
				</div>
				<div class="menu-content" sc="menu-content">
					
				</div>
			</div>
			<div class="main fl">
				
				<!-- init -->
				<div class="none-lay tc font_14 none" sc="none-lay" select-lay order="-2">
					你可以先添加一个菜单，然后开始为其设置响应动作
				</div>

				<!-- init -->
				<div class="none-lay tc font_14 none" sc="none-lay" select-lay order="-1">
					已有子菜单，无法设置动作
				</div>

				<!-- select -->
				<div class="type-select none" sc="type-select" select-lay order="0">
					<h3 class="bold font_14">请选择订阅者点击菜单后，公众号做出相应动作</h3>
					<ul class="clearfix">
						<li sc="order-list" click-order="1">
							<dl>
								<dt class="message"></dt>
								<dd>发送消息</dd>
							</dl>
						</li>
						<!-- <li sc="order-list" click-order="2">
							<dl>
								<dt class="info"></dt>
								<dd>发送资讯</dd>
							</dl>
						</li> -->
						<li  sc="order-list" click-order="3">
							<dl>
								<dt class="link"></dt>
								<dd>跳转网页</dd>
							</dl>
						</li>
					</ul>
				</div>

				<!-- text -->
				<div class="text-wrap none" sc="text-wrap" select-lay order="1" inputtipwrap>
					<div class="text-title">
						<div class="text-logo">
							<div class="pt-5 pl-5">
								<span class="icon-text-logo"></span>
								<span>文字</span>
							</div>
						</div>
					</div>
					<div class="text-content">
						<textarea sc="text-input" max="600"></textarea>
					</div>
					<div class="text-bottom">
						<span class="fr mr-10 mt-4 gray">您还可以输入<span sc="text-tip"></span>字</span>
					</div>
					<a href="javascript:;" sc="save-text" role="save-btn" class="btn btn-primary mt-20" type="1">保存</a>
				</div>
				

				<!-- info -->
				<div class="info-wrap none" sc="info-wrap" select-lay order="2">
					<h3 class="font_14 mb_10">订阅者点击该子菜单会收到以下消息</h3>
					<div class="info-inner" sc="info-view">
						
					</div>
				</div>
				
				<!-- link -->
				<div class="link-wrap none" sc="link-wrap" select-lay order="3">
					<h3 class="font_14 mb-10">订阅者点击该子菜单会跳转到以下页面</h3>
					<div class="clearfix mb-10">
						<!-- <select class="form-control col-xs-5">
						
						</select> -->
						<input type="text" class="form-control col-xs-10" sc="link-select-wrap">
					</div>
					<div class="clearfix">
						<a href="javascript:;" sc="save-link" role="save-btn" class="btn btn-primary" type="3">保存</a>
					</div>
				</div>
			</div>
		</div>
		<div class="save-wrap auto clearfix tc">
			<a href="javascript:;" sc="save-all" class="btn btn-primary pt-5 pb-5 pl-30 pr-30">生成菜单</a>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/way/menu.js');
</script>
<script>
	
</script>
</body>
</html>
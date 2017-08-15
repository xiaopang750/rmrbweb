<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/member/member.css">
<title>在线客服</title>
</head>
<body module-name="会员互动">
<div class="r-bg-layer"></div>	
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">

	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content">

		<!-- bread -->
		<div class="bread">
			<span class="bread-text fl">在线客服</span>
			<div class="fl mt-10 ml-10" data-ele="mobile-tree-content-wrap"></div>
		</div>

		<!-- online -->
		<div class="online-wrap clearfix" online-wrap>

			<div class="online-left fl">
				<div class="third-area clearfix mb-20">
					<ul>
						<li third-type="001">
							<a href="javascript:;" class="clearfix">
								<span class="weixin icon"></span>
								<!-- <span class="num">10</span> -->
							</a>
						</li>
						<li third-type="002">
							<a href="javascript:;" class="clearfix">
								<span class="weibo icon"></span>
								<!-- <span class="num">10</span> -->
							</a>
						</li>
						<!-- <li>
							<a href="javascript:;" class="clearfix">
								<span class="qq icon"></span>
								<span class="num">10</span>
							</a>
						</li> -->
					</ul>
				</div>

				<div class="refresh-btn mb-10">
					<h3 class="blue font-18 mb-5">个性化设置</h3>
					<div class="clearfix mb-10">
						<input type="text" class="fl set-text" apply-input>
						<a href="javascript:;" class="fl member-btn ml-10" apply-btn>应用</a>
					</div>
					<div class="clearfix">
						<a href="javascript:;" class="fl member-btn mr-4" auto refresh-btn>自动刷新</a>
						<a href="javascript:;" class="fl member-btn mr-4" hand refresh-btn>手动刷新</a>
						<a href="javascript:;" class="fl member-btn" stop refresh-btn>停止刷新</a>
					</div>
				</div>

				<div class="member-list mb-10">
					<ul user-wrap>
						<!-- 在线客服用户列表 -->
						
					</ul>
				</div>

				<div class="member-detail member-info" member-info>
					<!-- 在线客服用户信息 -->

				</div>
				
			</div>
			
			<div class="online-right fr member-bg">
				<div class="view-text mb-20 member-bg" view-text>
					<ul class="pt-10 ml-10" record-wrap>
						<!-- 对话列表 -->
					</ul>
				</div>
				<textarea class="input-area mb-10 member-bg" member-msg></textarea>
				<div class="btn-area fr mb-20">
					<a href="javascript:;" class="member-btn" send-btn>发送</a>
					<a href="javascript:;" class="member-btn" close-all>关闭当前会话</a>
				</div>
				<div class="clear"></div>
				<div class="search-area member-bg">
					<div class="clearfix mt-10 ml-10">
						<input type="text" class="form-control fl col-xs-3 mr-5" know-search-input>
						<a href="javascript:;" class="btn btn-primary fl" know-search-btn>查询</a>
					</div>
					<div class="mt-10">
						<span class="ml-5 red mt-5 mr-20">从知识库选择</span>
					</div>	
					<ul class="mt-5 ml-5" know-wrap>
						
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/member/online.js');
</script>
</body>
</html>
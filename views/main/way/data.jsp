<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/way/data.css">
<title>渠道数据</title>
</head>
<body module-name="自媒体渠道管理">
<div class="r-bg-layer"></div>
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">
	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	
	<div class="main-content" script-bound="form_check">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">渠道数据</span>
		</div>
		
		<div class="data-wrap">
			<div class="top clearfix pt-20 pb-50">
				<h3 class="fl font-24 black">本日活动最新数据：</h3>
				<!-- <div class="point-area font-14 black fr">
					<span class="fl mr-10">您目前的活动质量指数</span>
					<ul class="fl">
						<li>
							<span class="data-icon data8 active"></span>
						</li>
						<li>
							<span class="data-icon data8 active"></span>
						</li>
						<li>
							<span class="data-icon data8 active"></span>
						</li>
						<li>
							<span class="data-icon data8"></span>
						</li>
						<li>
							<span class="data-icon data8"></span>
						</li>
					</ul class="fl">
					<span>，加油</span>
				</div> -->
			</div>

			<div class="data-tile clearfix">
				<span class="fl data-icon data7 mt-5 mr-5"></span>
				<span class="fl font-18">总体情况</span>
			</div>

			<div class="data-num pt-50 pb-50">
				<table cellpadding="0" cellspacing="0" border="0" width="100%">
					<tr>
						<td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data1"></span>
								</dt>
								<dd class="fl">
									<p>会员总数累计</p>
									<span class="num">${totle}</span>
									<span>位</span>
								</dd>
							</dl>
						</td>
						<td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data4"></span>
								</dt>
								<dd class="fl">
									<p>昨日新增会员</p>
									<span class="num">${yesterdayCount}</span>
									<span>位</span>
								</dd>
							</dl>
						</td>
						<td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data5"></span>
								</dt>
								<dd class="fl">
									<p>会员流失数</p>
									<span class="num">${loss}</span>
									<span>位</span>
								</dd>
							</dl>
						</td>
						<!-- <td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data2"></span>
								</dt>
								<dd class="fl">
									<p>活跃会员数</p>
									<span class="num">50</span>
									<span>位</span>
								</dd>
							</dl>
						</td> -->
						<!-- <td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data3"></span>
								</dt>
								<dd class="fl">
									<p>行业活动影响力排名</p>
									<span class="num">1</span>
									<span>位</span>
								</dd>
							</dl>
						</td> -->
					</tr>
					<!-- <tr>
						<td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data4"></span>
								</dt>
								<dd class="fl">
									<p>昨日新增会员</p>
									<span class="num">${yesterdayCount}</span>
									<span>位</span>
								</dd>
							</dl>
						</td>
						<td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data5"></span>
								</dt>
								<dd class="fl">
									<p>会员流失数</p>
									<span class="num">${loss}</span>
									<span>位</span>
								</dd>
							</dl>
						</td>
						<td>
							<dl class="clearfix">
								<dt class="fl mr-5">
									<span class="data-icon data6"></span>
								</dt>
								<dd class="fl">
									<p>会员活跃度行业排名</p>
									<span class="num">1</span>
									<span>位</span>
								</dd>
							</dl>
						</td>
					</tr> -->
				</table>
			</div>

			<div class="data-tile clearfix">
				<div class="w30 fl">
					<span class="fl data-icon data7 mt-5 mr-5"></span>
					<span class="fl font-18">一周内企业关注数渠道分布</span>
				</div>
				<div class="w70 fl">
					<span class="fl data-icon data7 mt-5 mr-5"></span>
					<span class="fl font-18">一周内关注数</span>
				</div>
			</div>

			<div class="chart-area clearfix">
				<div class="chart1 fl" chart-1>
							
				</div>
				<div class="chart2 fl" chart-2>
					
				</div>
			</div>

			<div class="clear"></div>
				
			<div class="data-tile clearfix pt-50">
				<span class="fl data-icon data7 mt-5 mr-5"></span>
				<span class="fl font-18">活动数量与关注数效果分析</span>
			</div>
			
			<div class="chart-area clearfix">
				<div class="chart3 fl" chart-3>
					
				</div>
			</div>	
		</div>
	</div>
</div>

<textarea name="" id="" cols="30" rows="10" class="none" data>${data}</textarea>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/way/data.js');
</script>
<script>
	
</script>
</body>
</html>
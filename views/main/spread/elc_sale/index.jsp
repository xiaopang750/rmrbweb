<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../include/meta.jsp" %>
<%@include file="../../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/spread/elc_sale/elc_sale.css">
<title>电子优惠券</title>
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
			<span class="bread-text">电子优惠券</span>
		</div>
		
		<table cellpadding="0" cellspacing="0" border="0" width="100%" class="elc-index">
			<tr>
				<td>
					<a href="${funMenuMap['couponsEdit']}">
						<img src="<%=path %>statics/assets/main/spread/elc_sale/head1.png" alt="新建活动">
						<p>新建电子优惠券</p>
					</a>
				</td>
				<td >
					<a href="javascript:;" acounts-box-btn>
						<img src="<%=path %>statics/assets/main/spread/gift/head2.png" alt="到店核销">
						<p>核销</p>
					</a>
				</td>
				<td>
					<a href="${funMenuMap['conpousList']}">
						<img src="<%=path %>statics/assets/main/spread/elc_sale/head3.png" alt="店铺二维码">
						<p>电子优惠劵活动管理</p>
					</a>
				</td>
			</tr>
			<!-- <tr>
				<td>
					<a href="../activity/jump?resultName=coupons_list">
						<img src="<%=path %>statics/assets/main/spread/gift/head4.png" alt="修改活动">
						<p>修改优惠活动</p>
					</a>
				</td>
				<td></td>
				<td></td>
			</tr> -->
		</table>
	</div>
</div>

<!-- 到店核销 -->
<div class="r-box1 sum-box none" sub-box>
	<span class="r-btn close" sc="close"></span>
	<div class="head">到店核销</div>
	<div class="inner">
		<div class="content">
			<table cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td width="50">
						手机号
					</td>
					<td>
						<input type="text">
					</td>
				</tr>
				<tr>
					<td>
						验证码
					</td>
					<td>
						<input type="text" value="Macsad" readonly="readonly">
					</td>
				</tr>
				<tr>
					<td>
						
					</td>
					<td>
						<button sc="close">确定</button>
						<button sc="close">取消</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/spread/elc_sale/index.js');
</script>
</body>
</html>
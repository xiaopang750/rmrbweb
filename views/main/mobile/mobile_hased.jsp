<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<link rel="stylesheet" href="<%=path %>statics/src/css/main/mobile/mobile_hased.css">
<link rel="stylesheet" href="<%=path %>statics/src/css/main/mobile/mobile_add_edit.css">
<title>已有手机网站</title>
</head>
<body module-name="手机网站">
<div class="r-bg-layer"></div>
<!-- header -->
<%@include file="../../include/header.jsp" %>

<div class="main-layer-content">

	<!-- tree -->
	<%@include file="../../include/tree.jsp" %>
	<div class="main-content">
		<!-- bread -->
		<div class="bread">
			<span class="bread-text">已有手机网站</span>
		</div>		
		<div class="mobile-hased">
			<ul data-ele="data-wrap">
				<!-- tpl/mobile_hased/list -->
			</ul>

			<!-- <div class="form1" form1>
				<input type="text" reg="email" name="haha1">
				<br>
				<input type="checkbox" reg="checkbox" name="haha2">
				<br>
				<input type="radio" reg="radio" name="haha3">
				<br>
				<textarea pattern=".+" name="haha4"></textarea>
				<br>
				<select name="" id="" reg="" reg="not-blank" name="haha5">
					<option value="1">1</option>
					<option value="2">2</option>
				</select>
				<br>
			</div> -->
		</div>
		
		<%@include file="../../include/fenye.jsp" %>
	</div>
</div>



<!-- <div id="deji">
	
</div> -->

<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
	seajs.use('main/mobile/mobile_hased.js');
</script>
<!-- <script src="../socket.io.js"></script> -->
<script>

	/*var oDeji = document.getElementById('deji');

	window.onload = function() {
			
  		var socket = io.connect('ws://fw.athenawyc.com:5544');

		  socket.on('weibolist', function (data) {

		  	oDeji.innerHTML = data.content;

		  	console.log(data.content);

		});
	}*/
</script>
</body>
</html>
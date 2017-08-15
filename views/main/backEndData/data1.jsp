<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<title>推广活动排行</title>
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
            <span class="bread-text fl">推广活动排行</span>
        </div>

        <div class="inner-wrap" tab-wrap>
           <div class="mb-20">
                <a href="javascript:;" class="btn btn-primary active" widget-role="tab-head">渠道活动</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">区域会员</a>
            </div>
            <div>
               <div widget-role="tab-content">
                  <div data-wrap></div>
                  <div pic-wrap class="mt-50">
                    
                  </div>
               </div> 
               <div widget-role="tab-content" class="tc none">
                   暂无数据
               </div> 
            </div>
        </div>

    </div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
    seajs.use('main/backEndData/data1.js');
</script>
</body>
</html>
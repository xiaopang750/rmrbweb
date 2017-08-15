<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<title>活动类型对比</title>
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
            <span class="bread-text fl">活动类型对比</span>
        </div>

        <div class="inner-wrap" tab-wrap>
            <div class="mb-20">
                <a href="javascript:;" class="btn btn-primary active" widget-role="tab-head">分渠道分析活动效果</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">分区域分析活动效果</a>
            </div>
            <div>
               <div data-wrap widget-role="tab-content">
                    
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
    seajs.use('main/backEndData/data4.js');
</script>
</body>
</html>
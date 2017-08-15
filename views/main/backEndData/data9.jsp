<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<title>区域活动推动</title>
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
            <span class="bread-text fl">区域活动推动</span>
        </div>

        <div class="inner-wrap" tab-wrap>
            <div class="mb-20">
                <a href="javascript:;" class="btn btn-primary active" widget-role="tab-head">区域内同行业推广活动排名TOP 10</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">跨区域同行业推广活动排名TOP 10</a>
            </div>
            <div>
               <div data-wrap widget-role="tab-content" class="tc">
                    暂无数据
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
    seajs.use('main/backEndData/data9.js');
</script>
</body>
</html>
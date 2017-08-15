<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<title>会员活跃度</title>
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
            <span class="bread-text fl">会员活跃度</span>
        </div>

        <div class="inner-wrap" tab-wrap>
            <div class="mb-20">
                <a href="javascript:;" class="btn btn-primary active" widget-role="tab-head">活动参与量统计</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">活动访问量统计</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">活动评论量统计</a>
            </div>
            <div>
               <div widget-role="tab-content">
                    <div data-wrap-join>
                      
                    </div>
                    <div pic-wrap-join pic-table></div>
               </div> 
               <div widget-role="tab-content" class="tc none">
                  <div data-wrap-view>
                      
                  </div>
                  <div pic-wrap-view pic-table></div>
               </div>
               <div widget-role="tab-content" class="tc none">
                  <div data-wrap-arg>
                      
                  </div>
                  <div pic-wrap-arg pic-table></div>
               </div>  
            </div>
        </div>

    </div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
    seajs.use('main/backEndData/data6.js');
</script>
</body>
</html>
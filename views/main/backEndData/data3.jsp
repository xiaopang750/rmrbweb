<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<title>活动效果对比</title>
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
            <span class="bread-text fl">活动效果对比</span>
        </div>

        <div class="inner-wrap" tab-wrap>
            <div class="mb-20">
                <a href="javascript:;" class="btn btn-primary active" widget-role="tab-head">同一活动不同渠道推广效果</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">同一活动不同区域推广效果</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">同一渠道所有推广活动效果</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">同一区域所有推广活动效果</a>
            </div>
            <div>
               <div widget-role="tab-content">
                    <div class="clearfix mb-20">
                        <span class="fl mr-5 mt-5">活动搜索：</span>
                        <input type="text" class="form-control col-xs-2 mr-10" act-search-input>
                        <a href="javascript:;" class="btn btn-primary fl mr-40" search-btn>搜索</a>
                        <select class="form-control col-xs-2" act-select>
                            <option value="">请选择活动</option>
                        </select>
                    </div>
                    <div data-wrap>
                        
                    </div>
               </div> 
               <div widget-role="tab-content" class="tc none">
                   暂无数据
               </div>
               <div widget-role="tab-content" data-wrap-all class="none">
                   1
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
    seajs.use('main/backEndData/data3.js');
</script>
</body>
</html>
<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<title>会员行为</title>
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
            <span class="bread-text fl">会员行为</span>
        </div>

        <div class="inner-wrap" tab-wrap>
            <div class="mb-20">
                <a href="javascript:;" class="btn btn-primary active" widget-role="tab-head">按会员级别</a>
                <a href="javascript:;" class="btn btn-primary" widget-role="tab-head">按活动类型</a>
            </div>
            <div>
               <div data-wrap-level widget-role="tab-content">
                    
               </div> 
               <div widget-role="tab-content" class="tc none">
                   <div class="clearfix mb-10">
                       <select class="form-control col-xs-2 mr-10" level-select>
                           <option value="">请选择</option>
                       </select>
                   </div>
                   <div data-wrap-act>
                       
                   </div>
               </div> 
            </div>
        </div>

    </div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
    seajs.use('main/backEndData/data7.js');
</script>
</body>
</html>
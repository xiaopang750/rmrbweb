<% String path=(String)request.getAttribute("basePath"); %>
<%@page contentType="text/html;charset=utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../include/meta.jsp" %>
<%@include file="../../include/globalCss.jsp"%>
<title>数据统计</title>
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
            <span class="bread-text fl">数据统计</span>
        </div>

        <div class="inner-wrap" data-wrap>
            <table class="table striped" btn-wrap width="100%">
                <!-- 1 -->
                <tr>
                    <td width="50%">
                        <a href="javascript:;" class="btn btn-primary" index="001">
                            推广活动效果展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>
                 <!-- 2 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="002">
                          渠道会员总数增量展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <!-- 3 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="003">
                           渠道活动发布增量展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <!-- 4 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="004">
                            区域活动发布增量展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <!-- 5 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="005">
                            单个活动不同渠道推广效果展示
                        </a>
                    </td>
                    <td>
                        <input type="text" class="form-control col-xs-3 mr-20" act-input>
                        <select class="form-control col-xs-3" act-select>
                            <option value="请选择">请选择</option>
                        </select>
                    </td>
                </tr>


                <!-- 6 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="006">
                          单个活动不同区域推广效果展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <!-- 7 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="007">
                            渠道所有活动推广效果展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 8 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="008">
                            区域所有活动推广效果展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 9 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="009">
                            渠道下不同类型活动推广效果展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 10 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="010">
                           区域下不同类型活动推广效果展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 11 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="011">
                          渠道下会员增量展示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 12 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="012">
                            区域下会员增量显示
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 13 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="013">
                            按时间，分渠道参与活动会员统计分析
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <!-- 14 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="014">
                            按时间，分渠道阅读信息/转发信息会员统计分析
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <!-- 15 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="015">
                            按时间，分渠道评论/咨询互动会员统计分析
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 16 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="016">
                            按会员级别，分渠道活动参与、阅读/转发、评论/互动的会员统计分析
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 17 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="017">
                            按活动类型，结合会员级别，分渠道活动参与、阅读/转发、评论/互动的会员统计分析
                        </a>
                    </td>
                    <td>
                        <select class="form-control" level-select>
                            <option value="">请选择</option>
                        </select>
                    </td>
                </tr>


                <!-- 18 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="018">
                           渠道会员积分积分统计
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>

                <!-- 19 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="019">
                            会员积分新增统计
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 20 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="020">
                            推广活动投放量、渠道、会员变化/增速分析
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>


                <!-- 21 -->
                 <tr>
                    <td>
                        <a href="javascript:;" class="btn btn-primary" index="021">
                            推广活动投放量、渠道、会员变化/增速分析
                        </a>
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table>
        </div>

    </div>
</div>


<script src="<%=path %>statics/seajs/sea.js"></script>
<script src="<%=path %>statics/seajs/config.js"></script>
<script>
    seajs.use('main/backEndData/change.js');
</script>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>


</head>
<body>

在线会员 (${countUser})<br>
<table>
 <c:forEach var="item" items="${onlineUser}">
     <tr>
        <td>${item.userName} </td>
        <td><a href="../sys/quitSystem?sessionId=${item.sessionId}">退出用户 </a></td>
      </tr>
</c:forEach>
 
</table>
</body>
</html>
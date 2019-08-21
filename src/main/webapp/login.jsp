<%--
  Created by IntelliJ IDEA.
  User: HuangTianQing
  Date: 2019/8/20
  Time: 23:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
%>
<html>
<head>
    <title>登录页</title>
    <link rel="stylesheet" href="static/layui/css/style.css">
    <link rel="stylesheet" href="static/layui/css/admin.css">
</head>
<body>
<div class="kit-login-bg">
    <div id="mydiv">
        <form action=<%=path+"/user/findAllUser"%> method="post">
            <div >
                <label for="username">账号：</label>
                <input type="text" name="username" value="admin" id="username" placeholder="用户名">
            </div>
            <div id="div2">
                <label for="password">密码：</label>
                <input type="password" name="age" value="admin" id="password" placeholder="密码">
            </div>
            <input type="submit"  value="确认登录">
            <p>
                <a href="login.jsp">返回 </a>
            </p>
        </form>
    </div>
</div>
</body>
</html>
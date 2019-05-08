<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <div class="login_wrapper">
        <!--头部-->
        <div class="header">
            <div class="container">
                <a href="#" class="logo"><img src="images/logo.png" alt=""></a>
            </div>
        </div>
        <!--登录框-->
        <div class="login">
             <div class="login_box">
                 <form method="post" action="./index.gy">
                     <div class="form_control">
                         <label for="username">用户名：</label>
                         <input name="username" type="text" class="username" value="" id="username" autofocus>
                     </div>
                     <div class="form_control">
                         <label for="password">密　码：</label>
                         <input name="password" type="password" class="password" value="" id="password">
                     </div>
                     <input type="submit" class="longinta" value="登录">
                 </form>
                 <!--扫码图标-->
                 <a href="#" class="sm"></a>
             </div>
        </div>
    </div>
</body>
</html>

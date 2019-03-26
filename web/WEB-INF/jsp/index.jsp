<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html>
    <head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Home</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="" />	
	<!-- Animate.css -->
	<link rel="stylesheet" href="css1/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="css1/icomoon.css">
	<!-- Themify Icons-->
	<link rel="stylesheet" href="css1/themify-icons.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="css1/bootstrap.css">

	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css1/magnific-popup.css">

	<!-- Owl Carousel  -->
	<link rel="stylesheet" href="css1/owl.carousel.min.css">
	<link rel="stylesheet" href="css1/owl.theme.default.min.css">

	<!-- Theme style  -->
	<link rel="stylesheet" href="css1/style.css">

	<!-- Modernizr JS -->
	<!--<script src="js/modernizr-2.6.2.min.js"></script>-->
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

    </head>
    
    <body>
		
	<!--<div class="gtco-loader"></div>-->
	
	<div id="page">

	<div class="page-inner">
	<nav class="gtco-nav" role="navigation">
		<div class="gtco-container">
			<div class="row">
				<div class="col-sm-4 col-xs-12">
					<div name='Tit' id="gtco-logo"><a href="index.gy">C语言信息化教学系统<em>.</em></a></div>
				</div>
				<div class="col-xs-8 text-right menu-1" >
					<ul>
						<li><a href="#">首页</a></li>
						<li><a href="#">在线考试</a></li>
                                                <li><a href="#">智能问答</a></li>
						<li class="has-dropdown">
							<a href="#">我的信息</a>
							<ul class="dropdown">
								<li><a name='Tit' href="#">个人信息</a></li>
								<li><a name='Tit' href="#">最新回复</a></li>
							</ul>
						</li>
						<li><a name='Tit' href="#">联系老师</a></li>
						<li class="has-dropdown"><a href="#"><span>powered by</span></a>
                                                    <ul class="dropdown">
								<li><a href="#">图片鸣谢：睿思zhusida，扬帆远航...</a></li>
						    </ul>
                                                </li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	
	<header id="gtco-header" class="gtco-cover" role="banner" style="background-image: url(images/img_4.jpg)">
		<div class="overlay"></div>
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-12 col-md-offset-0 text-left">
					<div class="row row-mt-15em">
						<div class="col-md-7  animate-box" data-animate-effect="fadeInUp">
							<span  class="intro-text-small" style="font-size:30px">欢迎使用C语言信息化教学系统</span>
                                                        <a href="#" class="intro-text-small" style="font-size:20px">在线考试</a>
                                                        <a href="#" class="intro-text-small" style="font-size:20px">智能问答</a>
                                                        <a href="#" class="intro-text-small" style="font-size:20px">我的数据</a>
                                                        <a href="#" class="intro-text-small" style="font-size:20px">视频学习</a>  
						</div>
						<div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
							<div class="form-wrap">
                                                            <div class="tab">
                                                                <div class="tab-content">
                                                                    <div class="tab-content-inner  active" data-content="login" >
                                                                        <form method="post" action="./login.gy"><!--here  add  api-->
                                                                                    <div class="row form-group">
                                                                                            <div class="col-md-12">
                                                                                                    <label for="username">学号</label>
                                                                                                    <input type="text" class="form-control" name="username" id="username">
                                                                                            </div>
                                                                                    </div>
                                                                                    <div class="row form-group">
                                                                                            <div class="col-md-12">
                                                                                                    <label for="password">密码</label>
                                                                                                    <input type="password" class="form-control" name="password"  id="password">
                                                                                            </div>
                                                                                    </div>
                                                                                    <div class="row form-group">
                                                                                            <div class="col-md-12">
                                                                                                    <input type="submit" class="btn btn-primary" value="登录">
                                                                                            </div>
                                                                                    </div>
									</form>
                                                                    </div>                                
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                        </div>

                                </div>
                        </div>
			</div>
		</div>
	</header>
    </body>
</html>

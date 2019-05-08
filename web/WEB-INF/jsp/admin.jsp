<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="lib/swiper/swiper.min.css">
</head>
<body>
    <div class="main_wrapper">
        <div class="header">
            <div class="container">
                <a href="#" class="logo"><img src="images/logo.png" alt=""></a>
                <div class="loginta">
                       <a href="#"><span class="icon_user"></span></a>
                        <a href="javascript:void(0);" class="username_icon">${nenUser.account},您好 <span class="icon_down"></span></a>
                        <div class="exit">
                            <a href="logout.gy"><span class="fa fa-sign-out"></span>退出</a>
                        </div>
                </div>
            </div>
        </div>
        <!--banner大图-->
        <div class="banner">
            <img src="images/banner.png" alt="">
        </div>
        <!--标题图片-->
        <div class="title">
            <img src="images/logo_i.png" alt="">
        </div>
        <!--轮播图-->
        <div class="slide_box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu01.png" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu02.png" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu03.png" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu04.png" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu01.png" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu02.png" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu03.png" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0);"><img src="images/index_tu04.png" alt=""></a></div>
                </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <!--导航-->
        <div class="nav">
            <div class="container">
                 <ul class="clearfix">
                     <li style="margin-left: 60px;margin-right: 150px;"><a href="view.gy?view=video">视频学习</a></li>
                     <li style="margin-right: 160px;"><a href="view.gy?view=xdoj">在线学习</a></li>
                     <li style="margin-right: 152px;"><a href="view.gy?view=QA">智能问答</a></li>
                     <li><a href="view.gy?view=mydata">我的数据</a></li>
                 </ul>
            </div>
        </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/main.js"></script>
    <script src="lib/swiper/swiper.min.js"></script>
    <script>
        var mySwiper = new Swiper ('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 13,
            freeMode: true,
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    </script>
</body>
</html>
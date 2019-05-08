<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>在线学习首页</title>
        <link rel="stylesheet" href="css/common.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">
    </head>
    <body>
        <div class="list_main online_main">
            <!--头部-->
            <div class="header">
                <div class="container">
                    <a href="#" class="logo"><img src="images/list_logo.png" alt=""></a>
                    <div class="loginta">
                        <a href="#"><span class="icon_user"></span></a>
                        <a href="javascript:void(0);" class="username_icon">${nenUser.account},您好 <span class="icon_down"></span></a>
                        <div class="exit">
                            <a href="#"><span class="fa fa-sign-out"></span>退出</a>
                        </div>
                    </div>
                </div>
            </div>
            <!--导航-->
            <div class="nav">
                <div class="container">
                    <ul class="tabs clearfix">
                        <li><a target="iframe" href="/video"><span class="fa fa-book"></span>视频学习</a></li>
                        <li class="online active">
                            <a href="javascript:void(0);"><span class="fa fa-user-md"></span>考试在线<span class="fa fa-caret-down icon_arrowd"></span></a>
                            <ol>
                                <li><a target="iframe" href="/xdoj/login?user_id=${nenUser.account}&password=${nenUser.password}">首页</a></li>
                                <li  class="current"><a href="#">测试信息</a></li>
                                <li><a href="#">查看题目/提交程序</a></li>
                                <li><a href="#">查看结果</a></li>
                                <li><a href="#">撤销</a></li>
                            </ol>
                        </li>
                        <li><a target="iframe" href="/QA"><span class="fa fa-edit"></span>智能问答</a></li>
                        <li><a target="iframe" href="/mydata/mydata.html"><span class="fa fa-navicon"></span>我的数据</a></li>
                    </ul>
                </div>
            </div>
            <div id="window"  style="width:100%" >
                <iframe id="win" src="${view}" width="100%" height="100%" frameborder="0"   name="iframe" >

                </iframe>       
            </div>
            <script>
                var high = window.screen.height;
                console.log(high);
                document.getElementById("win").style.height = high*0.71 + 'px';
                document.getElementById("window").style.height = high*0.71 + 'px';
                //  document.getElementById("gylist").style.height = high+'px';
            </script>
        </div>
        <script src="js/jquery.min.js"></script>
        <script src="js/main.js"></script>
        <script src="lib/swiper/swiper.min.js"></script>
        <script>
                var mySwiper = new Swiper('.swiper-container', {
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
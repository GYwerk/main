<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="zh-CN" id="gyhtml">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="img/logo.png"/>
    <title>智慧教育平台</title>
    <link href="css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="css/mmss.css"/>
    <link rel="stylesheet" href="css/font-awesome.min.css"/>
   
    <style>

    </style>
</head>
<body>
<header>
    <div id="gylist" class="container-fluid navbar-fixed-top bg-black">
        <ul class="nav navbar-nav  left col-sm-2">
            <li class="text-white" style="font-size:20px;margin-top: 10px">
                <span class="glyphicon glyphicon-leaf"></span>智慧教育平台-C语言
            </li>
        </ul>
        <ul class="nav navbar-nav col-sm-2" style="padding:0 ">
                <a  style="color:#fff" class="dropdown-toggle" href="#" data-toggle="dropdown">
                    <li class="text-white" style="font-size:20px;margin: 10px auto auto 30%">
                    <i class="icon-book icon-large" ></i>视频学习
                    </li>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li class="text-center"><a  href="/video/UserServlet?account=${nenUser.account}&password=${nenUser.password}&flag=login" target="iframe" target="iframe"><i class="icon-user"></i>主页</a></li>
                    <li class="text-center"><a  href="/video/index.jsp" target="iframe" target="iframe"><i class="icon-list"></i>课程搜索</a></li>
<!--                    <li class="text-center"><a  href="/video/faq.jsp" target="iframe" target="iframe"><i class="icon-edit"></i>常见问题 </a></li>-->
                </ul>
        </ul>
        <ul class="nav navbar-nav col-sm-2" style="padding:0">
            <a style="color:#fff" href="/xdoj/login?user_id=${nenUser.account}&password=${nenUser.password}" target="iframe">
                <li class="text-white" style="font-size:20px;margin: 10px auto auto 30%">
                    <i class="icon-user-md icon-large"></i>在线考试
                </li>
            </a>
        </ul>
        <ul class="nav navbar-nav col-sm-2" style="padding:0">
            <a  style="color:#fff" href="/QA" target="iframe">
                <li class="text-white" style="font-size:20px;margin: 10px auto auto 30%">
                    <i class=" icon-edit  icon-large"></i>智能问答
                </li>
            </a>
        </ul>
        <ul class="nav navbar-nav col-sm-2" style="padding:0">
             <a style="color:#fff" href="/main" target="iframe">
                <li class="text-white" style="font-size:20px;margin: 10px auto auto 30%">
                    <i class="icon-list icon-large"></i>我的数据
                </li>
             </a>
        </ul>
        <ul class="nav navbar-nav nav-pills right " >
            <li class="bg-info dropdown">
                <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                    <span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px">${nenUser.account}，你好</span><span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li class="text-center"><a href="/xdoj/login?user_id=${nenUser.account}&password=${nenUser.password}"  target="iframe" target="iframe"><span class="text-primary">账号设置</span></a></li>
                        <li class="text-center"><a href="/main"><span class="text-primary">我的数据</span></a></li>
<!--                    <li class="text-center"><a href="#"><span class="text-primary">帮助中心</span></a></li>-->
                    <li class="divider"><a href="#"></a></li>
                    <li class="text-center"><a href="logout.gy"><span class="text-primary">退出</span></a></li>
                </ul>
            </li>
        </ul>
    </div>
</header>

<section>
<!--    <div class="container-fluid">-->
<!--        <div class="row ">
            左侧导航开始
            <div class="col-xs-2 bg-blue">
              <div class="col " style="padding-top: 60px; "></div>    
                    <div class="panel panel-default menu-first" >
                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                           aria-expanded="false" aria-controls="collapseFour">
                            <i class="icon-book icon-large" ></i>视频学习
                        </a>
                        <div id="collapseFour" class="panel-collapse collapse">
                            <ul class="nav nav-list menu-second">
                            	<li><a  href="/video/UserServlet?account=${nenUser.account}&password=${nenUser.password}&flag=login" target="iframe" target="iframe"><i class="icon-user"></i>主页</a></li>
                                <li><a  href="/video/index.jsp" target="iframe" target="iframe"><i class="icon-list"></i>课程搜索</a></li>
                                <li><a  href="/video/faq.jsp" target="iframe" target="iframe"><i class="icon-edit"></i>常见问题 </a></li>
                            </ul>
                        </div>
                    </div>
              <div class="col " style="padding-top: 30px; "></div>    
                    <div class="panel panel-default menu-first" >
                        <a  href="/xdoj/login?user_id=${nenUser.account}&password=${nenUser.password}" target="iframe">
                            <i class="icon-user-md icon-large"></i>在线考试
                        </a>
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                           aria-controls="collapseOne" target="iframe">
                            <i class="icon-user-md icon-large"></i>在线考试
                        </a>
                        <div id="collapseOne" class="panel-collapse collapse " >
                            <ul class="nav nav-list menu-second">  
                                <li><a style="font-size:15px" href="/xdoj/login?user_id=${nenUser.account}&password=${nenUser.password}" target="iframe"><i class="icon-user"></i> 参加考试</a></li>
                                <li><a href="p2.html" target="iframe"><i class="icon-edit"></i>错题库</a></li>                         
                            </ul>
                        </div>
                    </div>
              <div class="col " style="padding-top: 30px; "></div>    
                    <div class="panel panel-default menu-first"  >
                        <a  href="../QA" target="iframe">
                            <i class="icon-book icon-large"></i>智能问答
                        </a>
                       
                    </div>
              <div class="col " style="padding-top: 30px; "></div>    
                    <div class="panel panel-default menu-first" >
                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                           aria-expanded="false" aria-controls="collapseThree">
                            <i class="icon-book icon-large"></i>我的数据
                        </a>

                        <div id="collapseThree" class="panel-collapse collapse">
                            <ul class="nav nav-list menu-second">
                            <li><a href="#"><i class="icon-user" target="iframe"></i> 子选项1</a></li>
                                <li><a href="#"><i class="icon-edit" target="iframe"></i> 子选项2</a></li>
                                <li><a href="#"><i class="icon-trash" target="iframe"></i> 子选项3</a></li>
                                <li><a href="#"><i class="icon-list" target="iframe"></i> 子选项4</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>-->
            <!--左侧导航结束-->
            <!----------------------------------------------------------------------------------------------------->
            <!--右侧内容开始-->
            
            <div id="window"  style="width:100%" >
             <iframe id="win" src="" width="100%" height="100%" frameborder="0"   name="iframe" >
             	
             </iframe>       
            </div>
            <script>
                var high = window.screen.height;
                console.log(high);
                document.getElementById("win").style.height = high+'px';
                document.getElementById("window").style.height = high+'px';
              //  document.getElementById("gylist").style.height = high+'px';
            </script>
            <!--右侧内容结束-->
        <!--</div>-->
    <!--</div>-->
</section>

<script type="text/javascript">

</script>
<script src="js/jquery-1.11.3.js"></script>
<script src="js/bootstrap.js"></script>

</body>
</html>
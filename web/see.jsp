<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>人脸检测</title>
        <script src="http://code.jquery.com/jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
        <style>
            .div-a{ float:left;width:60%;height:60%;border:1px solid #F00}
            .div-b{ float:left;width:39%;height:60%;border:1px solid #000}
            span{ font-size:25px }
        </style>
    </head>
    <body>
        <!-- 左边区域 -->
        <div class="div-a" id="contentHolder">
            <video id="video" width="100%" height="60%" autoplay></video>
            <canvas style="" hidden="hidden"  id="canvas" width="520" height="250"></canvas>
        </div>
        <!-- 右边区域 -->
        <div class="div-b" >
            <!-- 测试按钮 -->
            <input type="button" id="snap" style="width:100px;height:35px;" value="拍 照" />
            <form id="GYimg" action="getImage.gy" method="post" >
            <input type="text" name="image" id="image" class="image" value="">
            <input type="submit"  style="width:100px;height:35px;" value="上传服务器" />
            </form>
        </div>

    </body>
    <script>

            //判断浏览器是否支持HTML5 Canvas
            window.onload = function () {
                try {
                    //动态创建一个canvas元 ，并获取他2Dcontext。如果出现异常则表示不支持 document.createElement("canvas").getContext("2d");
                    // document.getElementById("support").innerHTML = "浏览器支持HTML5 CANVAS";
                } catch (e) {
                    // document.getElementByIdx("support").innerHTML = "浏览器不支持HTML5 CANVAS";
                }
            };

            //这段代 主要是获取摄像头的视频流并显示在Video 签中
            window.addEventListener("DOMContentLoaded", function () {
                var video = document.getElementById('video');
                var aCanvas = document.getElementById('canvas');
                var context = aCanvas.getContext('2d');
                //拍照按钮
                $("#snap").click(function () {
                    context.drawImage(video, 0, 0, 330, 250);
                     var canvans = document.getElementById("canvas");
                    //获取浏览器页面的画布对象
                    //以下开始编 数据
                    var imageBase64 = canvans.toDataURL();
                    $("#image").val(imageBase64);
                })
                //拍照每秒一次
                // setInterval(function(){
                // 	context.drawImage(video, 0, 0, 330, 250)
                // 	CatchCode();
                // },1000);
                //navigator.getUserMedia这个写法在Opera中好像是navigator.getUserMedianow
                //更新兼容火狐浏览器


                navigator.getUserMedia = navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
                navigator.getUserMedia({video: true}, gotStream, noStream);

                function gotStream(stream) {
                    if (navigator.userAgent.indexOf("Chrome") >= 1 || navigator.userAgent.indexOf("Safari") >= 1) {
                        video.srcObject = stream;
                    } else {
                        video.src = window.URL.createObjectURL(stream);
                    }
                    video.onerror = function () {
                        stream.stop();
                    };
                    stream.onended = noStream;
                    video.onloadedmetadata = function () {
                        alert('摄像头成功打开！');
                    };
                }
                function noStream(err) {
                    alert(err);
                }

            }, false);

            function dataURItoBlob(base64Data) {
                var byteString;
                if (base64Data.split(',')[0].indexOf('base64') >= 0)
                    byteString = atob(base64Data.split(',')[1]);
                else
                    byteString = unescape(base64Data.split(',')[1]);
                var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ia], {type: mimeString});
            }

            //上传服务器
            function CatchCode() {
               
            }

        </script>
</html>
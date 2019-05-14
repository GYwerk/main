/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MVC;

import DBUtil.dbManager;
import MD5.md5;
import Python.CallPython;
import bean.User;
import java.io.BufferedReader;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.sql.ResultSet;
import javax.servlet.ServletInputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import sun.misc.BASE64Decoder;

/**
 *
 * @author lenovo
 */
public class GetImgeServlet implements Controller {

    @Override
    public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
        arg0.setCharacterEncoding("UTF-8");
        arg1.setHeader("Content-type", "charset=utf-8");
        ModelAndView mv = new ModelAndView("index");
        String str = arg0.getParameter("image");
        String img = str.split("base64,")[1];
        generateImage(img, "/mnt/lqd.jpg");// /mnt/lqd.jpg
        String people = CallPython.CallFaceRecognize();
//        File file;
//        file = new File("F:\\test\\" + String.valueOf(new Date().getTime()) + ".jpg");
        User nenUser = new User();
        String sql = "select * from user where user_id=test and password=?";
        String Md5_P = md5.md5("test", "");
        dbManager db = new dbManager();
        String[] params = new String[]{Md5_P};
        ResultSet answer = db.preStaQuery(sql, params);
        if (answer.next()) {
            mv = new ModelAndView("admin");
            int message = answer.getInt(1);
            int type = answer.getInt(2);
            String user_id = answer.getString(4);
            String name = answer.getString(6);
            String class_id = answer.getString(7);
            String login_time = "";
            String login_ip = "0";
            String login_port = "0";
            nenUser = new User(message, user_id, "test", name, class_id, login_time, login_ip, login_port);
            arg0.getSession().setAttribute("nenUser", nenUser);
        }
//        System.out.println(message);
        return mv;
    }

    public static boolean generateImage(String imgStr, String path) {
        if (imgStr == null) {
            return false;
        }
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            // 解密
            byte[] b = decoder.decodeBuffer(imgStr);
            // 处理数据
            for (int i = 0; i < b.length; ++i) {
                if (b[i] < 0) {
                    b[i] += 256;
                }
            }
            OutputStream out = new FileOutputStream(path);
            out.write(b);
            out.flush();
            out.close();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MVC;
import DBUtil.dbManager;
import MD5.md5;
import bean.User;
import java.sql.ResultSet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class indexController implements Controller {
    
    @Override
    public ModelAndView handleRequest(HttpServletRequest arg0,   HttpServletResponse arg1) throws Exception {
        arg0.setCharacterEncoding("UTF-8");
        arg1.setHeader("Content-type","text/html;charset=utf-8");
        String Name = arg0.getParameter("username");
        String PaWo = arg0.getParameter("password");
        int message = -1;
        ModelAndView mv = new ModelAndView("index");
        User nenUser = new User();
        arg0.getSession().setMaxInactiveInterval(20*60);
        if(arg0.getSession(false).getAttribute("nenUser")!=null){
            mv = new ModelAndView("admin");
            nenUser = (User)arg0.getSession(false).getAttribute("nenUser");
        }
        else if(Name != null&& PaWo != null){
            HttpSession session = arg0.getSession();
            session.setAttribute("User", Name);
            session.setAttribute("Pass", PaWo);
            String Md5_P = md5.md5(PaWo, "");
            String[] params = new String[]{Name,Md5_P};
            String sql = "select * from user where user_id=? and password=?";
            dbManager db = new dbManager();
            ResultSet answer = db.preStaQuery(sql, params);
            if(answer.next()){
                mv = new ModelAndView("admin");
                message = answer.getInt(1);
                int type = answer.getInt(2);
                String user_id = answer.getString(4);
                String name = answer.getString(6);
                String class_id = answer.getString(7);
                String login_time = "";
                String login_ip = "0";
                String login_port = "0";
                nenUser = new User(message,user_id,PaWo,name,class_id,login_time,login_ip,login_port);
                arg0.getSession().setAttribute("nenUser", nenUser);
            }
        }
        mv.getModel().put("nenUser", nenUser);
//        System.out.println(message);
        return  mv ;
    }
}
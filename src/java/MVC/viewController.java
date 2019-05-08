/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MVC;

import bean.User;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

/**
 *
 * @author lenovo
 */
public class viewController implements Controller {

    @Override
    public ModelAndView handleRequest(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
        User nenUser = new User();
        ModelAndView mv = new ModelAndView("index");
        String view = arg0.getParameter("view");
        if(arg0.getSession(false).getAttribute("nenUser")!=null){
            nenUser = (User)arg0.getSession(false).getAttribute("nenUser");
            mv = new ModelAndView("view");
            String url = "";
            if(view.equals("xdoj"))
                url = "/xdoj/login?user_id="+nenUser.getAccount()+"&password="+nenUser.getPassword();
            else if(view.equals("QA"))
                url = "/QA";
            else if(view.equals("video"))
                url = "/video";
            else if(view.equals("mydata"))
                url = "/mydata/mydata.html";
            mv.getModel().put("nenUser", nenUser);
            mv.getModel().put("view",url);
        }
        else{
                    return  mv ;
        }
//        System.out.println(message);
        return  mv ;
    }
    
}

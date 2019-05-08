/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DBUtil;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author lenovo
 */
public class dbManager {
    static final String DB_URL = "jdbc:mysql://localhost:3306/xdoj?serverTimezone=UTC&characterEncoding=utf8";
    // MySQL的JDBC URL编写方式：jdbc:mysql://主机名称：连接端口/数据库的名称
    static final String USER = "root";
    static final String PASS = "***xdoj***";//"mysql@xdlab210";
    static final String DRIVER = "com.mysql.jdbc.Driver";
    private Connection conn = null;
    private ResultSet RES = null;
    public dbManager() throws SQLException, ClassNotFoundException{
       // 注册驱动
       Class.forName(DRIVER);
       // 创建链接
       conn = (Connection) DriverManager.getConnection(DB_URL,USER,PASS); 
    }
    public void exit(){
        try {
               if (RES != null)
               RES.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }finally{
                try {
                    if (conn != null) 
                      conn.close();
                }catch (SQLException e) {
                        e.printStackTrace();
                }
            }
    }
    private void preQuery(String sqlStr,String[] param){
		ResultSet result=null;
		try {
			PreparedStatement ps = conn.prepareStatement(sqlStr);
			for(int i=0;i<param.length;i++){
				ps.setString(i+1,param[i]);
			}
			result = ps.executeQuery();
		} catch (SQLException e) {
			e.printStackTrace();
		}
                RES = result;
    }
    private boolean preExec(String sqlStr,String[] param){
		try{
			PreparedStatement ps = conn.prepareStatement(sqlStr);
			for(int i=0;i<param.length;i++){
				ps.setString(i+1,param[i]);
			}
			ps.executeUpdate();
		}catch (SQLException e){
			e.printStackTrace();
			return  false;
		}
		return true;
    }
    public ResultSet preStaQuery(String sqlStr,String[] param){
        preQuery(sqlStr,param);
        return RES;
    }
    public boolean preStaExec(String sqlStr,String[] param){
        return preExec(sqlStr,param);
    }
}

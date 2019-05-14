/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Python;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/**
 *
 * @author lenovo
 */

public class CallPython {
    public static String CallFaceRecognize(){
        String answer=null;
    	 Process proc;
         try {
             proc = Runtime.getRuntime().exec("python /mnt/FaceRecognition/");// 执行py文件
             //用输入输出流来截取结果
             BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
             StringBuilder sb = new StringBuilder();
             String line = null;
             while ((line = in.readLine()) != null) {
                  sb.append(line);
             }
             in.close();
             proc.waitFor();
             answer = sb.toString();
         } catch (IOException e) {
             e.printStackTrace();
         } catch (InterruptedException e) {
             e.printStackTrace();
         } 
         return answer;
    }
}

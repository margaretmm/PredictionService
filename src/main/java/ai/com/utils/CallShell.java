package ai.com.utils;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 13:33 2018/7/19
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
import java.io.IOException;
import java.io.InputStream;

public class CallShell {


        public static void  callCmd(String locationCmd){
            try {
                Process child = Runtime.getRuntime().exec(locationCmd);
                InputStream in = child.getInputStream();
                int c;
                while ((c = in.read()) != -1) {
                    System.out.println((char)c);
                }
                in.close();
                try {
                    child.waitFor();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("done");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
}

package utils;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;


public class OSchecker {

    private static Logger logger = LoggerFactory.getLogger(OSchecker.class);
    /**
     * create by: maoyeqin
     * description:
     * create time: 17:07 2018/7/17
     * 
      * @Param: null
     * @return 
     */
    public static boolean isOSLinux() {
        Properties prop = System.getProperties();

        String os = prop.getProperty("os.name");
        if (os != null && os.toLowerCase().indexOf("linux") > -1) {
            return true;
        } else {
            return false;
        }
    }

}

package controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import utils.FileHander;

@RestController
public class MonitorController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/monitor")
    String index(){
        return "monitor";
    }

    /**
     * create by: maoyeqin
     * description:
     * create time: 17:48 2018/7/17
     * 
      * @Param: null
     * @return 
     */
    @PostMapping("/downloadImg")
    String downloadImg(HttpServletRequest request) {
        String ip = FileHander.getRemoteIp(request);
        return FileHander.TarFileRecive(ip,request);

    }


}

package controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import utils.FileHander;

/**
 * create by: maoyeqin
 * description:
 * create time: 17:48 2018/7/17
 *
 * @Param: null
 * @return
 */
@RestController
public class MonitorController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/monitor")
    String index(){
        return "monitor";
    }

    @PostMapping("/downloadImg")
    String downloadImg(HttpServletRequest request) {
        String ip = FileHander.getRemoteIp(request);
        return FileHander.TarFileRecive(ip,request);

    }


}

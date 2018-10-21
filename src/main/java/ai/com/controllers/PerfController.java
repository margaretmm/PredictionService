package ai.com.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/perf")
public class PerfController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/index")
    String index(){
        return "perfIndex";
    }



}

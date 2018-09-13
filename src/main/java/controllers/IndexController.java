package controllers;


import org.springframework.web.bind.annotation.*;
import runnable.HbaseSendRunable;


@RestController
public class IndexController {
    @GetMapping("/index")
    String index(){
        return "Readymag";
    }

    @GetMapping("/thead")
    String index2(){
        int threadNum=  2;
        String startDay="20180506";
        String endDay="20180808";
        int daynums=30;

        for(int i=0;i< threadNum; i++) {
            Thread thread = new Thread(new HbaseSendRunable(startDay, endDay, daynums));
            thread.start();
        }
        return "OK";
    }

    @GetMapping("/thead2/{threadNum}/{startDay}/{endDay}")
    String index3(@PathVariable("threadNum")  String StrThreadNum,@PathVariable("startDay")  String startDay,@PathVariable("endDay")  String endDay){
        int threadNum=  Integer.valueOf(StrThreadNum).intValue();
        int daynums=30;

        for(int i=0;i< threadNum; i++) {
            Thread thread = new Thread(new HbaseSendRunable(startDay, endDay, daynums));
            thread.start();
        }
        return "OK2";
    }

}

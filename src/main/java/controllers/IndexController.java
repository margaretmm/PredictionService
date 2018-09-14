package controllers;


import org.springframework.web.bind.annotation.*;
import runnable.HbaseSendRunable;
import runnable.MyRunnable;
import runnable.NotThreadSafe;
import runnable.RunnableTest1;


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
            System.out.println(thread.getName());

        }
        return "index3";
    }

    @GetMapping("/thead/test1/{threadNum}/{value}")
    String Save_test1(@PathVariable("threadNum")  String StrThreadNum,@PathVariable("value")  String value){
        int threadNum=  Integer.valueOf(StrThreadNum).intValue();
        long intValue=Long.valueOf(value).longValue();

        for(int i=0;i< threadNum; i++) {
            Thread thread = new Thread(new RunnableTest1(intValue));
            thread.start();
            System.out.println(thread.getName());

        }
        return "test1";
    }


    @GetMapping("/thead/test2")
    String NotSave_test2(){
        NotThreadSafe sharedInstance = new NotThreadSafe();

        new Thread(new MyRunnable(sharedInstance)).start();
        new Thread(new MyRunnable(sharedInstance)).start();


        return "test2";
    }


    @GetMapping("/thead/test3")
    String Save_test2(){
        NotThreadSafe sharedInstance = new NotThreadSafe();

        new Thread(new MyRunnable(new NotThreadSafe())).start();
        new Thread(new MyRunnable(new NotThreadSafe())).start();

        return "test3";
    }
}

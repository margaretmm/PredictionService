package runnable;



/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 14:19 2018/9/13
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */




public class MyRunnable  implements Runnable {
    NotThreadSafe instance = null;

    public MyRunnable(NotThreadSafe instance) {
        this.instance = instance;
    }

    public void run() {
        this.instance.add("some text/");
        //System.out.println("MyRunnable running");
    }

}



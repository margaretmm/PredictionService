package ai.com.runnable;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 13:51 2018/9/13
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
public class RunnableTest1 implements Runnable {

        protected long count = 0;

        public RunnableTest1(long value){
            this.count = this.count + value;
            System.out.println("-------init-----count :"+this.count);
        }

        public void minners(long value){
            this.count = this.count - value;
            System.out.println("-------minners-----count :"+this.count);
        }
      public void run() {
        //System.out.println("RunnableTest1 running");
    }
}

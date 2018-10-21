package ai.com.runnable;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 14:24 2018/9/13
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
public class NotThreadSafe {
    StringBuilder builder = new StringBuilder();

    public void add(String text){
        this.builder.append(text);
        System.out.println(this.builder.toString());
    }

//    public void print(String text){
//        System.out.println(this.builder.toString());
//    }
}

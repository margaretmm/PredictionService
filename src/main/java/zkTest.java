package zookeeper;
/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 16:10 2018/10/12
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
import java.util.Set;

public class zkTest  {

    /**
     * @param args
     */
    public static void main(String[] args) {
        String serverType = "cache-server";
        //测试
        try{
            ConfigManager manager = new ConfigManager(true);
            manager.add(serverType);
            ConfigServer s1 = new ConfigServer(serverType);
            ConfigServer s2 = new ConfigServer(serverType,true);
            ConfigServer s3 = new ConfigServer(serverType);
            ConfigClient c1 = new ConfigClient(serverType);
            ConfigClient c2 = new ConfigClient(serverType);
            ConfigClient c3 = new ConfigClient(serverType);
            Thread.sleep(3000);
            System.out.println("+++++++++++++++++++++++++");
            System.out.println("S1 getPath:" + s1.getPath());//注意zk链接，是异步的，有可能此处为 null
            System.out.println("S2 getPath:" + s2.getPath());
            System.out.println("S3 getPath:" + s3.getPath());
            while(true){
                System.out.println("-------------------------");
                Set<String> l1 = c1.getServers(serverType);//结果可能为null
                if(l1 == null){
                    System.out.println("l1 is null...");
                }else{
                    for(String path : l1){
                        System.out.println("l1:" + path);
                    }
                }

                Set<String> l2 = c2.getServers(serverType);
                if(l2 == null){
                    System.out.println("l2 is null...");
                }else{
                    for(String path : l2){
                        System.out.println("l2:" + path);
                    }
                }

                Set<String> l3 = c3.getServers(serverType);
                if(l3 == null){
                    System.out.println("l3 is null...");
                }else{
                    for(String path : l3){
                        System.out.println("l3:" + path);
                    }
                }
                Thread.sleep(2000);
            }
        }catch(Exception e){
            e.printStackTrace();
        }

    }
}

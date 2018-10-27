package ai.com.hik.zookeeper;
/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 16:10 2018/10/12
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
public class zkTest  {

    /**
     * @param args
     */
    public static void main(String[] args) {
        String connectString = "10.66.170.3:2181";
        String serverType = "workers";
        //测试
        try{
            ConfigManager manager = new ConfigManager(connectString,true);
            manager.add(serverType);
            ConfigServer s1 = new ConfigServer(connectString,serverType);
            ConfigClient c1 = new ConfigClient(connectString,serverType);
            Thread.sleep(3000);
            System.out.println("+++++++++++++++++++++++++");
            System.out.println("S1 getPath:" + s1.getPath());//注意zk链接，是异步的，有可能此处为 null
            while(true){
 //               System.out.println("-------------------------");
//                Set<String> l1 = c1.getServers(serverType);//结果可能为null
//                if(l1 == null){
//                    System.out.println("l1 is null...");
//                }else{
//                    for(String path : l1){
//                        System.out.println("l1:" + path);
//                    }
//                }
                Thread.sleep(2000);
            }
        }catch(Exception e){
            e.printStackTrace();
        }

    }
}

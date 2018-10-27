package ai.com.hik.zookeeper;

import org.apache.curator.RetryPolicy;
import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.CuratorFrameworkFactory;
import org.apache.curator.retry.ExponentialBackoffRetry;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.data.Stat;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 10:44 2018/9/26
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
public class zookeeperClient {
    private static String CONNECT_ADDR =null;//10.66.170.10:2188,10.66.206.65:2188,
    private static int SESSION_TIMEOUT = 5000;
    private static CuratorFramework curator=null;
    private static int BaseSleepTimesMs=1000;
    private static int maxRetries=10;

    public  zookeeperClient (String ZKAddr,int sesstion_timeout){
        CONNECT_ADDR = ZKAddr;
        SESSION_TIMEOUT = sesstion_timeout;

        //重试策略，初试时间1秒，重试10次
        RetryPolicy policy = new ExponentialBackoffRetry(BaseSleepTimesMs, maxRetries);
        //通过工厂创建Curator
        curator = CuratorFrameworkFactory.builder().connectString(CONNECT_ADDR).sessionTimeoutMs(SESSION_TIMEOUT).retryPolicy(policy).build();
        //开启连接
        curator.start();
    }

    public  zookeeperClient (String ZKAddr){
        CONNECT_ADDR = ZKAddr;

        //重试策略，初试时间1秒，重试10次
        RetryPolicy policy = new ExponentialBackoffRetry(BaseSleepTimesMs, maxRetries);
        //通过工厂创建Curator
        curator = CuratorFrameworkFactory.builder().connectString(CONNECT_ADDR).sessionTimeoutMs(SESSION_TIMEOUT).retryPolicy(policy).build();
        //开启连接
        curator.start();
    }

    public static CuratorFramework getClient() {
        return curator;
    }

    public void createZnode(String path,String data,CreateMode nodeType) throws Exception {

        ExecutorService executor = Executors.newCachedThreadPool();
        curator.create().creatingParentsIfNeeded().withMode(nodeType).inBackground((framework, event) -> {
            //添加回调
            System.out.println("Code：" + event.getResultCode());
            System.out.println("Type：" + event.getType());
            System.out.println("Path：" + event.getPath());
        }, executor).forPath( path,data.getBytes());
    }

    public void createZnodePersist(String path,String data) throws Exception {
        this.createZnode(path,data,CreateMode.PERSISTENT);
    }

    public void createZnodePersistSeq(String path,String data) throws Exception {
        this.createZnode(path,data,CreateMode.PERSISTENT_SEQUENTIAL);
    }

    public void createZnodeTmp(String path,String data) throws Exception {
        this.createZnode(path,data,CreateMode.EPHEMERAL);
    }

    public void createZnodeTmpSeq(String path,String data) throws Exception {
        this.createZnode(path,data,CreateMode.EPHEMERAL_SEQUENTIAL);
    }

    public String getZnodeData(String path) throws Exception {
        String data = new String(curator.getData().forPath(path));
        return data;
    }

    public List<String> getChildData(String path) throws Exception {
        List<String> children = curator.getChildren().forPath(path); //获取子节点
        return children;
    }

    public static void main(String[] args) throws Exception {

        zookeeperClient zk= new zookeeperClient( "10.66.206.64:2181");
        String path="/workers/10.66.206.64";

        zk.createZnodePersist(path,"path1");
        Thread.sleep(5000);

        //为了能够看到回调信息
        String data = new String(zk.getClient().getData().forPath(path));
        //获取节点数据
        System.out.println(data);

        Stat stat = zk.getClient().checkExists().forPath(path);
        //判断指定节点是否存在
        System.out.println(stat);

        zk.getClient().setData().forPath(path, "path1_cnn_127.0.0.1:8000_1_1".getBytes()); //更新节点数据
        data = new String(zk.getClient().getData().forPath(path));
        System.out.println(data);

        List<String> children = zk.getClient().getChildren().forPath("/workers"); //获取子节点
        for(String child : children) {
            System.out.println(child);
        }        //放心的删除节点，deletingChildrenIfNeeded()方法表示如果存在子节点的话，同时删除子节点
      //  zk.getClient().delete().guaranteed().deletingChildrenIfNeeded().forPath("/workers");
        zk.getClient().close();
    }
}

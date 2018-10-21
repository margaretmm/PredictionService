package ai.com.activemq.p2p;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 10:06 2018/9/14
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */

import org.apache.activemq.ActiveMQConnection;
import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.activemq.command.ActiveMQBytesMessage;
import ai.com.utils.RarUtil;

import javax.jms.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class QueueReceiver {

    // tcp 地址
    public static final String BROKER_URL = "tcp://10.66.206.64:61616";
    // 目标，在ActiveMQ管理员控制台创建 http://localhost:8161/admin/queues.jsp
    public static final String TARGET = "prediction.mq.queue";


    public static void run() throws Exception {

        QueueConnection connection = null;
        QueueSession session = null;
        try {
            // 创建链接工厂
            QueueConnectionFactory factory = new ActiveMQConnectionFactory(ActiveMQConnection.DEFAULT_USER, ActiveMQConnection.DEFAULT_PASSWORD, BROKER_URL);
            // 通过工厂创建一个连接
            connection = factory.createQueueConnection();
            // 启动连接
            connection.start();
            // 创建一个session会话
            session = connection.createQueueSession(Boolean.TRUE, Session.AUTO_ACKNOWLEDGE);
            // 创建一个消息队列
            Queue queue = session.createQueue(TARGET);
            // 创建消息制作者
            javax.jms.QueueReceiver receiver = session.createReceiver(queue);

            receiver.setMessageListener(new MessageListener() {
                public void onMessage(Message msg) {
                    if (msg != null) {
                        if (msg instanceof TextMessage)
                        {
                            System.out.println("------Received TextMessage------");
                            String text = null;
                            try {
                                text = ((TextMessage) msg).getText();
                            } catch (JMSException e) {
                                e.printStackTrace();
                            }
                            System.out.println("接收到的消息内容是：" + text);
                        }else if (msg  instanceof MapMessage)
                        {
                            System.out.println("------Received MapMessage------");
                            MapMessage map = (MapMessage) msg;
                            try {
                                System.out.println(map.getLong("time") + "接收#" + map.getString("text"));
                            } catch (JMSException e) {
                                e.printStackTrace();
                            }

                        }else if (msg  instanceof BytesMessage)
                        {
                            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss");//设置日期格式
                            String dateTime=df.format(new Date());
                            System.out.println(df.format(new Date()));// new Date()为获取当前系统时间

                            System.out.println("------Received BytesMessage------");
                            ActiveMQBytesMessage bytesMessage = (ActiveMQBytesMessage) msg;
                            if (bytesMessage != null){
                                byte []bt = new byte[0];
                                try {
                                    bt = new byte[(int) bytesMessage.getBodyLength()];
                                    bytesMessage.readBytes(bt);
                                    String path=".\\"+dateTime+".rar";
                                    File tempFile  =new File(path);
                                    if(!tempFile .exists()){
                                        tempFile .createNewFile();
                                    }
                                    OutputStream os = new FileOutputStream(tempFile.getPath());
                                    //File fileOut =new File(".\\");
                                    System.out.println("----------end----------------");
                                    os.write(bt);
                                    os.close();
                                    RarUtil.unrar(tempFile.getPath(),  ".\\");
                                } catch (JMSException e1) {
                                    e1.printStackTrace();
                                } catch (FileNotFoundException e1) {
                                    e1.printStackTrace();
                                } catch (IOException e1) {
                                    e1.printStackTrace();
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }

                            }
//                            byte[] byteContent = new byte[1024];
//                            int length = -1;
//                            StringBuffer content = new StringBuffer();
//                            try {
//                                while ((length = message.readBytes(byteContent))!=-1) {
//                                    content.append(new String(byteContent, 0, length));
//                                }
//                                System.out.println(content);
//                            } catch (JMSException e) {
//                                e.printStackTrace();
//                            }
                        }else if (msg  instanceof StreamMessage)
                        {
                            System.out.println("------Received StreamMessage------");
                            StreamMessage StrMsg = (StreamMessage) msg;
                            try {
                                String s = StrMsg.readString();
                                System.out.println(s);
                            } catch (JMSException e) {
                                e.printStackTrace();
                            }
                        }else if (msg  instanceof ObjectMessage)
                        {
                            System.out.println("------Received ObjectMessage------");
                            ObjectMessage objMsg = (ObjectMessage) msg;
                            try {
                                System.out.println(objMsg.getObject());
                            } catch (JMSException e) {
                                e.printStackTrace();
                            }
                        }
                    }
                }
            });
            // 休眠100ms再关闭
            Thread.sleep(1000 * 10);

            // 提交会话
            session.commit();

        } catch (Exception e) {
            throw e;
        } finally {
            // 关闭释放资源
            if (session != null) {
                session.close();
            }
            if (connection != null) {
                connection.close();
            }
        }
    }

    public static void main(String[] args) throws Exception {
        QueueReceiver.run();
    }
}

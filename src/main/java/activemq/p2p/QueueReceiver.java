package activemq.p2p;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 10:06 2018/9/14
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
import javax.jms.*;

import org.apache.activemq.ActiveMQConnection;
import org.apache.activemq.ActiveMQConnectionFactory;

import java.nio.ByteBuffer;

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
                            System.out.println("------Received BytesMessage------");
                            BytesMessage message = (BytesMessage) msg;
                            byte[] byteContent = new byte[1024];
                            int length = -1;
                            StringBuffer content = new StringBuffer();
                            try {
                                while ((length = message.readBytes(byteContent))!=-1) {
                                    content.append(new String(byteContent, 0, length));
                                    System.out.println(new String(byteContent, 0, length));
                                    System.out.println("----------end----------------");
                                }
                            } catch (JMSException e) {
                                e.printStackTrace();
                            }


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
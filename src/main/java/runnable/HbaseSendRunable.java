package runnable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import utils.KeyValueForDate;

import java.util.*;

import static utils.SplitDateUtil.SplitDateByThreadNum;
import static utils.SplitDateUtil.daycount;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 10:38 2018/9/13
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
public class HbaseSendRunable implements Runnable  {
    private static final Logger LOGGER = LoggerFactory.getLogger(HbaseSendRunable.class);
    private static Random random = new Random();
    private String startDay;
    private String endDay;
    private int dayCount;
    private String HbaseData;

    public HbaseSendRunable(String startDay,String endDay,int dayCount,String HbaseData){
         /***/
        this.startDay=startDay;
        this.endDay=endDay;
        this.dayCount=dayCount;
        this.HbaseData=HbaseData;
    }

    @Override
    public void run() {
        int num=2;
        while(num>0){
            System.out.println("this.startDay:"+this.startDay);
            System.out.println("this.endDay:"+this.endDay);
            System.out.println("this.dayCount:"+this.dayCount);
            System.out.println(Thread.currentThread().getName()+": "+num);
            //call hbase API
            num--;
        }
    }


    public static void main(String[] args){
        //int threadNum=Integer.valueOf(args[1]).intValue();
        //String startDay=args[2];
        //String endDay=args[3];
        //int daynums=Integer.valueOf(args[4]).intValue();
        int threadNum=8;
        String startDay="2015-08-23";
        String endDay="2016-06-10";
        int daynums=350;
        String iStart=null;
        String iEnd=null;
        int iDaynums=0;

        ArrayList<Thread> aList=new ArrayList<Thread>();
        ArrayList<KeyValueForDate> dateList=SplitDateByThreadNum(startDay,endDay,threadNum);
        for(int i=0;i< threadNum; i++) {
            if (i== dateList.size()){
                    break;
            }
            iStart=dateList.get(i).getStartDate();
            iEnd=dateList.get(i).getEndDate();
            iDaynums= daycount(iStart,iEnd);
            Thread thread = new Thread(new HbaseSendRunable(iStart, iEnd, iDaynums,"laalalls"));
            thread.start();
            System.out.println(thread.getName());
            aList.add(thread);
        }

    }

}




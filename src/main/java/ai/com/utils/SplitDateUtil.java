package ai.com.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

//import org.junit.Test;
import org.junit.jupiter.api.Test;
//import org.testng.annotations.Test;

/**
 * 根据一段时间区间，按月份拆分成多个时间段
 * @author myq
 *
 * 2018年9月16日下午3:18:36
 */
public class SplitDateUtil {

    @Test
    public void demo(){
        int threadNum=8;
        ArrayList<KeyValueForDate> datelist= new ArrayList<KeyValueForDate>();
        List<KeyValueForDate> list = SplitDateUtil.getKeyValueForDate("2015-08-23","2016-06-10");
        int listSize=list.size();
        int cover=listSize/threadNum;
        int multiCount=listSize%threadNum;
        if (multiCount > 0){
            cover+=1;
        }
        int i=0;
        int count=0;
        int j=0;
        KeyValueForDate tmp=null;
        KeyValueForDate iDate=new KeyValueForDate();

        for(i=0;i<threadNum;i++){
            tmp=new KeyValueForDate();
            iDate=list.get(j);
            tmp.setStartDate(iDate.getStartDate2());
            if(cover>1 && i< multiCount) {
                j = j + cover-1;
            }
            iDate=list.get(j);
            tmp.setEndDate(iDate.getEndDate2());
            datelist.add(i,tmp);
            j+=1;
        }

        System.out.println("开始日期--------------结束日期");
        for(KeyValueForDate date : list){
            System.out.println(date.getStartDate()+"-----"+date.getEndDate());
        }

        System.out.println("开始日期--------------结束日期");
        for(KeyValueForDate date : datelist){
            System.out.println(date.getStartDate()+"-----"+date.getEndDate());
        }
    }

    //"2015-08-23","2016-06-10"
    public static ArrayList<KeyValueForDate> SplitDateByThreadNum(String startDay, String endDay,int threadNum){
        ArrayList<KeyValueForDate> datelist= new ArrayList<KeyValueForDate>();
        List<KeyValueForDate> list = SplitDateUtil.getKeyValueForDate(startDay,endDay);
        int listSize=list.size();
        int cover=listSize/threadNum;
        int multiCount=listSize%threadNum;
        if (multiCount > 0){
            cover+=1;
        }
        int i=0;
        int j=0;
        KeyValueForDate tmp=null;
        KeyValueForDate iDate=new KeyValueForDate();

        for(i=0;i<threadNum;i++){
            if(j==listSize){
                break;
            }
            tmp=new KeyValueForDate();
            iDate=list.get(j);
            tmp.setStartDate(iDate.getStartDate2());
            if(cover>1 && i< multiCount) {
                j = j + cover-1;
            }
            iDate=list.get(j);
            tmp.setEndDate(iDate.getEndDate2());
            datelist.add(i,tmp);
            j+=1;
        }
        return datelist;
    }
    /**
     * 根据一段时间区间，按月份拆分成多个时间段
     * @param startDate 开始日期
     * @param endDate  结束日期
     * @return
     */
    @SuppressWarnings("deprecation")
    public static List<KeyValueForDate> getKeyValueForDate(String startDate,String endDate) {
        List<KeyValueForDate> list = null;
        try {
            list = new ArrayList<KeyValueForDate>();

            String firstDay = "";
            String lastDay = "";
            Date d1 = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);// 定义起始日期

            Date d2 = new SimpleDateFormat("yyyy-MM-dd").parse(endDate);// 定义结束日期

            Calendar dd = Calendar.getInstance();// 定义日期实例
            dd.setTime(d1);// 设置日期起始时间
            Calendar cale = Calendar.getInstance();

            Calendar c = Calendar.getInstance();
            c.setTime(d2);

            int startDay = d1.getDate();
            int endDay = d2.getDate();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            KeyValueForDate keyValueForDate = null;

            while (dd.getTime().before(d2)) {// 判断是否到结束日期
                keyValueForDate = new KeyValueForDate();
                cale.setTime(dd.getTime());

                if(dd.getTime().equals(d1)){
                    cale.set(Calendar.DAY_OF_MONTH, dd
                            .getActualMaximum(Calendar.DAY_OF_MONTH));
                    lastDay = sdf.format(cale.getTime());
                    keyValueForDate.setStartDate(sdf.format(d1));
                    keyValueForDate.setEndDate(lastDay);

                }else if(dd.get(Calendar.MONTH) == d2.getMonth() && dd.get(Calendar.YEAR) == c.get(Calendar.YEAR)){
                    cale.set(Calendar.DAY_OF_MONTH,1);//取第一天
                    firstDay = sdf.format(cale.getTime());

                    keyValueForDate.setStartDate(firstDay);
                    keyValueForDate.setEndDate(sdf.format(d2));

                }else {
                    cale.set(Calendar.DAY_OF_MONTH,1);//取第一天
                    firstDay = sdf.format(cale.getTime());

                    cale.set(Calendar.DAY_OF_MONTH, dd
                            .getActualMaximum(Calendar.DAY_OF_MONTH));
                    lastDay = sdf.format(cale.getTime());

                    keyValueForDate.setStartDate(firstDay);
                    keyValueForDate.setEndDate(lastDay);

                }
                list.add(keyValueForDate);
                dd.add(Calendar.MONTH, 1);// 进行当前日期月份加1

            }

            if(endDay<startDay){
                keyValueForDate = new KeyValueForDate();

                cale.setTime(d2);
                cale.set(Calendar.DAY_OF_MONTH,1);//取第一天
                firstDay = sdf.format(cale.getTime());

                keyValueForDate.setStartDate(firstDay);
                keyValueForDate.setEndDate(sdf.format(d2));
                list.add(keyValueForDate);
            }
        } catch (ParseException e) {
            return null;
        }

        return list;
    }

    //"151223","160110"
    public static int daycount(String startDay,String endDay){
        int yStart=Integer.parseInt(startDay.substring(0,2));
        int yEnd=Integer.parseInt(endDay.substring(0,2));
        int mStart=Integer.parseInt(startDay.substring(2,4));
        int mEnd=Integer.parseInt(endDay.substring(2,4));
        int dStart=Integer.parseInt(startDay.substring(4,6));
        int dEnd=Integer.parseInt(endDay.substring(4,6));

        int daycount= (yEnd-yStart)*365+(mEnd-mStart)*30+(dEnd-dStart);
        return daycount;
    }

}


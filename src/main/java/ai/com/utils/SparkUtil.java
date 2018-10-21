package ai.com.utils;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import scala.Tuple2;

import java.io.File;
import java.util.Arrays;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 11:34 2018/8/16
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */
public class SparkUtil {

    public static void checkKeys(){
        //df.select("key").sample(false,0.1).(k=>(k,1)).reduceBykey(_+_).map(k=>(k._2,k._1)).sortByKey(false).take(10)

    }

    public static void main(String[] args) {
        String inputPath = ".\\";
        String outputPath = ".\\result\\";

        SparkConf conf = new SparkConf().setMaster("local[2]").setAppName("wordcount");
        JavaSparkContext sc = new JavaSparkContext(conf);

        // 读取文件
        JavaRDD<String> input = sc.textFile(inputPath);
        // 切分单词
        JavaRDD<String> words = input.flatMap(
                x -> Arrays.asList(x.split(" ")).iterator());
        // 转换成键值对并计数
        JavaPairRDD<String, Integer> counts = words.mapToPair(x -> new Tuple2<>(x, 1))
                .reduceByKey((x, y) -> x + y);

        // 输出统计结果
        System.out.println(counts.collect());

        // 删除输出目录
        File dir = new File(outputPath);
        File[] files = dir.listFiles();
        if (files != null) {
            for (File file : files) {
                file.delete();
            }
        }
        dir.delete();

        // 将统计结果写入结果文件
        counts.saveAsTextFile(outputPath);
    }
}

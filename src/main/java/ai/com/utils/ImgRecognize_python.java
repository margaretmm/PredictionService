package ai.com.utils;

/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 16:56 2018/7/17
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */


/** Sample use of the TensorFlow Java API to label images using a pre-trained model. */
public class ImgRecognize_python {
    private static String modelDir=".\\src\\main\\java\\model";
    private static String modeName="tensorflow_inception_graph_new.pb";
    private static String testDataSetDir=".\\target\\download\\172.7.21.51\\test\\";

    public static void cmd(){
        CallShell.callCmd("cmd /c start /d"+".\\target\\model\\callPredictionPython.bat");
    }


    public static void main(String[] args) {
        cmd();
    }


}

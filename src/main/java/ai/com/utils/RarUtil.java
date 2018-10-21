package ai.com.utils;
/**
 * @ Author     ：maoyeqin
 * @ Date       ：Created in 16:05 2018/9/18
 * @ Description：${description}
 * @ Modified By：
 * @Version: $version$
 */


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileOutputStream;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
//import de.innosystec.unrar.Archive;
//import de.innosystec.unrar.rarfile.FileHeader;

public class RarUtil {
    private static Logger logger = LoggerFactory.getLogger(RarUtil.class);

    public static void unrar(String srcRarPath,String dstDirectoryPath) throws Exception {
        if (!srcRarPath.toLowerCase().endsWith(".rar")) {
            System.out.println("非rar文件！");
            return;
        }

        File dstDiretory = new File(dstDirectoryPath);
        if (!dstDiretory.exists()) {// 目标目录不存在时，创建该文件夹
            dstDiretory.mkdirs();
        }

        File fol=null,out=null;
//        Archive a = null;
//        try {
//            a = new Archive(new File(srcRarPath));
//            if (a != null){
//                a.getMainHeader().print(); // 打印文件信息.
//                FileHeader fh = a.nextFileHeader();
//                while (fh != null){
//                    if (fh.isDirectory()) { // 文件夹
//                        // 如果是中文路径，调用getFileNameW()方法，否则调用getFileNameString()方法，还可以使用if(fh.isUnicode())
//                        if(existZH(fh.getFileNameW())){
//                            fol = new File(dstDirectoryPath + File.separator
//                                    + fh.getFileNameW());
//                        }else{
//                            fol = new File(dstDirectoryPath + File.separator
//                                    + fh.getFileNameString());
//                        }
//                        fol.mkdirs();
//                    } else { // 文件
//                        if(existZH(fh.getFileNameW())){
//                            out = new File(dstDirectoryPath + File.separator
//                                    + fh.getFileNameW().trim());
//                        }else{
//                            out = new File(dstDirectoryPath + File.separator
//                                    + fh.getFileNameString().trim());
//                        }
//
//                        //System.out.println(out.getAbsolutePath());
//
//                        try {// 之所以这么写try，是因为万一这里面有了异常，不影响继续解压.
//                            if (!out.exists()) {
//                                if (!out.getParentFile().exists()){// 相对路径可能多级，可能需要创建父目录.
//                                    out.getParentFile().mkdirs();
//                                }
//                                out.createNewFile();
//                            }
//                            FileOutputStream os = new FileOutputStream(out);
//                            a.extractFile(fh, os);
//                            os.close();
//                        } catch (Exception ex) {
//                            ex.printStackTrace();
//                        }
//                    }
//                    fh = a.nextFileHeader();
//                }
//                a.close();
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
   }

//    public static boolean existZH(String str){
//        String regEx = "[\\u4e00-\\u9fa5]";
//        Pattern p = Pattern.compile(regEx);
//        Matcher m = p.matcher(str);
//        while (m.find()) {
//            return true;
//        }
//        return false;
//    }
//
//    public static void unrar1(File sourceRar, File destDir) throws Exception {
//        Archive archive = null;
//        FileOutputStream fos = null;
//        System.out.println("Starting...");
//        try {
//            archive = new Archive(sourceRar);
//            FileHeader fh = archive.nextFileHeader();
//            int count = 0;
//            File destFileName = null;
//            while (fh != null) {
//                System.out.println((++count) + ") " + fh.getFileNameString());
//                String compressFileName = fh.getFileNameString().trim();
//                destFileName = new File(destDir.getAbsolutePath() + "/" + compressFileName);
//                if (fh.isDirectory()) {
//                    if (!destFileName.exists()) {
//                        destFileName.mkdirs();
//                    }
//                    fh = archive.nextFileHeader();
//                    continue;
//                }
//                if (!destFileName.getParentFile().exists()) {
//                    destFileName.getParentFile().mkdirs();
//                }
//                fos = new FileOutputStream(destFileName);
//                archive.extractFile(fh, fos);
//                fos.close();
//                fos = null;
//                fh = archive.nextFileHeader();
//            }
//
//            archive.close();
//            archive = null;
//            System.out.println("Finished !");
//        } catch (Exception e) {
//            throw e;
//        } finally {
//            if (fos != null) {
//                try {
//                    fos.close();
//                    fos = null;
//                } catch (Exception e) {
//                    //ignore
//                }
//            }
//            if (archive != null) {
//                try {
//                    archive.close();
//                    archive = null;
//                } catch (Exception e) {
//                    //ignore
//                }
//            }
//        }
//    }
}

# -*- coding: utf-8 -*-
import platform

import cv2
import tensorflow as tf
import numpy as np
import os
import sys

MODEL_FILE_new='tensorflow_inception_graph_new.pb'
MODEL_FILE_ori='classify_image_graph_def.pb'
IMG_EXTENSIONS = ['png','PNG','jpg', 'jepg', 'JPG', 'JPEG']

if platform.system() in ['Linux']:
    TRAINED_MODEL_DIR='./'
    # 因为一个训练数据会被使用多次，所以可以将原始图像通过Inception-v3模型计算得到的特征向量保存在文件中，免去重复的计算。
    GRAPHDIR = './'
else:
    TRAINED_MODEL_DIR='.\\'
    GRAPHDIR='.\\'


tf.app.flags.DEFINE_string('ImgIp', sys.argv[1],"")
#tf.app.flags.DEFINE_string('ImgIp', '172.7.21.51',"")

FLAGS = tf.app.flags.FLAGS
def prediction(_):
    strings = ['blackScreen', 'normalScreen','other']
    print("~~~~current dir:", os.getcwd())
    fileDir='..\\download\\'+FLAGS.ImgIp+'\\';
    print("~~~~fileDir",fileDir)
    filename = fileDir + 'prediction.csv'

    #def id_to_string(node_id):
    #    return strings[node_id]

    #with tf.gfile.FastGFile(TRAINED_MODEL_DIR+TRAINED_MODEL_FILE_ori, 'rb') as f:
    with tf.gfile.FastGFile(TRAINED_MODEL_DIR+MODEL_FILE_new, 'rb') as f:
        graph_def = tf.GraphDef()
        graph_def.ParseFromString(f.read())
        tf.import_graph_def(graph_def, name='')

    with tf.Session() as sess:
        softmax_tensor = sess.graph.get_tensor_by_name('output/prob:0')
        # 遍历目录
        with open(filename, 'w') as f:  # 如果filename不存在会自动创建， 'w'表示写数据，写之前会清空文件中的原有数据！
            TEST_IMG=fileDir+"test\\"
            for root, dirs, files in os.walk(TEST_IMG):
                for file in files:
                    # 载入图片
                    image_data = tf.gfile.FastGFile(os.path.join(root, file), 'rb').read()
                    predictions = sess.run(softmax_tensor, {'DecodeJpeg/contents:0': image_data})  # 图片格式是jpg格式
                    predictions = np.squeeze(predictions)  # 把结果转为1维数据

                    # 打印图片路径及名称
                    image_path = os.path.join(root, file)
                    print(image_path)

                    # 排序
                    top_k = predictions.argsort()[::-1]
                    print(top_k)
                    node_id=top_k[0]
                    #for node_id in top_k:
                    # 获取分类名称
                    human_string = strings[node_id]
                    # 获取该分类的置信度
                    score = predictions[node_id]
                    #print('%s (score = %.5f)' % (human_string, score))
                    f.write('%s %s %.5f\n' % (file,human_string, score))
        return

if __name__ == '__main__':
     tf.app.run(prediction)
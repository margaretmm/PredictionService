import os
import time
import socket

import sys

import logging
from kazoo.client import KazooClient
from kazoo.client import KazooState
import threading
from kazoo.recipe.watchers import ChildrenWatch

class ZookeeperAgent2(object):
    def __init__(self, ip=None, port=None,serviceType=None,path=None,monitorPort =None):
        self._ip =ip #'10.66.170.3'
        self._port =port #'22182'
        self._serviceType=serviceType #'/workers'
        self._path = path #'/workers/10.66.170.3'
        self._monitorPort = monitorPort #'
        self.zk_node=self._path + self._monitorPort
        try:
            self.zk=KazooClient(hosts=self._ip + ':' + self._port, timeout=500, read_only=True)
            self.zk.add_listener(self.conn_state_watcher)
            self.zk.start()
        except Exception as  ex:
            self.init_ret = False
            self.err_str = "Create KazooClient failed! Exception: %s" % str(ex)
            logging.error(self.err_str)


    def conn_state_watcher(self, state):
        if state == KazooState.CONNECTED:
            print("Now connected")

            if self.zk_node is None:
                print("create method has not been called")
                return
            # info_keeper = InfoKeeper(self)
            # info_keeper.start()
        elif state == KazooState.LOST:
            print("Now lost")
        else:
            print("Now suspended")


    def main(self):

        if self.zk.exists(self._path):
            print(self._path+" already exists")
        else:
            self.zk.create(self._path)

        while True:
            time.sleep(10)
            self.check_port(self._ip, int(self._monitorPort))

    def check_port(self,ip, port):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(5)
        host = (ip, port)
        print(host)
        r = s.connect_ex(host)
        if r == 0:
            if self.zk.exists(self.zk_node):
                self.zk.delete(self.zk_node)
            self.zk.create(self.zk_node, b"ocr/30%", ephemeral=True)
            #print(self.zk.commit())
        else:
            self.zk.delete(self.zk_node)
        s.close()
        return 1

# class InfoKeeper(threading.Thread):
#     def __init__(self,register):
#         threading.Thread.__init__(self)
#         self.register=register
#
#     def run(self):
#         time.sleep(0.25)
#         if self.register.zk_node is None:
#             print("create method has not been called")
#             return
#         check_result = self.register.zk.exists(self.register.validator_path)
#         if check_result is None:
#             # redo the regist
#             print("redo the regist")
#             self.register.regist()
#         else:
#             print("the path remain exists")
#
# class ValidatorDetector:
#     def __init__(self):
#         self.validator_path = '/mproxy/validators/'
#         self.zk = KazooClient(hosts='amaster:2181,anode1:2181,anode2:2181')
#         self.validator_children_watcher = ChildrenWatch(client=self.zk,path=self.validator_path,func=self.validator_watcher_fun)
#         self.zk.start()
#
#     def validator_watcher_fun(self,children):
#         for child in children:
#             validator_name = self.zk.get(path=self.validator_path + str(child))
#             print(validator_name[0])
#         print("The children now are:", children)
#
#     def __del__(self):
#         self.zk.close()

if __name__ == "__main__":
    zc = ZookeeperAgent2('10.66.176.41','22182','/workers','/workers/10.66.176.41/','22182')
    try:
        zc.main()
    finally:
        sys.exit()

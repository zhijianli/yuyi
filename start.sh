cd unpackage/dist

#杀死原来进程
pid=$(lsof -ti :9000) && if [ ! -z "$pid" ]; then kill -9 $pid; fi

#启动python服务
nohup python3 -m http.server 9000 > /home/mocuili/data/log_yuyi.out 2>&1 &
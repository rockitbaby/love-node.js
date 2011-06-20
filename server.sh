#!/bin/bash
user=root
dir=`pwd`
echo $dir
srv_file=$dir/app.js
pid_file=$dir/logs/server.pid
log_file=$dir/logs/server.log
 
case $1 in
  start)
    /usr/local/bin/node "$srv_file" >> "$log_file" 2>&1 &
    echo `ps ax | grep $srv_file | grep -v grep | awk '{print $1}'` > "$pid_file"
    ;;
  stop)
    kill `cat "$pid_file"`
    rm "$pid_file" ;;
  *)  
    echo "usage: server.sh {start|stop}" ;;
esac
#exit 0

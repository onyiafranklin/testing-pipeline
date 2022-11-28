#!/bin/bash

if [ -d "env1" ] 
then
    echo "Python virtual environment exists." 
else
    sudo apt install python3-venv
    python3 -m venv env1
fi

source env1/bin/activate
pip3 install -r requirements.txt

if [ -d "logs" ] 
then
    echo "Log folder exists." 
else
    mkdir logs
    touch logs/error.log logs/access.log
fi
sudo chmod -R 777 logs
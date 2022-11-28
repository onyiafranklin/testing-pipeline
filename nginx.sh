#!/bin/bash

sudo cp -rf app.conf /etc/nginx/sites-available/testing
chmod 710 /var/lib/jenkins/workspace/cicd_project

sudo ln -s /etc/nginx/sites-available/testing /etc/nginx/sites-enabled
sudo nginx -t

sudo systemctl start nginx
sudo systemctl enable nginx

echo "Nginx has been started"

sudo systemctl status nginx
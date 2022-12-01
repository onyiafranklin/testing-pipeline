pipeline{
    agent any
    
    stages {
    
        stage ("terraform init") {

            steps {

                sh ('terraform init')

            }

        }

        stage ("terraform plan") {

            steps {

                sh ('terraform plan')

           }

        }

         stage ("terraform apply") {
            steps {

                sh ('terraform apply -auto-approve')

             }

        }
        
        stage ("publish application") {
            steps {

                sh 'pwd'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/ui/comp; pwd; npm install; pip install django==2.1.15; sudo -su; sudo apt install python3-pip; pip install mysqlclient; Python install - https://phoenixnap.com/kb/how-to-install-python-3-ubuntu; pip install djangorestframework; pip install django-cors-headers; npm start'
                sh '/var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; python3 manage.py runserver 172.31.8.18:8000'

             }

        }
    }
}
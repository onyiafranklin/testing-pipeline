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
                sh 'cd /home/ubuntu/testing-pipeline/DevopsProject/ui/comp; npm start'
                sh 'cd /home/ubuntu/testing-pipeline/DevopsProject/api/ApiProject; python3 manage.py runserver 172.31.8.18:8000'

             }

        }
    }
}
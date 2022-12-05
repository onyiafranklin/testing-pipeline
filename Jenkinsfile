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
        stage ("Verifying Dependency for API and Ui Application") {
            steps {
                sh 'pwd'
                sh 'pip install mysqlclient'
                sh 'pip install djangorestframework'
                sh 'pip install django-cors-headers'
				sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; python manage.py makemigrations'
				sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; python manage.py migrate'
				sh 'npm -version'
				sh 'python3 --version'
				sh 'gunicorn --version'
				sh 'nginx -v'

             }

        }

        stage ("Deploying API and Ui Application") {
            steps {
                sh 'pwd'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; sudo systemctl restart nginx'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; sudo systemctl restart gunicorn'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/ui/comp; npm start'

             }

        }
    }
}

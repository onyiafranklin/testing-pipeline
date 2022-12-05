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
        stage ("Verifying Dependency for API Application") {
            steps {
                sh 'pwd'
                sh 'pip install mysqlclient'
                sh 'pip install djangorestframework'
                sh 'pip install django-cors-headers'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; python3 manage.py makemigrations'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; python3 manage.py migrate'
                sh 'python3 --version'
                sh 'nginx -v'

             }

        }
		stage ("Verifying Dependency for Ui Application") {
            steps {
				sh 'npm -version'

             }

        }
		stage ("Deploying API Application") {
            steps {
                sh 'pwd'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; sudo systemctl restart nginx'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; sudo systemctl restart gunicorn'

             }

        }
		stage ("Deploying Ui Application") {
            steps {
                sh 'pwd'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/ui/comp; npm start'

             }

        }
    }
}

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
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; sudo systemctl restart nginx'
				sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; sudo systemctl restart gunicorn'
				sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/ui/comp; npm start'
				
             }

        }
    }
}

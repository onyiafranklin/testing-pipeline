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

                sh 'sudo su'
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject'
                sh './start.sh'

             }

        }
    }
}

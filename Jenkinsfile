pipeline{
    agent any
    
    stages {
    
        stage ("publish application") {
            steps {
                sh 'cd /var/lib/jenkins/workspace/cicd_project/DevopsProject/api/ApiProject; python3 manage.py runserver 8000'
             }

        }
    }
}

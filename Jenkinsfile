pipeline{
    agent any
    
    stages {
    
        stage ("publish application") {
            steps {
                sh 'python3 manage.py runserver 8000'
             }

        }
    }
}

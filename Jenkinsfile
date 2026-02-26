pipeline {
    agent any

    environment {
        IMAGE_NAME = "manideep-react-app"
        CONTAINER_NAME = "manideep-react-container"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker run -d -p 5050:5050 --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }
}

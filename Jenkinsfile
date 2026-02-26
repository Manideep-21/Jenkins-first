pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    }

    environment {
        IMAGE_NAME = "mani-react-app"
        CONTAINER_NAME = "mani-react-container"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
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

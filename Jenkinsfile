pipeline {
    agent any

    environment {
        DOCKER_HOST = 'tcp://jenkins-docker:2375'
        IMAGE_NAME = 'jenkins-cicd-task:1.0'
        CONTAINER_NAME = 'jenkins-cicd-app'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated application tests...'
                sh 'docker run --rm $IMAGE_NAME npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application container...'
                sh '''
                    docker rm -f $CONTAINER_NAME || true
                    docker run -d --name $CONTAINER_NAME \
                        -p 3000:3000 $IMAGE_NAME
                '''
            }
        }
    }
}

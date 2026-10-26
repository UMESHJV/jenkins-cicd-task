# Jenkins CI/CD Pipeline Project

## Project Overview
This project demonstrates a basic Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins, Docker, Git, and GitHub. The pipeline automatically builds a Docker image, runs application tests, and deploys the application container.

## Technologies Used
- Jenkins
- Docker
- Git and GitHub
- Node.js
- PowerShell

## Application
A simple Node.js HTTP application that returns:

`Hello from my Jenkins CI/CD project!`

## Jenkins Pipeline Stages

### 1. Build
Jenkins checks out the source code from GitHub and builds a Docker image using the Dockerfile.

### 2. Test
Jenkins runs automated Node.js tests inside the Docker image to verify that the application returns the expected response.

### 3. Deploy
Jenkins removes the previous application container if it exists and starts a new container using the built image.

## Pipeline Configuration
The pipeline is defined in the `Jenkinsfile`. It contains the Build, Test, and Deploy stages and uses the Docker engine connected to the Jenkins container.

## Automatic Trigger
Jenkins uses SCM polling to check the GitHub repository for new commits. When a new commit is detected, Jenkins can start the pipeline automatically.

## Run the Application Locally
Build the Docker image:

```bash
docker build -t jenkins-cicd-task:1.0 .
```

Run the container:

```bash
docker run -d --name jenkins-cicd-app -p 3000:3000 jenkins-cicd-task:1.0
```

Open `http://localhost:3000` in your browser to see the application response.

Run the tests:

```bash
npm test
```

## Result
The Jenkins pipeline successfully built the Docker image, passed the automated application test, and deployed the application. The application was verified at `http://localhost:3000` and returned HTTP 200.

## Repository
GitHub: https://github.com/UMESHJV/jenkins-cicd-task

# CI/CD Pipeline with Docker and GitHub Actions



## Objective   
Build a CI/CD pipeline using Docker and GitHub Actions for a simple Node.js application. The pipeline should:

1- Build a Docker image for the application.  
2- Run automated tests in a Docker container.  
3- Push the image to Docker Hub.
## Requirements
Docker installed

GitHub account for repository management

Docker Hub account for image storage

- Dockerize a simple Node.js app.
- Use GitHub Actions to:
	- Build the Docker image on every push to the main branch.
	- Run unit tests inside a container.
	- Push the image to Docker Hub.
- Use Docker Compose to define the services.
- Include a Dockerfile with multi-stage builds.
## How project Works
- Create a basic Node.js app with an API that responds to requests.

- Use Jest to check if everything works correctly.

- Package the app in a Docker container so it runs the same way everywhere.

- Automate with GitHub Actions: Whenever push new code on GitHub, GitHub Actions:

  Builds a new Docker image.

  Runs the tests automatically.

  Pushes the image to Docker Hub if everything is fine.
## Features

- A simple Express.js API with a /status endpoint.

- Unit tests using Jest.

- Multi-stage Dockerfile for optimized builds.

- GitHub Actions workflow to automate building, testing, and pushing the Docker image.

- Docker Compose for local deployment with a single command.


## Folder Structure
docker-cicd/  
│── backend/    
│   ├── Dockerfile  
│   ├── app.js  
│   ├── package.json  
│   ├──  tests/                 
│── .github/workflows/        
│   ├── docker-ci.yml  
│── docker-compose.yml  
│── README.md  
## Application run
First i run the project locally through docker-compose  

first build the images through  

    "sudo docker-compose up --build"  
and then run container through  

    "sudo docker-compose up"  
our project is in running condition on local system 
 
 After running on local system push the all code to the git hub and when code will push on the github workflows will automatically trigger and do all steps that are in the dockerfile basically build the image of the docekrfile and push that image to the dockerhub.



## 🔗 Links to get help
- [(https://levelup.gitconnected.com/automate-your-node-js-app-ci-cd-with-github-actions-and-docker-4f12a7cc231e)](https://levelup.gitconnected.com/automate-your-node-js-app-ci-cd-with-github-actions-and-docker-4f12a7cc231e)
- [(https://www.innovect.com/automating-cicd-with-github-actions-and-docker-for-a-nodejs-express-app)](https://www.innovect.com/automating-cicd-with-github-actions-and-docker-for-a-nodejs-express-app)
- [(https://www.freecodecamp.org/news/learn-continuous-integration-delivery-and-deployment/)](https://www.freecodecamp.org/news/learn-continuous-integration-delivery-and-deployment/)


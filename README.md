# Build the project
gradle clean build

# build the images
docker build -t task_list_front:1.0 .
docker build -t task_list_back:1.0 .


# run the containers
docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb mongo
docker run -d --name task_list_back --link mongodb:mongodb task_list_back:1.0
docker run --name task_list_front  -p 8082:80 --link todo-rest:todo-rest -d task_list_front:1.0

# or just use docker-compose
# for building and running
docker-compose up
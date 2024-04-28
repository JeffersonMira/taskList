## Build the image
docker build -t task_list_front:1.0 .

## run the docker image
docker run -d -p 80:80 task_list_front:1.0

Then access the frontend application at http://localhost:80


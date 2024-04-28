FROM openjdk:11-jre-slim-buster
EXPOSE 8080
RUN mkdir -p /app/
ADD build/libs/task-list-back-0.0.1-SNAPSHOT.jar /app/task-list-back-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/app/task-list-back-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=prod"]
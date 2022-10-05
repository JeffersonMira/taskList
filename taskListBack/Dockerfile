FROM openjdk:11-jre-slim-buster
EXPOSE 8080
RUN mkdir -p /app/
ADD build/libs/taskListBack-0.0.1-SNAPSHOT.jar /app/taskListBack-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/app/taskListBack-0.0.1-SNAPSHOT.jar"]
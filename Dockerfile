FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu
# This is the jar file that you want to run
WORKDIR /backend
COPY target/app.jar /app.jar
# This is the port that your javalin application will listen on
EXPOSE 7070
# This is the command that will be run when the container starts
ENTRYPOINT ["java", "-jar", "/app.jar"]
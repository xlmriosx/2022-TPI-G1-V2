FROM openjdk:11
RUN ["/bin/sh", "mvn clean install"]
VOLUME /tmp
EXPOSE 8005
ADD ./target/lodging-0.0.1-SNAPSHOT.jar lodging.jar
ENTRYPOINT ["java","-jar","/lodging.jar"]
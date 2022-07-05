FROM openjdk:11
RUN ["./", "mvn clean install"]
VOLUME /tmp
EXPOSE 8001
ADD ./target/matches-0.0.1-SNAPSHOT.jar matches.jar
ENTRYPOINT ["java","-jar","/matches.jar"]
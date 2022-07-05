FROM openjdk:11
RUN "mvn clean install"
VOLUME /tmp
EXPOSE 8004
ADD ./target/travel-0.0.1-SNAPSHOT.jar travel.jar
ENTRYPOINT ["java","-jar","/travel.jar"]
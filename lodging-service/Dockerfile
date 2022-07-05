FROM openjdk:11
CMD mvn clean install
VOLUME /tmp
EXPOSE 8005
ADD ./target/lodging-0.0.1-SNAPSHOT.jar lodging.jar
ENTRYPOINT ["java","-jar","/lodging.jar"]
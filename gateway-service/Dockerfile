FROM openjdk:11
RUN mvn clean install
VOLUME /tmp
EXPOSE 8090
ADD ./target/gateway-0.0.1-SNAPSHOT.jar gateway.jar
ENTRYPOINT ["java","-jar","/gateway.jar"]

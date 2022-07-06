cd eureka-service
mvn clean install

cd ..

cd gateway-service
mvn clean install

cd ..

cd health-service
mvn clean install

cd ..

cd lodging-service
mvn clean install

cd ..

cd matches-service
mvn clean install

cd ..

cd travel-service
mvn clean install

cd ..

sudo docker-compose up
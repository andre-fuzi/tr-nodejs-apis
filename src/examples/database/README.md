
## - Rodando Postgres
***
docker run \
  --name postgres \ nome do container
  -e POSTGRES_USER=andrekaoru \ 
  -e POSTGRES_PASSWORD=123456 \ 
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \ porta_intera:porta-externa
  -d \ rodar em segundo plano
  postgres
***

## - Rodando Painel Adminer
***
  docker run \
    --name adminer \
    -p 8080:8181 \
    --link postgres:postgres \
    -d \
    adminer
***


## - Rodando Mongodb
***
  docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -d \
    mongo:4
***

## - Rodando Painel MongoClient
***
  docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient
***

## - Rodar mongo no terminal
***
  docker exec -it mongodb
  mongo --host localhost -u admin -p admin --authenticationDatabase admin \
    --eval "db.getSiblingDB('heroes').createUser({user: 'andrekaoru', pwd: '123456', roles:[{role: 'readWrite', db: 'heroes'}]})"

***



### - listar containers
***
docker ps
***

### - executar container no terminal
***
docker exec -it postgres /bin/bash
***





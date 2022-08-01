<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run on development 

### 1. Clone the repository
### 2. Run this command
```
yarn install
```
### 3. Must have Nest CLI

```
npm i -g @nest/cli
```
### 4. Set the database
```
docker-compose up -d
```
### 5. Clone __.env.template__ file and rename it to __.env__

### 6. Fill enviroment variables defined in __.env__

### 7. Run the start command on development
```
yarn start:dev
```

### 8. Rebuild data with seed
```
http://localhost:3000/api/v2/seed
```

## Stack used

* MongoDB
* Nest

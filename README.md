# Description

[NestJs](https://github.com/nestjs/nest) Microservice Template

[![License](https://img.shields.io/github/license/alexberce/nest-js-template.svg)](https://github.com/alexberce/nest-js-template/blob/master/LICENSE)

## 1. Requirements

Before starting, make sure you have the minimum requirements on your workstation.

- An up-to-date release of NodeJS and Yarn (or npm)
- A MongoDb database (you may use the provided docker-compose file to create one).

## 2. Setup
2.1. Install the dependencies.

 ```bash
$ yarn
 ```

2.2. Make a copy of the example environment variables file.
> For a standard development configuration, you can use the default values.

```bash
#On Linux systems
$ cp .env.example .env
```

```powershell
# On Windows
$ copy .env.example .env
```

## 3. Run the app
```bash
# development
$ yarn run start
```
```bash
# watch mode
$ yarn run start:dev
```
```bash
# production mode
$ yarn run start:prod
```

> You should now be able to access the swagger docs for the API at [http://localhost:3001](http://localhost:3001)

```
HOST: http://localhost:3001
```

## 4. Folder Structure

    .
    ├── ...
    ├── src     
    │   ├── common              # Common app modules and utility (filters, pipes, models, etc)
    │   │   ├── filters         # Common app filters
    │   └── ...  
    │   ├── config              # Configuration files go here
    │   │   ├── validation      # .env validation handler
    │   └── ...                 
    │   ├── libs                # Standalone modules that might be transformed into a library and used in other microservices at some point
    │   │   ├── database        # The database module
    │   │   ├── ...             
    │   └── ...  
    │   ├── modules             # All the app modules reside here
    │   │   ├── auth            # The Authentication module
    │   │   ├── user            # The User module
    │   └── ...
    │   ├── app.module.ts       # The app module
    │   ├── main.ts             # App entry point & bootstrap
    │   └── ...                 
    └── ...

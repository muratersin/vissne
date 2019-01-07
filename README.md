# Vissne App

#### What is Vissne?
Vissne is a hobby project for learning Full-Stack Javascript. I'm already know NodeJs, ExpressJs and ReactJs, but I'm learn ReduxJs, JWT, PostgreSQL and GraphQL(to be added in the future) with this project.

I Hope this project help you learning Full-Stack javascript app fundamental and struct. 

As much as I can I'm writing clean code and code descriptions.

Vissne use [Movie DB Api](https://www.themoviedb.org/) for movie data.

#### Tech Stack
* JavaScript 
* NodeJs >= v10.*
* ExpressJs => v4.16.4
* PostgreSQL = v10.6
* JWT
* Passport
* React >= v16.6.3
* Redux >= v6.*
* Webpack >= v4.*
* Bootsrrap >= v4.*

* GraphQL (In the future)

## Getting Started
Clone:

`git clone https://github.com/muratersin/vissne.git`

Entry project folder:

`cd vissne`

Install npm packages:

`npm install`

If you want work with watch mode:

front-end: `npm run watch`
back-end: `npm run start-dev`

Or Production mode

run `npm run build` then `npm start`

In both case you need envoirement variables. You must add a '.env' file to project root as shown below:

```sh
PORT=3000
NODE_ENV=development
JWTSECRET=YOUR_JWT_SECRET
DOMAIN=YOUR_DOMAIN # http://localhost:3000
CDN=YOUR_CDN # http://localhost:3000 Cdn may sparate in the future

# MovieDB
MOVIE_DB_API_KEY=YOUR_API_KEY

# Database
PGHOST=YOUR_PG_HOST
PGUSER=YOUR_PG_USER
PGDATABASE=YOUR_PG_DB_NAME
PGPASSWORD=YOUR_PG_PASSWORD
PGPORT=YOUR_PG_PORT
```

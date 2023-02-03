Ecommerce MERN.

## Install

Run this command both on back and front folder

```sh
npm install
```

## Usage

Create a .env file in the back folder with all the necessary variables (use .env.example file as an example).

You can run the whole project on development mode by going to the back folder and running:

```sh
npm run server:client
```

To run on production mode, run:

```sh
npm run build:start
```

However, if modifications are made to the frontend and you want those modifications to be seen on production mode, run this command first:

```sh
npm run build:ui
```

## Run tests

For now tests are only available in the backend and only for the products routes. To run those tests, go to the back folder and run:

```sh
npm run test
```

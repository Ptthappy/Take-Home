# Take-Home

Take-Home test for FullTimeForce. Front-end and back-end included, using Angular 16 and Fastify 4 with typescript.

## Instalation

Install [NVM](https://github.com/nvm-sh/nvm) (Node version manager), if not already installed.
Select node v18 (current LTS)

```
nvm install --lts
nvm use --lts
```

Install backend dependencies

```
cd backend
npm i
```

Add .env file from existing .env.example file

For Linux/MacOS:
```
cat .env.example > .env
```

For Windows:
```
type .env.example > .env
```

This will set the github_url to the current github API url which is mandatory for the project to work properly. Setting the github user and password is optional.
After setting the .env file, go back to the project root folder

```
cd ..
```
Install frontend dependencies

```
cd frontend
npm i
cd ..
```

Environment variables are already set so no need to worry about that.

## Run the project

To keep things simple, ideally you will need two terminals
For running the backend (Terminal 1)

```
cd backend
npm start
```

For running the frontend (Terminal 2)

```
cd frontend
npm start
```

If you want to use only one terminal it can be achieved using jobs control (Only for Linux and MacOS)

```
cd backend
npm start &
cd ../frontend
npm start &
```

This will run both development servers directly in the background

## Test

```
npm run test
```

## Build

- Angular build (Frontend)

```
npm run build
```

- Typescript backend build

```
npm run build:ts
```

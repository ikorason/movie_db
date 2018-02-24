# Movie DB
Movie database web application built with using [themoviedb.org](https://www.themoviedb.org/) api and nextjs framework for server side rendering(universal application)

## Running Your Own Version

### Step 1
Go to [themoviedb.org](https://www.themoviedb.org/) and sign up for user account then get an api_key

### Step 2
create .env and .env.production file to put your api_key like so

```
API_KEY=your_key
```

### Step 3
If you have no npm or node install please do so in your machine, just go to [node download](https://nodejs.org/en/download/) and look for your machine preference, installing node will also install npm.

### Step 4
after all the step, then you will do

```
yarn
```

this will ensure all dependencies are installed, also make sure its the same version of packages with yarn.lock file

### Step 5
You almost there! now do

```
yarn start:dev
```

## Deployment
check out [nextjs](https://github.com/zeit/next.js/) github repo for deployment also the secrets(aka api_key) that needs to be create in your now account and replace now.json from this existing repo, or else in production .env will fail, and application will not be reading your api_key

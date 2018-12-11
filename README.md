# lerna-rocks starter-kit mono repo

## Requirements

- node 9+

## Setup

```shell
npm install
$(npm bin)/lerna bootstrap
```

## Running
```shell
npm start
```

## What NOT to do

```shell
npm install
cd apps/app-1
npm install # you shouldn't have to go further than this to figure out why

# but just incase...
cd ../..apps/app-1
npm install

cd ../..
npm start
```

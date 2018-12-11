# lerna-rocks mono repo

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
$(npm bin)/lerna bootstrap
cd apps/app-1
npm install is-sorted --save

cd ../../apps/app-1
npm install in-array --save

cd ../..
npm start

# Let me know, once you've done this, and understand
```

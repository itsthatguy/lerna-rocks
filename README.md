# lerna-rocks mono repo

## Requirements

- node 9+
- clone this repo


## What NOT to do

```shell
npm install
$(npm bin)/lerna clean
cd apps/app-1
npm install is-sorted --save

# This `npm install` should be all the further you need to go
npm install

#  but just incase...
cd ../..
npm start

# still doesn't work
# here's how to fix it
$(npm bin)/lerna bootstrap
npm start

# Let me know, once you've done this, and understand
```


## Setup

```shell
npm install
$(npm bin)/lerna bootstrap
```

## Running
```shell
npm start
```

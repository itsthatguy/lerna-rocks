# lerna-rocks mono repo

## Requirements

- node 9+
- clone this repo


## Do the following steps (to learn what not to do)

```shell
npm install
$(npm bin)/lerna clean
cd apps/app-1
# This next command should explain why not to use `npm install` in app directories
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

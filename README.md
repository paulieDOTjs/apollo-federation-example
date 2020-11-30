# apollo-federation

## What do?

The most basic implementation of Apollo Federation that I could think of to demonstrate what it does. This repo is 2 services one for "hello" and one for "goodbye" and a gateway that merges them. After starting all 3 you can navigate to localhost:4000/graphql and use either service or both at the same time. Apollo Federation can take as many services as you'd like and combine it to one single schema, feel free to use this as a template for making an actual GOOD app with this.

## How do?

```
yarn install
```
When that finishes
```
yarn install-all
```
When that finishes
```
yarn start:s
```
When that finishes
```
yarn start:g
```


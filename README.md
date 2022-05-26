## Shop

## Installing

> Steps to run application in the DEV environment:

1. `yarn` - install all required packages
2. copy `.env.example.local` to the root and create `.env.local` file
3. `yarn dev` - run local server

> Steps to run application in PROD environment:

1. 1 & 2 steps from the steps above, if not already used
2. `yarn build` - builds the project
3. `yarn start` - start prod environment

> Additional Scripts

1. `type-check` - run the type checking process
2. `format` - run prettier for your current changes
3. `lint` - run lint check

## Deployment

Every merge request which merged to `Staging` or `Prod` branches runs the deployment process to corresponding live
environment

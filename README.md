
# The Front End of the IEDC-WEB

The react app is dockerized.
## Setup docker image
Run this just once for setting up the docker image. (or when the docker configuration changes)

`docker build -t iedc-web-frontend .`

## Start docker container
To see the app in action

` docker run iedc-web-frontend`

PS: the website port is 3000.

## For devlepment
### Install devDependencies

`npm install --only=dev`

### Prettify code

`./node_modules/.bin/prettier --write <filenames>`

example

`./node_modules/.bin/prettier --write src/components/*`

### Run linter

`./node_modules/.bin/elint --fix <filenames>`

example

`./node_modules/.bin/eslint --fix src/components/*`


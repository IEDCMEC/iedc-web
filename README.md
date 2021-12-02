
# The Front End of the IEDC-WEB

### We request you if you are about to contribute, write clean and well documented code and also we expect you to follow undermentioned commit message format:

    Build: A new feature or Feat: A new feature.
    Fix: A bug fix.
    Docs: Documentation only changes.
    Style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
    Refactor: A code change that neither fixes a bug nor adds a feature.
    Perf: A code change that improves performance.
    Test: Adding missing tests.
    Chore: Changes to the build process or auxiliary tools and libraries such as documentation generation.

### For Example:-

    git commit -m "Feat: Added UI component to add file" or git commit -m "Feat: Added UI component to add file",
    git commit -m "Fix: Bug in SomeView was fixed",
    etc.
    
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


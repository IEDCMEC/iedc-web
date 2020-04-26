FROM node:13.10.1-alpine

WORKDIR /app/

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/

RUN npm install
RUN npm install react-scripts@3.4.0 -g --silent

COPY src /app/src
COPY public /app/public

COPY . ./

CMD ["npm", "start"]
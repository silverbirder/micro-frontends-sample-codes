FROM node:14.16.0-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 5000

CMD node serve.js
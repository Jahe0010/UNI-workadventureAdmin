FROM node:alpine3.16

WORKDIR /usr/src/backend
COPY . /usr/src/backend/

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
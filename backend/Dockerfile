FROM node:alpine3.16

# create workdir and copy package.json
WORKDIR /usr/src/backend
COPY package*.json /usr/src/backend/

# Install and make production ready
RUN npm install
RUN npm ci --only=production

# bundle source code
COPY . .

# expose port and start
EXPOSE 8080
CMD [ "node", "index.js" ]
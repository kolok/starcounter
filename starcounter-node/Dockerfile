FROM node:8.11.3-jessie

WORKDIR /app

COPY . /app
RUN rm -rf /app/node_modules
RUN npm install -g nodemon
RUN npm install

CMD nodemon ./bin/www


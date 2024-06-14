FROM node:18
COPY . /MovieAPI
WORKDIR /MovieAPI
RUN npm install
CMD [ "npm", "start" ]
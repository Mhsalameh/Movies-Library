FROM node:16
WORKDIR /Movies-Library
COPY package*.json .
RUN npm install
COPY . .
CMD ["node","server.js"]
EXPOSE 3000
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# copy all files 
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]

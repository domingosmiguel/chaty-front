FROM node

WORKDIR /next

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

RUN rm -rf tsconfig.json app components context hooks nginx services

EXPOSE 3000

CMD ["npm", "start"]
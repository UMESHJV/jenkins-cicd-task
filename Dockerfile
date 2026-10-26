FROM node:24-alpine

WORKDIR /app

COPY package.json app.js app.test.js ./

EXPOSE 3000

CMD ["npm", "start"]

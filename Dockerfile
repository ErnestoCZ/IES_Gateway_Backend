FROM node:20.11.0 as BUILD

WORKDIR /app

COPY . . 

RUN npm install && npx tsc -p ./tsconfig.json



FROM node:20.11.0

WORKDIR /app

COPY package.json .
RUN npm install --save
COPY --from=Build /app/dist dist

EXPOSE 3000

CMD [ "node", "./dist/app.js" ]
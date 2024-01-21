import express from 'express';
import { createPool, createConnection } from 'mariadb';

var connection;

const mariadb = createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: 'my-secret-pw',
})
   .then((conn) => {
      console.log('connection successfull');
      console.log(conn);
      connection = conn;
   })
   .catch((conn) => {
      console.log('connection failed');
      console.log(conn);
   });

const port: number = 3000;

const app = express();

app.listen(port);

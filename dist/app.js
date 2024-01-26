"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const IESGateway_1 = __importDefault(require("./routes/IESGateway"));
//Connection to mariaDB
// const pool = mariadb.createPool({
//    host: 'localhost',
//    port: 3306,
//    user: 'root',
//    password: 'IESGateway',
//    connectionLimit: 5,
//    timeout: 5,
//    database: 'SensorData',
// });
// pool
//    .getConnection()
//    .then((conn) => {
//       conn
//          .query('SELECT * FROM SensorData')
//          .then((rows) => {
//             console.log(rows); //[ {val: 1}, meta: ... ]
//             //Table must have been created before
//             // " CREATE TABLE myTable (id int, val varchar(255)) "
//             return conn.query('INSERT INTO myTable value (?, ?)', [
//                1,
//                'mariadb',
//             ]);
//          })
//          .then((res) => {
//             console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//             conn.end();
//          })
//          .catch((err) => {
//             //handle error
//             console.log(err);
//             conn.end();
//          });
//    })
//    .catch((err) => {
//       //not connected
//    });
// async function asyncFunction() {
//    let conn;
//    try {
//       conn = await pool.getConnection();
//       console.log(conn);
//       const rows = await conn.query('SELECT 1 as val');
//       console.log(rows); //[ {val: 1}, meta: ... ]
//       const res = await conn.query('INSERT INTO myTable value (?, ?)', [
//          1,
//          'mariadb',
//       ]);
//       console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//    } catch (err) {
//       throw err;
//    } finally {
//       if (conn) return conn.end();
//    }
// }
// asyncFunction();
//Config Express
const port = 3000;
const app = (0, express_1.default)();
//Adding Middleware for Express
app.use((0, body_parser_1.json)());
app.use('/IESGateway', IESGateway_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log('Server started!');
});

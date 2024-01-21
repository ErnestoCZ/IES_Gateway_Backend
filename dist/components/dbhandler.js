"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mariadb_1 = require("mariadb");
const mariadb = (0, mariadb_1.createConnection)({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'my-secret-pw',
}).then((conn) => {
    console.log('connection successfull');
});

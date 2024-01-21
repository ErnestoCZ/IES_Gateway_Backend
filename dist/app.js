"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mariadb_1 = require("mariadb");
var connection;
const mariadb = (0, mariadb_1.createConnection)({
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
const port = 3000;
const app = (0, express_1.default)();
app.listen(port);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const IESGateway_1 = __importDefault(require("./routes/IESGateway"));
//Config Express
const port = 3001;
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

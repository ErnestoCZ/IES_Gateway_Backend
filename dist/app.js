"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initORM = exports.sequelize = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const sequelize_1 = require("sequelize");
const IESGateway_1 = __importDefault(require("./routes/IESGateway"));
const process_1 = require("process");
const SensorDataModel_1 = require("./models/SensorDataModel");
const tableToConnect = "TestData";
const initORM = async (tableName, user, password) => {
    exports.sequelize = new sequelize_1.Sequelize(tableName, user, password, {
        host: "localhost",
        dialect: "mariadb",
    });
    try {
        console.log("authentification...");
        await exports.sequelize.authenticate();
        console.log("Authenthification completed");
    }
    catch (error) {
        console.error("Fail on authentification to Database!");
        (0, process_1.exit)();
    }
    //Init models to sequelize
    exports.sequelize.define("SensorData", SensorDataModel_1.SensorDataModel, {
        freezeTableName: true,
    });
    await exports.sequelize.sync({ alter: true });
};
exports.initORM = initORM;
//Config Express
const port = 3000;
const app = (0, express_1.default)();
//Adding Middleware for Express
app.use((0, body_parser_1.json)());
app.use("/IESGateway", IESGateway_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, async () => {
    console.log("Server started! on port: " + port.toString());
    await (0, exports.initORM)("IESGateway", "root", "IESGateway");
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorDataModel = void 0;
const sequelize_1 = require("sequelize");
exports.SensorDataModel = {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    Timestamp: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    MAC: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ForceX: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    ForceY: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    ForceZ: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    Temperature: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    testAttr: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
};

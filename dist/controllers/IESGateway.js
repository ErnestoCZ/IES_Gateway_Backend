"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.storeData = void 0;
const IESSensorData_1 = require("../models/IESSensorData");
const dummy = new IESSensorData_1.SensorData("Device1", 123, "MAC123", 15, 1, 16, 25);
const storeData = (req, res, next) => {
    const text = req.body;
    console.log(text);
    res.status(200).json({ response: "request successful!", message: text });
};
exports.storeData = storeData;
const fetchData = (req, res, next) => {
    const text = req.body.Device;
    if (text === "Device1") {
        res.status(200).json({ dummy });
    }
    else {
        res.status(200).json({ Device: "unknown" });
    }
};
exports.fetchData = fetchData;

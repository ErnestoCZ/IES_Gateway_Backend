"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorData = void 0;
class SensorData {
    constructor(Device, time, MAC, XForce, YForce, ZForce, temperature) {
        this.Device = Device;
        this.time = time;
        this.MAC = MAC;
        this.XForce = XForce;
        this.YForce = YForce;
        this.ZForce = ZForce;
        this.temperature = temperature;
    }
}
exports.SensorData = SensorData;

import {
  Boolean,
  Number,
  String,
  Literal,
  Array,
  Tuple,
  Record,
  Union,
} from "runtypes";
import { ARRAY } from "sequelize";

//TODO: modify Structure to be able to send more SensorData at once
export const insertSensorDataStructure = Record({
  Device: String,
  Timestamp: Number,
  MAC: String,
  ForceX: Number,
  ForceY: Number,
  ForceZ: Number,
  Temperature: Number,
});

export const fetchSensorDataStructure = Record({
  Device: String,
});

export const deleteSensorDataStucture = Record({
  Device: String,
  MAC: String,
});
//TODO Structure to update target fields
const updateSensorDataStructure = Record({
  Device: String,
  Timestamp: Number,
  MAC: String,
  ForceX: Number,
  ForceY: Number,
  ForceZ: Number,
  Temperature: Number,
});
export const SensorDataObject = Union(
  insertSensorDataStructure,
  fetchSensorDataStructure,
  deleteSensorDataStucture,
  updateSensorDataStructure
);

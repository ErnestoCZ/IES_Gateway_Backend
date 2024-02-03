import { RequestHandler, response } from "express";
import { SensorData } from "../models/IESSensorData";
import {
  SensorDataObject,
  deleteSensorDataStucture,
  fetchSensorDataStructure,
  insertSensorDataStructure,
} from "../models/RunTypeModels";
import { sequelize } from "../app";
import { json } from "body-parser";

const dummy = new SensorData("Device1", 123, "MAC123", 15, 1, 16, 25);

export const storeData: RequestHandler = async (req, res, next) => {
  const newDBEntryRequest = req.body;
  try {
    SensorDataObject.check(newDBEntryRequest);
  } catch (error) {
    res.status(400).json({ response: error });
    return;
  }
  try {
    //Try to store Data in DB
    await sequelize.models.SensorData.create(newDBEntryRequest);
    res.status(200).json({
      response: "OK",
      message: `Data stored in DB ${sequelize.getDatabaseName()}`,
    });
  } catch (error) {
    res.status(400).json({
      response: "Bad Request",
      message: `Request to store data in ${sequelize.getDatabaseName()} Database failed! + ${error}`,
      DBStatus: `${sequelize.connectionManager.getConnection}`,
    });
  }
};

export const fetchData: RequestHandler = async (req, res, next) => {
  const newDBEntryRequest = req.body;

  try {
    SensorDataObject.check(req.body);
  } catch (error) {
    res.status(400).json({ response: error });
    return;
  }

  try {
    const response = await sequelize.models.SensorData.findAll({
      where: { Device: `${newDBEntryRequest.Device}` },
    });

    res
      .status(200)
      .json({ response: response, message: `Fetching Data successful` });
  } catch (error) {
    res.status(204).json({ response: "", message: "Fetching Data failed!" });
  }
};

export const deleteData: RequestHandler = async (req, res, next) => {
  const newDBEntryRequest = req.body;

  try {
    deleteSensorDataStucture.check(newDBEntryRequest);
  } catch (error) {
    res.status(400).json({ response: error });
    return;
  }

  try {
    const foundDBEntries = await sequelize.models.SensorData.destroy({
      where: { Device: newDBEntryRequest.Device, MAC: newDBEntryRequest.MAC },
    });

    res.status(200).json({
      response: "",
      message: `${foundDBEntries} ${
        newDBEntryRequest.Device
      } entries has been succesful removed from ${sequelize.getDatabaseName()} Database`,
    });
  } catch (error) {
    res.status(204).json({ response: error });
  }
};

export const updateData: RequestHandler = async (req, res, next) => {
  const updateSensorDataRequest = req.body;

  try {
    SensorDataObject.check(updateSensorDataRequest);
  } catch (error) {
    res.status(400).json({ response: error });
    return;
  }

  try {
    const foundDBEntry = await sequelize.models.SensorData.findOne({
      where: updateSensorDataRequest,
    });
  } catch (error) {}
};

//TODO function for runtype checks : code refactoring
// const runtypeCheck = (runtype: any, req: Request, res: Response) => {
//   try {
//     SensorDataObject.check(req.body);
//   } catch (error) {
//     res.status(400).json({ response: error });
//     return;
//   }
// };

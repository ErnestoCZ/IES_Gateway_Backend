import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import { Sequelize } from "sequelize";
import IESDBRoutes from "./routes/IESGateway";
import { exit } from "process";
import { SensorDataModel } from "./models/SensorDataModel";
export let sequelize: Sequelize;
const tableToConnect = "TestData";

export const initORM = async (
  DBName: string,
  user: string,
  password: string
) => {
  sequelize = new Sequelize(DBName, user, password, {
    host: "localhost",
    dialect: "mariadb",
  });

  try {
    console.log("authentification...");
    await sequelize.authenticate();
    console.log("Authenthification completed");
  } catch (error) {
    console.error("Fail on authentification to Database!");
    exit();
  }
  //Init models to sequelize
  sequelize.define("SensorData", SensorDataModel, {
    freezeTableName: true,
  });

  await sequelize.sync({ alter: true });
};

//Config Express
const port: number = 3000;
const app = express();

//Adding Middleware for Express
app.use(json());
app.use("/IESGateway", IESDBRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, async () => {
  console.log("Server started! on port: " + port.toString());

  await initORM("IESGateway", "root", "IESGateway");

  try {
    const Ernest = await sequelize.models.SensorData.create({
      Timestamp: 1234,
      MAC: "MAC1",
      ForceX: 34.2,
      ForceY: 32.1,
      ForceZ: 47,
      Temperature: 26,
    });
    console.log("Data has been succesfull saved");
  } catch (error) {
    console.log("Data has not been succesfull saved!");
  }
});

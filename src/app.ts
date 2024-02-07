import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import { Sequelize, ValidationError, ConnectionError } from "sequelize";
import IESDBRoutes from "./routes/IESGateway";
import { exit } from "process";
import { SensorDataModel } from "./models/SensorDataModel";
export let sequelize: Sequelize;
const tableToConnect = "TestData";

export async function createDatabase(dbname: string) {
  let res;

  try {
    res = await sequelize.getQueryInterface().createDatabase(dbname);
    console.log("");
  } catch (error) {
    console.log(error);
  }
}

export const initORM = async (
  DBName: string,
  user: string,
  password: string
) => {
  sequelize = new Sequelize(DBName, user, password, {
    host: "localhost",
    dialect: "mariadb",
  });

  //TODO create a database with @DBName if not existing
  try {
    console.log("authentification...");
    console.log(sequelize.getQueryInterface().databaseVersion());
    await sequelize.authenticate();
    console.log("Authenthification completed");
  } catch (error) {
    if (error instanceof ConnectionError) {
      console.log(error.message.toString());
      await createDatabase(DBName);
      console.log("");
    } else {
      console.error("Fail on authentification to Database!");
      exit();
    }
  }
  //Init models to sequelize
  sequelize.define("SensorData", SensorDataModel, {
    freezeTableName: true,
    timestamps: true,
  });

  //TODO Update DB using Migration
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
});

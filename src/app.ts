import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import mariadb from "mariadb";

import IESDBRoutes from "./routes/IESGateway";

//Config Express
const port: number = 3000;
const app = express();

//Adding Middleware for Express
app.use(json());
app.use("/IESGateway", IESDBRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log("Server started! on port: " + port.toString());
});

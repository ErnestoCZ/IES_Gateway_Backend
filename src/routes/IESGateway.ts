import { Router } from "express";
import { fetchData, storeData } from "../controllers/IESGateway";
import { sequelize } from "../app";
const router = Router();

router.post("/", storeData);
router.get("/", fetchData);

export default router;

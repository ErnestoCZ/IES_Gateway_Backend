import { Router } from "express";
import { deleteData, fetchData, storeData } from "../controllers/IESGateway";
import { sequelize } from "../app";
const router = Router();

router.post("/", storeData);
router.get("/", fetchData);
router.delete("/", deleteData);
//TODO put route to changedata
// router.put("/", )

export default router;

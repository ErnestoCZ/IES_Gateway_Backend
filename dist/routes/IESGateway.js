"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IESGateway_1 = require("../controllers/IESGateway");
const router = (0, express_1.Router)();
router.post("/", IESGateway_1.storeData);
router.get("/", IESGateway_1.fetchData);
exports.default = router;

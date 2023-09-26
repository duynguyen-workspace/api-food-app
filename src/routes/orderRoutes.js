//? ORDER APIs

import express from "express";
import { addOrder } from "../controllers/orderController.js";
const orderRoute = express.Router()

//TODO: CREATE NEW ORDER
orderRoute.post("/addOrder", addOrder)

export default orderRoute
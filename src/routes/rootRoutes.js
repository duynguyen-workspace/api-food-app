//? ROUTER CONTROLLER

import express from "express";
import orderRoute from "./orderRoutes.js";
import restaurantRoute from "./restaurantRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/orders", orderRoute)
rootRoute.use("/restaurants", restaurantRoute)

export default rootRoute;
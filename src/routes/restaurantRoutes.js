//? RESTAURANT APIs

import express from "express";
import { getLikeRestaurant, getLikeRestaurantByUser, getLikeRestaurantByRes, addLikeRestaurant, deleteLikeRestaurant, getRateRestaurant, getRateRestaurantByRes, getRateRestaurantByUser, addRateRestaurant } from "../controllers/restaurantController.js";
const restaurantRoute = express.Router()

//* like_res GET API
restaurantRoute.get("/getLikeRes", getLikeRestaurant)
restaurantRoute.get("/getLikeResByUser/:userID", getLikeRestaurantByUser)
restaurantRoute.get("/getLikeResByRes/:resID", getLikeRestaurantByRes)

//TODO: CREATE LIKE
restaurantRoute.post("/addLikeRes", addLikeRestaurant)

//! DELETE LIKE
restaurantRoute.delete("/deleteLikeRes/:userID/:resID", deleteLikeRestaurant)

//* rate_res api
restaurantRoute.get("/getRateRes", getRateRestaurant)
restaurantRoute.get("/getRateResByUser/:userID", getRateRestaurantByUser)
restaurantRoute.get("/getRateResByRes/:resID", getRateRestaurantByRes)

//TODO: CREATE RATING
restaurantRoute.post("/addRateRes", addRateRestaurant)

export default restaurantRoute;
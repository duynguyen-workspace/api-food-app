import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

//TODO: LIKE_RES CALLBACK FUNCTIONS
const getLikeRestaurant = async (req, res) => {
    // SELECT * FROM like_res
    let data = await model.like_res.findAll({
        include: ["res", "user"]
    });


    res.send(data);
}

const getLikeRestaurantByUser = async (req, res) => {
    let {userID} = req.params;

    // 
    let data = await model.like_res.findAll({
        where: {
            user_id: userID
        }
    });

    res.send(data);
}

const getLikeRestaurantByRes = async (req, res) => {
    let {resID} = req.params;

    // 
    let data = await model.like_res.findAll({
        where: {
            res_id: resID
        }
    });

    res.send(data);
}

const addLikeRestaurant = async (req, res) => {
    const userID = parseInt(req.body.user_id);
    const resID = parseInt(req.body.res_id);

    // 
    const newLikeRes = await model.like_res.create({
        user_id: userID,
        res_id: resID,
        date_like: Date.now()
    });

    res.status(201).json(newLikeRes);
}

const deleteLikeRestaurant = async (req, res) => {
    let {userID, resID} = req.params;

    // 
    await model.like_res.destroy({
        where: {
            user_id: userID,
            res_id: resID
        }
    })

    res.status(200).send("Delete successfully");
}

//TODO: RATE_RES CALLBACK FUNCTIONS
const getRateRestaurant = async (req, res) => {
    // 
    let data = await model.rate_res.findAll({
        include: ["res", "user"]
    });


    res.send(data);
}

const getRateRestaurantByUser = async (req, res) => {
    let {userID} = req.params;

    // 
    let data = await model.rate_res.findAll({
        where: {
            user_id: userID
        }
    });

    res.send(data);
}

const getRateRestaurantByRes = async (req, res) => {
    let {resID} = req.params;

    // 
    let data = await model.rate_res.findAll({
        where: {
            res_id: resID
        }
    });

    res.send(data);
}

const addRateRestaurant = async (req, res) => {
    const userID = parseInt(req.body.user_id);
    const resID = parseInt(req.body.res_id);
    const ratingAmount = parseInt(req.body.amount);

    // 
    const newRateRes = await model.rate_res.create({
        user_id: userID,
        res_id: resID,
        amount: ratingAmount,
        date_rate: Date.now()
    });

    res.status(201).json(newRateRes);
}


export {getLikeRestaurant, getLikeRestaurantByUser, getLikeRestaurantByRes, addLikeRestaurant, deleteLikeRestaurant, getRateRestaurant, getRateRestaurantByRes, getRateRestaurantByUser, addRateRestaurant}


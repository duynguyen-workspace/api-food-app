import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

//TODO: LIKE_RES CALLBACK FUNCTIONS

/**
 ** Get all like info
 * @param {*} req 
 * @param {*} res 
 */
const getLikeRestaurant = async (req, res) => {
    //* SELECT * FROM like_res
    let data = await model.like_res.findAll({
        include: ["res", "user"]
    });

    res.send(data);
}

/**
 ** Get like info by user_id
 * @param {*} req 
 * @param {*} res 
 */
const getLikeRestaurantByUser = async (req, res) => {
    let {userID} = req.params;

    //* SELECT * FROM like_res WHERE user_id = ...
    let data = await model.like_res.findAll({
        where: {
            user_id: userID
        }
    });

    res.send(data);
}

/**
 ** Get like info by restaurant id
 * @param {*} req 
 * @param {*} res 
 */
const getLikeRestaurantByRes = async (req, res) => {
    let {resID} = req.params;

    //* SELECT * FROM like_res WHERE res_id = ...
    let data = await model.like_res.findAll({
        where: {
            res_id: resID
        }
    });

    res.send(data);
}

/**
 ** Create like info
 * @param {*} req 
 * @param {*} res 
 */
const addLikeRestaurant = async (req, res) => {
    const userID = parseInt(req.body.user_id);
    const resID = parseInt(req.body.res_id);

    //* create like_res data
    const newLikeRes = await model.like_res.create({
        user_id: userID,
        res_id: resID,
        date_like: Date.now()
    });

    res.status(201).json(newLikeRes);
}

/**
 ** Delete like info
 * @param {*} req 
 * @param {*} res 
 */
const deleteLikeRestaurant = async (req, res) => {
    let {userID, resID} = req.params;

    //! delete like_res data
    await model.like_res.destroy({
        where: {
            user_id: userID,
            res_id: resID
        }
    })

    res.status(200).send("Delete successfully");
}

//TODO: RATE_RES CALLBACK FUNCTIONS

/**
 ** Get all rating info
 * @param {*} req 
 * @param {*} res 
 */
const getRateRestaurant = async (req, res) => {
    // 
    let data = await model.rate_res.findAll({
        include: ["res", "user"]
    });


    res.send(data);
}

/**
 ** Get rating info by user_id
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 ** Get rating info by restaurant id
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 ** Create rating info
 * @param {*} req 
 * @param {*} res 
 */
const addRateRestaurant = async (req, res) => {
    const userID = parseInt(req.body.user_id);
    const resID = parseInt(req.body.res_id);
    const ratingAmount = parseInt(req.body.amount);

    //? ALTERNATE
    //? const { user_id, res_id, amount } = req.body

    //* create rating info
    const newRateRes = await model.rate_res.create({
        user_id: userID,
        res_id: resID,
        amount: ratingAmount,
        date_rate: Date.now()
    });

    res.status(201).json(newRateRes);
}


export {getLikeRestaurant, getLikeRestaurantByUser, getLikeRestaurantByRes, addLikeRestaurant, deleteLikeRestaurant, getRateRestaurant, getRateRestaurantByRes, getRateRestaurantByUser, addRateRestaurant}


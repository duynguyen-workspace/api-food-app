import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

//TODO: ORDER CALLBACK FUNCTIONS

/**
 ** Create new order info
 * @param {*} req 
 * @param {*} res 
 */
const addOrder = async (req, res) => {
    // const userID = parseInt(req.body.user_id)
    // const foodID = parseInt(req.body.food_id)
    // const orderAmount = parseInt(req.body.amount)
    // const orderCode = req.body.order_code
    // const arrSubID = parseInt(req.body.arr_sub_id)

    const { user_id, food_id, amount, order_code, arr_sub_id } = req.body

    // 
    const newOrder = await model.orders.create({
        user_id: parseInt(user_id), 
        food_id: parseInt(food_id),
        amount: parseInt(amount),
        order_code: order_code,
        arrSubID: parseFloat(arr_sub_id)
    });

    res.status(201).json({msg: "Add order successfully!", order: newOrder})
}

export {addOrder}
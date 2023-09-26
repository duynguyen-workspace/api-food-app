import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const addOrder = async (req, res) => {
    const userID = parseInt(req.body.user_id)
    const foodID = parseInt(req.body.food_id)
    const orderAmount = parseInt(req.body.amount)
    const orderCode = req.body.order_code
    const arrSubID = parseInt(req.body.arr_sub_id)

    // 
    const newOrder = await model.orders.create({
        user_id: parseInt(userID), 
        food_id: parseInt(foodID),
        amount: parseInt(orderAmount),
        order_code: orderCode,
        arrSubID: parseFloat(arrSubID)
    });

    res.status(201).json({msg: "Add order successfully!", order: newOrder})
}

export {addOrder}
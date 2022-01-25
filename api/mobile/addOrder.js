const OrderModel = require("../../models/Order");
const addOrder = async (req, res) => {
  try {
    const { products } = req.body;
    const user = req.user;

    //Validations
    if (!products) {
      return res.json({ status: false, message: "products are required" });
    }

    //Add to DB
    const savedProduct = await ProductModel.create({
      userId: user.userId,
      products,
    });

    //send success
    return res.json({
      status: true,
      message: "product successfully addedd :D",
      data: savedProduct,
    });
  } catch (e) {
    console.log(`Error in adding product ->${e}`);
  }
};

module.exports = addOrder;

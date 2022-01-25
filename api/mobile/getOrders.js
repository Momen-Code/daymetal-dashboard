const OrderModel = require("../../models/Order");

const getOrders = async (req, res) => {
  try {
    const user = req.user;
    const orders = await OrderModel.find({ userId: user.userId })
      .sort({ _id: -1 })
      .lean();

    if (orders.length == 0)
      return res.json({
        status: false,
        message: "No orders found",
      });

    return res.json({
      status: true,
      message: "Orders sent successfully",
      data: {
        orders,
      },
    });
  } catch (e) {
    console.log(`Error in GET /api/mobile/orders: ${e.message}`, e);
    return res.json({
      status: false,
      message: "حدث خطأ ما ، يرجي الرجوع للمطور",
    });
  }
};

module.exports = getOrders;

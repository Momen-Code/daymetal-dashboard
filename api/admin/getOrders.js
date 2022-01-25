const OrderModel = require("../../models/Order");

const getOrders = async (req, res) => {
  try {
    const { status } = req.query;

    const orders = await OrderModel.find({
      ...(paginationToken && {
        _id: {
          $gt: paginationToken,
        },
      }),
      ...(status && {
        status: {
          $regex: ".*" + status + ".*",
        },
      }),
    })
      .populate("User")
      .limit(10);

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
    console.log(`Error in GET /api/admin/orders: ${e.message}`, e);
    return res.json({
      status: false,
      message: "حدث خطأ ما ، يرجي الرجوع للمطور",
    });
  }
};

module.exports = getOrders;

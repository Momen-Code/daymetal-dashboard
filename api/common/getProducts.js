const ProductModel = require("../../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({}).sort({ _id: -1 }).lean();

    if (products.length == 0)
      return res.json({
        status: false,
        message: "No products found",
      });

    return res.json({
      status: true,
      message: "products sent successfully",
      data: {
        products,
      },
    });
  } catch (e) {
    console.log(`Error in GET /api/common/products: ${e.message}`, e);
    return res.json({
      status: false,
      message: "حدث خطأ ما ، يرجي الرجوع للمطور",
    });
  }
};

module.exports = getProducts;

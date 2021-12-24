const express = require("express");
const ProductModel = require("../../models/product");
const router = express.Router();

const addProduct =  async (req, res) => {

    try {
        const { name, price, measurment_unit, category, colors, sizes } = req.body;

        //Validations
        if (!name) {
            return res.json({ status: false, message: "name is required" });
        }
        if (!price) {
            return res.json({ status: false, message: "price is required" });
        }
        if (!measurment_unit) {
            return res.json({ status: false, message: "measurment_unit is required" });
        }
        if (!category) {
            return res.json({ status: false, message: "category is required" });
        }
        if (!colors) {
            return res.json({ status: false, message: "colors is required" });
        }
        if (!sizes) {
            return res.json({ status: false, message: "sizes is required" });
        }

        //Add to DB
        const savedProduct = await ProductModel.create({ name, price, measurment_unit, category, colors, sizes });


        //send success
        return res.json({ status: true, message: "product successfully addedd :D", data: savedProduct });
    }
    catch (e) {
        console.log(`Error in adding product ->${e}`);
    }
}



module.exports = addProduct;
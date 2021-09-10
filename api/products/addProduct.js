const express = require("express");
const ProductModel = require("../../models/product");
const router = express.Router();

router.post("/", async (req, res) => {


    //   const product = new Product({
    //       name: req.body.name,
    //       price: req.body.price,
    //       measurment_unit: req.body.measurment_unit,
    //       category: req.body.category,
    //       colors: req.body.colors,
    //       sizes: req.body.sizes

    //   });

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
})



module.exports = router;

//router.get("/",  (req,res,next) => {
//     Product.find()
//     .then(result=>{
//         res.status(200).json({
//             prooductData:result
//         })
//     })
//     .catch(e=>{
//         console.log(e);
//         res.status(400).json({
//             error:e
//         })
//     })
// })
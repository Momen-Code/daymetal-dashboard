const UserModel = require("../../models/User");

const editUser = async (req, res) => {
  try {
    const { _id, name, username, password, email, mobileNumber } = req.body;

    if (!_id) return res.json({ status: fasle, message: "_ must be entered" });
    if (!name)
      return res.json({ status: fasle, message: "name must be entered" });
    if (!username)
      return res.json({ status: fasle, message: "username must be entered" });
    if (!password)
      return res.json({ status: fasle, message: "password must be entered" });
    if (!email)
      return res.json({ status: fasle, message: "email must be entered" });
    if (!mobileNumber)
      return res.json({
        status: fasle,
        message: "mobileNumber must be entered",
      });

    if (!(await UserModel.findById(_id).lean()))
      return res.json({
        status: false,
        message: "Id not found",
      });

    let SearchedUser = await UserModel.findOne({ _id, username });
    if (SearchedUser)
      return res.json({ status: false, message: "username is not available" });
    SearchedUser = await UserModel.findOne({ _id, email });
    if (SearchedUser)
      return res.json({ status: false, message: "email is not available" });

    //Update the user
    await UserModel.updateOne(
      {
        _id,
      },
      {
        name,
        username,
        password,
        email,
        mobileNumber,
      }
    );

    //Get the user again
    const userSearch = await UserModel.findById(_id).lean();

    return res.json({
      status: true,
      message: "User updated successfully",
      data: {
        user: userSearch,
      },
    });
  } catch (e) {
    console.log(`Error in POST /api/common/users: ${e.message}`, e);
    return res.json({
      status: false,
      message: "حدث خطأ ما ، يرجي الرجوع للمطور",
    });
  }
};

module.exports = editUser;

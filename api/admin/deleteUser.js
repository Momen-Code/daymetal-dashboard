const UserModel = require("../../models/User");

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.query;

    let deletedUser;
    if (!_id)
      return res.json({
        status: false,
        message: "Please send the id of the user",
      });

    //Search for number
    const searchUser = await UserModel.findOne({
      _id,
    });
    if (!searchUser)
      return res.json({
        status: false,
        message: "Sorry, this user is not found",
      });

    //delete the number

    deletedUser = await UserModel.deleteOne({
      _id: _id,
    });

    return res.json({
      status: true,
      message: "User has been deleted successfully",
      data: {
        number: deletedUser,
      },
    });
  } catch (e) {
    console.log(`Error in POST /api/admin/users: ${e.message}`, e);
    return res.json({
      status: false,
      message: "حدث خطأ ما ، يرجي الرجوع للمطور",
    });
  }
};

module.exports = deleteUser;

const UserModel = require("../../models/User");

const getUsers = async (req, res) => {
  try {
    const { name, mobileNumber, paginationToken } = req.query;

    const users = await UserModel.find({
      ...(paginationToken && {
        _id: {
          $gt: paginationToken,
        },
      }),
      ...(name && {
        name: {
          $regex: ".*" + name + ".*",
        },
      }),
      ...(mobileNumber && {
        mobileNumber: {
          $regex: ".*" + mobileNumber + ".*",
        },
      }),
    }).limit(10);

    if (users.length == 0)
      return res.json({
        status: false,
        message: "لا يوجد مستخدمين حاليا",
      });

    return res.json({
      status: true,
      message: "تم استرجاع البيانات بنجاح",
      data: {
        users,
      },
    });
  } catch (e) {
    console.log(`Error in GET /api/admin/users: ${e.message}`, e);
    return res.json({
      status: false,
      message: "حدث خطأ ما ، يرجي الرجوع للمطور",
    });
  }
};

module.exports = getUsers;

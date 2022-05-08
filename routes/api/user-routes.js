const router = require("express").Router();
const {
  getAllUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// /api/Users
router.route("/").get(getAllUsers).post(createUser);

// /api/Users/:id
router.route("/:id").get(getUserId).put(updateUser).delete(deleteUser);

module.exports = router;

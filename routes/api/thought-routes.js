const router = require("express").Router();
const {
  getThoughts,
  addThought,
  addReaction,
  deleteReaction,
  getThoughtById,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getThoughts).post(addThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;

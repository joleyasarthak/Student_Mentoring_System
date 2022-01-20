const express = require("express");
const router = express.Router();
const Auth = require("../middlewares/auth");
const Authorize = require("../middlewares/authorize");
const Role = require("../utils/roles");
const mentorController = require("../controllers/mentor.controller");

/** All Mentor routes are in this file
 *  For protected routes we are passing the Authorize middleware to check if the user
 *  is authorized to perform the operation/action.
 *
 *  **This will prevent other users of the system from penetrating into the mentor's dashboard
 */

// mentor login
router.post("/login", mentorController.mentorLoginHandler);

// mentor signup
router.post("/signup", mentorController.mentorSignupHandler);

// mentor dashboard
router.get("/dashboard", Auth, Authorize(Role.Mentor), mentorController.mentorDashboardHandler);

// reset password
router.post("/reset", mentorController.resetPassword);

// create a new post
router.post("/newPost", Auth, Authorize(Role.Mentor), mentorController.createNewPost);

// get all posts
router.get("/fetchAllPosts", Auth, Authorize(Role.Mentor), mentorController.fetchAllPosts);

//get all students of mentored
router.get("/getAllMentees", Auth, Authorize(Role.Mentor), mentorController.fetchAllMentees);

// get all semesters info of mentee
router.get(
    "/getSemesters/:id",
    Auth,
    Authorize(Role.Mentor),
    mentorController.fetchStudentSemesters
);

module.exports = router;

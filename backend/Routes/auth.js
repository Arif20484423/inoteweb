const express = require("express");
const User = require("../models/user");
const { check } = require("express-validator");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
router.post(
  "/createuser",
  [
    body("email", "InValid Email").isEmail(),
    body("password", "min length 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = "Invalid Email or password";
      return res.status(400).json({ success, errors: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      success = "User Already exists";
      console.log(user);
      return res
        .status(400)
        .json({ success, errors: "Soory a user already exists" });
    }
    var salt = await bcrypt.genSaltSync(10);
    var hash = await bcrypt.hashSync(req.body.password, salt);

    user = await User.create({
      password: hash,
      email: req.body.email,
    });
    var data = {
      user: {
        id: user.id,
      },
    };
    success = "user created";
    var token = jwt.sign(data, "Arifisagoodboy");
    console.log(token);
    res.json({ success, token });
  }
);
router.post(
  "/login",
  [body("email", "InValid Email").isEmail(), body("password").exists()],
  async (req, res) => {
    let success;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "PLease login with valid credentials" });
      }
      const passcomp = await bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (passcomp) {
        var data = {
          user: {
            id: user.id,
          },
        };
        var token = jwt.sign(data, "Arifisagoodboy");
        success = true;
        console.log(token);
        res.json({ success, token });
      } else {
        success = false;
        return res
          .status(400)
          .json({ success, error: "PLease login with valid credentials" });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id).select("-password");
    res.send(user);
  } catch (error) {
    res.status(400).send("GETUSER ERROR");
  }
});
module.exports = router;

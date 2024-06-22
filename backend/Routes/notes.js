const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/notes");
const router = express.Router();
const { body, validationResult } = require("express-validator");
router.get("/getnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});

router.post(
  "/addnote",
  fetchuser,
  body("title").exists(),
  body("desc").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, desc } = req.body;
    const note = await Notes.create({
      title,
      desc,
      user: req.user.id,
    });
    res.json(note);
  }
);
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  let newnote = {};
  const { title, desc } = req.body;
  if (title) {
    newnote.title = title;
  }
  if (desc) {
    newnote.desc = desc;
  }

  let note = await Notes.findOne({ _id: req.params.id });
  if (!note) {
    return res.status(400).send("Note not found");
  }
  console.log(note.user.toString);
  console.log(req.user.id);
  if (note.user.toString() !== req.user.id) {
    return res.status(400).send("wrong user is accesing");
  }
  let upnote = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newnote },
    { new: true }
  );
  upnote = await Notes.findById(req.params.id);
  res.json(upnote);
});
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  let newnote = {};

  let note = await Notes.findOne({ _id: req.params.id });
  if (!note) {
    return res.status(400).send("Note not found");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(400).send("wrong user is accesing");
  }
  let upnote = await Notes.findByIdAndDelete(req.params.id);
  res.json(upnote);
});
module.exports = router;

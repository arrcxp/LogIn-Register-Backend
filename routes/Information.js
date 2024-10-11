const express = require("express");
const router = express.Router();
const Information = require("../model/Information");

router.get("/", async (req, res, next) => {
  try {
    const getData = await Information.find();
    res.json(getData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getData = await Information.findById(id);
    res.json(getData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const postData = Information.create(req.body);
    res.json(postData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const putData = await Information.findByIdAndUpdate(id, req.body);
    res.json(putData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteData = await Information.findByIdAndDelete(id);
    res.json(deleteData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

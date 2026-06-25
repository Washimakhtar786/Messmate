const express = require("express");
const router = express.Router();

const Mess = require("../models/Mess");
const { Op } = require("sequelize");


// GET ALL + FILTERING + PAGINATION
router.get("/", async (req, res) => {

  try {

    const whereClause = {};

    if (req.query.location) {
      whereClause.location = req.query.location;
    }

    if (req.query.minPrice) {
      whereClause.price = {
        [Op.gte]: parseInt(req.query.minPrice)
      };
    }

    const messes = await Mess.findAll({
      where: whereClause,
      limit: parseInt(req.query.limit) || 10,
      offset: parseInt(req.query.offset) || 0
    });

    res.json(messes);

  } catch (err) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// GET BY ID
router.get("/:id", async (req, res) => {

  try {

    const mess = await Mess.findByPk(req.params.id);

    if (!mess) {
      return res.status(404).json({
        message: "Mess not found"
      });
    }

    res.json(mess);

  } catch (err) {

    res.status(400).json({
      message: "Invalid ID"
    });

  }

});


// CREATE NEW MESS
router.post("/", async (req, res) => {

  try {

    const { name, location, price } = req.body;

    const newMess = await Mess.create({
      name,
      location,
      price
    });

    res.status(201).json(newMess);

  } catch (err) {

    res.status(400).json({
      message: "Invalid Input",
      error: err.message
    });

  }

});


// UPDATE MESS
router.put("/:id", async (req, res) => {

  try {

    const mess = await Mess.findByPk(req.params.id);

    if (!mess) {
      return res.status(404).json({
        message: "Mess not found"
      });
    }

    const { name, location, price } = req.body;

    await mess.update({
      name,
      location,
      price
    });

    res.json({
      message: "Updated Successfully",
      mess
    });

  } catch (err) {

    res.status(400).json({
      message: "Invalid Input"
    });

  }

});


// DELETE MESS
router.delete("/:id", async (req, res) => {

  try {

    const mess = await Mess.findByPk(req.params.id);

    if (!mess) {
      return res.status(404).json({
        message: "Mess not found"
      });
    }

    await mess.destroy();

    res.json({
      message: "Mess deleted successfully"
    });

  } catch (err) {

    res.status(400).json({
      message: "Delete Failed"
    });

  }

});

module.exports = router;
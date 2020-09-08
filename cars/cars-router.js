const express = require("express");

//just like before, when we imported the db with the helper functions into the router
const db = require("../data/connection");

//create an instance of a router
const router = express.Router();

//set up routes
router.get("/", (req, res) => {
    db.select("*").from("car-dealer")
        .then(cars => {
            res.status(200).json({ data: cars });
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

router.get("/:id", (req, res) => {
    const carId = req.params.id;
    
    db.select("*").from("car-dealer")
        .where({ id: carId })
        .then(car => {
            res.status(200).json({ data: car });
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

router.post("/", (req, res) => {
    const carData = req.body;
    //validate carData here
    db("car-dealer")
        .insert(carData)
        .returning("id")
        .then(ids => {
            res.status(201).json({ data: ids });
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;
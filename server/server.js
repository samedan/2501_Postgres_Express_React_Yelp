require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

const app = express();

const port = process.env.PORT || 3005;

//Middleware
app.use(morgan("tiny"));
app.use(cors());
//Middleware
app.use(express.json());

// Database

// GET All Restaurants @/api/v1/restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    console.log("results");
    const results = await db.query("select * from restaurants;");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// GET One Restaurant @/api/v1/restaurants/:id
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    // Parameterized Query
    const results = await db.query("SELECT * FROM restaurants where id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {}
});

// POST Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// PUT Restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location=$2, price_range=$3 WHERE id = $4 RETURNING *  ;",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    console.log(results);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// DELETE restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants WHERE id = $1;", [
      req.params.id,
    ]);
    res.status(204).json({ status: "success" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running and listening on port: ${port}`);
});

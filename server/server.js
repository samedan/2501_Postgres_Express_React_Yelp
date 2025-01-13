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
    // console.log("results");
    // const results = await db.query("select * from restaurants;");
    const restaurantsRatingsData = await db.query(
      "SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id;"
    );
    console.log("restaurantsRatingsData", restaurantsRatingsData);
    res.status(200).json({
      status: "success",
      results: restaurantsRatingsData.rows.length,
      data: {
        restaurants: restaurantsRatingsData.rows,
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
    const restaurant = await db.query(
      "SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1;",
      [req.params.id]
    );
    // GET REview for Restaurant
    const reviews = await db.query(
      "SELECT * FROM reviews WHERE restaurant_id = $1",
      [req.params.id]
    );
    // console.log(reviews);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
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

// POST review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1,$2,$3,$4) RETURNING *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    res.status(201).json({
      status: "Success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running and listening on port: ${port}`);
});

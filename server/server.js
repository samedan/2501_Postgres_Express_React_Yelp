require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3005;

//Middleware
app.use(morgan("tiny"));

//Middleware
app.use(express.json());

// GET Restaurants @/api/v1/restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McD", "KFC"],
    },
  });
});
// GET One Restaurant @/api/v1/restaurants/:id
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "Xyz",
    },
  });
});

// POST Restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "Xyz",
    },
  });
});

// PUT Restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "Updated Xyz",
    },
  });
});

// DELETE restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({ status: "success" });
});

app.listen(port, () => {
  console.log(`Server is running and listening on port: ${port}`);
});

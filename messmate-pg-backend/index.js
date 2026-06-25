const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const Mess = require("./models/Mess");
const User = require("./models/User");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const messRoutes = require("./routes/messRoutes");
app.use("/messes", messRoutes);

const authRoutes =
require("./routes/auth");

app.use("/auth", authRoutes);

app.get("/profile", (req, res) => {
  res.json({
    username: "washim",
    email: "washim@gmail.com",
  });
});

const PORT = process.env.PORT || 4000;

// Environment Check
console.log("ENV CHECK:", {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  PASSWORD_SET: !!process.env.DB_PASSWORD,
});

// Database Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ PostgreSQL connected");

    return sequelize.sync();
  })
  .then(() => {
    console.log("✅ Models Synced");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Database Error:", err.message);
  });
const logger = require("./logger");

const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const sequelize = require("./config/db");
const Mess = require("./models/Mess");
const User = require("./models/User");

const errorHandler = require("./middleware/errorHandler");

const app = express();

/* ===========================
   Security Middleware
=========================== */

app.use(helmet());

/* ===========================
   General Middleware
=========================== */

app.use(cors());
app.use(express.json());

/* ===========================
   HTTP Request Logger
=========================== */

app.use(morgan("dev"));

/* ===========================
   Routes
=========================== */

const messRoutes = require("./routes/messRoutes");
app.use("/messes", messRoutes);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.get("/profile", (req, res) => {
  res.json({
    username: "washim",
    email: "washim@gmail.com",
  });
});



/* ===========================
   Global Error Handler
=========================== */

app.use(errorHandler);

/* ===========================
   Environment Check
=========================== */

logger.info("Checking Environment Variables...");

logger.info(
  JSON.stringify(
    {
      DB_NAME: process.env.DB_NAME,
      DB_USER: process.env.DB_USER,
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      PASSWORD_SET: !!process.env.DB_PASSWORD,
    },
    null,
    2
  )
);

/* ===========================
   Database Connection
=========================== */

const PORT = process.env.PORT || 4000;

sequelize
  .authenticate()
  .then(() => {

    logger.info("✅ PostgreSQL Connected");

    return sequelize.sync();

  })
  .then(() => {

    logger.info("✅ Models Synced");

    app.listen(PORT, () => {

      logger.info(
        `🚀 Server running on http://localhost:${PORT}`
      );

    });

  })
  .catch((err) => {

    logger.error(`❌ Database Error: ${err.message}`);

  });
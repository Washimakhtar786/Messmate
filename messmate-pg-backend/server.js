const limiter =
require("./middleware/rateLimiter");

const compression =
require("compression");

const mongoSanitize =
require("express-mongo-sanitize");

const xss =
require("xss-clean");

app.use(limiter);
app.use(compression());
app.use(mongoSanitize());

app.use(xss());
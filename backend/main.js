const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const activityRoute = require("./routes/activity_route");

//database import
require("./config/database");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("short"));
app.use(express.json());

app.use("/activity", activityRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

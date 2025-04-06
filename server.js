const express = require("express");
require("colors");
const config = require("./config/index");
const gadgetRoutes = require("./routes/gadgets.route");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
const { corsOptions } = require("./config/corsConfig");
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/errorHandlingMIddleware");
const { connectDB } = require("./connections/dbConnections");
const morgan = require("morgan");

const port = config.PORT;

const app = express();
connectDB();
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("combined"));

app.use("/gadget", gadgetRoutes);
app.use("/user", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, (error) => {
  if (!error) {
    console.log(`=================================`);
    console.log(`🚀 App listening on the port ${port}`);
    console.log(`available in:` + `http://localhost:${port}`.blue.underline);
    console.log(`=================================`);
  } else {
    console.error("========== Error Starting Server==============");
    console.error(error);
  }
});

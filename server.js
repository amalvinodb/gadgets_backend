const express = require("express");
require("colors");
const config = require("./config/index");
const gadgetRoutes = require("./routes/gadgets.route");
const { connectDB } = require("./connections/dbConnections");

const port = config.PORT;
const app = express();
connectDB()
app.use(express.json());

app.use("/api", gadgetRoutes);

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

const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/db");
const router = require("./routes/routes");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

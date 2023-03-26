const express = require("express");
const cors = require("cors");
const path = require("path");
const { PORT } = require("./config");

const app = express();

app.use(cors());

const routePayment = require("./routes/payment.routes");

console.log(PORT);

app.use("/api", routePayment);
app.use(express.static(path.join(__dirname)));
app.listen(PORT, () => {
  console.log(`generando dinero por--> http://localhost:${PORT}`);
});

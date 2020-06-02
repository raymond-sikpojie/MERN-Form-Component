const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Just Testing Things Out");
// });

// Define route
app.use(require("./routes/form"));

// Set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

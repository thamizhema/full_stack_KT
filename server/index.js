const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.get("/", (req, res) => {
  // res.send("API is Working");
  res.sendFile(path.join(__dirname, "..", "client", "build"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

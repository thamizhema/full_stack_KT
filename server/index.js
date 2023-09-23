const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("API is Working");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

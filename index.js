const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5013;

const submissions = [];
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("form");
});
app.post("/submit", (req, res) => {
  const { name, email, password, department, gender, agree, message } = req.body;
  
  if (!email.includes("@")) {
    return res.render("form", { error: "Invalid email format!" });
  }

  submissions.push({ name, email, password, department, gender, message });
  res.render("result", { name, email, department, gender });
});

app.get("/responses", (req, res) => {
  res.render("responses", { responses: submissions });
});

app.post("/delete/:id", (req, res) => {
  const index = req.params.id;
  submissions.splice(index, 1);
  res.redirect("/responses");
});
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

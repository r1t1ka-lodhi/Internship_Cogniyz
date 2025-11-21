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
  const { firstName, middleName, lastName, email, password, confirmPassword, department, gender, agree, message } = req.body;
  
  if (!email.includes("@")) {
    return res.render("form", { error: "Invalid email format!" });
  }

  if (password !== confirmPassword) {
    return res.render("form", { error: "Passwords do not match!" });
  }

  // Combine name fields
  const name = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;

  submissions.push({ name, email, password, department, gender, message });
  res.render("result", { name, email, department, gender });
});

app.get("/responses", (req, res) => {
  res.render("responses", { responses: submissions });
});

// SPA Route
app.get("/spa", (req, res) => {
  res.sendFile(path.join(__dirname, "Views", "spa.html"));
});

// API endpoint for SPA
app.get("/api/responses", (req, res) => {
  res.json(submissions);
});

app.post("/api/submit", (req, res) => {
  const { firstName, lastName, email } = req.body;
  const name = `${firstName} ${lastName}`;
  submissions.push({ name, email, department: 'N/A', gender: 'N/A' });
  res.json({ success: true, message: 'Form submitted successfully' });
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

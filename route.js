import express from "express";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const d = new Date();
  let year = d.getFullYear();
  res.render("index.ejs", {
    year: year,
  });
});

app.post("/roll", (req, res) => {
  res.redirect("/"); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});

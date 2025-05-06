const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/blog', blog);
app.use('/shop', shop);

app.get("/", (req, res) => {
    console.log("Hey its a get request!");
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    console.log("Hey its a post request!");
    res.send("Hello post request!");
});

app.put("/", (req, res) => {
    console.log("Hey its a put request!");
    res.send("Hello put request!");
}).delete("/", (req, res) => {
    console.log("Hey its a delete request!");
    res.send("Hello delete request!");
});


app.get("/index", (req, res) => {
    console.log("Hey its index page!");
    // res.send("Hello index page!");
    res.sendFile("templates/index.html", { root: __dirname });
});


app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: "Sandy", age: 20 });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


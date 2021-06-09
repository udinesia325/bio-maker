const express = require("express");
const app = express();
const port = 5000;
const router = require("./router/router")


//middleware
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router)






















app.listen(port, () => console.log(`server berjalan pada port ${port}`));

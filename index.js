const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

const UserRute = require('./Servidor/Rutes/UserRutes');
app.use("/User", UserRute);

app.listen(3000, () => {
    console.log("Servidor ejecutandose en el puerto 3000. http://localhost:3000");
})
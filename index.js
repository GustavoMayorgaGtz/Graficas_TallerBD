const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

const UserRute = require('./Servidor/Rutes/UserRutes');
app.use("/User", UserRute);
const ConjuntDataRute = require('./Servidor/Rutes/ConjuntDataRute');
app.use("/ConjuntData", ConjuntDataRute);
const GraphRute = require("./Servidor/Rutes/GraphRute");
app.use("/Graph", GraphRute);

app.listen(5000, () => {
    console.log("Servidor ejecutandose en el puerto 5000. http://localhost:5000");
 
})
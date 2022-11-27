const express = require("express");
const router = express.Router();
var mysql = require('msnodesqlv8');
const connectionString = "server=GUSTAVO-MAYORGA\\SQLEXPRESS;Database=Graficas;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";


router.post("/Login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (email && password) {
        let query = `exec InicioSesion '${email}', '${password}'`;
        let iterator = 0;

        mysql.query(connectionString, query, (err, rows) => {
            if (iterator > 0 && rows[0]) {
                let data = rows[0].ID_Usuario;
                if (data >= 1 && data) {
                    console.log("inicio sesion")

                    res.status(200).send({ "status": 200, "logged": true ,"id":data})
                }
            }else if(iterator > 0 && !rows[0])
            {
                console.log("No inicio sesion")
                res.status(200).send({ "status": 200, "logged": false })
            }
            iterator++;
        });
    } else {
        res.status(400).send({ "status": 400, "logged": false })
    }
})

router.post("/DeleteUser", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (email && password) {
        let query = `exec EliminaUsuario '${email}', '${password}'`;
        console.log(query)
        let iterator = 0;

        mysql.query(connectionString, query, (err, rows) => {
            console.log(rows)
            if (iterator > 0 && rows[0]) {
                let data = rows[0].ID_Usuario;
                if (data >= 1 && data) {
                    console.log("Se borro usuario")
                    res.status(200).send({ "status": 200, "droped": true })
                }
            }else if(iterator > 0 && !rows[0])
            {
                console.log("No se borro usuario")
                res.status(200).send({ "status": 200, "droped": false })
            }
            iterator++;
        });
    } else {
        res.status(400).send({ "status": 400, "droped": false })
    }
})

router.get("/FindAllUsers", (req, res) => {
        let query = `select * from Usuarios`;
        mysql.query(connectionString, query, (err, rows) => {
            console.log(rows)
            try {
                let data = rows[0].ID_Usuario;
                if (data >= 1) {
                    console.log("Usuarios obtenidos")
                    res.status(200).send({ "status": 200, "message":rows  })
                }
            } catch (err) {
                console.log("No se obtuvieron los usuarios")
                res.status(500).send({ "status": 500, "message": false })
            }
        });
})

router.post("/CreateUser", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    if (email && password && name) {
        let query = `exec IngresaUsuario '${email}','${name}', '${password}'`;
        let iterator = 0;
        mysql.query(connectionString, query, (err, rows) => {
            if(!err)
            {
            console.log(rows)
            if (iterator > 0 && rows[0]) {
                let data = rows[0].ID_Usuario;
                if (data >= 1 && data) {
                    console.log("Crear usuario")
                    res.status(200).send({ "status": 200, "message": true })
                }
            }else if(iterator > 0 && !rows[0])
            {
                console.log("No se creo usuario")
                res.status(200).send({ "status": 200, "message": false })
            }
            
        }
        iterator++;
        });
    } else {
        res.status(400).send({ "status": 400, "message": false })
    }
})

module.exports = router;
const express = require("express")
const router = express.Router();
var mysql = require('msnodesqlv8');
const connectionString = "server=GUSTAVO-MAYORGA\\SQLEXPRESS;Database=Graficas;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

router.post("/createGraph", (req, res) => {
    // create table Graficas_Usuarios(
    //     id int primary key not null identity(1,1),
    //     title varchar(255) not null,
    //     dataSet varchar(255) not null,
    //     descrip varchar(255) not null,
    //     ID_Usuario int not null,
    //     type varchar(255) not null default('bar'),
    //     foreign key (ID_Usuario) references Usuarios(ID_Usuario)
    //    );
    console.log(req.body);
    let iduser = req.body.ID_Usuario;
    let title = req.body.title;
    let type = req.body.chartType;
    let conjuntName = req.body.dataSet;
    let descrip = req.body.description;

    if (title && type && conjuntName && iduser) {
        let descripAux = "null"
        if (descrip) {
            descripAux = descrip;
        }

        let query = `insert into Graficas_Usuarios values('${title}', '${conjuntName}', '${descripAux}', ${iduser}, '${type}');`
        mysql.query(connectionString, query, (err, rows) => {

            if (err) {
                console.log(err)
                res.status(500).send({ "status": 500, "message": "Server Internal Error" })
            } else {
                res.status(200).send({ "status": 200, "message": "logger" })
            }
        });
    } else {
        res.status(200).send({ "status": 400, "message": "Bad request" })
    }
})

router.post('/getGraphsUser', (req, res) => {
    
    let id = req.body.ID_Usuario;
    if (id) {

        let query = `select title, dataSet, descrip, type from Graficas_Usuarios where ID_Usuario = ${id}`
        mysql.query(connectionString, query, (err, rows) => {
            if (err) {
                res.status(500).send({ "status": 500, "message": "Server Internal Error" })
            } else {
                //Recuperamos los conjunto de 
                let response = [];
                for (let i = 0; i < rows.length; i++) {
                    let dataSet = rows[i].dataSet;
                    let valores = [];
                    let times = [];
                    let obtenerDatos = `select Data, time from Api where ID_Usuario = ${id} and ConjuntName = '${dataSet}' `
                    mysql.query(connectionString, obtenerDatos, (err, rows2) => {
                        if (err) {
                            console.log(err);
                        } else {
                            let sizeValores = rows2.length;
                            for (let j = 0; j < sizeValores; j++) {
                                valores.push(rows2[j].Data);
                                times.push(rows2[j].time);
                            }
                            /*valores
                            times*/
                            let title = rows[i].title;
                            let descrip = rows[i].descrip;
                            let type = rows[i].type;
                            let char = {
                                series: [
                                    {
                                        name: title,
                                        data: valores
                                    }
                                ],
                                chart: {
                                    height: 350,
                                    type: type
                                },
                                title: {
                                    text: title
                                },
                                xaxis: {
                                    categories: times
                                }
                            };

                            response.push(char);
                        }
                        if(response.length == rows.length)
                        {
                        console.log(response)
                        res.status(200).send(response);
                        }
                        
                    });
                }   
            }
        });
    } else {
        res.status(400).send({ "status": 400, "message": "Bad request" })
    }
});

module.exports = router;
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

    if(title && type && conjuntName && iduser)
    {
        let descripAux = "null"
        if(descrip)
        {
            descripAux = descrip;
        }

        let query = `insert into Graficas_Usuarios values('${title}', '${conjuntName}', '${descripAux}', ${iduser}, '${type}');`
        mysql.query(connectionString, query, (err, rows) => {
            
            if(err)
            {
                console.log(err)
               res.status(500).send({"status": 500, "message":"Server Internal Error"})
            }else{
                res.status(200).send({"status": 200, "message":"logger"})
            }
        });
    }else
    {
        res.status(200).send({"status": 400, "message":"Bad request"})
    }
})

router.post('/getGraphsUser',(req,res) => {
    // this.chartOptions = {
    //     series: [
    //       {
    //         name: "My-series",
    //         data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    //       }
    //     ],
    //     chart: {
    //       height: 350,
    //       type: "bar"
    //     },
    //     title: {
    //       text: "My First Angular Chart"
    //     },
    //     xaxis: {
    //       categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    //     }
    //   };
    let  id = req.body.ID_Usuario;
    if(id)
    {
 
      let query = `select title, dataSet, descrip, type from Graficas_Usuarios where ID_Usuario = ${id}`
      mysql.query(connectionString, query, (err, rows) => {   
        if(err)
        {
           res.status(500).send({"status": 500, "message":"Server Internal Error"})
        }else{
            //Recuperamos los conjunto de datos
            
        }
    });
    }else
    {
        res.status(400).send({"status":400 , "message":"Bad request"})
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
var mysql = require('msnodesqlv8');
const connectionString = "server=GUSTAVO-MAYORGA\\SQLEXPRESS;Database=Graficas;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
// router.post('/createApi', (req, res) => {
//     let token = req.body.token;
//     let ID_Usuario = req.body.ID_Usuario;
//     let ConjuntName = req.body.ConjuntName;
//     if(token && ID_Usuario && ConjuntName)
//     {
//         mysql.query(connectionString, query, (err, rows) => {
//          if(err)
//          {
//           console.log(err);
//          }else{
//           console.log(rows);
//          }

//         });
//     }else{
//         res.status(400).send({"status":400,"message":"Bad request"});
//     }

// })

router.post('/createConnectionBD', (req, res) => {
    let ServerName= req.body.ServerName;
    let ID_Usuario = req.body.ID_Usuario;
    let ConjuntName = req.body.ConjuntName;
    let SQLQuery = req.body.SQLQuery;

    if(ServerName && ID_Usuario && ConjuntName && SQLQuery)
    {
        mysql.query(connectionString, query, (err, rows) => {
         if(err)
         {
          console.log(err);
         }else{
          console.log(rows);
         }

        });
    }else{
        res.status(400).send({"status":400,"message":"Bad request"});
    }

})
router.post('/getDataConnectionBD', (req, res) => {
    
    let ID_Usuario = req.body.ID_Usuario;
    let ConjuntName = req.body.ConjuntName;
    

    if(ServerName && ID_Usuario && ConjuntName && SQLQuery)
    {
        mysql.query(connectionString, query, (err, rows) => {
         if(err)
         {
          console.log(err);
         }else{
          console.log(rows);
         }

        });
    }else{
        res.status(400).send({"status":400,"message":"Bad request"});
    }

})

router.get('/getConjuntDataUser', (req, res) => {

});
router.get('/getData', (req, res) => {

});

router.get('/setData', (req, res) => {
   let token = req.query.token;
   let data = req.query.data;
   let ConjuntName = req.query.ConjuntName;
   let ID_Usuario = req.query.ID_Usuario;
  /* console.log(token)
   console.log(data)
   console.log(ConjuntName)
   console.log(ID_Usuario)
   console.log(req.query);*/
   if(token && data >= 0 && ConjuntName && ID_Usuario)
   {
    let query = `insert into Api values('${token}', ${ID_Usuario}, '${ConjuntName}', ${data})`;
    mysql.query(connectionString, query, (err, rows) => {
      if(err)
      {
        console.log(err)
      }else{
        console.log(rows)
        res.status(200).send({"status": 200, "message":"data logger"})
      }
    });
   }else{
    res.status(400).send({"stauts": 400, "message":"Bad Request"});
   }
});

module.exports = router;
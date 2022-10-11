
const express = require('express')
let cors = require("cors");
const app = express()


app.use(cors());
const port = 8085




let json = {
  "banco":[
    {
      "gestor":"Manuel",
      "cliente":"Sergio",
      "mensaje":"Nómina Agosto",
      "transferencia": 1000
    },
    {
      "gestor":"Fernando",
      "cliente":"Silvia",
      "mensaje":"Gastos de transporte",
      "transferencia": 200
    },
    {
      "gestor":"Roberto",
      "cliente":"Adrián",
      "mensaje":"Finiquito",
      "transferencia": 800
    }
  ]
}

app.get('/ok', (req, res) => {
  res.send(json)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
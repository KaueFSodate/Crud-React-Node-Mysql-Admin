const express = require('express');
const cors = require('cors');
const port = 8080;
const con = require('./DB/conexao')
const users = require('./routes/users')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', users)

con.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server rodando na porta ${port}`)
    })
}).catch((error) => {console.log(error)})

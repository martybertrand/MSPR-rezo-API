const express = require('express');
const client = require('./config.js');
const cors = require('cors');

const app = express();
app.use(cors());

const user = require('./routes/users.js');
const login = require('./routes/login.js')

app.use(express.json());

app.use('/users', user),
app.use('/login', login)



/*app.use('/users', (req, res) => {
    res.send({
      token: '123456789abcdef'
    });
  });*/
  

app.listen(3300, ()=>{
    console.log("Server is now listening at port 3300");
})

client.connect();
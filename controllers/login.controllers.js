
exports.insert = (req, client, res) => {
    const username = req.body.username;
    const password = req.body.password;

    client.query(
        `SELECT * FROM users WHERE username, password`,
        
        (err, result) => {
          if (err) {
            res.send({err: err });
          }
    
          if(result) {
            res.send(result);
          } else {
            res.send({message: "Wrong username/password combination !"});
          }
        }
        );
    client.end
  };
exports.get = (req, client, res) => {
    const username = req.body.username;
    const password = req.body.password;

    client.query(
        `SELECT * FROM users`,
        (err, result) => {
          if (err) {
            res.send({err: err });
          }
    
          if(result) {
            res.send(result);
          } else {
            res.send({message: "Wrong username/password combination !"});
          }
        }
        );
    client.end
  };

/*app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    client.query(
      `SELECT * FROM users WHERE username = ? AND password = ?`,
      [username, password],
      (err, result) => {
        if (err) {
          res.send({err: err });
        }
  
        if(!err) {
          res.send(result);
        } else {
          res.send({message: "Wrong username/password combination !"});
        }
      }
      );
  });*/
const user = require("../config")

exports.get = (req, client, res) => {
    client.query(`Select * from users`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
}

exports.getId = (req, client, res) => {
    const id = parseInt(req.params.id)
    client.query(`Select * from users where id=${id}`, (err, result)=>{
        if (!err) {
            if (result.rows == ""){
                res.send("ID doesn't exist");
            }else{
                res.send(result.rows);
            }
        }
        
    });
    client.end;
}

exports.insert = (req, client, res) => {

    console.log(user)
    let insertQuery = `insert into users("username", "password", "IpConnexion", "Email") 
                       values('${user.username}', '${user.password}', '${user.IpConnexion}', '${user.Email}')`
    client.query(insertQuery, (err, result) => {
        if (!err){
            res.send('Insertion was successful');
        }else{
            res.send('Error ! L\'insertion a échoué')
        }              
    });
    client.end;
}


exports.update = (req, client, res) => {
    const id = parseInt(req.params.id)
    let item = req.body
    let updateQuery = `UPDATE users set
                    username = '${item.username}',
                    password = '${item.password}',
                    IpConnexion = '${item.IpConnexion}',
                    Email = '${item.Email}'
                    where id = ${item.id}`

    client.query(updateQuery, (err, result) => {
        if(!err){
            if (result == ""){
                res.send('Id doesn\'t exist !')
            }else{
                res.send('Update was successful')
            }
        }else{
            res.send('Error ! La modification a échoué')
        }
    })
    client.end
}


exports.remove =  (req, client, res) => {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}
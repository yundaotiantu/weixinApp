const EXPRESS = require('express');
const mysql = require('mysql');

let pool = mysql.createPool({
    user:'root'
})

let app = new EXPRESS();

app.get('/',(req,res)=>{
    let ip = req.query.ip;
    const sql = `SELECT * FROM db.ip WHERE INET_ATON(?) BETWEEN INET_ATON(min) INET_ATON(max)`;

    pool.query(sql,[ip],(err,result)=>{
        if(err) throw err;
        if(result.length==1){
            let loc = result[0].loc;
            res.send({'status':'ok',"loc":loc});
        }else{
            res.send({"status":'err'})
        }
    })
    res.end('It test');
})

app.listen(3000);